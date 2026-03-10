/**
 * AI Summarization Service – Downloads a PDF, extracts text, and generates
 * a summary using Gemini via LangChain. Phase 1 in-app implementation;
 * Phase 2+ will move this into the Conversation & Summarisation Orchestrator.
 */
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
// polyfill DOMMatrix for pdf-parse in Node.js environment
if (typeof global.DOMMatrix === 'undefined') {
  // @ts-ignore
  global.DOMMatrix = class DOMMatrix { };
}

// @ts-ignore
const pdfParseModule = require('pdf-parse');
const pdfParse = typeof pdfParseModule === 'function' ? pdfParseModule : pdfParseModule.default;

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-2.0-flash',
  apiKey: process.env.GEMINI_API_KEY,
  maxOutputTokens: 4096,
  temperature: 0.3,
});

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 8000,
  chunkOverlap: 500,
});

/**
 * Download a PDF from a URL and extract its text content.
 */
async function extractTextFromPdf(url: string): Promise<string> {
  console.log('Downloading PDF from:', url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download PDF: ${response.status} ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  console.log('PDF downloaded, size:', arrayBuffer.byteLength, 'bytes');

  const buffer = Buffer.from(arrayBuffer);
  console.log('Extracting text with pdf-parse...');
  const data = await pdfParse(buffer);
  console.log('Text extraction complete, length:', data.text?.length || 0);
  return data.text;
}

/**
 * Summarize a PDF document. Downloads the file, extracts text, chunks it,
 * and sends it to Gemini for summarization.
 *
 * @returns An object with `shortSummary` (1-2 sentences) and `fullSummary` (detailed).
 */
export async function summarizePdf(
  pdfUrl: string,
  filename: string
): Promise<{ shortSummary: string; fullSummary: string }> {
  console.log('summarizePdf start for:', filename);
  // 1. Extract text from PDF
  const rawText = await extractTextFromPdf(pdfUrl);

  if (!rawText || rawText.trim().length === 0) {
    return {
      shortSummary: 'The document appears to be empty or contains only images/scanned content.',
      fullSummary: 'Unable to extract readable text from this PDF. The document may contain scanned images or non-text content that requires OCR processing.',
    };
  }

  // 2. Chunk for large documents
  const chunks = await textSplitter.splitText(rawText);

  // 3. Build the prompt - if the document is small enough, send it all;
  //    otherwise summarize in a map-reduce style
  let contextText: string;

  if (chunks.length <= 3) {
    // Small document: send all text directly
    contextText = rawText;
  } else {
    // Large document: summarize each chunk first, then combine
    const chunkSummaries: string[] = [];
    for (const chunk of chunks.slice(0, 10)) {
      const chunkResult = await model.invoke([
        {
          role: 'system',
          content: 'You are a legal document analyst. Summarize the following text excerpt concisely, preserving all key legal points, parties involved, dates, and obligations.',
        },
        {
          role: 'user',
          content: chunk,
        },
      ]);
      chunkSummaries.push(typeof chunkResult.content === 'string' ? chunkResult.content : String(chunkResult.content));
    }
    contextText = chunkSummaries.join('\n\n---\n\n');
  }

  // 4. Generate the final summary
  console.log('Calling Gemini for final summary...');
  const result = await model.invoke([
    {
      role: 'system',
      content: `You are a professional legal document summarizer for South African lawyers. 
Your task is to create a comprehensive yet concise summary of the document.

Respond in the following JSON format exactly (no markdown, no code fences):
{
  "shortSummary": "A brief 1-2 sentence overview of the document",
  "fullSummary": "A detailed summary covering: document type, key parties, main provisions/clauses, important dates, obligations, and any notable legal implications. Use clear paragraphs."
}`,
    },
    {
      role: 'user',
      content: `Please summarize this document titled "${filename}":\n\n${contextText}`,
    },
  ]);
  console.log('Gemini response received');

  const responseText = typeof result.content === 'string' ? result.content : String(result.content);

  // 5. Parse the JSON response
  try {
    // Strip any markdown code fences if present
    const cleaned = responseText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    const parsed = JSON.parse(cleaned);
    return {
      shortSummary: parsed.shortSummary || 'Summary generated.',
      fullSummary: parsed.fullSummary || responseText,
    };
  } catch {
    // If JSON parsing fails, use the raw response as the full summary
    return {
      shortSummary: responseText.slice(0, 200) + (responseText.length > 200 ? '...' : ''),
      fullSummary: responseText,
    };
  }
}
