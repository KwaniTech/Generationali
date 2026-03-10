module.exports = [
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/web/lib/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Domain identifiers. Use these instead of raw strings so tenant/document/summary
 * handling is consistent and type-safe. When Auth & Tenant Service exists,
 * TenantId and UserId will be resolved from it; until then, e.g. Clerk user.id
 * can be used as both in a solo-tenant model.
 */ __turbopack_context__.s([
    "toDocumentId",
    ()=>toDocumentId,
    "toSummaryId",
    ()=>toSummaryId,
    "toTenantId",
    ()=>toTenantId,
    "toUserId",
    ()=>toUserId
]);
function toTenantId(s) {
    return s;
}
function toUserId(s) {
    return s;
}
function toDocumentId(s) {
    return s;
}
function toSummaryId(s) {
    return s;
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/apps/web/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/apps/web/lib/services/summaries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Phase 1 in-app mimic of Summaries & History Service. Persists summaries in SQLite
 * via Prisma; same API as the future service for easy swap in Phase 2.
 */ __turbopack_context__.s([
    "createSummary",
    ()=>createSummary,
    "getSummary",
    ()=>getSummary,
    "listSummaries",
    ()=>listSummaries,
    "listSummariesByDocument",
    ()=>listSummariesByDocument,
    "updateSummary",
    ()=>updateSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/db.ts [app-rsc] (ecmascript)");
;
;
let idCounter = 0;
function nextId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSummaryId"])(`sum_${Date.now()}_${++idCounter}`);
}
function rowToSummary(row) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSummaryId"])(row.id),
        tenantId: row.tenantId,
        documentId: row.documentId,
        title: row.title,
        shortSummary: row.shortSummary,
        fullSummary: row.fullSummary,
        createdAt: row.createdAt,
        createdBy: row.createdBy
    };
}
async function createSummary(tenantId, payload) {
    const id = nextId();
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].summary.create({
        data: {
            id,
            tenantId,
            documentId: payload.documentId,
            title: payload.title,
            shortSummary: payload.shortSummary,
            fullSummary: payload.fullSummary,
            createdBy: payload.createdBy
        }
    });
    return rowToSummary(row);
}
async function getSummary(tenantId, summaryId) {
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].summary.findFirst({
        where: {
            id: summaryId,
            tenantId
        }
    });
    if (!row) return undefined;
    return rowToSummary(row);
}
async function listSummaries(tenantId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].summary.findMany({
        where: {
            tenantId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return rows.map(rowToSummary);
}
async function listSummariesByDocument(tenantId, documentId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].summary.findMany({
        where: {
            tenantId,
            documentId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return rows.map(rowToSummary);
}
async function updateSummary(tenantId, summaryId, payload) {
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].summary.update({
        where: {
            id: summaryId,
            tenantId
        },
        data: {
            ...payload,
            createdAt: new Date()
        }
    });
    return rowToSummary(row);
}
}),
"[project]/apps/web/lib/services/documents.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Phase 1 in-app mimic of Document Ingestion Service. Persists documents in SQLite
 * via Prisma; same API as the future service for easy swap in Phase 2.
 */ __turbopack_context__.s([
    "createDocument",
    ()=>createDocument,
    "getDocument",
    ()=>getDocument,
    "listDocuments",
    ()=>listDocuments,
    "updateDocumentStatus",
    ()=>updateDocumentStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/db.ts [app-rsc] (ecmascript)");
;
;
let idCounter = 0;
function nextId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDocumentId"])(`doc_${Date.now()}_${++idCounter}`);
}
function rowToDocument(row) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDocumentId"])(row.id),
        tenantId: row.tenantId,
        userId: row.userId,
        storageUrl: row.storageUrl,
        storageKey: row.storageKey,
        originalFilename: row.originalFilename,
        mimeType: row.mimeType,
        sizeBytes: row.sizeBytes,
        status: row.status,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt
    };
}
async function createDocument(tenantId, payload) {
    const id = nextId();
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].document.create({
        data: {
            id,
            tenantId,
            userId: payload.userId,
            storageUrl: payload.storageUrl,
            storageKey: payload.storageKey,
            originalFilename: payload.originalFilename,
            mimeType: payload.mimeType,
            sizeBytes: payload.sizeBytes,
            status: 'UPLOADED'
        }
    });
    return rowToDocument(row);
}
async function getDocument(tenantId, documentId) {
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].document.findFirst({
        where: {
            id: documentId,
            tenantId
        }
    });
    if (!row) return undefined;
    return rowToDocument(row);
}
async function listDocuments(tenantId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].document.findMany({
        where: {
            tenantId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return rows.map(rowToDocument);
}
async function updateDocumentStatus(tenantId, documentId, status) {
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].document.updateMany({
        where: {
            id: documentId,
            tenantId
        },
        data: {
            status,
            updatedAt: new Date()
        }
    });
    if (count === 0) return undefined;
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].document.findFirst({
        where: {
            id: documentId,
            tenantId
        }
    });
    return updated ? rowToDocument(updated) : undefined;
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/apps/web/lib/services/ai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AI Summarization Service – Downloads a PDF, extracts text, and generates
 * a summary using Gemini via LangChain. Phase 1 in-app implementation;
 * Phase 2+ will move this into the Conversation & Summarisation Orchestrator.
 */ __turbopack_context__.s([
    "summarizePdf",
    ()=>summarizePdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/chat_models.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/textsplitters/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/textsplitters/dist/text_splitter.js [app-rsc] (ecmascript)");
;
;
// polyfill DOMMatrix for pdf-parse in Node.js environment
if (typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.DOMMatrix === 'undefined') {
    // @ts-ignore
    /*TURBOPACK member replacement*/ __turbopack_context__.g.DOMMatrix = class DOMMatrix {
    };
}
// @ts-ignore
const pdfParseModule = __turbopack_context__.r("[project]/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs [app-rsc] (ecmascript)");
const pdfParse = typeof pdfParseModule === 'function' ? pdfParseModule : pdfParseModule.default;
const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGoogleGenerativeAI"]({
    model: 'gemini-2.0-flash',
    apiKey: process.env.GEMINI_API_KEY,
    maxOutputTokens: 4096,
    temperature: 0.3
});
const textSplitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RecursiveCharacterTextSplitter"]({
    chunkSize: 8000,
    chunkOverlap: 500
});
/**
 * Download a PDF from a URL and extract its text content.
 */ async function extractTextFromPdf(url) {
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
async function summarizePdf(pdfUrl, filename) {
    console.log('summarizePdf start for:', filename);
    // 1. Extract text from PDF
    const rawText = await extractTextFromPdf(pdfUrl);
    if (!rawText || rawText.trim().length === 0) {
        return {
            shortSummary: 'The document appears to be empty or contains only images/scanned content.',
            fullSummary: 'Unable to extract readable text from this PDF. The document may contain scanned images or non-text content that requires OCR processing.'
        };
    }
    // 2. Chunk for large documents
    const chunks = await textSplitter.splitText(rawText);
    // 3. Build the prompt - if the document is small enough, send it all;
    //    otherwise summarize in a map-reduce style
    let contextText;
    if (chunks.length <= 3) {
        // Small document: send all text directly
        contextText = rawText;
    } else {
        // Large document: summarize each chunk first, then combine
        const chunkSummaries = [];
        for (const chunk of chunks.slice(0, 10)){
            const chunkResult = await model.invoke([
                {
                    role: 'system',
                    content: 'You are a legal document analyst. Summarize the following text excerpt concisely, preserving all key legal points, parties involved, dates, and obligations.'
                },
                {
                    role: 'user',
                    content: chunk
                }
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
}`
        },
        {
            role: 'user',
            content: `Please summarize this document titled "${filename}":\n\n${contextText}`
        }
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
            fullSummary: parsed.fullSummary || responseText
        };
    } catch  {
        // If JSON parsing fails, use the raw response as the full summary
        return {
            shortSummary: responseText.slice(0, 200) + (responseText.length > 200 ? '...' : ''),
            fullSummary: responseText
        };
    }
}
}),
"[project]/apps/web/lib/actions/summarize.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e6df5057430b76ae55fbe28a78e78c747245aac8":"summarizeDocumentAction"},"",""] */ __turbopack_context__.s([
    "summarizeDocumentAction",
    ()=>summarizeDocumentAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$summaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/summaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/documents.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/ai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function summarizeDocumentAction(summaryIdStr) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
    if (!user) throw new Error('Unauthorized');
    const tenantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toTenantId"])(user.id);
    const summaryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSummaryId"])(summaryIdStr);
    // 1. Fetch current summary
    const summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$summaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSummary"])(tenantId, summaryId);
    if (!summary) throw new Error('Summary not found');
    // 2. Fetch associated document
    const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocument"])(tenantId, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDocumentId"])(summary.documentId));
    if (!doc) throw new Error('Document not found');
    // 3. Mark as PARSING
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDocumentStatus"])(tenantId, doc.id, 'PARSING');
    try {
        // 4. Summarize with Gemini
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["summarizePdf"])(doc.storageUrl, doc.originalFilename);
        // 5. Update summary with real content
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$summaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSummary"])(tenantId, summaryId, {
            shortSummary: result.shortSummary,
            fullSummary: result.fullSummary
        });
        // 6. Update document status
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDocumentStatus"])(tenantId, doc.id, 'PARSED');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/summaries/${summaryId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
        return {
            success: true
        };
    } catch (error) {
        console.error('Re-summarization action failed:', error);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDocumentStatus"])(tenantId, doc.id, 'FAILED');
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    summarizeDocumentAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(summarizeDocumentAction, "40e6df5057430b76ae55fbe28a78e78c747245aac8", null);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c91f5d0._.js.map