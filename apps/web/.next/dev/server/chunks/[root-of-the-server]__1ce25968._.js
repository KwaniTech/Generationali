module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/apps/web/lib/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/lib/services/documents.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/db.ts [app-route] (ecmascript)");
;
;
let idCounter = 0;
function nextId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toDocumentId"])(`doc_${Date.now()}_${++idCounter}`);
}
function rowToDocument(row) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toDocumentId"])(row.id),
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
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.create({
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
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.findFirst({
        where: {
            id: documentId,
            tenantId
        }
    });
    if (!row) return undefined;
    return rowToDocument(row);
}
async function listDocuments(tenantId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.findMany({
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
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.updateMany({
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
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.findFirst({
        where: {
            id: documentId,
            tenantId
        }
    });
    return updated ? rowToDocument(updated) : undefined;
}
}),
"[project]/apps/web/lib/services/summaries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/db.ts [app-route] (ecmascript)");
;
;
let idCounter = 0;
function nextId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSummaryId"])(`sum_${Date.now()}_${++idCounter}`);
}
function rowToSummary(row) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSummaryId"])(row.id),
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
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].summary.create({
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
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].summary.findFirst({
        where: {
            id: summaryId,
            tenantId
        }
    });
    if (!row) return undefined;
    return rowToSummary(row);
}
async function listSummaries(tenantId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].summary.findMany({
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
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].summary.findMany({
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
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].summary.update({
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
"[project]/apps/web/lib/services/ai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AI Summarization Service – Downloads a PDF, extracts text, and generates
 * a summary using Gemini via LangChain. Phase 1 in-app implementation;
 * Phase 2+ will move this into the Conversation & Summarisation Orchestrator.
 */ __turbopack_context__.s([
    "summarizePdf",
    ()=>summarizePdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/chat_models.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/textsplitters/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/textsplitters/dist/text_splitter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/index.js [app-route] (ecmascript)");
;
;
;
const model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ChatGoogleGenerativeAI"]({
    model: 'gemini-2.0-flash',
    apiKey: process.env.GEMINI_API_KEY,
    maxOutputTokens: 4096,
    temperature: 0.3
});
const textSplitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RecursiveCharacterTextSplitter"]({
    chunkSize: 8000,
    chunkOverlap: 500
});
/**
 * Download a PDF from a URL and extract its text content.
 */ async function extractTextFromPdf(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download PDF: ${response.status} ${response.statusText}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(buffer);
    return data.text;
}
async function summarizePdf(pdfUrl, filename) {
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
"[project]/apps/web/app/api/uploadthing/core.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ourFileRouter",
    ()=>ourFileRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$shared$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadthing/shared/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uploadthing/next/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/documents.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$summaries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/summaries.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/services/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUploadthing"])();
const ourFileRouter = {
    pdfUploader: f({
        pdf: {
            maxFileSize: '32MB'
        }
    }).middleware(async ()=>{
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentUser"])();
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$shared$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UploadThingError"]('Unauthorized');
        return {
            userId: user.id
        };
    }).onUploadComplete(async ({ metadata, file })=>{
        const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUserId"])(metadata.userId);
        const tenantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toTenantId"])(metadata.userId);
        // 1. Create document record
        const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDocument"])(tenantId, {
            userId,
            storageUrl: file.url,
            storageKey: file.key,
            originalFilename: file.name,
            mimeType: file.type ?? 'application/pdf',
            sizeBytes: file.size
        });
        // 2. Update status to PARSING
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocumentStatus"])(tenantId, doc.id, 'PARSING');
        // 3. Summarize the PDF with Gemini
        let shortSummary;
        let fullSummary;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["summarizePdf"])(file.url, file.name);
            shortSummary = result.shortSummary;
            fullSummary = result.fullSummary;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocumentStatus"])(tenantId, doc.id, 'PARSED');
        } catch (error) {
            console.error('PDF summarization failed:', error);
            shortSummary = 'Summary generation failed. Please try re-uploading.';
            fullSummary = `An error occurred while processing this document: ${error instanceof Error ? error.message : 'Unknown error'}`;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocumentStatus"])(tenantId, doc.id, 'FAILED');
        }
        // 4. Save the summary
        const summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$summaries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSummary"])(tenantId, {
            documentId: doc.id,
            title: file.name.replace(/\.pdf$/i, ''),
            shortSummary,
            fullSummary,
            createdBy: userId
        });
        return {
            userId: metadata.userId,
            fileKey: file.key,
            fileUrl: file.url,
            summaryId: summary.id
        };
    })
};
}),
"[project]/apps/web/app/api/uploadthing/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uploadthing/next/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$api$2f$uploadthing$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/api/uploadthing/core.ts [app-route] (ecmascript)");
;
;
const { GET, POST } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRouteHandler"])({
    router: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$api$2f$uploadthing$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ourFileRouter"]
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ce25968._.js.map