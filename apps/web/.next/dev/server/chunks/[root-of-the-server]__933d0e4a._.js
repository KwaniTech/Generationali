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
"[project]/apps/web/lib/services/documents.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
;
const store = new Map();
function key(tenantId, documentId) {
    return `${tenantId}:${documentId}`;
}
let idCounter = 0;
function nextId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toDocumentId"])(`doc_${Date.now()}_${++idCounter}`);
}
function createDocument(tenantId, payload) {
    const id = nextId();
    const now = new Date();
    const doc = {
        id,
        tenantId,
        userId: payload.userId,
        storageUrl: payload.storageUrl,
        storageKey: payload.storageKey,
        originalFilename: payload.originalFilename,
        mimeType: payload.mimeType,
        sizeBytes: payload.sizeBytes,
        status: 'UPLOADED',
        createdAt: now,
        updatedAt: now
    };
    store.set(key(tenantId, id), doc);
    return doc;
}
function getDocument(tenantId, documentId) {
    return store.get(key(tenantId, documentId));
}
function listDocuments(tenantId) {
    const prefix = `${tenantId}:`;
    const docs = [];
    for (const [k, v] of store){
        if (k.startsWith(prefix)) docs.push(v);
    }
    return docs.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime());
}
function updateDocumentStatus(tenantId, documentId, status) {
    const doc = store.get(key(tenantId, documentId));
    if (!doc) return undefined;
    doc.status = status;
    doc.updatedAt = new Date();
    return doc;
}
}),
"[project]/apps/web/lib/services/summaries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSummary",
    ()=>createSummary,
    "getSummary",
    ()=>getSummary,
    "listSummaries",
    ()=>listSummaries,
    "listSummariesByDocument",
    ()=>listSummariesByDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-route] (ecmascript)");
;
const store = new Map();
function key(tenantId, summaryId) {
    return `${tenantId}:${summaryId}`;
}
let idCounter = 0;
function nextId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toSummaryId"])(`sum_${Date.now()}_${++idCounter}`);
}
function createSummary(tenantId, payload) {
    const id = nextId();
    const summary = {
        id,
        tenantId,
        documentId: payload.documentId,
        title: payload.title,
        shortSummary: payload.shortSummary,
        fullSummary: payload.fullSummary,
        createdAt: new Date(),
        createdBy: payload.createdBy
    };
    store.set(key(tenantId, id), summary);
    return summary;
}
function getSummary(tenantId, summaryId) {
    return store.get(key(tenantId, summaryId));
}
function listSummaries(tenantId) {
    const prefix = `${tenantId}:`;
    const list = [];
    for (const [, v] of store){
        if (v.tenantId === tenantId) list.push(v);
    }
    return list.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime());
}
function listSummariesByDocument(tenantId, documentId) {
    return listSummaries(tenantId).filter((s)=>s.documentId === documentId);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/types.ts [app-route] (ecmascript)");
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
        // #region agent log
        fetch('http://127.0.0.1:7802/ingest/999406e5-7603-41a1-a2f5-61eccfa7323e', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': '63ec46'
            },
            body: JSON.stringify({
                sessionId: '63ec46',
                location: 'core.ts:onUploadComplete',
                message: 'env check',
                data: {
                    hasClerkPublishable: !!("TURBOPACK compile-time value", "pk_test_bW92ZWQtY3JhYi03NS5jbGVyay5hY2NvdW50cy5kZXYk"),
                    hasClerkSecret: !!process.env.CLERK_SECRET_KEY,
                    hasUploadThingToken: !!process.env.UPLOADTHING_TOKEN
                },
                timestamp: Date.now(),
                hypothesisId: 'H1'
            })
        }).catch(()=>{});
        // #endregion
        try {
            const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUserId"])(metadata.userId);
            const tenantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toTenantId"])(metadata.userId);
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDocument"])(tenantId, {
                userId,
                storageUrl: file.url,
                storageKey: file.key,
                originalFilename: file.name,
                mimeType: file.type ?? 'application/pdf',
                sizeBytes: file.size
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$services$2f$summaries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSummary"])(tenantId, {
                documentId: doc.id,
                title: file.name,
                shortSummary: 'Summary will be generated after processing.',
                fullSummary: 'Full summary will appear here once the AI pipeline is connected.',
                createdBy: userId
            });
            return {
                userId: metadata.userId,
                fileKey: file.key,
                fileUrl: file.url
            };
        } catch (err) {
            // #region agent log
            fetch('http://127.0.0.1:7802/ingest/999406e5-7603-41a1-a2f5-61eccfa7323e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Debug-Session-Id': '63ec46'
                },
                body: JSON.stringify({
                    sessionId: '63ec46',
                    location: 'core.ts:onUploadComplete:catch',
                    message: 'handler error',
                    data: {
                        errorMessage: err instanceof Error ? err.message : String(err)
                    },
                    timestamp: Date.now(),
                    hypothesisId: 'H2'
                })
            }).catch(()=>{});
            // #endregion
            throw err;
        }
    })
};
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRouteHandler"])({
    router: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$api$2f$uploadthing$2f$core$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ourFileRouter"]
});
function logToFile(message, data) {
    try {
        const logPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "debug-63ec46.log");
        const line = JSON.stringify({
            sessionId: "63ec46",
            location: "route.ts",
            message,
            data,
            timestamp: Date.now()
        }) + "\n";
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["appendFileSync"])(logPath, line);
    } catch (e) {
        const errPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "debug-63ec46-err.log");
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["appendFileSync"])(errPath, String(e) + "\n");
    }
}
const GET = handler.GET;
async function POST(req, context) {
    // #region agent log
    logToFile("POST uploadthing route hit", {
        hypothesisId: "H0",
        hasClerkPublishable: !!("TURBOPACK compile-time value", "pk_test_bW92ZWQtY3JhYi03NS5jbGVyay5hY2NvdW50cy5kZXYk"),
        hasClerkSecret: !!process.env.CLERK_SECRET_KEY,
        hasUploadThingToken: !!process.env.UPLOADTHING_TOKEN,
        cwd: process.cwd()
    });
    // #endregion
    return handler.POST(req, context);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__933d0e4a._.js.map