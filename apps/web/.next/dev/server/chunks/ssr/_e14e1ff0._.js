module.exports = [
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f5a788c644dee1aa26987044a890ba84a95fc5738":"invalidateCacheAction"},"",""] */ __turbopack_context__.s([
    "invalidateCacheAction",
    ()=>invalidateCacheAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f5a788c644dee1aa26987044a890ba84a95fc5738", null);
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkMiddlewareRequestDataStorage",
    ()=>clerkMiddlewareRequestDataStorage,
    "clerkMiddlewareRequestDataStore",
    ()=>clerkMiddlewareRequestDataStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
;
;
const clerkMiddlewareRequestDataStore = /* @__PURE__ */ new Map();
const clerkMiddlewareRequestDataStorage = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]();
;
 //# sourceMappingURL=middleware-storage.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clerkClient",
    ()=>clerkClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$2KYCWIBP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/backend/dist/chunk-2KYCWIBP.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const clerkClient = async ()=>{
    var _a, _b;
    let requestData;
    try {
        const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])();
        const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$2KYCWIBP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
        requestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
    } catch (err) {
        if (err && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderingBailout"])(err)) {
            throw err;
        }
    }
    const options = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkMiddlewareRequestDataStorage"].getStore()) == null ? void 0 : _a.get("requestData")) != null ? _b : requestData;
    if ((options == null ? void 0 : options.secretKey) || (options == null ? void 0 : options.publishableKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])(options);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
};
;
 //# sourceMappingURL=clerkClient.js.map
}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentUser",
    ()=>currentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
;
async function currentUser(opts) {
    __turbopack_context__.r("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])({
        treatPendingAsSignedOut: opts == null ? void 0 : opts.treatPendingAsSignedOut
    });
    if (!userId) {
        return null;
    }
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkClient"])()).users.getUser(userId);
}
;
 //# sourceMappingURL=currentUser.js.map
}),
"[project]/apps/web/.next-internal/server/app/(logged-in)/summaries/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/lib/actions/summarize.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$summarize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/summarize.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/(logged-in)/summaries/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/apps/web/lib/actions/summarize.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40e6df5057430b76ae55fbe28a78e78c747245aac8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$summarize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["summarizeDocumentAction"],
    "7f03da5c69f4f0ce363f24890528cac786134b517d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectKeylessMetadata"],
    "7f5a788c644dee1aa26987044a890ba84a95fc5738",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"],
    "7f6f12f054131431fb1cf88dab9906671587494305",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"],
    "7f98a0ca742c3654af3421359ab387a5c18a1491dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMetadataHeaders"],
    "7f9fe12ca45ae7807fb73990460af72cd856cea573",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectKeylessEnvDriftAction"],
    "7fc93013b42e3b0f64676905dcd9eb46ed0305414c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"],
    "7ffc140ee76f004dcb1281de1e4d8228c1944a2317",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f28$logged$2d$in$292f$summaries$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$summarize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/(logged-in)/summaries/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/apps/web/lib/actions/summarize.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$keyless$2d$custom$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-custom-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$summarize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/summarize.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/deep-compare-strict.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepCompareStrict",
    ()=>deepCompareStrict
]);
function deepCompareStrict(a, b) {
    const typeofa = typeof a;
    if (typeofa !== typeof b) {
        return false;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return false;
        }
        const length = a.length;
        if (length !== b.length) {
            return false;
        }
        for(let i = 0; i < length; i++){
            if (!deepCompareStrict(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (typeofa === 'object') {
        if (!a || !b) {
            return a === b;
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        const length = aKeys.length;
        if (length !== bKeys.length) {
            return false;
        }
        for (const k of aKeys){
            if (!deepCompareStrict(a[k], b[k])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/pointer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodePointer",
    ()=>encodePointer,
    "escapePointer",
    ()=>escapePointer
]);
function encodePointer(p) {
    return encodeURI(escapePointer(p));
}
function escapePointer(p) {
    return p.replace(/~/g, '~0').replace(/\//g, '~1');
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/dereference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dereference",
    ()=>dereference,
    "ignoredKeyword",
    ()=>ignoredKeyword,
    "initialBaseURI",
    ()=>initialBaseURI,
    "schemaArrayKeyword",
    ()=>schemaArrayKeyword,
    "schemaKeyword",
    ()=>schemaKeyword,
    "schemaMapKeyword",
    ()=>schemaMapKeyword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/pointer.js [app-rsc] (ecmascript)");
;
const schemaKeyword = {
    additionalItems: true,
    unevaluatedItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    unevaluatedProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
};
const schemaArrayKeyword = {
    prefixItems: true,
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
const schemaMapKeyword = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependentSchemas: true
};
const ignoredKeyword = {
    id: true,
    $id: true,
    $ref: true,
    $schema: true,
    $anchor: true,
    $vocabulary: true,
    $comment: true,
    default: true,
    enum: true,
    const: true,
    required: true,
    type: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
};
let initialBaseURI = typeof self !== 'undefined' && self.location && self.location.origin !== 'null' ? new URL(self.location.origin + self.location.pathname + location.search) : new URL('https://github.com/cfworker');
function dereference(schema, lookup = Object.create(null), baseURI = initialBaseURI, basePointer = '') {
    if (schema && typeof schema === 'object' && !Array.isArray(schema)) {
        const id = schema.$id || schema.id;
        if (id) {
            const url = new URL(id, baseURI.href);
            if (url.hash.length > 1) {
                lookup[url.href] = schema;
            } else {
                url.hash = '';
                if (basePointer === '') {
                    baseURI = url;
                } else {
                    dereference(schema, lookup, baseURI);
                }
            }
        }
    } else if (schema !== true && schema !== false) {
        return lookup;
    }
    const schemaURI = baseURI.href + (basePointer ? '#' + basePointer : '');
    if (lookup[schemaURI] !== undefined) {
        throw new Error(`Duplicate schema URI "${schemaURI}".`);
    }
    lookup[schemaURI] = schema;
    if (schema === true || schema === false) {
        return lookup;
    }
    if (schema.__absolute_uri__ === undefined) {
        Object.defineProperty(schema, '__absolute_uri__', {
            enumerable: false,
            value: schemaURI
        });
    }
    if (schema.$ref && schema.__absolute_ref__ === undefined) {
        const url = new URL(schema.$ref, baseURI.href);
        url.hash = url.hash;
        Object.defineProperty(schema, '__absolute_ref__', {
            enumerable: false,
            value: url.href
        });
    }
    if (schema.$recursiveRef && schema.__absolute_recursive_ref__ === undefined) {
        const url = new URL(schema.$recursiveRef, baseURI.href);
        url.hash = url.hash;
        Object.defineProperty(schema, '__absolute_recursive_ref__', {
            enumerable: false,
            value: url.href
        });
    }
    if (schema.$anchor) {
        const url = new URL('#' + schema.$anchor, baseURI.href);
        lookup[url.href] = schema;
    }
    for(let key in schema){
        if (ignoredKeyword[key]) {
            continue;
        }
        const keyBase = `${basePointer}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`;
        const subSchema = schema[key];
        if (Array.isArray(subSchema)) {
            if (schemaArrayKeyword[key]) {
                const length = subSchema.length;
                for(let i = 0; i < length; i++){
                    dereference(subSchema[i], lookup, baseURI, `${keyBase}/${i}`);
                }
            }
        } else if (schemaMapKeyword[key]) {
            for(let subKey in subSchema){
                dereference(subSchema[subKey], lookup, baseURI, `${keyBase}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(subKey)}`);
            }
        } else {
            dereference(subSchema, lookup, baseURI, keyBase);
        }
    }
    return lookup;
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/format.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "format",
    ()=>format
]);
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
const DAYS = [
    0,
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
const TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
const HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
const URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
const URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
const URL_ = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
const UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
const JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
const RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
const EMAIL = (input)=>{
    if (input[0] === '"') return false;
    const [name, host, ...rest] = input.split('@');
    if (!name || !host || rest.length !== 0 || name.length > 64 || host.length > 253) return false;
    if (name[0] === '.' || name.endsWith('.') || name.includes('..')) return false;
    if (!/^[a-z0-9.-]+$/i.test(host) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(name)) return false;
    return host.split('.').every((part)=>/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(part));
};
const IPV4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
const IPV6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
const DURATION = (input)=>input.length > 1 && input.length < 80 && (/^P\d+([.,]\d+)?W$/.test(input) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(input) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(input));
function bind(r) {
    return r.test.bind(r);
}
const format = {
    date,
    time: time.bind(undefined, false),
    'date-time': date_time,
    duration: DURATION,
    uri,
    'uri-reference': bind(URIREF),
    'uri-template': bind(URITEMPLATE),
    url: bind(URL_),
    email: EMAIL,
    hostname: bind(HOSTNAME),
    ipv4: bind(IPV4),
    ipv6: bind(IPV6),
    regex: regex,
    uuid: bind(UUID),
    'json-pointer': bind(JSON_POINTER),
    'json-pointer-uri-fragment': bind(JSON_POINTER_URI_FRAGMENT),
    'relative-json-pointer': bind(RELATIVE_JSON_POINTER)
};
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function date(str) {
    const matches = str.match(DATE);
    if (!matches) return false;
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
function time(full, str) {
    const matches = str.match(TIME);
    if (!matches) return false;
    const hour = +matches[1];
    const minute = +matches[2];
    const second = +matches[3];
    const timeZone = !!matches[5];
    return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
}
const DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
    const dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length == 2 && date(dateTime[0]) && time(true, dateTime[1]);
}
const NOT_URI_FRAGMENT = /\/|:/;
const URI_PATTERN = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
    return NOT_URI_FRAGMENT.test(str) && URI_PATTERN.test(str);
}
const Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
    if (Z_ANCHOR.test(str)) return false;
    try {
        new RegExp(str, 'u');
        return true;
    } catch (e) {
        return false;
    }
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutputFormat",
    ()=>OutputFormat
]);
var OutputFormat;
(function(OutputFormat) {
    OutputFormat[OutputFormat["Flag"] = 1] = "Flag";
    OutputFormat[OutputFormat["Basic"] = 2] = "Basic";
    OutputFormat[OutputFormat["Detailed"] = 4] = "Detailed";
})(OutputFormat || (OutputFormat = {}));
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/ucs2-length.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ucs2length",
    ()=>ucs2length
]);
function ucs2length(s) {
    let result = 0;
    let length = s.length;
    let index = 0;
    let charCode;
    while(index < length){
        result++;
        charCode = s.charCodeAt(index++);
        if (charCode >= 0xd800 && charCode <= 0xdbff && index < length) {
            charCode = s.charCodeAt(index);
            if ((charCode & 0xfc00) == 0xdc00) {
                index++;
            }
        }
    }
    return result;
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/deep-compare-strict.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/dereference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/format.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/pointer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$ucs2$2d$length$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/ucs2-length.js [app-rsc] (ecmascript)");
;
;
;
;
;
function validate(instance, schema, draft = '2019-09', lookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dereference"])(schema), shortCircuit = true, recursiveAnchor = null, instanceLocation = '#', schemaLocation = '#', evaluated = Object.create(null)) {
    if (schema === true) {
        return {
            valid: true,
            errors: []
        };
    }
    if (schema === false) {
        return {
            valid: false,
            errors: [
                {
                    instanceLocation,
                    keyword: 'false',
                    keywordLocation: instanceLocation,
                    error: 'False boolean schema.'
                }
            ]
        };
    }
    const rawInstanceType = typeof instance;
    let instanceType;
    switch(rawInstanceType){
        case 'boolean':
        case 'number':
        case 'string':
            instanceType = rawInstanceType;
            break;
        case 'object':
            if (instance === null) {
                instanceType = 'null';
            } else if (Array.isArray(instance)) {
                instanceType = 'array';
            } else {
                instanceType = 'object';
            }
            break;
        default:
            throw new Error(`Instances of "${rawInstanceType}" type are not supported.`);
    }
    const { $ref, $recursiveRef, $recursiveAnchor, type: $type, const: $const, enum: $enum, required: $required, not: $not, anyOf: $anyOf, allOf: $allOf, oneOf: $oneOf, if: $if, then: $then, else: $else, format: $format, properties: $properties, patternProperties: $patternProperties, additionalProperties: $additionalProperties, unevaluatedProperties: $unevaluatedProperties, minProperties: $minProperties, maxProperties: $maxProperties, propertyNames: $propertyNames, dependentRequired: $dependentRequired, dependentSchemas: $dependentSchemas, dependencies: $dependencies, prefixItems: $prefixItems, items: $items, additionalItems: $additionalItems, unevaluatedItems: $unevaluatedItems, contains: $contains, minContains: $minContains, maxContains: $maxContains, minItems: $minItems, maxItems: $maxItems, uniqueItems: $uniqueItems, minimum: $minimum, maximum: $maximum, exclusiveMinimum: $exclusiveMinimum, exclusiveMaximum: $exclusiveMaximum, multipleOf: $multipleOf, minLength: $minLength, maxLength: $maxLength, pattern: $pattern, __absolute_ref__, __absolute_recursive_ref__ } = schema;
    const errors = [];
    if ($recursiveAnchor === true && recursiveAnchor === null) {
        recursiveAnchor = schema;
    }
    if ($recursiveRef === '#') {
        const refSchema = recursiveAnchor === null ? lookup[__absolute_recursive_ref__] : recursiveAnchor;
        const keywordLocation = `${schemaLocation}/$recursiveRef`;
        const result = validate(instance, recursiveAnchor === null ? schema : recursiveAnchor, draft, lookup, shortCircuit, refSchema, instanceLocation, keywordLocation, evaluated);
        if (!result.valid) {
            errors.push({
                instanceLocation,
                keyword: '$recursiveRef',
                keywordLocation,
                error: 'A subschema had errors.'
            }, ...result.errors);
        }
    }
    if ($ref !== undefined) {
        const uri = __absolute_ref__ || $ref;
        const refSchema = lookup[uri];
        if (refSchema === undefined) {
            let message = `Unresolved $ref "${$ref}".`;
            if (__absolute_ref__ && __absolute_ref__ !== $ref) {
                message += `  Absolute URI "${__absolute_ref__}".`;
            }
            message += `\nKnown schemas:\n- ${Object.keys(lookup).join('\n- ')}`;
            throw new Error(message);
        }
        const keywordLocation = `${schemaLocation}/$ref`;
        const result = validate(instance, refSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated);
        if (!result.valid) {
            errors.push({
                instanceLocation,
                keyword: '$ref',
                keywordLocation,
                error: 'A subschema had errors.'
            }, ...result.errors);
        }
        if (draft === '4' || draft === '7') {
            return {
                valid: errors.length === 0,
                errors
            };
        }
    }
    if (Array.isArray($type)) {
        let length = $type.length;
        let valid = false;
        for(let i = 0; i < length; i++){
            if (instanceType === $type[i] || $type[i] === 'integer' && instanceType === 'number' && instance % 1 === 0 && instance === instance) {
                valid = true;
                break;
            }
        }
        if (!valid) {
            errors.push({
                instanceLocation,
                keyword: 'type',
                keywordLocation: `${schemaLocation}/type`,
                error: `Instance type "${instanceType}" is invalid. Expected "${$type.join('", "')}".`
            });
        }
    } else if ($type === 'integer') {
        if (instanceType !== 'number' || instance % 1 || instance !== instance) {
            errors.push({
                instanceLocation,
                keyword: 'type',
                keywordLocation: `${schemaLocation}/type`,
                error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
            });
        }
    } else if ($type !== undefined && instanceType !== $type) {
        errors.push({
            instanceLocation,
            keyword: 'type',
            keywordLocation: `${schemaLocation}/type`,
            error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
        });
    }
    if ($const !== undefined) {
        if (instanceType === 'object' || instanceType === 'array') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCompareStrict"])(instance, $const)) {
                errors.push({
                    instanceLocation,
                    keyword: 'const',
                    keywordLocation: `${schemaLocation}/const`,
                    error: `Instance does not match ${JSON.stringify($const)}.`
                });
            }
        } else if (instance !== $const) {
            errors.push({
                instanceLocation,
                keyword: 'const',
                keywordLocation: `${schemaLocation}/const`,
                error: `Instance does not match ${JSON.stringify($const)}.`
            });
        }
    }
    if ($enum !== undefined) {
        if (instanceType === 'object' || instanceType === 'array') {
            if (!$enum.some((value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCompareStrict"])(instance, value))) {
                errors.push({
                    instanceLocation,
                    keyword: 'enum',
                    keywordLocation: `${schemaLocation}/enum`,
                    error: `Instance does not match any of ${JSON.stringify($enum)}.`
                });
            }
        } else if (!$enum.some((value)=>instance === value)) {
            errors.push({
                instanceLocation,
                keyword: 'enum',
                keywordLocation: `${schemaLocation}/enum`,
                error: `Instance does not match any of ${JSON.stringify($enum)}.`
            });
        }
    }
    if ($not !== undefined) {
        const keywordLocation = `${schemaLocation}/not`;
        const result = validate(instance, $not, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation);
        if (result.valid) {
            errors.push({
                instanceLocation,
                keyword: 'not',
                keywordLocation,
                error: 'Instance matched "not" schema.'
            });
        }
    }
    let subEvaluateds = [];
    if ($anyOf !== undefined) {
        const keywordLocation = `${schemaLocation}/anyOf`;
        const errorsLength = errors.length;
        let anyValid = false;
        for(let i = 0; i < $anyOf.length; i++){
            const subSchema = $anyOf[i];
            const subEvaluated = Object.create(evaluated);
            const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
            errors.push(...result.errors);
            anyValid = anyValid || result.valid;
            if (result.valid) {
                subEvaluateds.push(subEvaluated);
            }
        }
        if (anyValid) {
            errors.length = errorsLength;
        } else {
            errors.splice(errorsLength, 0, {
                instanceLocation,
                keyword: 'anyOf',
                keywordLocation,
                error: 'Instance does not match any subschemas.'
            });
        }
    }
    if ($allOf !== undefined) {
        const keywordLocation = `${schemaLocation}/allOf`;
        const errorsLength = errors.length;
        let allValid = true;
        for(let i = 0; i < $allOf.length; i++){
            const subSchema = $allOf[i];
            const subEvaluated = Object.create(evaluated);
            const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
            errors.push(...result.errors);
            allValid = allValid && result.valid;
            if (result.valid) {
                subEvaluateds.push(subEvaluated);
            }
        }
        if (allValid) {
            errors.length = errorsLength;
        } else {
            errors.splice(errorsLength, 0, {
                instanceLocation,
                keyword: 'allOf',
                keywordLocation,
                error: `Instance does not match every subschema.`
            });
        }
    }
    if ($oneOf !== undefined) {
        const keywordLocation = `${schemaLocation}/oneOf`;
        const errorsLength = errors.length;
        const matches = $oneOf.filter((subSchema, i)=>{
            const subEvaluated = Object.create(evaluated);
            const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
            errors.push(...result.errors);
            if (result.valid) {
                subEvaluateds.push(subEvaluated);
            }
            return result.valid;
        }).length;
        if (matches === 1) {
            errors.length = errorsLength;
        } else {
            errors.splice(errorsLength, 0, {
                instanceLocation,
                keyword: 'oneOf',
                keywordLocation,
                error: `Instance does not match exactly one subschema (${matches} matches).`
            });
        }
    }
    if (instanceType === 'object' || instanceType === 'array') {
        Object.assign(evaluated, ...subEvaluateds);
    }
    if ($if !== undefined) {
        const keywordLocation = `${schemaLocation}/if`;
        const conditionResult = validate(instance, $if, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated).valid;
        if (conditionResult) {
            if ($then !== undefined) {
                const thenResult = validate(instance, $then, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/then`, evaluated);
                if (!thenResult.valid) {
                    errors.push({
                        instanceLocation,
                        keyword: 'if',
                        keywordLocation,
                        error: `Instance does not match "then" schema.`
                    }, ...thenResult.errors);
                }
            }
        } else if ($else !== undefined) {
            const elseResult = validate(instance, $else, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/else`, evaluated);
            if (!elseResult.valid) {
                errors.push({
                    instanceLocation,
                    keyword: 'if',
                    keywordLocation,
                    error: `Instance does not match "else" schema.`
                }, ...elseResult.errors);
            }
        }
    }
    if (instanceType === 'object') {
        if ($required !== undefined) {
            for (const key of $required){
                if (!(key in instance)) {
                    errors.push({
                        instanceLocation,
                        keyword: 'required',
                        keywordLocation: `${schemaLocation}/required`,
                        error: `Instance does not have required property "${key}".`
                    });
                }
            }
        }
        const keys = Object.keys(instance);
        if ($minProperties !== undefined && keys.length < $minProperties) {
            errors.push({
                instanceLocation,
                keyword: 'minProperties',
                keywordLocation: `${schemaLocation}/minProperties`,
                error: `Instance does not have at least ${$minProperties} properties.`
            });
        }
        if ($maxProperties !== undefined && keys.length > $maxProperties) {
            errors.push({
                instanceLocation,
                keyword: 'maxProperties',
                keywordLocation: `${schemaLocation}/maxProperties`,
                error: `Instance does not have at least ${$maxProperties} properties.`
            });
        }
        if ($propertyNames !== undefined) {
            const keywordLocation = `${schemaLocation}/propertyNames`;
            for(const key in instance){
                const subInstancePointer = `${instanceLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`;
                const result = validate(key, $propertyNames, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
                if (!result.valid) {
                    errors.push({
                        instanceLocation,
                        keyword: 'propertyNames',
                        keywordLocation,
                        error: `Property name "${key}" does not match schema.`
                    }, ...result.errors);
                }
            }
        }
        if ($dependentRequired !== undefined) {
            const keywordLocation = `${schemaLocation}/dependantRequired`;
            for(const key in $dependentRequired){
                if (key in instance) {
                    const required = $dependentRequired[key];
                    for (const dependantKey of required){
                        if (!(dependantKey in instance)) {
                            errors.push({
                                instanceLocation,
                                keyword: 'dependentRequired',
                                keywordLocation,
                                error: `Instance has "${key}" but does not have "${dependantKey}".`
                            });
                        }
                    }
                }
            }
        }
        if ($dependentSchemas !== undefined) {
            for(const key in $dependentSchemas){
                const keywordLocation = `${schemaLocation}/dependentSchemas`;
                if (key in instance) {
                    const result = validate(instance, $dependentSchemas[key], draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`, evaluated);
                    if (!result.valid) {
                        errors.push({
                            instanceLocation,
                            keyword: 'dependentSchemas',
                            keywordLocation,
                            error: `Instance has "${key}" but does not match dependant schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
        if ($dependencies !== undefined) {
            const keywordLocation = `${schemaLocation}/dependencies`;
            for(const key in $dependencies){
                if (key in instance) {
                    const propsOrSchema = $dependencies[key];
                    if (Array.isArray(propsOrSchema)) {
                        for (const dependantKey of propsOrSchema){
                            if (!(dependantKey in instance)) {
                                errors.push({
                                    instanceLocation,
                                    keyword: 'dependencies',
                                    keywordLocation,
                                    error: `Instance has "${key}" but does not have "${dependantKey}".`
                                });
                            }
                        }
                    } else {
                        const result = validate(instance, propsOrSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`);
                        if (!result.valid) {
                            errors.push({
                                instanceLocation,
                                keyword: 'dependencies',
                                keywordLocation,
                                error: `Instance has "${key}" but does not match dependant schema.`
                            }, ...result.errors);
                        }
                    }
                }
            }
        }
        const thisEvaluated = Object.create(null);
        let stop = false;
        if ($properties !== undefined) {
            const keywordLocation = `${schemaLocation}/properties`;
            for(const key in $properties){
                if (!(key in instance)) {
                    continue;
                }
                const subInstancePointer = `${instanceLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`;
                const result = validate(instance[key], $properties[key], draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`);
                if (result.valid) {
                    evaluated[key] = thisEvaluated[key] = true;
                } else {
                    stop = shortCircuit;
                    errors.push({
                        instanceLocation,
                        keyword: 'properties',
                        keywordLocation,
                        error: `Property "${key}" does not match schema.`
                    }, ...result.errors);
                    if (stop) break;
                }
            }
        }
        if (!stop && $patternProperties !== undefined) {
            const keywordLocation = `${schemaLocation}/patternProperties`;
            for(const pattern in $patternProperties){
                const regex = new RegExp(pattern, 'u');
                const subSchema = $patternProperties[pattern];
                for(const key in instance){
                    if (!regex.test(key)) {
                        continue;
                    }
                    const subInstancePointer = `${instanceLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`;
                    const result = validate(instance[key], subSchema, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(pattern)}`);
                    if (result.valid) {
                        evaluated[key] = thisEvaluated[key] = true;
                    } else {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'patternProperties',
                            keywordLocation,
                            error: `Property "${key}" matches pattern "${pattern}" but does not match associated schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
        if (!stop && $additionalProperties !== undefined) {
            const keywordLocation = `${schemaLocation}/additionalProperties`;
            for(const key in instance){
                if (thisEvaluated[key]) {
                    continue;
                }
                const subInstancePointer = `${instanceLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`;
                const result = validate(instance[key], $additionalProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
                if (result.valid) {
                    evaluated[key] = true;
                } else {
                    stop = shortCircuit;
                    errors.push({
                        instanceLocation,
                        keyword: 'additionalProperties',
                        keywordLocation,
                        error: `Property "${key}" does not match additional properties schema.`
                    }, ...result.errors);
                }
            }
        } else if (!stop && $unevaluatedProperties !== undefined) {
            const keywordLocation = `${schemaLocation}/unevaluatedProperties`;
            for(const key in instance){
                if (!evaluated[key]) {
                    const subInstancePointer = `${instanceLocation}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodePointer"])(key)}`;
                    const result = validate(instance[key], $unevaluatedProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
                    if (result.valid) {
                        evaluated[key] = true;
                    } else {
                        errors.push({
                            instanceLocation,
                            keyword: 'unevaluatedProperties',
                            keywordLocation,
                            error: `Property "${key}" does not match unevaluated properties schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
    } else if (instanceType === 'array') {
        if ($maxItems !== undefined && instance.length > $maxItems) {
            errors.push({
                instanceLocation,
                keyword: 'maxItems',
                keywordLocation: `${schemaLocation}/maxItems`,
                error: `Array has too many items (${instance.length} > ${$maxItems}).`
            });
        }
        if ($minItems !== undefined && instance.length < $minItems) {
            errors.push({
                instanceLocation,
                keyword: 'minItems',
                keywordLocation: `${schemaLocation}/minItems`,
                error: `Array has too few items (${instance.length} < ${$minItems}).`
            });
        }
        const length = instance.length;
        let i = 0;
        let stop = false;
        if ($prefixItems !== undefined) {
            const keywordLocation = `${schemaLocation}/prefixItems`;
            const length2 = Math.min($prefixItems.length, length);
            for(; i < length2; i++){
                const result = validate(instance[i], $prefixItems[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
                evaluated[i] = true;
                if (!result.valid) {
                    stop = shortCircuit;
                    errors.push({
                        instanceLocation,
                        keyword: 'prefixItems',
                        keywordLocation,
                        error: `Items did not match schema.`
                    }, ...result.errors);
                    if (stop) break;
                }
            }
        }
        if ($items !== undefined) {
            const keywordLocation = `${schemaLocation}/items`;
            if (Array.isArray($items)) {
                const length2 = Math.min($items.length, length);
                for(; i < length2; i++){
                    const result = validate(instance[i], $items[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
                    evaluated[i] = true;
                    if (!result.valid) {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'items',
                            keywordLocation,
                            error: `Items did not match schema.`
                        }, ...result.errors);
                        if (stop) break;
                    }
                }
            } else {
                for(; i < length; i++){
                    const result = validate(instance[i], $items, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
                    evaluated[i] = true;
                    if (!result.valid) {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'items',
                            keywordLocation,
                            error: `Items did not match schema.`
                        }, ...result.errors);
                        if (stop) break;
                    }
                }
            }
            if (!stop && $additionalItems !== undefined) {
                const keywordLocation = `${schemaLocation}/additionalItems`;
                for(; i < length; i++){
                    const result = validate(instance[i], $additionalItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
                    evaluated[i] = true;
                    if (!result.valid) {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'additionalItems',
                            keywordLocation,
                            error: `Items did not match additional items schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
        if ($contains !== undefined) {
            if (length === 0 && $minContains === undefined) {
                errors.push({
                    instanceLocation,
                    keyword: 'contains',
                    keywordLocation: `${schemaLocation}/contains`,
                    error: `Array is empty. It must contain at least one item matching the schema.`
                });
            } else if ($minContains !== undefined && length < $minContains) {
                errors.push({
                    instanceLocation,
                    keyword: 'minContains',
                    keywordLocation: `${schemaLocation}/minContains`,
                    error: `Array has less items (${length}) than minContains (${$minContains}).`
                });
            } else {
                const keywordLocation = `${schemaLocation}/contains`;
                const errorsLength = errors.length;
                let contained = 0;
                for(let j = 0; j < length; j++){
                    const result = validate(instance[j], $contains, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${j}`, keywordLocation);
                    if (result.valid) {
                        evaluated[j] = true;
                        contained++;
                    } else {
                        errors.push(...result.errors);
                    }
                }
                if (contained >= ($minContains || 0)) {
                    errors.length = errorsLength;
                }
                if ($minContains === undefined && $maxContains === undefined && contained === 0) {
                    errors.splice(errorsLength, 0, {
                        instanceLocation,
                        keyword: 'contains',
                        keywordLocation,
                        error: `Array does not contain item matching schema.`
                    });
                } else if ($minContains !== undefined && contained < $minContains) {
                    errors.push({
                        instanceLocation,
                        keyword: 'minContains',
                        keywordLocation: `${schemaLocation}/minContains`,
                        error: `Array must contain at least ${$minContains} items matching schema. Only ${contained} items were found.`
                    });
                } else if ($maxContains !== undefined && contained > $maxContains) {
                    errors.push({
                        instanceLocation,
                        keyword: 'maxContains',
                        keywordLocation: `${schemaLocation}/maxContains`,
                        error: `Array may contain at most ${$maxContains} items matching schema. ${contained} items were found.`
                    });
                }
            }
        }
        if (!stop && $unevaluatedItems !== undefined) {
            const keywordLocation = `${schemaLocation}/unevaluatedItems`;
            for(i; i < length; i++){
                if (evaluated[i]) {
                    continue;
                }
                const result = validate(instance[i], $unevaluatedItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
                evaluated[i] = true;
                if (!result.valid) {
                    errors.push({
                        instanceLocation,
                        keyword: 'unevaluatedItems',
                        keywordLocation,
                        error: `Items did not match unevaluated items schema.`
                    }, ...result.errors);
                }
            }
        }
        if ($uniqueItems) {
            for(let j = 0; j < length; j++){
                const a = instance[j];
                const ao = typeof a === 'object' && a !== null;
                for(let k = 0; k < length; k++){
                    if (j === k) {
                        continue;
                    }
                    const b = instance[k];
                    const bo = typeof b === 'object' && b !== null;
                    if (a === b || ao && bo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCompareStrict"])(a, b)) {
                        errors.push({
                            instanceLocation,
                            keyword: 'uniqueItems',
                            keywordLocation: `${schemaLocation}/uniqueItems`,
                            error: `Duplicate items at indexes ${j} and ${k}.`
                        });
                        j = Number.MAX_SAFE_INTEGER;
                        k = Number.MAX_SAFE_INTEGER;
                    }
                }
            }
        }
    } else if (instanceType === 'number') {
        if (draft === '4') {
            if ($minimum !== undefined && ($exclusiveMinimum === true && instance <= $minimum || instance < $minimum)) {
                errors.push({
                    instanceLocation,
                    keyword: 'minimum',
                    keywordLocation: `${schemaLocation}/minimum`,
                    error: `${instance} is less than ${$exclusiveMinimum ? 'or equal to ' : ''} ${$minimum}.`
                });
            }
            if ($maximum !== undefined && ($exclusiveMaximum === true && instance >= $maximum || instance > $maximum)) {
                errors.push({
                    instanceLocation,
                    keyword: 'maximum',
                    keywordLocation: `${schemaLocation}/maximum`,
                    error: `${instance} is greater than ${$exclusiveMaximum ? 'or equal to ' : ''} ${$maximum}.`
                });
            }
        } else {
            if ($minimum !== undefined && instance < $minimum) {
                errors.push({
                    instanceLocation,
                    keyword: 'minimum',
                    keywordLocation: `${schemaLocation}/minimum`,
                    error: `${instance} is less than ${$minimum}.`
                });
            }
            if ($maximum !== undefined && instance > $maximum) {
                errors.push({
                    instanceLocation,
                    keyword: 'maximum',
                    keywordLocation: `${schemaLocation}/maximum`,
                    error: `${instance} is greater than ${$maximum}.`
                });
            }
            if ($exclusiveMinimum !== undefined && instance <= $exclusiveMinimum) {
                errors.push({
                    instanceLocation,
                    keyword: 'exclusiveMinimum',
                    keywordLocation: `${schemaLocation}/exclusiveMinimum`,
                    error: `${instance} is less than ${$exclusiveMinimum}.`
                });
            }
            if ($exclusiveMaximum !== undefined && instance >= $exclusiveMaximum) {
                errors.push({
                    instanceLocation,
                    keyword: 'exclusiveMaximum',
                    keywordLocation: `${schemaLocation}/exclusiveMaximum`,
                    error: `${instance} is greater than or equal to ${$exclusiveMaximum}.`
                });
            }
        }
        if ($multipleOf !== undefined) {
            const remainder = instance % $multipleOf;
            if (Math.abs(0 - remainder) >= 1.1920929e-7 && Math.abs($multipleOf - remainder) >= 1.1920929e-7) {
                errors.push({
                    instanceLocation,
                    keyword: 'multipleOf',
                    keywordLocation: `${schemaLocation}/multipleOf`,
                    error: `${instance} is not a multiple of ${$multipleOf}.`
                });
            }
        }
    } else if (instanceType === 'string') {
        const length = $minLength === undefined && $maxLength === undefined ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$ucs2$2d$length$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ucs2length"])(instance);
        if ($minLength !== undefined && length < $minLength) {
            errors.push({
                instanceLocation,
                keyword: 'minLength',
                keywordLocation: `${schemaLocation}/minLength`,
                error: `String is too short (${length} < ${$minLength}).`
            });
        }
        if ($maxLength !== undefined && length > $maxLength) {
            errors.push({
                instanceLocation,
                keyword: 'maxLength',
                keywordLocation: `${schemaLocation}/maxLength`,
                error: `String is too long (${length} > ${$maxLength}).`
            });
        }
        if ($pattern !== undefined && !new RegExp($pattern, 'u').test(instance)) {
            errors.push({
                instanceLocation,
                keyword: 'pattern',
                keywordLocation: `${schemaLocation}/pattern`,
                error: `String does not match pattern.`
            });
        }
        if ($format !== undefined && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"][$format] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"][$format](instance)) {
            errors.push({
                instanceLocation,
                keyword: 'format',
                keywordLocation: `${schemaLocation}/format`,
                error: `String does not match format "${$format}".`
            });
        }
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/validator.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Validator",
    ()=>Validator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/dereference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/validate.js [app-rsc] (ecmascript)");
;
;
class Validator {
    schema;
    draft;
    shortCircuit;
    lookup;
    constructor(schema, draft = '2019-09', shortCircuit = true){
        this.schema = schema;
        this.draft = draft;
        this.shortCircuit = shortCircuit;
        this.lookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dereference"])(schema);
    }
    validate(instance) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validate"])(instance, this.schema, this.draft, this.lookup, this.shortCircuit);
    }
    addSchema(schema, id) {
        if (id) {
            schema = {
                ...schema,
                $id: id
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dereference"])(schema, this.lookup);
    }
}
}),
"[project]/node_modules/@cfworker/json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$deep$2d$compare$2d$strict$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/deep-compare-strict.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$dereference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/dereference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/format.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$pointer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/pointer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$ucs2$2d$length$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/ucs2-length.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cfworker$2f$json$2d$schema$2f$dist$2f$esm$2f$validator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cfworker/json-schema/dist/esm/validator.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/@langchain/google-genai/dist/utils/zod_to_genai_parameters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsonSchemaToGeminiParameters",
    ()=>jsonSchemaToGeminiParameters,
    "removeAdditionalProperties",
    ()=>removeAdditionalProperties,
    "schemaToGenerativeAIParameters",
    ()=>schemaToGenerativeAIParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/types/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/types/zod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/json_schema.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$standard_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/standard_schema.js [app-rsc] (ecmascript)");
;
;
;
//#region src/utils/zod_to_genai_parameters.ts
function removeAdditionalProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
        const newObj = {
            ...obj
        };
        if ("additionalProperties" in newObj) delete newObj.additionalProperties;
        if ("$schema" in newObj) delete newObj.$schema;
        if ("strict" in newObj) delete newObj.strict;
        for(const key in newObj)if (key in newObj) {
            if (Array.isArray(newObj[key])) newObj[key] = newObj[key].map(removeAdditionalProperties);
            else if (typeof newObj[key] === "object" && newObj[key] !== null) newObj[key] = removeAdditionalProperties(newObj[key]);
        }
        return newObj;
    }
    return obj;
}
function schemaToGenerativeAIParameters(schema) {
    const { $schema, ...rest } = removeAdditionalProperties((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInteropZodSchema"])(schema) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$standard_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSerializableSchema"])(schema) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$json_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toJsonSchema"])(schema) : schema);
    return rest;
}
function jsonSchemaToGeminiParameters(schema) {
    const { $schema, ...rest } = removeAdditionalProperties(schema);
    return rest;
}
;
 //# sourceMappingURL=zod_to_genai_parameters.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/utils/validate_schema.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/validate_schema.ts
__turbopack_context__.s([
    "assertNoEmptyStringEnums",
    ()=>assertNoEmptyStringEnums
]);
function assertNoEmptyStringEnums(schema, toolName, path = []) {
    if (schema == null || typeof schema !== "object") return;
    const obj = schema;
    if (Array.isArray(obj.enum)) {
        if (obj.enum.some((v)=>v === "")) {
            const pathStr = path.length ? ` at path "${path.join(".")}"` : "";
            const toolStr = toolName ? ` in tool "${toolName}"` : "";
            throw new Error(`Invalid enum: empty string not allowed${toolStr}${pathStr}. Gemini API rejects empty strings in enums.`);
        }
    }
    if (obj.type === "object" && obj.properties && typeof obj.properties === "object") for (const [prop, child] of Object.entries(obj.properties))assertNoEmptyStringEnums(child, toolName, [
        ...path,
        prop
    ]);
    if (obj.items) assertNoEmptyStringEnums(obj.items, toolName, [
        ...path,
        "[]"
    ]);
    for (const k of [
        "anyOf",
        "oneOf",
        "allOf"
    ]){
        const arr = obj[k];
        if (Array.isArray(arr)) arr.forEach((child, i)=>assertNoEmptyStringEnums(child, toolName, [
                ...path,
                `${k}[${i}]`
            ]));
    }
    if (obj.additionalProperties && typeof obj.additionalProperties === "object") assertNoEmptyStringEnums(obj.additionalProperties, toolName, [
        ...path,
        "additionalProperties"
    ]);
}
;
 //# sourceMappingURL=validate_schema.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/utils/common.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertBaseMessagesToContent",
    ()=>convertBaseMessagesToContent,
    "convertResponseContentToChatGenerationChunk",
    ()=>convertResponseContentToChatGenerationChunk,
    "convertToGenerativeAITools",
    ()=>convertToGenerativeAITools,
    "convertUsageMetadata",
    ()=>convertUsageMetadata,
    "mapGenerateContentResultToChatResult",
    ()=>mapGenerateContentResultToChatResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/zod_to_genai_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$validate_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/validate_schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/messages/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/messages/ai.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$chat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/messages/chat.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/messages/content/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/messages/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/messages/tool.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/outputs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$function_calling$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/function_calling.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/tools/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/language_models/base.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
//#region src/utils/common.ts
const _FUNCTION_CALL_THOUGHT_SIGNATURES_MAP_KEY = "__gemini_function_call_thought_signatures__";
const DUMMY_SIGNATURE = "ErYCCrMCAdHtim9kOoOkrPiCNVsmlpMIKd7ZMxgiFbVQOkgp7nlLcDMzVsZwIzvuT7nQROivoXA72ccC2lSDvR0Gh7dkWaGuj7ctv6t7ZceHnecx0QYa+ix8tYpRfjhyWozQ49lWiws6+YGjCt10KRTyWsZ2h6O7iHTYJwKIRwGUHRKy/qK/6kFxJm5ML00gLq4D8s5Z6DBpp2ZlR+uF4G8jJgeWQgyHWVdx2wGYElaceVAc66tZdPQRdOHpWtgYSI1YdaXgVI8KHY3/EfNc2YqqMIulvkDBAnuMhkAjV9xmBa54Tq+ih3Im4+r3DzqhGqYdsSkhS0kZMwte4Hjs65dZzCw9lANxIqYi1DJ639WNPYihp/DCJCos7o+/EeSPJaio5sgWDyUnMGkY1atsJZ+m7pj7DD5tvQ==";
const iife = (fn)=>fn();
function getMessageAuthor(message) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$chat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatMessage"].isInstance(message)) return message.role;
    return message.type;
}
/**
* Maps a message type to a Google Generative AI chat author.
* @param message The message to map.
* @param model The model to use for mapping.
* @returns The message type mapped to a Google Generative AI chat author.
*/ function convertAuthorToRole(author) {
    switch(author){
        case "supervisor":
        case "ai":
        case "model":
            return "model";
        case "system":
            return "system";
        case "human":
            return "user";
        case "tool":
        case "function":
            return "function";
        default:
            throw new Error(`Unknown / unsupported author: ${author}`);
    }
}
function messageContentMedia(content) {
    if ("mimeType" in content && "data" in content) return {
        inlineData: {
            mimeType: content.mimeType,
            data: content.data
        }
    };
    if ("mimeType" in content && "fileUri" in content) return {
        fileData: {
            mimeType: content.mimeType,
            fileUri: content.fileUri
        }
    };
    throw new Error("Invalid media content");
}
function inferToolNameFromPreviousMessages(message, previousMessages) {
    return previousMessages.map((msg)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAIMessage"])(msg)) return msg.tool_calls ?? [];
        return [];
    }).flat().find((toolCall)=>{
        return toolCall.id === message.tool_call_id;
    })?.name;
}
function _getStandardContentBlockConverter(isMultimodalModel) {
    return {
        providerName: "Google Gemini",
        fromStandardTextBlock (block) {
            return {
                text: block.text
            };
        },
        fromStandardImageBlock (block) {
            if (!isMultimodalModel) throw new Error("This model does not support images");
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url
                });
                if (data) return {
                    inlineData: {
                        mimeType: data.mime_type,
                        data: data.data
                    }
                };
                else return {
                    fileData: {
                        mimeType: block.mime_type ?? "",
                        fileUri: block.url
                    }
                };
            }
            if (block.source_type === "base64") return {
                inlineData: {
                    mimeType: block.mime_type ?? "",
                    data: block.data
                }
            };
            throw new Error(`Unsupported source type: ${block.source_type}`);
        },
        fromStandardAudioBlock (block) {
            if (!isMultimodalModel) throw new Error("This model does not support audio");
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url
                });
                if (data) return {
                    inlineData: {
                        mimeType: data.mime_type,
                        data: data.data
                    }
                };
                else return {
                    fileData: {
                        mimeType: block.mime_type ?? "",
                        fileUri: block.url
                    }
                };
            }
            if (block.source_type === "base64") return {
                inlineData: {
                    mimeType: block.mime_type ?? "",
                    data: block.data
                }
            };
            throw new Error(`Unsupported source type: ${block.source_type}`);
        },
        fromStandardFileBlock (block) {
            if (!isMultimodalModel) throw new Error("This model does not support files");
            if (block.source_type === "text") return {
                text: block.text
            };
            if (block.source_type === "url") {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBase64DataUrl"])({
                    dataUrl: block.url
                });
                if (data) return {
                    inlineData: {
                        mimeType: data.mime_type,
                        data: data.data
                    }
                };
                else return {
                    fileData: {
                        mimeType: block.mime_type ?? "",
                        fileUri: block.url
                    }
                };
            }
            if (block.source_type === "base64") return {
                inlineData: {
                    mimeType: block.mime_type ?? "",
                    data: block.data
                }
            };
            throw new Error(`Unsupported source type: ${block.source_type}`);
        }
    };
}
function _convertLangChainContentToPart(content, isMultimodalModel) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDataContentBlock"])(content)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$content$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToProviderContentBlock"])(content, _getStandardContentBlockConverter(isMultimodalModel));
    if (content.type === "text") return {
        text: content.text
    };
    else if (content.type === "executableCode") return {
        executableCode: content.executableCode
    };
    else if (content.type === "codeExecutionResult") return {
        codeExecutionResult: content.codeExecutionResult
    };
    else if (content.type === "image_url") {
        if (!isMultimodalModel) throw new Error(`This model does not support images`);
        let source;
        if (typeof content.image_url === "string") source = content.image_url;
        else if (typeof content.image_url === "object" && "url" in content.image_url) source = content.image_url.url;
        else throw new Error("Please provide image as base64 encoded data URL");
        const [dm, data] = source.split(",");
        if (!dm.startsWith("data:")) throw new Error("Please provide image as base64 encoded data URL");
        const [mimeType, encoding] = dm.replace(/^data:/, "").split(";");
        if (encoding !== "base64") throw new Error("Please provide image as base64 encoded data URL");
        return {
            inlineData: {
                data,
                mimeType
            }
        };
    } else if (content.type === "media") return messageContentMedia(content);
    else if (content.type === "tool_use") return {
        functionCall: {
            name: content.name,
            args: content.input
        }
    };
    else if (content.type === "tool_call") return {
        functionCall: {
            name: content.name,
            args: content.args
        }
    };
    else if (content.type?.includes("/") && content.type.split("/").length === 2 && "data" in content && typeof content.data === "string") return {
        inlineData: {
            mimeType: content.type,
            data: content.data
        }
    };
    else if ("functionCall" in content) return;
    else if ("type" in content) throw new Error(`Unknown content type ${content.type}`);
    else throw new Error(`Unknown content ${JSON.stringify(content)}`);
}
function convertMessageContentToParts(message, isMultimodalModel, previousMessages, model) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$tool$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isToolMessage"])(message)) {
        const messageName = message.name ?? inferToolNameFromPreviousMessages(message, previousMessages);
        if (messageName === void 0) throw new Error(`Google requires a tool name for each tool call response, and we could not infer a called tool name for ToolMessage "${message.id}" from your passed messages. Please populate a "name" field on that ToolMessage explicitly.`);
        const result = Array.isArray(message.content) ? message.content.map((c)=>_convertLangChainContentToPart(c, isMultimodalModel)).filter((p)=>p !== void 0) : message.content;
        if (message.status === "error") return [
            {
                functionResponse: {
                    name: messageName,
                    response: {
                        error: {
                            details: result
                        }
                    }
                }
            }
        ];
        return [
            {
                functionResponse: {
                    name: messageName,
                    response: {
                        result
                    }
                }
            }
        ];
    }
    let functionCalls = [];
    const messageParts = [];
    if (typeof message.content === "string" && message.content) messageParts.push({
        text: message.content
    });
    if (Array.isArray(message.content)) messageParts.push(...message.content.map((c)=>_convertLangChainContentToPart(c, isMultimodalModel)).filter((p)=>p !== void 0));
    const functionThoughtSignatures = message.additional_kwargs?.[_FUNCTION_CALL_THOUGHT_SIGNATURES_MAP_KEY];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAIMessage"])(message) && message.tool_calls?.length) functionCalls = message.tool_calls.map((tc)=>{
        const thoughtSignature = iife(()=>{
            if (tc.id) {
                const signature = functionThoughtSignatures?.[tc.id];
                if (signature) return signature;
            }
            if (model?.includes("gemini-3")) return DUMMY_SIGNATURE;
            return "";
        });
        return {
            functionCall: {
                name: tc.name,
                args: tc.args
            },
            ...thoughtSignature ? {
                thoughtSignature
            } : {}
        };
    });
    return [
        ...messageParts,
        ...functionCalls
    ];
}
function convertBaseMessagesToContent(messages, isMultimodalModel, convertSystemMessageToHumanContent = false, model) {
    return messages.reduce((acc, message, index)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBaseMessage"])(message)) throw new Error("Unsupported message input");
        const author = getMessageAuthor(message);
        if (author === "system" && index !== 0) throw new Error("System message should be the first one");
        const role = convertAuthorToRole(author);
        const prevContent = acc.content[acc.content.length];
        if (!acc.mergeWithPreviousContent && prevContent && prevContent.role === role) throw new Error("Google Generative AI requires alternate messages between authors");
        const parts = convertMessageContentToParts(message, isMultimodalModel, messages.slice(0, index), model);
        if (acc.mergeWithPreviousContent) {
            const prevContent = acc.content[acc.content.length - 1];
            if (!prevContent) throw new Error("There was a problem parsing your system message. Please try a prompt without one.");
            prevContent.parts.push(...parts);
            return {
                mergeWithPreviousContent: false,
                content: acc.content
            };
        }
        let actualRole = role;
        if (actualRole === "function" || actualRole === "system" && !convertSystemMessageToHumanContent) actualRole = "user";
        const content = {
            role: actualRole,
            parts
        };
        return {
            mergeWithPreviousContent: author === "system" && !convertSystemMessageToHumanContent,
            content: [
                ...acc.content,
                content
            ]
        };
    }, {
        content: [],
        mergeWithPreviousContent: false
    }).content;
}
function mapGenerateContentResultToChatResult(response, extra) {
    if (!response.candidates || response.candidates.length === 0 || !response.candidates[0]) return {
        generations: [],
        llmOutput: {
            filters: response.promptFeedback
        }
    };
    const [candidate] = response.candidates;
    const { content: candidateContent, ...generationInfo } = candidate;
    const functionCalls = candidateContent.parts?.reduce((acc, p)=>{
        if ("functionCall" in p && p.functionCall) acc.push({
            ...p,
            id: "id" in p.functionCall && typeof p.functionCall.id === "string" ? p.functionCall.id : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
        });
        return acc;
    }, []);
    let content;
    const parts = candidateContent?.parts;
    if (Array.isArray(parts) && parts.length === 1 && "text" in parts[0] && parts[0].text && !parts[0].thought) content = parts[0].text;
    else if (Array.isArray(parts) && parts.length > 0) content = parts.map((p)=>{
        if (p.thought && "text" in p && p.text) return {
            type: "thinking",
            thinking: p.text,
            ...p.thoughtSignature ? {
                signature: p.thoughtSignature
            } : {}
        };
        else if ("text" in p) return {
            type: "text",
            text: p.text
        };
        else if ("inlineData" in p) return {
            type: "inlineData",
            inlineData: p.inlineData
        };
        else if ("functionCall" in p) return {
            type: "functionCall",
            functionCall: p.functionCall
        };
        else if ("functionResponse" in p) return {
            type: "functionResponse",
            functionResponse: p.functionResponse
        };
        else if ("fileData" in p) return {
            type: "fileData",
            fileData: p.fileData
        };
        else if ("executableCode" in p) return {
            type: "executableCode",
            executableCode: p.executableCode
        };
        else if ("codeExecutionResult" in p) return {
            type: "codeExecutionResult",
            codeExecutionResult: p.codeExecutionResult
        };
        return p;
    });
    else content = [];
    const functionThoughtSignatures = functionCalls?.reduce((acc, fc)=>{
        if ("thoughtSignature" in fc && typeof fc.thoughtSignature === "string") acc[fc.id] = fc.thoughtSignature;
        return acc;
    }, {});
    let text = "";
    if (typeof content === "string") text = content;
    else if (Array.isArray(content) && content.length > 0) text = content.find((b)=>"text" in b)?.text ?? text;
    return {
        generations: [
            {
                text,
                message: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessage"]({
                    content: content ?? "",
                    tool_calls: functionCalls?.map((fc)=>({
                            type: "tool_call",
                            id: fc.id,
                            name: fc.functionCall.name,
                            args: fc.functionCall.args
                        })),
                    additional_kwargs: {
                        ...generationInfo,
                        [_FUNCTION_CALL_THOUGHT_SIGNATURES_MAP_KEY]: functionThoughtSignatures
                    },
                    usage_metadata: extra?.usageMetadata
                }),
                generationInfo
            }
        ],
        llmOutput: {
            tokenUsage: {
                promptTokens: extra?.usageMetadata?.input_tokens,
                completionTokens: extra?.usageMetadata?.output_tokens,
                totalTokens: extra?.usageMetadata?.total_tokens
            }
        }
    };
}
function convertResponseContentToChatGenerationChunk(response, extra) {
    if (!response.candidates || response.candidates.length === 0) return null;
    const [candidate] = response.candidates;
    const { content: candidateContent, ...generationInfo } = candidate;
    const functionCalls = candidateContent.parts?.reduce((acc, p)=>{
        if ("functionCall" in p && p.functionCall) acc.push({
            ...p,
            id: "id" in p.functionCall && typeof p.functionCall.id === "string" ? p.functionCall.id : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
        });
        return acc;
    }, []);
    let content;
    const streamParts = candidateContent?.parts;
    if (Array.isArray(streamParts) && streamParts.every((p)=>"text" in p && !p.thought)) content = streamParts.map((p)=>p.text).join("");
    else if (Array.isArray(streamParts)) content = streamParts.map((p)=>{
        if (p.thought && "text" in p && p.text) return {
            type: "thinking",
            thinking: p.text,
            ...p.thoughtSignature ? {
                signature: p.thoughtSignature
            } : {}
        };
        else if ("text" in p) return {
            type: "text",
            text: p.text
        };
        else if ("inlineData" in p) return {
            type: "inlineData",
            inlineData: p.inlineData
        };
        else if ("functionCall" in p) return {
            type: "functionCall",
            functionCall: p.functionCall
        };
        else if ("functionResponse" in p) return {
            type: "functionResponse",
            functionResponse: p.functionResponse
        };
        else if ("fileData" in p) return {
            type: "fileData",
            fileData: p.fileData
        };
        else if ("executableCode" in p) return {
            type: "executableCode",
            executableCode: p.executableCode
        };
        else if ("codeExecutionResult" in p) return {
            type: "codeExecutionResult",
            codeExecutionResult: p.codeExecutionResult
        };
        return p;
    });
    else content = [];
    let text = "";
    if (content && typeof content === "string") text = content;
    else if (Array.isArray(content)) text = content.find((b)=>"text" in b)?.text ?? "";
    const toolCallChunks = [];
    if (functionCalls) toolCallChunks.push(...functionCalls.map((fc)=>({
            type: "tool_call_chunk",
            id: fc.id,
            name: fc.functionCall.name,
            args: JSON.stringify(fc.functionCall.args)
        })));
    const functionThoughtSignatures = functionCalls?.reduce((acc, fc)=>{
        if ("thoughtSignature" in fc && typeof fc.thoughtSignature === "string") acc[fc.id] = fc.thoughtSignature;
        return acc;
    }, {});
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$outputs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChatGenerationChunk"]({
        text,
        message: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$messages$2f$ai$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIMessageChunk"]({
            content: content || "",
            name: !candidateContent ? void 0 : candidateContent.role,
            tool_call_chunks: toolCallChunks,
            additional_kwargs: {
                [_FUNCTION_CALL_THOUGHT_SIGNATURES_MAP_KEY]: functionThoughtSignatures
            },
            response_metadata: {
                model_provider: "google-genai"
            },
            usage_metadata: extra.usageMetadata
        }),
        generationInfo
    });
}
function convertToGenerativeAITools(tools) {
    if (tools.every((tool)=>"functionDeclarations" in tool && Array.isArray(tool.functionDeclarations))) return tools;
    return [
        {
            functionDeclarations: tools.map((tool)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLangChainTool"])(tool)) {
                    const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGenerativeAIParameters"])(tool.schema);
                    if (jsonSchema.type === "object" && "properties" in jsonSchema && Object.keys(jsonSchema.properties).length === 0) return {
                        name: tool.name,
                        description: tool.description
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$validate_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertNoEmptyStringEnums"])(jsonSchema, tool.name);
                    return {
                        name: tool.name,
                        description: tool.description,
                        parameters: jsonSchema
                    };
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isOpenAITool"])(tool)) {
                    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonSchemaToGeminiParameters"])(tool.function.parameters);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$validate_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assertNoEmptyStringEnums"])(params, tool.function.name);
                    return {
                        name: tool.function.name,
                        description: tool.function.description ?? `A function available to call.`,
                        parameters: params
                    };
                }
                return tool;
            })
        }
    ];
}
function convertUsageMetadata(usageMetadata, model) {
    const output = {
        input_tokens: usageMetadata?.promptTokenCount ?? 0,
        output_tokens: usageMetadata?.candidatesTokenCount ?? 0,
        total_tokens: usageMetadata?.totalTokenCount ?? 0
    };
    if (usageMetadata?.cachedContentTokenCount) {
        output.input_token_details ??= {};
        output.input_token_details.cache_read = usageMetadata.cachedContentTokenCount;
    }
    if (model === "gemini-3-pro-preview") {
        const over200k = Math.max(0, usageMetadata?.promptTokenCount ?? -2e5);
        const cachedOver200k = Math.max(0, usageMetadata?.cachedContentTokenCount ?? -2e5);
        if (over200k) output.input_token_details = {
            ...output.input_token_details,
            over_200k: over200k
        };
        if (cachedOver200k) output.input_token_details = {
            ...output.input_token_details,
            cache_read_over_200k: cachedOver200k
        };
    }
    return output;
}
;
 //# sourceMappingURL=common.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/output_parsers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleGenerativeAIToolsOutputParser",
    ()=>GoogleGenerativeAIToolsOutputParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/types/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/types/zod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/output_parsers/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/output_parsers/base.js [app-rsc] (ecmascript)");
;
;
//#region src/output_parsers.ts
var GoogleGenerativeAIToolsOutputParser = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseLLMOutputParser"] {
    static lc_name() {
        return "GoogleGenerativeAIToolsOutputParser";
    }
    lc_namespace = [
        "langchain",
        "google_genai",
        "output_parsers"
    ];
    returnId = false;
    /** The type of tool calls to return. */ keyName;
    /** Whether to return only the first tool call. */ returnSingle = false;
    zodSchema;
    serializableSchema;
    constructor(params){
        super(params);
        this.keyName = params.keyName;
        this.returnSingle = params.returnSingle ?? this.returnSingle;
        this.zodSchema = params.zodSchema;
        this.serializableSchema = params.serializableSchema;
    }
    async _validateResult(result) {
        if (this.serializableSchema !== void 0) {
            const validated = await this.serializableSchema["~standard"].validate(result);
            if (validated.issues) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutputParserException"](`Failed to parse. Text: "${JSON.stringify(result, null, 2)}". Error: ${JSON.stringify(validated.issues)}`, JSON.stringify(result, null, 2));
            return validated.value;
        }
        if (this.zodSchema === void 0) return result;
        const zodParsedResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopSafeParseAsync"])(this.zodSchema, result);
        if (zodParsedResult.success) return zodParsedResult.data;
        else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$output_parsers$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutputParserException"](`Failed to parse. Text: "${JSON.stringify(result, null, 2)}". Error: ${JSON.stringify(zodParsedResult.error.issues)}`, JSON.stringify(result, null, 2));
    }
    async parseResult(generations) {
        const tools = generations.flatMap((generation)=>{
            const { message } = generation;
            if (!("tool_calls" in message) || !Array.isArray(message.tool_calls)) return [];
            return message.tool_calls;
        });
        if (tools[0] === void 0) throw new Error("No parseable tool calls provided to GoogleGenerativeAIToolsOutputParser.");
        const [tool] = tools;
        return await this._validateResult(tool.args);
    }
};
;
 //# sourceMappingURL=output_parsers.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/utils/tools.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertToolsToGenAI",
    ()=>convertToolsToGenAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/zod_to_genai_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$function_calling$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/function_calling.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/tools/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/language_models/base.js [app-rsc] (ecmascript)");
;
;
;
;
;
//#region src/utils/tools.ts
function convertToolsToGenAI(tools, extra) {
    const genAITools = processTools(tools);
    return {
        tools: genAITools,
        toolConfig: createToolConfig(genAITools, extra)
    };
}
function processTools(tools) {
    let functionDeclarationTools = [];
    const genAITools = [];
    tools.forEach((tool)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$tools$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLangChainTool"])(tool)) {
            const [convertedTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToGenerativeAITools"])([
                tool
            ]);
            if (convertedTool.functionDeclarations) functionDeclarationTools.push(...convertedTool.functionDeclarations);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isOpenAITool"])(tool)) {
            const { functionDeclarations } = convertOpenAIToolToGenAI(tool);
            if (functionDeclarations) functionDeclarationTools.push(...functionDeclarations);
            else throw new Error("Failed to convert OpenAI structured tool to GenerativeAI tool");
        } else genAITools.push(tool);
    });
    if (genAITools.find((t)=>"functionDeclarations" in t)) return genAITools.map((tool)=>{
        if (functionDeclarationTools?.length > 0 && "functionDeclarations" in tool) {
            const newTool = {
                functionDeclarations: [
                    ...tool.functionDeclarations || [],
                    ...functionDeclarationTools
                ]
            };
            functionDeclarationTools = [];
            return newTool;
        }
        return tool;
    });
    return [
        ...genAITools,
        ...functionDeclarationTools.length > 0 ? [
            {
                functionDeclarations: functionDeclarationTools
            }
        ] : []
    ];
}
function convertOpenAIToolToGenAI(tool) {
    return {
        functionDeclarations: [
            {
                name: tool.function.name,
                description: tool.function.description,
                parameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAdditionalProperties"])(tool.function.parameters)
            }
        ]
    };
}
function createToolConfig(genAITools, extra) {
    if (!genAITools.length || !extra) return void 0;
    const { toolChoice, allowedFunctionNames } = extra;
    const modeMap = {
        any: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionCallingMode"].ANY,
        auto: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionCallingMode"].AUTO,
        none: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionCallingMode"].NONE
    };
    if (toolChoice && [
        "any",
        "auto",
        "none"
    ].includes(toolChoice)) return {
        functionCallingConfig: {
            mode: modeMap[toolChoice] ?? "MODE_UNSPECIFIED",
            allowedFunctionNames
        }
    };
    if (typeof toolChoice === "string" || allowedFunctionNames) return {
        functionCallingConfig: {
            mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionCallingMode"].ANY,
            allowedFunctionNames: [
                ...allowedFunctionNames ?? [],
                ...toolChoice && typeof toolChoice === "string" ? [
                    toolChoice
                ] : []
            ]
        }
    };
}
;
 //# sourceMappingURL=tools.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/profiles.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/profiles.ts
__turbopack_context__.s([
    "default",
    ()=>PROFILES
]);
const PROFILES = {
    "gemini-embedding-001": {
        maxInputTokens: 2048,
        imageInputs: false,
        audioInputs: false,
        pdfInputs: false,
        videoInputs: false,
        maxOutputTokens: 3072,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: false,
        structuredOutput: false
    },
    "gemini-2.5-flash-lite-preview-09-2025": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-pro-preview-06-05": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-flash-preview-04-17": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-preview-09-2025": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-pro-preview-05-06": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-flash-preview-05-20": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-flash": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-live-2.5-flash": {
        maxInputTokens: 128e3,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: false,
        videoInputs: true,
        maxOutputTokens: 8e3,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: true,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-3-flash-preview": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-live-2.5-flash-preview-native-audio": {
        maxInputTokens: 131072,
        imageInputs: false,
        audioInputs: true,
        pdfInputs: false,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: true,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-lite": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-flash-preview-tts": {
        maxInputTokens: 8e3,
        imageInputs: false,
        audioInputs: false,
        pdfInputs: false,
        videoInputs: false,
        maxOutputTokens: 16e3,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: true,
        videoOutputs: false,
        toolCalling: false,
        structuredOutput: false
    },
    "gemini-flash-latest": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-flash-lite-preview-06-17": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-2.5-flash-image": {
        maxInputTokens: 32768,
        imageInputs: true,
        audioInputs: false,
        pdfInputs: false,
        videoInputs: false,
        maxOutputTokens: 32768,
        reasoningOutput: true,
        imageOutputs: true,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: false,
        structuredOutput: false
    },
    "gemini-2.5-pro-preview-tts": {
        maxInputTokens: 8e3,
        imageInputs: false,
        audioInputs: false,
        pdfInputs: false,
        videoInputs: false,
        maxOutputTokens: 16e3,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: true,
        videoOutputs: false,
        toolCalling: false,
        structuredOutput: false
    },
    "gemini-2.5-flash-image-preview": {
        maxInputTokens: 32768,
        imageInputs: true,
        audioInputs: false,
        pdfInputs: false,
        videoInputs: false,
        maxOutputTokens: 32768,
        reasoningOutput: true,
        imageOutputs: true,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: false,
        structuredOutput: false
    },
    "gemini-1.5-flash-8b": {
        maxInputTokens: 1e6,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: false,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-3-pro-preview": {
        maxInputTokens: 1e6,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 64e3,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.0-flash-lite": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-1.5-flash": {
        maxInputTokens: 1e6,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: false,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    },
    "gemini-flash-lite-latest": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.5-pro": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 65536,
        reasoningOutput: true,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-2.0-flash": {
        maxInputTokens: 1048576,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: true,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: true
    },
    "gemini-1.5-pro": {
        maxInputTokens: 1e6,
        imageInputs: true,
        audioInputs: true,
        pdfInputs: false,
        videoInputs: true,
        maxOutputTokens: 8192,
        reasoningOutput: false,
        imageOutputs: false,
        audioOutputs: false,
        videoOutputs: false,
        toolCalling: true,
        structuredOutput: false
    }
};
;
 //# sourceMappingURL=profiles.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/chat_models.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatGoogleGenerativeAI",
    ()=>ChatGoogleGenerativeAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/zod_to_genai_parameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$output_parsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/output_parsers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$tools$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/utils/tools.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$profiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/profiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/language_models/chat_models.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/types/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/types/zod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$standard_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/standard_schema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$structured_output$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/language_models/structured_output.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
//#region src/chat_models.ts
/**
* Google Generative AI chat model integration.
*
* Setup:
* Install `@langchain/google-genai` and set an environment variable named `GOOGLE_API_KEY`.
*
* ```bash
* npm install @langchain/google-genai
* export GOOGLE_API_KEY="your-api-key"
* ```
*
* ## [Constructor args](https://api.js.langchain.com/classes/langchain_google_genai.ChatGoogleGenerativeAI.html#constructor)
*
* ## [Runtime args](https://api.js.langchain.com/interfaces/langchain_google_genai.GoogleGenerativeAIChatCallOptions.html)
*
* Runtime args can be passed as the second argument to any of the base runnable methods `.invoke`. `.stream`, `.batch`, etc.
* They can also be passed via `.withConfig`, or the second arg in `.bindTools`, like shown in the examples below:
*
* ```typescript
* // When calling `.withConfig`, call options should be passed via the first argument
* const llmWithArgsBound = llm.withConfig({
*   stop: ["\n"],
* });
*
* // When calling `.bindTools`, call options should be passed via the second argument
* const llmWithTools = llm.bindTools(
*   [...],
*   {
*     stop: ["\n"],
*   }
* );
* ```
*
* ## Examples
*
* <details open>
* <summary><strong>Instantiate</strong></summary>
*
* ```typescript
* import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
*
* const llm = new ChatGoogleGenerativeAI({
*   model: "gemini-1.5-flash",
*   temperature: 0,
*   maxRetries: 2,
*   // apiKey: "...",
*   // other params...
* });
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Invoking</strong></summary>
*
* ```typescript
* const input = `Translate "I love programming" into French.`;
*
* // Models also accept a list of chat messages or a formatted prompt
* const result = await llm.invoke(input);
* console.log(result);
* ```
*
* ```txt
* AIMessage {
*   "content": "There are a few ways to translate \"I love programming\" into French, depending on the level of formality and nuance you want to convey:\n\n**Formal:**\n\n* **J'aime la programmation.** (This is the most literal and formal translation.)\n\n**Informal:**\n\n* **J'adore programmer.** (This is a more enthusiastic and informal translation.)\n* **J'aime beaucoup programmer.** (This is a slightly less enthusiastic but still informal translation.)\n\n**More specific:**\n\n* **J'aime beaucoup coder.** (This specifically refers to writing code.)\n* **J'aime beaucoup développer des logiciels.** (This specifically refers to developing software.)\n\nThe best translation will depend on the context and your intended audience. \n",
*   "response_metadata": {
*     "finishReason": "STOP",
*     "index": 0,
*     "safetyRatings": [
*       {
*         "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
*         "probability": "NEGLIGIBLE"
*       },
*       {
*         "category": "HARM_CATEGORY_HATE_SPEECH",
*         "probability": "NEGLIGIBLE"
*       },
*       {
*         "category": "HARM_CATEGORY_HARASSMENT",
*         "probability": "NEGLIGIBLE"
*       },
*       {
*         "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
*         "probability": "NEGLIGIBLE"
*       }
*     ]
*   },
*   "usage_metadata": {
*     "input_tokens": 10,
*     "output_tokens": 149,
*     "total_tokens": 159
*   }
* }
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Streaming Chunks</strong></summary>
*
* ```typescript
* for await (const chunk of await llm.stream(input)) {
*   console.log(chunk);
* }
* ```
*
* ```txt
* AIMessageChunk {
*   "content": "There",
*   "response_metadata": {
*     "index": 0
*   }
*   "usage_metadata": {
*     "input_tokens": 10,
*     "output_tokens": 1,
*     "total_tokens": 11
*   }
* }
* AIMessageChunk {
*   "content": " are a few ways to translate \"I love programming\" into French, depending on",
* }
* AIMessageChunk {
*   "content": " the level of formality and nuance you want to convey:\n\n**Formal:**\n\n",
* }
* AIMessageChunk {
*   "content": "* **J'aime la programmation.** (This is the most literal and formal translation.)\n\n**Informal:**\n\n* **J'adore programmer.** (This",
* }
* AIMessageChunk {
*   "content": " is a more enthusiastic and informal translation.)\n* **J'aime beaucoup programmer.** (This is a slightly less enthusiastic but still informal translation.)\n\n**More",
* }
* AIMessageChunk {
*   "content": " specific:**\n\n* **J'aime beaucoup coder.** (This specifically refers to writing code.)\n* **J'aime beaucoup développer des logiciels.** (This specifically refers to developing software.)\n\nThe best translation will depend on the context and",
* }
* AIMessageChunk {
*   "content": " your intended audience. \n",
* }
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Aggregate Streamed Chunks</strong></summary>
*
* ```typescript
* import { AIMessageChunk } from '@langchain/core/messages';
* import { concat } from '@langchain/core/utils/stream';
*
* const stream = await llm.stream(input);
* let full: AIMessageChunk | undefined;
* for await (const chunk of stream) {
*   full = !full ? chunk : concat(full, chunk);
* }
* console.log(full);
* ```
*
* ```txt
* AIMessageChunk {
*   "content": "There are a few ways to translate \"I love programming\" into French, depending on the level of formality and nuance you want to convey:\n\n**Formal:**\n\n* **J'aime la programmation.** (This is the most literal and formal translation.)\n\n**Informal:**\n\n* **J'adore programmer.** (This is a more enthusiastic and informal translation.)\n* **J'aime beaucoup programmer.** (This is a slightly less enthusiastic but still informal translation.)\n\n**More specific:**\n\n* **J'aime beaucoup coder.** (This specifically refers to writing code.)\n* **J'aime beaucoup développer des logiciels.** (This specifically refers to developing software.)\n\nThe best translation will depend on the context and your intended audience. \n",
*   "usage_metadata": {
*     "input_tokens": 10,
*     "output_tokens": 277,
*     "total_tokens": 287
*   }
* }
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Bind tools</strong></summary>
*
* ```typescript
* import { z } from 'zod';
*
* const GetWeather = {
*   name: "GetWeather",
*   description: "Get the current weather in a given location",
*   schema: z.object({
*     location: z.string().describe("The city and state, e.g. San Francisco, CA")
*   }),
* }
*
* const GetPopulation = {
*   name: "GetPopulation",
*   description: "Get the current population in a given location",
*   schema: z.object({
*     location: z.string().describe("The city and state, e.g. San Francisco, CA")
*   }),
* }
*
* const llmWithTools = llm.bindTools([GetWeather, GetPopulation]);
* const aiMsg = await llmWithTools.invoke(
*   "Which city is hotter today and which is bigger: LA or NY?"
* );
* console.log(aiMsg.tool_calls);
* ```
*
* ```txt
* [
*   {
*     name: 'GetWeather',
*     args: { location: 'Los Angeles, CA' },
*     type: 'tool_call'
*   },
*   {
*     name: 'GetWeather',
*     args: { location: 'New York, NY' },
*     type: 'tool_call'
*   },
*   {
*     name: 'GetPopulation',
*     args: { location: 'Los Angeles, CA' },
*     type: 'tool_call'
*   },
*   {
*     name: 'GetPopulation',
*     args: { location: 'New York, NY' },
*     type: 'tool_call'
*   }
* ]
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Structured Output</strong></summary>
*
* ```typescript
* const Joke = z.object({
*   setup: z.string().describe("The setup of the joke"),
*   punchline: z.string().describe("The punchline to the joke"),
*   rating: z.number().optional().describe("How funny the joke is, from 1 to 10")
* }).describe('Joke to tell user.');
*
* const structuredLlm = llm.withStructuredOutput(Joke, { name: "Joke" });
* const jokeResult = await structuredLlm.invoke("Tell me a joke about cats");
* console.log(jokeResult);
* ```
*
* ```txt
* {
*   setup: "Why don\\'t cats play poker?",
*   punchline: "Why don\\'t cats play poker? Because they always have an ace up their sleeve!"
* }
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Multimodal</strong></summary>
*
* ```typescript
* import { HumanMessage } from '@langchain/core/messages';
*
* const imageUrl = "https://example.com/image.jpg";
* const imageData = await fetch(imageUrl).then(res => res.arrayBuffer());
* const base64Image = Buffer.from(imageData).toString('base64');
*
* const message = new HumanMessage({
*   content: [
*     { type: "text", text: "describe the weather in this image" },
*     {
*       type: "image_url",
*       image_url: { url: `data:image/jpeg;base64,${base64Image}` },
*     },
*   ]
* });
*
* const imageDescriptionAiMsg = await llm.invoke([message]);
* console.log(imageDescriptionAiMsg.content);
* ```
*
* ```txt
* The weather in the image appears to be clear and sunny. The sky is mostly blue with a few scattered white clouds, indicating fair weather. The bright sunlight is casting shadows on the green, grassy hill, suggesting it is a pleasant day with good visibility. There are no signs of rain or stormy conditions.
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Usage Metadata</strong></summary>
*
* ```typescript
* const aiMsgForMetadata = await llm.invoke(input);
* console.log(aiMsgForMetadata.usage_metadata);
* ```
*
* ```txt
* { input_tokens: 10, output_tokens: 149, total_tokens: 159 }
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Response Metadata</strong></summary>
*
* ```typescript
* const aiMsgForResponseMetadata = await llm.invoke(input);
* console.log(aiMsgForResponseMetadata.response_metadata);
* ```
*
* ```txt
* {
*   finishReason: 'STOP',
*   index: 0,
*   safetyRatings: [
*     {
*       category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
*       probability: 'NEGLIGIBLE'
*     },
*     {
*       category: 'HARM_CATEGORY_HATE_SPEECH',
*       probability: 'NEGLIGIBLE'
*     },
*     { category: 'HARM_CATEGORY_HARASSMENT', probability: 'NEGLIGIBLE' },
*     {
*       category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
*       probability: 'NEGLIGIBLE'
*     }
*   ]
* }
* ```
* </details>
*
* <br />
*
* <details>
* <summary><strong>Document Messages</strong></summary>
*
* This example will show you how to pass documents such as PDFs to Google
* Generative AI through messages.
*
* ```typescript
* const pdfPath = "/Users/my_user/Downloads/invoice.pdf";
* const pdfBase64 = await fs.readFile(pdfPath, "base64");
*
* const response = await llm.invoke([
*   ["system", "Use the provided documents to answer the question"],
*   [
*     "user",
*     [
*       {
*         type: "application/pdf", // If the `type` field includes a single slash (`/`), it will be treated as inline data.
*         data: pdfBase64,
*       },
*       {
*         type: "text",
*         text: "Summarize the contents of this PDF",
*       },
*     ],
*   ],
* ]);
*
* console.log(response.content);
* ```
*
* ```txt
* This is a billing invoice from Twitter Developers for X API Basic Access. The transaction date is January 7, 2025,
* and the amount is $194.34, which has been paid. The subscription period is from January 7, 2025 21:02 to February 7, 2025 00:00 (UTC).
* The tax is $0.00, with a tax rate of 0%. The total amount is $194.34. The payment was made using a Visa card ending in 7022,
* expiring in 12/2026. The billing address is Brace Sproul, 1234 Main Street, San Francisco, CA, US 94103. The company being billed is
* X Corp, located at 865 FM 1209 Building 2, Bastrop, TX, US 78602. Terms and conditions apply.
* ```
* </details>
*
* <br />
*/ var ChatGoogleGenerativeAI = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseChatModel"] {
    static lc_name() {
        return "ChatGoogleGenerativeAI";
    }
    lc_serializable = true;
    get lc_secrets() {
        return {
            apiKey: "GOOGLE_API_KEY"
        };
    }
    lc_namespace = [
        "langchain",
        "chat_models",
        "google_genai"
    ];
    get lc_aliases() {
        return {
            apiKey: "google_api_key"
        };
    }
    model;
    temperature;
    maxOutputTokens;
    topP;
    topK;
    stopSequences = [];
    safetySettings;
    apiKey;
    streaming = false;
    json;
    streamUsage = true;
    convertSystemMessageToHumanContent;
    thinkingConfig;
    client;
    get _isMultimodalModel() {
        return this.model.includes("vision") || this.model.startsWith("gemini-1.5") || this.model.startsWith("gemini-2") || this.model.startsWith("gemma-3-") && !this.model.startsWith("gemma-3-1b") || this.model.startsWith("gemini-3");
    }
    constructor(modelOrFields, fieldsArg){
        const fields = typeof modelOrFields === "string" ? {
            ...fieldsArg ?? {},
            model: modelOrFields
        } : modelOrFields;
        super(fields);
        this._addVersion("@langchain/google-genai", "2.1.24");
        this.model = fields.model.replace(/^models\//, "");
        this.maxOutputTokens = fields.maxOutputTokens ?? this.maxOutputTokens;
        if (this.maxOutputTokens && this.maxOutputTokens < 0) throw new Error("`maxOutputTokens` must be a positive integer");
        this.temperature = fields.temperature ?? this.temperature;
        if (this.temperature && (this.temperature < 0 || this.temperature > 2)) throw new Error("`temperature` must be in the range of [0.0,2.0]");
        this.topP = fields.topP ?? this.topP;
        if (this.topP && this.topP < 0) throw new Error("`topP` must be a positive integer");
        if (this.topP && this.topP > 1) throw new Error("`topP` must be below 1.");
        this.topK = fields.topK ?? this.topK;
        if (this.topK && this.topK < 0) throw new Error("`topK` must be a positive integer");
        this.stopSequences = fields.stopSequences ?? this.stopSequences;
        this.apiKey = fields.apiKey ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("GOOGLE_API_KEY");
        if (!this.apiKey) throw new Error("Please set an API key for Google GenerativeAI in the environment variable GOOGLE_API_KEY or in the `apiKey` field of the ChatGoogleGenerativeAI constructor");
        this.safetySettings = fields.safetySettings ?? this.safetySettings;
        if (this.safetySettings && this.safetySettings.length > 0) {
            if (new Set(this.safetySettings.map((s)=>s.category)).size !== this.safetySettings.length) throw new Error("The categories in `safetySettings` array must be unique");
        }
        this.streaming = fields.streaming ?? this.streaming;
        this.json = fields.json;
        this.thinkingConfig = fields.thinkingConfig ?? this.thinkingConfig;
        this.client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](this.apiKey).getGenerativeModel({
            model: this.model,
            safetySettings: this.safetySettings,
            generationConfig: {
                stopSequences: this.stopSequences,
                maxOutputTokens: this.maxOutputTokens,
                temperature: this.temperature,
                topP: this.topP,
                topK: this.topK,
                ...this.json ? {
                    responseMimeType: "application/json"
                } : {},
                ...this.thinkingConfig ? {
                    thinkingConfig: this.thinkingConfig
                } : {}
            }
        }, {
            apiVersion: fields.apiVersion,
            baseUrl: fields.baseUrl,
            customHeaders: fields.customHeaders
        });
        this.streamUsage = fields.streamUsage ?? this.streamUsage;
    }
    useCachedContent(cachedContent, modelParams, requestOptions) {
        if (!this.apiKey) return;
        this.client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](this.apiKey).getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions);
    }
    get useSystemInstruction() {
        return typeof this.convertSystemMessageToHumanContent === "boolean" ? !this.convertSystemMessageToHumanContent : this.computeUseSystemInstruction;
    }
    get computeUseSystemInstruction() {
        if (this.model === "gemini-1.0-pro-001") return false;
        else if (this.model.startsWith("gemini-pro-vision")) return false;
        else if (this.model.startsWith("gemini-1.0-pro-vision")) return false;
        else if (this.model === "gemini-pro") return false;
        return true;
    }
    getLsParams(options) {
        return {
            ls_provider: "google_genai",
            ls_model_name: this.model,
            ls_model_type: "chat",
            ls_temperature: this.client.generationConfig.temperature,
            ls_max_tokens: this.client.generationConfig.maxOutputTokens,
            ls_stop: options.stop
        };
    }
    _combineLLMOutput() {
        return [];
    }
    _llmType() {
        return "googlegenerativeai";
    }
    bindTools(tools, kwargs) {
        return this.withConfig({
            tools: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$tools$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToolsToGenAI"])(tools)?.tools,
            ...kwargs
        });
    }
    invocationParams(options) {
        const toolsAndConfig = options?.tools?.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$tools$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToolsToGenAI"])(options.tools, {
            toolChoice: options.tool_choice,
            allowedFunctionNames: options.allowedFunctionNames
        }) : void 0;
        if (options?.responseSchema) {
            this.client.generationConfig.responseSchema = options.responseSchema;
            this.client.generationConfig.responseMimeType = "application/json";
        } else {
            this.client.generationConfig.responseSchema = void 0;
            this.client.generationConfig.responseMimeType = this.json ? "application/json" : void 0;
        }
        return {
            ...toolsAndConfig?.tools ? {
                tools: toolsAndConfig.tools
            } : {},
            ...toolsAndConfig?.toolConfig ? {
                toolConfig: toolsAndConfig.toolConfig
            } : {}
        };
    }
    async _generate(messages, options, runManager) {
        options.signal?.throwIfAborted();
        const prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBaseMessagesToContent"])(messages, this._isMultimodalModel, this.useSystemInstruction, this.model);
        let actualPrompt = prompt;
        if (prompt[0].role === "system") {
            const [systemInstruction] = prompt;
            this.client.systemInstruction = systemInstruction;
            actualPrompt = prompt.slice(1);
        }
        const parameters = this.invocationParams(options);
        if (this.streaming) {
            const tokenUsage = {};
            const stream = this._streamResponseChunks(messages, options, runManager);
            const finalChunks = [];
            for await (const chunk of stream){
                const index = chunk.generationInfo?.completion ?? 0;
                if (finalChunks[index] === void 0) finalChunks[index] = chunk;
                else finalChunks[index] = finalChunks[index].concat(chunk);
            }
            return {
                generations: finalChunks.filter((c)=>c !== void 0),
                llmOutput: {
                    estimatedTokenUsage: tokenUsage
                }
            };
        }
        const res = await this.completionWithRetry({
            ...parameters,
            contents: actualPrompt
        });
        let usageMetadata;
        if ("usageMetadata" in res.response) usageMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertUsageMetadata"])(res.response.usageMetadata, this.model);
        const generationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapGenerateContentResultToChatResult"])(res.response, {
            usageMetadata
        });
        if (generationResult.generations?.length > 0) await runManager?.handleLLMNewToken(generationResult.generations[0]?.text ?? "");
        return generationResult;
    }
    async *_streamResponseChunks(messages, options, runManager) {
        const prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertBaseMessagesToContent"])(messages, this._isMultimodalModel, this.useSystemInstruction, this.model);
        let actualPrompt = prompt;
        if (prompt[0].role === "system") {
            const [systemInstruction] = prompt;
            this.client.systemInstruction = systemInstruction;
            actualPrompt = prompt.slice(1);
        }
        const request = {
            ...this.invocationParams(options),
            contents: actualPrompt
        };
        const stream = await this.caller.callWithOptions({
            signal: options?.signal
        }, async ()=>{
            const { stream } = await this.client.generateContentStream(request, {
                signal: options?.signal
            });
            return stream;
        });
        let usageMetadata;
        let prevPromptTokenCount = 0;
        let prevCandidatesTokenCount = 0;
        let prevTotalTokenCount = 0;
        let index = 0;
        for await (const response of stream){
            if (options.signal?.aborted) return;
            if ("usageMetadata" in response && response.usageMetadata !== void 0 && this.streamUsage !== false && options.streamUsage !== false) {
                usageMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertUsageMetadata"])(response.usageMetadata, this.model);
                const newPromptTokenCount = response.usageMetadata.promptTokenCount ?? 0;
                usageMetadata.input_tokens = Math.max(0, newPromptTokenCount - prevPromptTokenCount);
                prevPromptTokenCount = newPromptTokenCount;
                const newCandidatesTokenCount = response.usageMetadata.candidatesTokenCount ?? 0;
                usageMetadata.output_tokens = Math.max(0, newCandidatesTokenCount - prevCandidatesTokenCount);
                prevCandidatesTokenCount = newCandidatesTokenCount;
                const newTotalTokenCount = response.usageMetadata.totalTokenCount ?? 0;
                usageMetadata.total_tokens = Math.max(0, newTotalTokenCount - prevTotalTokenCount);
                prevTotalTokenCount = newTotalTokenCount;
            }
            const chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertResponseContentToChatGenerationChunk"])(response, {
                usageMetadata,
                index
            });
            index += 1;
            if (!chunk) continue;
            yield chunk;
            await runManager?.handleLLMNewToken(chunk.text ?? "");
        }
    }
    async completionWithRetry(request, options) {
        return this.caller.callWithOptions({
            signal: options?.signal
        }, async ()=>{
            try {
                return await this.client.generateContent(request, {
                    signal: options?.signal
                });
            } catch (e) {
                if (e.message?.includes("400 Bad Request")) e.status = 400;
                throw e;
            }
        });
    }
    /**
	* Return profiling information for the model.
	*
	* Provides information about the model's capabilities and constraints,
	* including token limits, multimodal support, and advanced features like
	* tool calling and structured output.
	*
	* @returns {ModelProfile} An object describing the model's capabilities and constraints
	*
	* @example
	* ```typescript
	* const model = new ChatGoogleGenerativeAI({ model: "gemini-1.5-flash" });
	* const profile = model.profile;
	* console.log(profile.maxInputTokens); // 2000000
	* console.log(profile.imageInputs); // true
	* ```
	*/ get profile() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$profiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][this.model] ?? {};
    }
    withStructuredOutput(outputSchema, config) {
        const schema = outputSchema;
        const name = config?.name;
        const method = config?.method;
        const includeRaw = config?.includeRaw;
        if (method === "jsonMode") throw new Error(`ChatGoogleGenerativeAI only supports "jsonSchema" or "functionCalling" as a method.`);
        let llm;
        let outputParser;
        if (method === "functionCalling") {
            let functionName = name ?? "extract";
            let geminiFunctionDeclaration;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$types$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInteropZodSchema"])(schema) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$standard_schema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSerializableSchema"])(schema)) {
                const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGenerativeAIParameters"])(schema);
                geminiFunctionDeclaration = {
                    name: functionName,
                    description: jsonSchema.description ?? "A function available to call.",
                    parameters: jsonSchema
                };
            } else if (typeof schema.name === "string" && typeof schema.parameters === "object" && schema.parameters != null) {
                geminiFunctionDeclaration = schema;
                geminiFunctionDeclaration.parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAdditionalProperties"])(schema.parameters);
                functionName = schema.name;
            } else geminiFunctionDeclaration = {
                name: functionName,
                description: schema.description ?? "",
                parameters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAdditionalProperties"])(schema)
            };
            const tools = [
                {
                    functionDeclarations: [
                        geminiFunctionDeclaration
                    ]
                }
            ];
            llm = this.bindTools(tools).withConfig({
                allowedFunctionNames: [
                    functionName
                ]
            });
            outputParser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$structured_output$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFunctionCallingParser"])(schema, functionName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$output_parsers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAIToolsOutputParser"]);
        } else {
            const jsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$utils$2f$zod_to_genai_parameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaToGenerativeAIParameters"])(schema);
            llm = this.withConfig({
                responseSchema: jsonSchema
            });
            outputParser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$structured_output$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContentParser"])(schema);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$language_models$2f$structured_output$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["assembleStructuredOutputPipeline"])(llm, outputParser, includeRaw, includeRaw ? "StructuredOutputRunnable" : "ChatGoogleGenerativeAIStructuredOutput");
    }
};
;
 //# sourceMappingURL=chat_models.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/embeddings.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleGenerativeAIEmbeddings",
    ()=>GoogleGenerativeAIEmbeddings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$embeddings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/embeddings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$chunk_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/chunk_array.js [app-rsc] (ecmascript)");
;
;
;
;
//#region src/embeddings.ts
/**
* Class that extends the Embeddings class and provides methods for
* generating embeddings using the Google Palm API.
* @example
* ```typescript
* const model = new GoogleGenerativeAIEmbeddings({
*   apiKey: "<YOUR API KEY>",
*   modelName: "embedding-001",
* });
*
* // Embed a single query
* const res = await model.embedQuery(
*   "What would be a good company name for a company that makes colorful socks?"
* );
* console.log({ res });
*
* // Embed multiple documents
* const documentRes = await model.embedDocuments(["Hello world", "Bye bye"]);
* console.log({ documentRes });
* ```
*/ var GoogleGenerativeAIEmbeddings = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$embeddings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Embeddings"] {
    apiKey;
    modelName = "embedding-001";
    model = "embedding-001";
    taskType;
    title;
    stripNewLines = true;
    maxBatchSize = 100;
    client;
    constructor(fields){
        super(fields ?? {});
        this.modelName = fields?.model?.replace(/^models\//, "") ?? fields?.modelName?.replace(/^models\//, "") ?? this.modelName;
        this.model = this.modelName;
        this.taskType = fields?.taskType ?? this.taskType;
        this.title = fields?.title ?? this.title;
        if (this.title && this.taskType !== "RETRIEVAL_DOCUMENT") throw new Error("title can only be sepcified with TaskType.RETRIEVAL_DOCUMENT");
        this.apiKey = fields?.apiKey ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnvironmentVariable"])("GOOGLE_API_KEY");
        if (!this.apiKey) throw new Error("Please set an API key for Google GenerativeAI in the environmentb variable GOOGLE_API_KEY or in the `apiKey` field of the GoogleGenerativeAIEmbeddings constructor");
        this.client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](this.apiKey).getGenerativeModel({
            model: this.model
        }, {
            baseUrl: fields?.baseUrl
        });
    }
    _convertToContent(text) {
        return {
            content: {
                role: "user",
                parts: [
                    {
                        text: this.stripNewLines ? text.replace(/\n/g, " ") : text
                    }
                ]
            },
            taskType: this.taskType,
            title: this.title
        };
    }
    async _embedQueryContent(text) {
        const req = this._convertToContent(text);
        return (await this.client.embedContent(req)).embedding.values ?? [];
    }
    async _embedDocumentsContent(documents) {
        const batchEmbedChunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$chunk_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chunkArray"])(documents, this.maxBatchSize);
        const batchEmbedRequests = batchEmbedChunks.map((chunk)=>({
                requests: chunk.map((doc)=>this._convertToContent(doc))
            }));
        return (await Promise.allSettled(batchEmbedRequests.map((req)=>this.client.batchEmbedContents(req)))).flatMap((res, idx)=>{
            if (res.status === "fulfilled") return res.value.embeddings.map((e)=>e.values || []);
            else return Array(batchEmbedChunks[idx].length).fill([]);
        });
    }
    /**
	* Method that takes a document as input and returns a promise that
	* resolves to an embedding for the document. It calls the _embedText
	* method with the document as the input.
	* @param document Document for which to generate an embedding.
	* @returns Promise that resolves to an embedding for the input document.
	*/ embedQuery(document) {
        return this.caller.call(this._embedQueryContent.bind(this), document);
    }
    /**
	* Method that takes an array of documents as input and returns a promise
	* that resolves to a 2D array of embeddings for each document. It calls
	* the _embedText method for each document in the array.
	* @param documents Array of documents for which to generate embeddings.
	* @returns Promise that resolves to a 2D array of embeddings for each input document.
	*/ embedDocuments(documents) {
        return this.caller.call(this._embedDocumentsContent.bind(this), documents);
    }
};
;
 //# sourceMappingURL=embeddings.js.map
}),
"[project]/node_modules/@langchain/google-genai/dist/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$chat_models$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/chat_models.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$dist$2f$embeddings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/dist/embeddings.js [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/node_modules/decamelize/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function(str, sep) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    sep = typeof sep === 'undefined' ? '_' : sep;
    return str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2').toLowerCase();
};
}),
"[project]/node_modules/camelcase/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;
const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');
const preserveCamelCase = (string, toLowerCase, toUpperCase)=>{
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;
    for(let i = 0; i < string.length; i++){
        const character = string[i];
        if (isLastCharLower && UPPERCASE.test(character)) {
            string = string.slice(0, i) + '-' + string.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
            string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        } else {
            isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
    }
    return string;
};
const preserveConsecutiveUppercase = (input, toLowerCase)=>{
    LEADING_CAPITAL.lastIndex = 0;
    return input.replace(LEADING_CAPITAL, (m1)=>toLowerCase(m1));
};
const postProcess = (input, toUpperCase)=>{
    SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
    NUMBERS_AND_IDENTIFIER.lastIndex = 0;
    return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier)=>toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m)=>toUpperCase(m));
};
const camelCase = (input, options)=>{
    if (!(typeof input === 'string' || Array.isArray(input))) {
        throw new TypeError('Expected the input to be `string | string[]`');
    }
    options = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...options
    };
    if (Array.isArray(input)) {
        input = input.map((x)=>x.trim()).filter((x)=>x.length).join('-');
    } else {
        input = input.trim();
    }
    if (input.length === 0) {
        return '';
    }
    const toLowerCase = options.locale === false ? (string)=>string.toLowerCase() : (string)=>string.toLocaleLowerCase(options.locale);
    const toUpperCase = options.locale === false ? (string)=>string.toUpperCase() : (string)=>string.toLocaleUpperCase(options.locale);
    if (input.length === 1) {
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
    }
    const hasUpperCase = input !== toLowerCase(input);
    if (hasUpperCase) {
        input = preserveCamelCase(input, toLowerCase, toUpperCase);
    }
    input = input.replace(LEADING_SEPARATORS, '');
    if (options.preserveConsecutiveUppercase) {
        input = preserveConsecutiveUppercase(input, toLowerCase);
    } else {
        input = toLowerCase(input);
    }
    if (options.pascalCase) {
        input = toUpperCase(input.charAt(0)) + input.slice(1);
    }
    return postProcess(input, toUpperCase);
};
module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports.default = camelCase;
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/rng.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/v7.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "updateV7State",
    ()=>updateV7State
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/stringify.js [app-rsc] (ecmascript)");
;
;
const _state = {};
function v7(options, buf, offset) {
    let bytes;
    if (options) {
        bytes = v7Bytes(options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(), options.msecs, options.seq, buf, offset);
    } else {
        const now = Date.now();
        const rnds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        updateV7State(_state, now, rnds);
        bytes = v7Bytes(rnds, _state.msecs, _state.seq, buf, offset);
    }
    return buf ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
}
function updateV7State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.seq ??= 0;
    if (now > state.msecs) {
        state.seq = rnds[6] << 23 | rnds[7] << 16 | rnds[8] << 8 | rnds[9];
        state.msecs = now;
    } else {
        state.seq = state.seq + 1 | 0;
        if (state.seq === 0) {
            state.msecs++;
        }
    }
    return state;
}
function v7Bytes(rnds, msecs, seq, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    } else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    seq ??= rnds[6] * 0x7f << 24 | rnds[7] << 16 | rnds[8] << 8 | rnds[9];
    buf[offset++] = msecs / 0x10000000000 & 0xff;
    buf[offset++] = msecs / 0x100000000 & 0xff;
    buf[offset++] = msecs / 0x1000000 & 0xff;
    buf[offset++] = msecs / 0x10000 & 0xff;
    buf[offset++] = msecs / 0x100 & 0xff;
    buf[offset++] = msecs & 0xff;
    buf[offset++] = 0x70 | seq >>> 28 & 0x0f;
    buf[offset++] = seq >>> 20 & 0xff;
    buf[offset++] = 0x80 | seq >>> 14 & 0x3f;
    buf[offset++] = seq >>> 6 & 0xff;
    buf[offset++] = seq << 2 & 0xff | rnds[10] & 0x03;
    buf[offset++] = rnds[11];
    buf[offset++] = rnds[12];
    buf[offset++] = rnds[13];
    buf[offset++] = rnds[14];
    buf[offset++] = rnds[15];
    return buf;
}
const __TURBOPACK__default__export__ = v7;
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/v7.js [app-rsc] (ecmascript) <export default as v7>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/v7.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */ let _seqLow = null;
let _seqHigh = null;
let _msecs = 0;
function v7(options, buf, offset) {
    options = options || {};
    // initialize buffer and pointer
    let i = buf && offset || 0;
    const b = buf || new Uint8Array(16);
    // rnds is Uint8Array(16) filled with random bytes
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // milliseconds since unix epoch, 1970-01-01 00:00
    const msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // seq is user provided 31 bit counter
    let seq = options.seq !== undefined ? options.seq : null;
    // initialize local seq high/low parts
    let seqHigh = _seqHigh;
    let seqLow = _seqLow;
    // check if clock has advanced and user has not provided msecs
    if (msecs > _msecs && options.msecs === undefined) {
        _msecs = msecs;
        // unless user provided seq, reset seq parts
        if (seq !== null) {
            seqHigh = null;
            seqLow = null;
        }
    }
    // if we have a user provided seq
    if (seq !== null) {
        // trim provided seq to 31 bits of value, avoiding overflow
        if (seq > 0x7fffffff) {
            seq = 0x7fffffff;
        }
        // split provided seq into high/low parts
        seqHigh = seq >>> 19 & 0xfff;
        seqLow = seq & 0x7ffff;
    }
    // randomly initialize seq
    if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 0x7f;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 0x3f; // pad for var
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
    }
    // increment seq if within msecs window
    if (msecs + 10000 > _msecs && seq === null) {
        if (++seqLow > 0x7ffff) {
            seqLow = 0;
            if (++seqHigh > 0xfff) {
                seqHigh = 0;
                // increment internal _msecs. this allows us to continue incrementing
                // while staying monotonic. Note, once we hit 10k milliseconds beyond system
                // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
                _msecs++;
            }
        }
    } else {
        // resetting; we have advanced more than
        // 10k milliseconds beyond system clock
        _msecs = msecs;
    }
    _seqHigh = seqHigh;
    _seqLow = seqLow;
    // [bytes 0-5] 48 bits of local timestamp
    b[i++] = _msecs / 0x10000000000 & 0xff;
    b[i++] = _msecs / 0x100000000 & 0xff;
    b[i++] = _msecs / 0x1000000 & 0xff;
    b[i++] = _msecs / 0x10000 & 0xff;
    b[i++] = _msecs / 0x100 & 0xff;
    b[i++] = _msecs & 0xff;
    // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
    b[i++] = seqHigh >>> 4 & 0x0f | 0x70;
    // [byte 7] remaining 8 bits of seq_hi
    b[i++] = seqHigh & 0xff;
    // [byte 8] - variant (2 bits), first 6 bits seq_low
    b[i++] = seqLow >>> 13 & 0x3f | 0x80;
    // [byte 9] 8 bits seq_low
    b[i++] = seqLow >>> 5 & 0xff;
    // [byte 10] remaining 5 bits seq_low, 3 bits random
    b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;
    // [bytes 11-15] always random
    b[i++] = rnds[11];
    b[i++] = rnds[12];
    b[i++] = rnds[13];
    b[i++] = rnds[14];
    b[i++] = rnds[15];
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v7;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript) <export default as v7>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16);
    // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff;
    // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff;
    // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff;
    // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff;
    // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>v35
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        }
        // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
    }
    // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name;
    } catch (err) {}
    // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript) <export default as v5>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$langsmith$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/langsmith/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/native.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"]
};
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript) <export default as validate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/native.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"]
};
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/rng.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$google$2d$genai$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/google-genai/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/eventemitter3/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events){
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++){
        ee[i] = handlers[i].fn;
    }
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++){
            args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                        args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
        }
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++){
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
            }
        }
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = EventEmitter;
}
}),
"[project]/node_modules/p-finally/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (promise, onFinally)=>{
    onFinally = onFinally || (()=>{});
    return promise.then((val)=>new Promise((resolve)=>{
            resolve(onFinally());
        }).then(()=>val), (err)=>new Promise((resolve)=>{
            resolve(onFinally());
        }).then(()=>{
            throw err;
        }));
};
}),
"[project]/node_modules/p-timeout/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const pFinally = __turbopack_context__.r("[project]/node_modules/p-finally/index.js [app-rsc] (ecmascript)");
class TimeoutError extends Error {
    constructor(message){
        super(message);
        this.name = 'TimeoutError';
    }
}
const pTimeout = (promise, milliseconds, fallback)=>new Promise((resolve, reject)=>{
        if (typeof milliseconds !== 'number' || milliseconds < 0) {
            throw new TypeError('Expected `milliseconds` to be a positive number');
        }
        if (milliseconds === Infinity) {
            resolve(promise);
            return;
        }
        const timer = setTimeout(()=>{
            if (typeof fallback === 'function') {
                try {
                    resolve(fallback());
                } catch (error) {
                    reject(error);
                }
                return;
            }
            const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
            const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
            if (typeof promise.cancel === 'function') {
                promise.cancel();
            }
            reject(timeoutError);
        }, milliseconds);
        // TODO: Use native `finally` keyword when targeting Node.js 10
        pFinally(// eslint-disable-next-line promise/prefer-await-to-then
        promise.then(resolve, reject), ()=>{
            clearTimeout(timer);
        });
    });
module.exports = pTimeout;
// TODO: Remove this for the next major release
module.exports.default = pTimeout;
module.exports.TimeoutError = TimeoutError;
}),
"[project]/node_modules/p-queue/dist/lower-bound.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while(count > 0){
        const step = count / 2 | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        } else {
            count = step;
        }
    }
    return first;
}
exports.default = lowerBound;
}),
"[project]/node_modules/p-queue/dist/priority-queue.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const lower_bound_1 = __turbopack_context__.r("[project]/node_modules/p-queue/dist/lower-bound.js [app-rsc] (ecmascript)");
class PriorityQueue {
    constructor(){
        this._queue = [];
    }
    enqueue(run, options) {
        options = Object.assign({
            priority: 0
        }, options);
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b)=>b.priority - a.priority);
        this._queue.splice(index, 0, element);
    }
    dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return this._queue.filter((element)=>element.priority === options.priority).map((element)=>element.run);
    }
    get size() {
        return this._queue.length;
    }
}
exports.default = PriorityQueue;
}),
"[project]/node_modules/p-queue/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const EventEmitter = __turbopack_context__.r("[project]/node_modules/eventemitter3/index.js [app-rsc] (ecmascript)");
const p_timeout_1 = __turbopack_context__.r("[project]/node_modules/p-timeout/index.js [app-rsc] (ecmascript)");
const priority_queue_1 = __turbopack_context__.r("[project]/node_modules/p-queue/dist/priority-queue.js [app-rsc] (ecmascript)");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const empty = ()=>{};
const timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/ class PQueue extends EventEmitter {
    constructor(options){
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = Object.assign({
            carryoverConcurrencyCount: false,
            intervalCap: Infinity,
            interval: 0,
            concurrency: Infinity,
            autoStart: true,
            queueClass: priority_queue_1.default
        }, options);
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ''}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit('next');
    }
    _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
            this.emit('idle');
        }
    }
    _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = undefined;
    }
    _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === undefined) {
            const delay = this._intervalEnd - now;
            if (delay < 0) {
                // Act as the interval was done
                // We don't need to resume it here because it will be resumed on line 160
                this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
            } else {
                // Act as the interval is pending
                if (this._timeoutId === undefined) {
                    this._timeoutId = setTimeout(()=>{
                        this._onResumeInterval();
                    }, delay);
                }
                return true;
            }
        }
        return false;
    }
    _tryToStartAnother() {
        if (this._queue.size === 0) {
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }
            this._intervalId = undefined;
            this._resolvePromises();
            return false;
        }
        if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                const job = this._queue.dequeue();
                if (!job) {
                    return false;
                }
                this.emit('active');
                job();
                if (canInitializeInterval) {
                    this._initializeIntervalIfNeeded();
                }
                return true;
            }
        }
        return false;
    }
    _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== undefined) {
            return;
        }
        this._intervalId = setInterval(()=>{
            this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
    }
    _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */ _processQueue() {
        // eslint-disable-next-line no-empty
        while(this._tryToStartAnother()){}
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */ async add(fn, options = {}) {
        return new Promise((resolve, reject)=>{
            const run = async ()=>{
                this._pendingCount++;
                this._intervalCount++;
                try {
                    const operation = this._timeout === undefined && options.timeout === undefined ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === undefined ? this._timeout : options.timeout, ()=>{
                        if (options.throwOnTimeout === undefined ? this._throwOnTimeout : options.throwOnTimeout) {
                            reject(timeoutError);
                        }
                        return undefined;
                    });
                    resolve(await operation);
                } catch (error) {
                    reject(error);
                }
                this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
            this.emit('add');
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */ async addAll(functions, options) {
        return Promise.all(functions.map(async (function_)=>this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */ start() {
        if (!this._isPaused) {
            return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
    }
    /**
    Put queue execution on hold.
    */ pause() {
        this._isPaused = true;
    }
    /**
    Clear the queue.
    */ clear() {
        this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */ async onEmpty() {
        // Instantly resolve if the queue is empty
        if (this._queue.size === 0) {
            return;
        }
        return new Promise((resolve)=>{
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = ()=>{
                existingResolve();
                resolve();
            };
        });
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */ async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this._pendingCount === 0 && this._queue.size === 0) {
            return;
        }
        return new Promise((resolve)=>{
            const existingResolve = this._resolveIdle;
            this._resolveIdle = ()=>{
                existingResolve();
                resolve();
            };
        });
    }
    /**
    Size of the queue.
    */ get size() {
        return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */ sizeBy(options) {
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */ get pending() {
        return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */ get isPaused() {
        return this._isPaused;
    }
    get timeout() {
        return this._timeout;
    }
    /**
    Set the timeout for future operations.
    */ set timeout(milliseconds) {
        this._timeout = milliseconds;
    }
}
exports.default = PQueue;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}),
"[project]/node_modules/@langchain/core/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/internal/re.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numeric identifiers include numeric identifiers but can be longer.
// Therefore non-numeric identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}),
"[project]/node_modules/@langchain/core/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    if (typeof a === 'number' && typeof b === 'number') {
        return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}),
"[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const debug = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        if (this.major < other.major) {
            return -1;
        }
        if (this.major > other.major) {
            return 1;
        }
        if (this.minor < other.minor) {
            return -1;
        }
        if (this.minor > other.minor) {
            return 1;
        }
        if (this.patch < other.patch) {
            return -1;
        }
        if (this.patch > other.patch) {
            return 1;
        }
        return 0;
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/valid.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/clean.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/inc.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/diff.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are prereleases
    return 'prerelease';
};
module.exports = diff;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/major.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/minor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/patch.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/prerelease.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const parse = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/rcompare.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/compare-loose.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/sort.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/rsort.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compareBuild = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const eq = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/coerce.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/internal/lrucache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/lrucache.js [app-rsc] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    comp = comp.replace(re[t.BUILD], '');
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}),
"[project]/node_modules/@langchain/core/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@langchain/core/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/to-comparators.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/max-satisfying.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/min-satisfying.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/min-version.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/valid.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/gtr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/ltr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const outside = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/intersects.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/simplify.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}),
"[project]/node_modules/@langchain/core/node_modules/semver/ranges/subset.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If LT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}),
"[project]/node_modules/@langchain/core/node_modules/semver/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const valid = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/valid.js [app-rsc] (ecmascript)");
const clean = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/clean.js [app-rsc] (ecmascript)");
const inc = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/inc.js [app-rsc] (ecmascript)");
const diff = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/diff.js [app-rsc] (ecmascript)");
const major = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/major.js [app-rsc] (ecmascript)");
const minor = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/minor.js [app-rsc] (ecmascript)");
const patch = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/patch.js [app-rsc] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/prerelease.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/rcompare.js [app-rsc] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare-loose.js [app-rsc] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const sort = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/sort.js [app-rsc] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/rsort.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const eq = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/coerce.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/to-comparators.js [app-rsc] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/max-satisfying.js [app-rsc] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/min-satisfying.js [app-rsc] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/min-version.js [app-rsc] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/valid.js [app-rsc] (ecmascript)");
const outside = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/gtr.js [app-rsc] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/ltr.js [app-rsc] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/intersects.js [app-rsc] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/simplify.js [app-rsc] (ecmascript)");
const subset = __turbopack_context__.r("[project]/node_modules/@langchain/core/node_modules/semver/ranges/subset.js [app-rsc] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}),
"[project]/node_modules/@langchain/core/node_modules/ansi-styles/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ANSI_BACKGROUND_OFFSET = 10;
const wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`;
const wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`;
function assembleStyles() {
    const codes = new Map();
    const styles = {
        modifier: {
            reset: [
                0,
                0
            ],
            // 21 isn't widely supported and 22 does the same thing
            bold: [
                1,
                22
            ],
            dim: [
                2,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            overline: [
                53,
                55
            ],
            inverse: [
                7,
                27
            ],
            hidden: [
                8,
                28
            ],
            strikethrough: [
                9,
                29
            ]
        },
        color: {
            black: [
                30,
                39
            ],
            red: [
                31,
                39
            ],
            green: [
                32,
                39
            ],
            yellow: [
                33,
                39
            ],
            blue: [
                34,
                39
            ],
            magenta: [
                35,
                39
            ],
            cyan: [
                36,
                39
            ],
            white: [
                37,
                39
            ],
            // Bright color
            blackBright: [
                90,
                39
            ],
            redBright: [
                91,
                39
            ],
            greenBright: [
                92,
                39
            ],
            yellowBright: [
                93,
                39
            ],
            blueBright: [
                94,
                39
            ],
            magentaBright: [
                95,
                39
            ],
            cyanBright: [
                96,
                39
            ],
            whiteBright: [
                97,
                39
            ]
        },
        bgColor: {
            bgBlack: [
                40,
                49
            ],
            bgRed: [
                41,
                49
            ],
            bgGreen: [
                42,
                49
            ],
            bgYellow: [
                43,
                49
            ],
            bgBlue: [
                44,
                49
            ],
            bgMagenta: [
                45,
                49
            ],
            bgCyan: [
                46,
                49
            ],
            bgWhite: [
                47,
                49
            ],
            // Bright color
            bgBlackBright: [
                100,
                49
            ],
            bgRedBright: [
                101,
                49
            ],
            bgGreenBright: [
                102,
                49
            ],
            bgYellowBright: [
                103,
                49
            ],
            bgBlueBright: [
                104,
                49
            ],
            bgMagentaBright: [
                105,
                49
            ],
            bgCyanBright: [
                106,
                49
            ],
            bgWhiteBright: [
                107,
                49
            ]
        }
    };
    // Alias bright black as gray (and grey)
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)){
        for (const [styleName, style] of Object.entries(group)){
            styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false
    });
    styles.color.close = '\u001B[39m';
    styles.bgColor.close = '\u001B[49m';
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    // From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
    Object.defineProperties(styles, {
        rgbToAnsi256: {
            value: (red, green, blue)=>{
                // We use the extended greyscale palette here, with the exception of
                // black and white. normal palette only has 4 greyscale shades.
                if (red === green && green === blue) {
                    if (red < 8) {
                        return 16;
                    }
                    if (red > 248) {
                        return 231;
                    }
                    return Math.round((red - 8) / 247 * 24) + 232;
                }
                return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
            },
            enumerable: false
        },
        hexToRgb: {
            value: (hex)=>{
                const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
                if (!matches) {
                    return [
                        0,
                        0,
                        0
                    ];
                }
                let { colorString } = matches.groups;
                if (colorString.length === 3) {
                    colorString = colorString.split('').map((character)=>character + character).join('');
                }
                const integer = Number.parseInt(colorString, 16);
                return [
                    integer >> 16 & 0xFF,
                    integer >> 8 & 0xFF,
                    integer & 0xFF
                ];
            },
            enumerable: false
        },
        hexToAnsi256: {
            value: (hex)=>styles.rgbToAnsi256(...styles.hexToRgb(hex)),
            enumerable: false
        }
    });
    return styles;
}
// Make the export immutable
Object.defineProperty(module, 'exports', {
    enumerable: true,
    get: assembleStyles
});
}),
"[project]/node_modules/base64-js/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength){
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}
}),
"[project]/node_modules/js-tiktoken/dist/chunk-VL2OQCWN.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tiktoken",
    ()=>Tiktoken,
    "getEncodingNameForModel",
    ()=>getEncodingNameForModel,
    "never",
    ()=>never
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$base64$2d$js$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/base64-js/index.js [app-rsc] (ecmascript)");
;
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
// src/utils.ts
function never(_) {}
function bytePairMerge(piece, ranks) {
    let parts = Array.from({
        length: piece.length
    }, (_, i)=>({
            start: i,
            end: i + 1
        }));
    while(parts.length > 1){
        let minRank = null;
        for(let i = 0; i < parts.length - 1; i++){
            const slice = piece.slice(parts[i].start, parts[i + 1].end);
            const rank = ranks.get(slice.join(","));
            if (rank == null) continue;
            if (minRank == null || rank < minRank[0]) {
                minRank = [
                    rank,
                    i
                ];
            }
        }
        if (minRank != null) {
            const i = minRank[1];
            parts[i] = {
                start: parts[i].start,
                end: parts[i + 1].end
            };
            parts.splice(i + 1, 1);
        } else {
            break;
        }
    }
    return parts;
}
function bytePairEncode(piece, ranks) {
    if (piece.length === 1) return [
        ranks.get(piece.join(","))
    ];
    return bytePairMerge(piece, ranks).map((p)=>ranks.get(piece.slice(p.start, p.end).join(","))).filter((x)=>x != null);
}
function escapeRegex(str) {
    return str.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
}
var _Tiktoken = class {
    /** @internal */ specialTokens;
    /** @internal */ inverseSpecialTokens;
    /** @internal */ patStr;
    /** @internal */ textEncoder = new TextEncoder();
    /** @internal */ textDecoder = new TextDecoder("utf-8");
    /** @internal */ rankMap = /* @__PURE__ */ new Map();
    /** @internal */ textMap = /* @__PURE__ */ new Map();
    constructor(ranks, extendedSpecialTokens){
        this.patStr = ranks.pat_str;
        const uncompressed = ranks.bpe_ranks.split("\n").filter(Boolean).reduce((memo, x)=>{
            const [_, offsetStr, ...tokens] = x.split(" ");
            const offset = Number.parseInt(offsetStr, 10);
            tokens.forEach((token, i)=>memo[token] = offset + i);
            return memo;
        }, {});
        for (const [token, rank] of Object.entries(uncompressed)){
            const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$base64$2d$js$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].toByteArray(token);
            this.rankMap.set(bytes.join(","), rank);
            this.textMap.set(rank, bytes);
        }
        this.specialTokens = {
            ...ranks.special_tokens,
            ...extendedSpecialTokens
        };
        this.inverseSpecialTokens = Object.entries(this.specialTokens).reduce((memo, [text, rank])=>{
            memo[rank] = this.textEncoder.encode(text);
            return memo;
        }, {});
    }
    encode(text, allowedSpecial = [], disallowedSpecial = "all") {
        const regexes = new RegExp(this.patStr, "ug");
        const specialRegex = _Tiktoken.specialTokenRegex(Object.keys(this.specialTokens));
        const ret = [];
        const allowedSpecialSet = new Set(allowedSpecial === "all" ? Object.keys(this.specialTokens) : allowedSpecial);
        const disallowedSpecialSet = new Set(disallowedSpecial === "all" ? Object.keys(this.specialTokens).filter((x)=>!allowedSpecialSet.has(x)) : disallowedSpecial);
        if (disallowedSpecialSet.size > 0) {
            const disallowedSpecialRegex = _Tiktoken.specialTokenRegex([
                ...disallowedSpecialSet
            ]);
            const specialMatch = text.match(disallowedSpecialRegex);
            if (specialMatch != null) {
                throw new Error(`The text contains a special token that is not allowed: ${specialMatch[0]}`);
            }
        }
        let start = 0;
        while(true){
            let nextSpecial = null;
            let startFind = start;
            while(true){
                specialRegex.lastIndex = startFind;
                nextSpecial = specialRegex.exec(text);
                if (nextSpecial == null || allowedSpecialSet.has(nextSpecial[0])) break;
                startFind = nextSpecial.index + 1;
            }
            const end = nextSpecial?.index ?? text.length;
            for (const match of text.substring(start, end).matchAll(regexes)){
                const piece = this.textEncoder.encode(match[0]);
                const token2 = this.rankMap.get(piece.join(","));
                if (token2 != null) {
                    ret.push(token2);
                    continue;
                }
                ret.push(...bytePairEncode(piece, this.rankMap));
            }
            if (nextSpecial == null) break;
            let token = this.specialTokens[nextSpecial[0]];
            ret.push(token);
            start = nextSpecial.index + nextSpecial[0].length;
        }
        return ret;
    }
    decode(tokens) {
        const res = [];
        let length = 0;
        for(let i2 = 0; i2 < tokens.length; ++i2){
            const token = tokens[i2];
            const bytes = this.textMap.get(token) ?? this.inverseSpecialTokens[token];
            if (bytes != null) {
                res.push(bytes);
                length += bytes.length;
            }
        }
        const mergedArray = new Uint8Array(length);
        let i = 0;
        for (const bytes of res){
            mergedArray.set(bytes, i);
            i += bytes.length;
        }
        return this.textDecoder.decode(mergedArray);
    }
};
var Tiktoken = _Tiktoken;
__publicField(Tiktoken, "specialTokenRegex", (tokens)=>{
    return new RegExp(tokens.map((i)=>escapeRegex(i)).join("|"), "g");
});
function getEncodingNameForModel(model) {
    switch(model){
        case "gpt2":
            {
                return "gpt2";
            }
        case "code-cushman-001":
        case "code-cushman-002":
        case "code-davinci-001":
        case "code-davinci-002":
        case "cushman-codex":
        case "davinci-codex":
        case "davinci-002":
        case "text-davinci-002":
        case "text-davinci-003":
            {
                return "p50k_base";
            }
        case "code-davinci-edit-001":
        case "text-davinci-edit-001":
            {
                return "p50k_edit";
            }
        case "ada":
        case "babbage":
        case "babbage-002":
        case "code-search-ada-code-001":
        case "code-search-babbage-code-001":
        case "curie":
        case "davinci":
        case "text-ada-001":
        case "text-babbage-001":
        case "text-curie-001":
        case "text-davinci-001":
        case "text-search-ada-doc-001":
        case "text-search-babbage-doc-001":
        case "text-search-curie-doc-001":
        case "text-search-davinci-doc-001":
        case "text-similarity-ada-001":
        case "text-similarity-babbage-001":
        case "text-similarity-curie-001":
        case "text-similarity-davinci-001":
            {
                return "r50k_base";
            }
        case "gpt-3.5-turbo-instruct-0914":
        case "gpt-3.5-turbo-instruct":
        case "gpt-3.5-turbo-16k-0613":
        case "gpt-3.5-turbo-16k":
        case "gpt-3.5-turbo-0613":
        case "gpt-3.5-turbo-0301":
        case "gpt-3.5-turbo":
        case "gpt-4-32k-0613":
        case "gpt-4-32k-0314":
        case "gpt-4-32k":
        case "gpt-4-0613":
        case "gpt-4-0314":
        case "gpt-4":
        case "gpt-3.5-turbo-1106":
        case "gpt-35-turbo":
        case "gpt-4-1106-preview":
        case "gpt-4-vision-preview":
        case "gpt-3.5-turbo-0125":
        case "gpt-4-turbo":
        case "gpt-4-turbo-2024-04-09":
        case "gpt-4-turbo-preview":
        case "gpt-4-0125-preview":
        case "text-embedding-ada-002":
        case "text-embedding-3-small":
        case "text-embedding-3-large":
            {
                return "cl100k_base";
            }
        case "gpt-4o":
        case "gpt-4o-2024-05-13":
        case "gpt-4o-2024-08-06":
        case "gpt-4o-2024-11-20":
        case "gpt-4o-mini-2024-07-18":
        case "gpt-4o-mini":
        case "gpt-4o-search-preview":
        case "gpt-4o-search-preview-2025-03-11":
        case "gpt-4o-mini-search-preview":
        case "gpt-4o-mini-search-preview-2025-03-11":
        case "gpt-4o-audio-preview":
        case "gpt-4o-audio-preview-2024-12-17":
        case "gpt-4o-audio-preview-2024-10-01":
        case "gpt-4o-mini-audio-preview":
        case "gpt-4o-mini-audio-preview-2024-12-17":
        case "o1":
        case "o1-2024-12-17":
        case "o1-mini":
        case "o1-mini-2024-09-12":
        case "o1-preview":
        case "o1-preview-2024-09-12":
        case "o1-pro":
        case "o1-pro-2025-03-19":
        case "o3":
        case "o3-2025-04-16":
        case "o3-mini":
        case "o3-mini-2025-01-31":
        case "o4-mini":
        case "o4-mini-2025-04-16":
        case "chatgpt-4o-latest":
        case "gpt-4o-realtime":
        case "gpt-4o-realtime-preview-2024-10-01":
        case "gpt-4o-realtime-preview-2024-12-17":
        case "gpt-4o-mini-realtime-preview":
        case "gpt-4o-mini-realtime-preview-2024-12-17":
        case "gpt-4.1":
        case "gpt-4.1-2025-04-14":
        case "gpt-4.1-mini":
        case "gpt-4.1-mini-2025-04-14":
        case "gpt-4.1-nano":
        case "gpt-4.1-nano-2025-04-14":
        case "gpt-4.5-preview":
        case "gpt-4.5-preview-2025-02-27":
        case "gpt-5":
        case "gpt-5-2025-08-07":
        case "gpt-5-nano":
        case "gpt-5-nano-2025-08-07":
        case "gpt-5-mini":
        case "gpt-5-mini-2025-08-07":
        case "gpt-5-chat-latest":
            {
                return "o200k_base";
            }
        default:
            throw new Error("Unknown model");
    }
}
;
}),
"[project]/node_modules/js-tiktoken/dist/lite.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$tiktoken$2f$dist$2f$chunk$2d$VL2OQCWN$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-tiktoken/dist/chunk-VL2OQCWN.js [app-rsc] (ecmascript)");
;
}),
"[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */ __turbopack_context__.s([
    "BlockReason",
    ()=>BlockReason,
    "ChatSession",
    ()=>ChatSession,
    "DynamicRetrievalMode",
    ()=>DynamicRetrievalMode,
    "ExecutableCodeLanguage",
    ()=>ExecutableCodeLanguage,
    "FinishReason",
    ()=>FinishReason,
    "FunctionCallingMode",
    ()=>FunctionCallingMode,
    "GenerativeModel",
    ()=>GenerativeModel,
    "GoogleGenerativeAI",
    ()=>GoogleGenerativeAI,
    "GoogleGenerativeAIAbortError",
    ()=>GoogleGenerativeAIAbortError,
    "GoogleGenerativeAIError",
    ()=>GoogleGenerativeAIError,
    "GoogleGenerativeAIFetchError",
    ()=>GoogleGenerativeAIFetchError,
    "GoogleGenerativeAIRequestInputError",
    ()=>GoogleGenerativeAIRequestInputError,
    "GoogleGenerativeAIResponseError",
    ()=>GoogleGenerativeAIResponseError,
    "HarmBlockThreshold",
    ()=>HarmBlockThreshold,
    "HarmCategory",
    ()=>HarmCategory,
    "HarmProbability",
    ()=>HarmProbability,
    "Outcome",
    ()=>Outcome,
    "POSSIBLE_ROLES",
    ()=>POSSIBLE_ROLES,
    "SchemaType",
    ()=>SchemaType,
    "TaskType",
    ()=>TaskType
]);
var SchemaType;
(function(SchemaType) {
    /** String type. */ SchemaType["STRING"] = "string";
    /** Number type. */ SchemaType["NUMBER"] = "number";
    /** Integer type. */ SchemaType["INTEGER"] = "integer";
    /** Boolean type. */ SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */ SchemaType["ARRAY"] = "array";
    /** Object type. */ SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @public
 */ var ExecutableCodeLanguage;
(function(ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */ Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Possible roles.
 * @public
 */ const POSSIBLE_ROLES = [
    "user",
    "model",
    "function",
    "system"
];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */ var HarmCategory;
(function(HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    /** Threshold is unspecified. */ HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    /** Content with NEGLIGIBLE will be allowed. */ HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    /** Content with NEGLIGIBLE and LOW will be allowed. */ HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    /** Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed. */ HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    /** All content will be allowed. */ HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */ var HarmProbability;
(function(HarmProbability) {
    /** Probability is unspecified. */ HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    /** Content has a negligible chance of being unsafe. */ HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    /** Content has a low chance of being unsafe. */ HarmProbability["LOW"] = "LOW";
    /** Content has a medium chance of being unsafe. */ HarmProbability["MEDIUM"] = "MEDIUM";
    /** Content has a high chance of being unsafe. */ HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */ var BlockReason;
(function(BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */ var FinishReason;
(function(FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Token generation stopped because the content contains forbidden terms.
    FinishReason["BLOCKLIST"] = "BLOCKLIST";
    // Token generation stopped for potentially containing prohibited content.
    FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    // Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
    FinishReason["SPII"] = "SPII";
    // The function call generated by the model is invalid.
    FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */ var TaskType;
(function(TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */ var FunctionCallingMode;
(function(FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */ var DynamicRetrievalMode;
(function(DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Basic error type for this SDK.
 * @public
 */ class GoogleGenerativeAIError extends Error {
    constructor(message){
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */ class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */ class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails){
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */ class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * Error thrown when a request is aborted, either due to a timeout or
 * intentional cancellation by the user.
 * @public
 */ class GoogleGenerativeAIAbortError extends GoogleGenerativeAIError {
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */ const PACKAGE_VERSION = "0.24.1";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function(Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions){
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */ function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            } catch (e) {
                throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()){
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            } else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), {
            method: "POST",
            headers: await getHeaders(url),
            body
        })
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, // Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    } catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (err.name === "AbortError") {
        err = new GoogleGenerativeAIAbortError(`Request aborted when fetching ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    } else if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    } catch (e) {
    // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */ function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            setTimeout(()=>controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", ()=>{
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */ function addHelpers(response) {
    response.text = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */ response.functionCall = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` + `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */ function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    } else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */ function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    } else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE
];
function hadBadFinishReason(candidate) {
    return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */ function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
        fatal: true
    }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while(true){
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */ function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start (controller) {
            let currentText = "";
            return pump();
            //TURBOPACK unreachable
            ;
            function pump() {
                return reader.read().then(({ value, done })=>{
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while(match){
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        } catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                }).catch((e)=>{
                    let err = e;
                    err.stack = e.stack;
                    if (err.name === "AbortError") {
                        err = new GoogleGenerativeAIAbortError("Request aborted when reading from the stream");
                    } else {
                        err = new GoogleGenerativeAIError("Error reading from the stream");
                    }
                    throw err;
                });
            }
        }
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */ function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
    };
    for (const response of responses){
        if (response.candidates) {
            let candidateIndex = 0;
            for (const candidate of response.candidates){
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[candidateIndex]) {
                    aggregatedResponse.candidates[candidateIndex] = {
                        index: candidateIndex
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[candidateIndex].citationMetadata = candidate.citationMetadata;
                aggregatedResponse.candidates[candidateIndex].groundingMetadata = candidate.groundingMetadata;
                aggregatedResponse.candidates[candidateIndex].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[candidateIndex].finishMessage = candidate.finishMessage;
                aggregatedResponse.candidates[candidateIndex].safetyRatings = candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */ if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[candidateIndex].content) {
                        aggregatedResponse.candidates[candidateIndex].content = {
                            role: candidate.content.role || "user",
                            parts: []
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts){
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[candidateIndex].content.parts.push(newPart);
                    }
                }
            }
            candidateIndex++;
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse
    };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    } else if (typeof input === "string") {
        return {
            role: "system",
            parts: [
                {
                    text: input
                }
            ]
        };
    } else if (input.text) {
        return {
            role: "system",
            parts: [
                input
            ]
        };
    } else if (input.parts) {
        if (!input.role) {
            return {
                role: "system",
                parts: input.parts
            };
        } else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [
            {
                text: request
            }
        ];
    } else {
        for (const partOrString of request){
            if (typeof partOrString === "string") {
                newParts.push({
                    text: partOrString
                });
            } else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */ function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = {
        role: "user",
        parts: []
    };
    const functionContent = {
        role: "function",
        parts: []
    };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts){
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        } else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: []
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    } else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [
            content
        ];
    }
    return {
        generateContentRequest: formattedGenerateContentRequest
    };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = {
            contents: [
                content
            ]
        };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return {
            content
        };
    }
    return params;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult"
];
const VALID_PARTS_PER_ROLE = {
    user: [
        "text",
        "inlineData"
    ],
    function: [
        "functionResponse"
    ],
    model: [
        "text",
        "functionCall",
        "executableCode",
        "codeExecutionResult"
    ],
    // System instructions shouldn't be in history anyway.
    system: [
        "text"
    ]
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history){
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0
        };
        for (const part of parts){
            for (const key of VALID_PART_FIELDS){
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS){
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}
/**
 * Returns true if the response is valid (could be appended to the history), flase otherwise.
 */ function isValidResponse(response) {
    var _a;
    if (response.candidates === undefined || response.candidates.length === 0) {
        return false;
    }
    const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
    if (content === undefined) {
        return false;
    }
    if (content.parts === undefined || content.parts.length === 0) {
        return false;
    }
    for (const part of content.parts){
        if (part === undefined || Object.keys(part).length === 0) {
            return false;
        }
        if (part.text !== undefined && part.text === "") {
            return false;
        }
    }
    return true;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do not log a message for this error.
 */ const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */ class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}){
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */ async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions)).then((result)=>{
            var _a;
            if (isValidResponse(result.response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        }).catch((e)=>{
            // Resets _sendPromise to avoid subsequent calls failing and throw error.
            this._sendPromise = Promise.resolve();
            throw e;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>streamPromise)// This must be handled to avoid unhandled rejection, but jump
        // to the final catch block with a label to not log this error.
        .catch((_ignored)=>{
            throw new Error(SILENT_ERROR);
        }).then((streamResult)=>streamResult.response).then((response)=>{
            if (isValidResponse(response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        }).catch((e)=>{
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request)=>{
        return Object.assign(Object.assign({}, request), {
            model
        });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
        requests: requestsWithModel
    }), requestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Class for generative model APIs.
 * @public
 */ class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}){
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        } else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */ startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Top-level class for this SDK
 * @public
 */ class GoogleGenerativeAI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */ getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` + `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */ getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */ const disallowedDuplicates = [
            "model",
            "systemInstruction"
        ];
        for (const key of disallowedDuplicates){
            if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` + ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
            model: cachedContent.model,
            tools: cachedContent.tools,
            toolConfig: cachedContent.toolConfig,
            systemInstruction: cachedContent.systemInstruction,
            cachedContent
        });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@langchain/textsplitters/dist/text_splitter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterTextSplitter",
    ()=>CharacterTextSplitter,
    "LatexTextSplitter",
    ()=>LatexTextSplitter,
    "MarkdownTextSplitter",
    ()=>MarkdownTextSplitter,
    "RecursiveCharacterTextSplitter",
    ()=>RecursiveCharacterTextSplitter,
    "SupportedTextSplitterLanguages",
    ()=>SupportedTextSplitterLanguages,
    "TextSplitter",
    ()=>TextSplitter,
    "TokenTextSplitter",
    ()=>TokenTextSplitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/documents/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/documents/transformers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$document$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/documents/document.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$tiktoken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/core/dist/utils/tiktoken.js [app-rsc] (ecmascript)");
;
;
//#region src/text_splitter.ts
var TextSplitter = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseDocumentTransformer"] {
    lc_namespace = [
        "langchain",
        "document_transformers",
        "text_splitters"
    ];
    chunkSize = 1e3;
    chunkOverlap = 200;
    keepSeparator = false;
    lengthFunction;
    constructor(fields){
        super(fields);
        this.chunkSize = fields?.chunkSize ?? this.chunkSize;
        this.chunkOverlap = fields?.chunkOverlap ?? this.chunkOverlap;
        this.keepSeparator = fields?.keepSeparator ?? this.keepSeparator;
        this.lengthFunction = fields?.lengthFunction ?? ((text)=>text.length);
        if (this.chunkOverlap >= this.chunkSize) throw new Error("Cannot have chunkOverlap >= chunkSize");
    }
    async transformDocuments(documents, chunkHeaderOptions = {}) {
        return this.splitDocuments(documents, chunkHeaderOptions);
    }
    splitOnSeparator(text, separator) {
        let splits;
        if (separator) if (this.keepSeparator) {
            const regexEscapedSeparator = separator.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
            splits = text.split(/* @__PURE__ */ new RegExp(`(?=${regexEscapedSeparator})`));
        } else splits = text.split(separator);
        else splits = text.split("");
        return splits.filter((s)=>s !== "");
    }
    async createDocuments(texts, metadatas = [], chunkHeaderOptions = {}) {
        const _metadatas = metadatas.length > 0 ? metadatas : [
            ...Array(texts.length)
        ].map(()=>({}));
        const { chunkHeader = "", chunkOverlapHeader = "(cont'd) ", appendChunkOverlapHeader = false } = chunkHeaderOptions;
        const documents = new Array();
        for(let i = 0; i < texts.length; i += 1){
            const text = texts[i];
            let lineCounterIndex = 1;
            let prevChunk = null;
            let indexPrevChunk = -1;
            for (const chunk of (await this.splitText(text))){
                let pageContent = chunkHeader;
                const indexChunk = text.indexOf(chunk, indexPrevChunk + 1);
                if (prevChunk === null) {
                    const newLinesBeforeFirstChunk = this.numberOfNewLines(text, 0, indexChunk);
                    lineCounterIndex += newLinesBeforeFirstChunk;
                } else {
                    const indexEndPrevChunk = indexPrevChunk + await this.lengthFunction(prevChunk);
                    if (indexEndPrevChunk < indexChunk) {
                        const numberOfIntermediateNewLines = this.numberOfNewLines(text, indexEndPrevChunk, indexChunk);
                        lineCounterIndex += numberOfIntermediateNewLines;
                    } else if (indexEndPrevChunk > indexChunk) {
                        const numberOfIntermediateNewLines = this.numberOfNewLines(text, indexChunk, indexEndPrevChunk);
                        lineCounterIndex -= numberOfIntermediateNewLines;
                    }
                    if (appendChunkOverlapHeader) pageContent += chunkOverlapHeader;
                }
                const newLinesCount = this.numberOfNewLines(chunk);
                const loc = _metadatas[i].loc && typeof _metadatas[i].loc === "object" ? {
                    ..._metadatas[i].loc
                } : {};
                loc.lines = {
                    from: lineCounterIndex,
                    to: lineCounterIndex + newLinesCount
                };
                const metadataWithLinesNumber = {
                    ..._metadatas[i],
                    loc
                };
                pageContent += chunk;
                documents.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$documents$2f$document$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"]({
                    pageContent,
                    metadata: metadataWithLinesNumber
                }));
                lineCounterIndex += newLinesCount;
                prevChunk = chunk;
                indexPrevChunk = indexChunk;
            }
        }
        return documents;
    }
    numberOfNewLines(text, start, end) {
        const textSection = text.slice(start, end);
        return (textSection.match(/\n/g) || []).length;
    }
    async splitDocuments(documents, chunkHeaderOptions = {}) {
        const selectedDocuments = documents.filter((doc)=>doc.pageContent !== void 0);
        const texts = selectedDocuments.map((doc)=>doc.pageContent);
        const metadatas = selectedDocuments.map((doc)=>doc.metadata);
        return this.createDocuments(texts, metadatas, chunkHeaderOptions);
    }
    joinDocs(docs, separator) {
        const text = docs.join(separator).trim();
        return text === "" ? null : text;
    }
    async mergeSplits(splits, separator) {
        const docs = [];
        const currentDoc = [];
        let total = 0;
        for (const d of splits){
            const _len = await this.lengthFunction(d);
            if (total + _len + currentDoc.length * separator.length > this.chunkSize) {
                if (total > this.chunkSize) console.warn(`Created a chunk of size ${total}, +
which is longer than the specified ${this.chunkSize}`);
                if (currentDoc.length > 0) {
                    const doc$1 = this.joinDocs(currentDoc, separator);
                    if (doc$1 !== null) docs.push(doc$1);
                    while(total > this.chunkOverlap || total + _len + currentDoc.length * separator.length > this.chunkSize && total > 0){
                        total -= await this.lengthFunction(currentDoc[0]);
                        currentDoc.shift();
                    }
                }
            }
            currentDoc.push(d);
            total += _len;
        }
        const doc = this.joinDocs(currentDoc, separator);
        if (doc !== null) docs.push(doc);
        return docs;
    }
};
var CharacterTextSplitter = class extends TextSplitter {
    static lc_name() {
        return "CharacterTextSplitter";
    }
    separator = "\n\n";
    constructor(fields){
        super(fields);
        this.separator = fields?.separator ?? this.separator;
    }
    async splitText(text) {
        const splits = this.splitOnSeparator(text, this.separator);
        return this.mergeSplits(splits, this.keepSeparator ? "" : this.separator);
    }
};
const SupportedTextSplitterLanguages = [
    "cpp",
    "go",
    "java",
    "js",
    "php",
    "proto",
    "python",
    "rst",
    "ruby",
    "rust",
    "scala",
    "swift",
    "markdown",
    "latex",
    "html",
    "sol"
];
var RecursiveCharacterTextSplitter = class RecursiveCharacterTextSplitter extends TextSplitter {
    static lc_name() {
        return "RecursiveCharacterTextSplitter";
    }
    separators = [
        "\n\n",
        "\n",
        " ",
        ""
    ];
    constructor(fields){
        super(fields);
        this.separators = fields?.separators ?? this.separators;
        this.keepSeparator = fields?.keepSeparator ?? true;
    }
    async _splitText(text, separators) {
        const finalChunks = [];
        let separator = separators[separators.length - 1];
        let newSeparators;
        for(let i = 0; i < separators.length; i += 1){
            const s = separators[i];
            if (s === "") {
                separator = s;
                break;
            }
            if (text.includes(s)) {
                separator = s;
                newSeparators = separators.slice(i + 1);
                break;
            }
        }
        const splits = this.splitOnSeparator(text, separator);
        let goodSplits = [];
        const _separator = this.keepSeparator ? "" : separator;
        for (const s of splits)if (await this.lengthFunction(s) < this.chunkSize) goodSplits.push(s);
        else {
            if (goodSplits.length) {
                const mergedText = await this.mergeSplits(goodSplits, _separator);
                finalChunks.push(...mergedText);
                goodSplits = [];
            }
            if (!newSeparators) finalChunks.push(s);
            else {
                const otherInfo = await this._splitText(s, newSeparators);
                finalChunks.push(...otherInfo);
            }
        }
        if (goodSplits.length) {
            const mergedText = await this.mergeSplits(goodSplits, _separator);
            finalChunks.push(...mergedText);
        }
        return finalChunks;
    }
    async splitText(text) {
        return this._splitText(text, this.separators);
    }
    static fromLanguage(language, options) {
        return new RecursiveCharacterTextSplitter({
            ...options,
            separators: RecursiveCharacterTextSplitter.getSeparatorsForLanguage(language)
        });
    }
    static getSeparatorsForLanguage(language) {
        if (language === "cpp") return [
            "\nclass ",
            "\nvoid ",
            "\nint ",
            "\nfloat ",
            "\ndouble ",
            "\nif ",
            "\nfor ",
            "\nwhile ",
            "\nswitch ",
            "\ncase ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "go") return [
            "\nfunc ",
            "\nvar ",
            "\nconst ",
            "\ntype ",
            "\nif ",
            "\nfor ",
            "\nswitch ",
            "\ncase ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "java") return [
            "\nclass ",
            "\npublic ",
            "\nprotected ",
            "\nprivate ",
            "\nstatic ",
            "\nif ",
            "\nfor ",
            "\nwhile ",
            "\nswitch ",
            "\ncase ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "js") return [
            "\nfunction ",
            "\nconst ",
            "\nlet ",
            "\nvar ",
            "\nclass ",
            "\nif ",
            "\nfor ",
            "\nwhile ",
            "\nswitch ",
            "\ncase ",
            "\ndefault ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "php") return [
            "\nfunction ",
            "\nclass ",
            "\nif ",
            "\nforeach ",
            "\nwhile ",
            "\ndo ",
            "\nswitch ",
            "\ncase ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "proto") return [
            "\nmessage ",
            "\nservice ",
            "\nenum ",
            "\noption ",
            "\nimport ",
            "\nsyntax ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "python") return [
            "\nclass ",
            "\ndef ",
            "\n	def ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "rst") return [
            "\n===\n",
            "\n---\n",
            "\n***\n",
            "\n.. ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "ruby") return [
            "\ndef ",
            "\nclass ",
            "\nif ",
            "\nunless ",
            "\nwhile ",
            "\nfor ",
            "\ndo ",
            "\nbegin ",
            "\nrescue ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "rust") return [
            "\nfn ",
            "\nconst ",
            "\nlet ",
            "\nif ",
            "\nwhile ",
            "\nfor ",
            "\nloop ",
            "\nmatch ",
            "\nconst ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "scala") return [
            "\nclass ",
            "\nobject ",
            "\ndef ",
            "\nval ",
            "\nvar ",
            "\nif ",
            "\nfor ",
            "\nwhile ",
            "\nmatch ",
            "\ncase ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "swift") return [
            "\nfunc ",
            "\nclass ",
            "\nstruct ",
            "\nenum ",
            "\nif ",
            "\nfor ",
            "\nwhile ",
            "\ndo ",
            "\nswitch ",
            "\ncase ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "markdown") return [
            "\n## ",
            "\n### ",
            "\n#### ",
            "\n##### ",
            "\n###### ",
            "```\n\n",
            "\n\n***\n\n",
            "\n\n---\n\n",
            "\n\n___\n\n",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "latex") return [
            "\n\\chapter{",
            "\n\\section{",
            "\n\\subsection{",
            "\n\\subsubsection{",
            "\n\\begin{enumerate}",
            "\n\\begin{itemize}",
            "\n\\begin{description}",
            "\n\\begin{list}",
            "\n\\begin{quote}",
            "\n\\begin{quotation}",
            "\n\\begin{verse}",
            "\n\\begin{verbatim}",
            "\n\\begin{align}",
            "$$",
            "$",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else if (language === "html") return [
            "<body>",
            "<div>",
            "<p>",
            "<br>",
            "<li>",
            "<h1>",
            "<h2>",
            "<h3>",
            "<h4>",
            "<h5>",
            "<h6>",
            "<span>",
            "<table>",
            "<tr>",
            "<td>",
            "<th>",
            "<ul>",
            "<ol>",
            "<header>",
            "<footer>",
            "<nav>",
            "<head>",
            "<style>",
            "<script>",
            "<meta>",
            "<title>",
            " ",
            ""
        ];
        else if (language === "sol") return [
            "\npragma ",
            "\nusing ",
            "\ncontract ",
            "\ninterface ",
            "\nlibrary ",
            "\nconstructor ",
            "\ntype ",
            "\nfunction ",
            "\nevent ",
            "\nmodifier ",
            "\nerror ",
            "\nstruct ",
            "\nenum ",
            "\nif ",
            "\nfor ",
            "\nwhile ",
            "\ndo while ",
            "\nassembly ",
            "\n\n",
            "\n",
            " ",
            ""
        ];
        else throw new Error(`Language ${language} is not supported.`);
    }
};
/**
* Implementation of splitter which looks at tokens.
*/ var TokenTextSplitter = class extends TextSplitter {
    static lc_name() {
        return "TokenTextSplitter";
    }
    encodingName;
    allowedSpecial;
    disallowedSpecial;
    tokenizer;
    constructor(fields){
        super(fields);
        this.encodingName = fields?.encodingName ?? "gpt2";
        this.allowedSpecial = fields?.allowedSpecial ?? [];
        this.disallowedSpecial = fields?.disallowedSpecial ?? "all";
    }
    async splitText(text) {
        if (!this.tokenizer) this.tokenizer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$core$2f$dist$2f$utils$2f$tiktoken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEncoding"])(this.encodingName);
        const splits = [];
        const input_ids = this.tokenizer.encode(text, this.allowedSpecial, this.disallowedSpecial);
        let start_idx = 0;
        while(start_idx < input_ids.length){
            if (start_idx > 0) start_idx -= this.chunkOverlap;
            const end_idx = Math.min(start_idx + this.chunkSize, input_ids.length);
            const chunk_ids = input_ids.slice(start_idx, end_idx);
            splits.push(this.tokenizer.decode(chunk_ids));
            start_idx = end_idx;
        }
        return splits;
    }
};
var MarkdownTextSplitter = class extends RecursiveCharacterTextSplitter {
    constructor(fields){
        super({
            ...fields,
            separators: RecursiveCharacterTextSplitter.getSeparatorsForLanguage("markdown")
        });
    }
};
var LatexTextSplitter = class extends RecursiveCharacterTextSplitter {
    constructor(fields){
        super({
            ...fields,
            separators: RecursiveCharacterTextSplitter.getSeparatorsForLanguage("latex")
        });
    }
};
;
 //# sourceMappingURL=text_splitter.js.map
}),
"[project]/node_modules/@langchain/textsplitters/dist/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/textsplitters/dist/text_splitter.js [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/Exception.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* biome-ignore-all lint/suspicious/noExplicitAny: underline-type */ /**
 * Error thrown when the parsed data is not a valid PDF document.
 *
 * Use this exception to signal that the input cannot be interpreted as a PDF
 * (corrupt file, invalid header, etc.).
 *
 * @public
 */ __turbopack_context__.s([
    "AbortException",
    ()=>AbortException,
    "FormatError",
    ()=>FormatError,
    "InvalidPDFException",
    ()=>InvalidPDFException,
    "PasswordException",
    ()=>PasswordException,
    "ResponseException",
    ()=>ResponseException,
    "UnknownErrorException",
    ()=>UnknownErrorException,
    "getException",
    ()=>getException
]);
class InvalidPDFException extends Error {
    /**
     * Create a new InvalidPDFException.
     * @param message - Optional error message.
     * @param cause - Optional underlying cause (preserved on modern runtimes).
     */ constructor(message, cause){
        if (cause !== undefined) {
            // Use modern ErrorOptions to attach cause when supported
            super(message ?? 'Invalid PDF', {
                cause
            });
        } else {
            super(message ?? 'Invalid PDF');
        }
        this.name = 'InvalidPDFException';
        // Fix TS/ES prototype chain (required)
        Object.setPrototypeOf(this, InvalidPDFException.prototype);
        // preserve native stack trace where available
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidPDFException);
        }
    // If you need to support older TS/targets that don't accept ErrorOptions,
    // replace the above super(...) with super(...); and uncomment:
    // if (cause !== undefined) (this as any).cause = cause;
    }
}
class PasswordException extends Error {
    /**
     * Create a new PasswordException.
     * @param message - Optional error message.
     * @param cause - Optional underlying cause.
     */ constructor(message, cause){
        if (cause !== undefined) {
            super(message ?? 'Password required or incorrect', {
                cause
            });
        } else {
            super(message ?? 'Password required or incorrect');
        }
        this.name = 'PasswordException';
        Object.setPrototypeOf(this, PasswordException.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, PasswordException);
        }
    // Fallback for older targets: if needed use (this as any).cause = cause;
    }
}
class FormatError extends Error {
    /**
     * Create a new FormatError.
     * @param message - Optional message describing the format problem.
     * @param cause - Optional underlying cause.
     */ constructor(message, cause){
        if (cause !== undefined) {
            super(message ?? 'PDF format error', {
                cause
            });
        } else {
            super(message ?? 'PDF format error');
        }
        this.name = 'FormatError';
        Object.setPrototypeOf(this, FormatError.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, FormatError);
        }
    // Fallback for older targets: if needed use (this as any).cause = cause;
    }
}
class UnknownErrorException extends Error {
    /**
     * Create a new UnknownErrorException.
     * @param message - Optional error message.
     * @param details - Optional additional details from the PDF library.
     * @param cause - Optional underlying cause.
     */ constructor(message, details, cause){
        if (cause !== undefined) {
            super(message ?? 'Unknown error', {
                cause
            });
        } else {
            super(message ?? 'Unknown error');
        }
        this.name = 'UnknownErrorException';
        Object.setPrototypeOf(this, UnknownErrorException.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, UnknownErrorException);
        }
        // additional info field from pdf.mjs
        this.details = details;
    }
}
class ResponseException extends Error {
    /**
     * Create a new ResponseException.
     * @param message - Optional error message.
     * @param status - Optional numeric HTTP/status code.
     * @param missing - Optional field describing missing resources.
     * @param cause - Optional underlying cause.
     */ constructor(message, status, missing, cause){
        if (cause !== undefined) {
            super(message ?? 'Response error', {
                cause
            });
        } else {
            super(message ?? 'Response error');
        }
        this.name = 'ResponseException';
        Object.setPrototypeOf(this, ResponseException.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, ResponseException);
        }
        // fields from pdf.mjs
        this.status = status;
        this.missing = missing;
    }
}
class AbortException extends Error {
    /**
     * Create a new AbortException.
     * @param message - Optional error message.
     * @param cause - Optional underlying cause.
     */ constructor(message, cause){
        if (cause !== undefined) {
            super(message ?? 'Operation aborted', {
                cause
            });
        } else {
            super(message ?? 'Operation aborted');
        }
        this.name = 'AbortException';
        Object.setPrototypeOf(this, AbortException.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, AbortException);
        }
    }
}
function getException(error) {
    if (error instanceof Error) {
        // preserve original error (stack) when not remapping
        switch(error.name){
            case 'InvalidPDFException':
                return new InvalidPDFException(error.message, error);
            case 'PasswordException':
                return new PasswordException(error.message, error);
            case 'FormatError':
                return new FormatError(error.message, error);
            case 'UnknownErrorException':
                // preserve details if present on original
                return new UnknownErrorException(error.message, error.details, error);
            case 'ResponseException':
                return new ResponseException(error.message, error.status, error.missing, error);
            case 'AbortException':
                return new AbortException(error.message, error);
            // add other mappings as needed
            default:
                return error;
        }
    }
    // non-Error value -> convert to Error
    return new Error(String(error));
} //# sourceMappingURL=Exception.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shape",
    ()=>Shape
]);
class Shape {
    static tolerance = 2;
    static applyTransform(p, m) {
        const xt = p[0] * m[0] + p[1] * m[2] + m[4];
        const yt = p[0] * m[1] + p[1] * m[3] + m[5];
        return [
            xt,
            yt
        ];
    }
} //# sourceMappingURL=Shape.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
;
class Point extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"] {
    x;
    y;
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }
    equal(point) {
        return point.x === this.x && point.y === this.y;
    }
    transform(matrix) {
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].applyTransform([
            this.x,
            this.y
        ], matrix);
        this.x = p[0];
        this.y = p[1];
        return this;
    }
} //# sourceMappingURL=Point.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Line",
    ()=>Line,
    "LineDirection",
    ()=>LineDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
;
;
var LineDirection;
(function(LineDirection) {
    LineDirection[LineDirection["None"] = 0] = "None";
    LineDirection[LineDirection["Horizontal"] = 1] = "Horizontal";
    LineDirection[LineDirection["Vertical"] = 2] = "Vertical";
})(LineDirection || (LineDirection = {}));
class Line extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"] {
    from;
    to;
    direction = LineDirection.None;
    length = 0;
    intersections = [];
    gaps = [];
    constructor(from, to){
        super();
        this.from = from;
        this.to = to;
        this.init();
    }
    init() {
        let from = this.from;
        let to = this.to;
        if (Math.abs(from.y - to.y) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
            this.direction = LineDirection.Horizontal;
            to.y = from.y;
            if (from.x > to.x) {
                const temp = from;
                from = to;
                to = temp;
            }
            this.length = to.x - from.x;
        } else if (Math.abs(from.x - to.x) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
            this.direction = LineDirection.Vertical;
            to.x = from.x;
            if (from.y > to.y) {
                const temp = from;
                from = to;
                to = temp;
            }
            this.length = to.y - from.y;
        }
        this.from = from;
        this.to = to;
    }
    _valid = undefined;
    get valid() {
        if (this._valid === undefined) {
            this._valid = this.direction !== LineDirection.None && this.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance;
        }
        return this._valid;
    }
    get normalized() {
        if (this.direction === LineDirection.Horizontal) {
            return new Line(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.from.x - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance, this.from.y), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.to.x + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance, this.from.y));
        } else if (this.direction === LineDirection.Vertical) {
            return new Line(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.from.x, this.from.y - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.from.x, this.to.y + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance));
        }
        return this;
    }
    addGap(line) {
        this.gaps.push(line);
    }
    containsPoint(p) {
        if (this.direction === LineDirection.Vertical) {
            return this.from.x === p.x && p.y >= this.from.y && p.y <= this.to.y;
        } else if (this.direction === LineDirection.Horizontal) {
            return this.from.y === p.y && p.x >= this.from.x && p.x <= this.to.x;
        }
        return false;
    }
    // // todo implement
    // public containsLine(l:Line):boolean{
    //     if(this.direction === LineDirection.Vertical && l.direction === LineDirection.Vertical){
    //         return this.from.x === l.from.x
    //     }
    //     else if(this.direction === LineDirection.Horizontal && l.direction === LineDirection.Horizontal){
    //         return this.from.y === l.from.y
    //     }
    //     return false
    // }
    addIntersectionPoint(point) {
        for (const intPoint of this.intersections){
            if (intPoint.equal(point)) return;
        }
        this.intersections.push(point);
    }
    intersection(line) {
        let result;
        if (!this.valid || !line.valid) {
            return result;
        }
        const thisNormalized = this.normalized;
        const lineNormalized = line.normalized;
        if (this.direction === LineDirection.Horizontal && line.direction === LineDirection.Vertical) {
            const x = lineNormalized.from.x;
            const y = thisNormalized.from.y;
            const isOk = x > thisNormalized.from.x && x < thisNormalized.to.x && y > lineNormalized.from.y && y < lineNormalized.to.y;
            if (isOk) {
                const intPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](x, y);
                this.addIntersectionPoint(intPoint);
                line.addIntersectionPoint(intPoint);
                result = intPoint;
            }
        } else if (this.direction === LineDirection.Vertical && line.direction === LineDirection.Horizontal) {
            const x = thisNormalized.from.x;
            const y = lineNormalized.from.y;
            const isOk = x > lineNormalized.from.x && x < lineNormalized.to.x && y > thisNormalized.from.y && y < thisNormalized.to.y;
            if (isOk) {
                const intPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](x, y);
                this.addIntersectionPoint(intPoint);
                line.addIntersectionPoint(intPoint);
                result = intPoint;
            }
        }
        // if(result){
        //     for (const gapLine of this.gaps) {
        //         if(gapLine.containsPoint(result)) return undefined
        //     }
        //
        //     for (const gapLine of line.gaps) {
        //         if(gapLine.containsPoint(result)) return undefined
        //     }
        // }
        return result;
    }
    transform(matrix) {
        const p1 = this.from.transform(matrix);
        const p2 = this.to.transform(matrix);
        const x = Math.min(p1.x, p2.x);
        const y = Math.min(p1.y, p2.y);
        const width = Math.abs(p1.x - p2.x);
        const height = Math.abs(p1.y - p2.y);
        this.from = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](x, y);
        this.to = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](x + width, y + height);
        this.init();
        return this;
    }
} //# sourceMappingURL=Line.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/TableData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableData",
    ()=>TableData
]);
class TableData {
    minXY;
    maxXY;
    rows;
    rowPivots;
    colPivots;
    constructor(minXY, maxXY, rowPivots, colPivots){
        this.minXY = minXY;
        this.maxXY = maxXY;
        this.rows = [];
        this.rowPivots = rowPivots;
        this.colPivots = colPivots;
    }
    findCell(x, y) {
        if (x >= this.minXY.x && y >= this.minXY.y && x <= this.maxXY.x && y <= this.maxXY.y) {
            for (const row of this.rows){
                for (const cell of row){
                    if (cell.minXY.x <= x && cell.minXY.y <= y && cell.maxXY.x >= x && cell.maxXY.y >= y) {
                        return cell;
                    }
                }
            }
        }
        return undefined;
    }
    get cellCount() {
        return this.rows.reduce((acc, row)=>acc + row.length, 0);
    }
    get rowCount() {
        return this.rows.length;
    }
    check() {
        // const cellCounts:Array<number> = []
        //
        // for (const row of this.rows) {
        //     let cellNum = 0
        //     for (const cell of row) {
        //         cellNum += cell.colspan || 1
        //     }
        //     cellCounts.push(cellNum)
        // }
        //
        // for (let i = 1; i < cellCounts.length; i++) {
        //     if (cellCounts[i] !== cellCounts[i - 1]) {
        //         return false
        //     }
        // }
        const virtualCellCount = (this.colPivots.length - 1) * (this.rowPivots.length - 1);
        let allCellCount = 0;
        for (const row of this.rows){
            for (const cell of row){
                const count = (cell.colspan || 1) * (cell.rowspan || 1);
                allCellCount += count;
            }
        }
        if (virtualCellCount !== allCellCount) {
            return false;
        }
        return true;
    }
    toArray() {
        const tableArr = [];
        for (const row of this.rows){
            const rowArr = [];
            for (const cell of row){
                let text = cell.text.join('');
                text = text.replace(/^[\s]+|[\s]+$/g, '');
                text = text.trim();
                rowArr.push(text);
            }
            tableArr.push(rowArr);
        }
        return tableArr;
    }
} //# sourceMappingURL=TableData.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Table.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$TableData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/TableData.js [app-rsc] (ecmascript)");
;
;
;
;
class Table {
    hLines = [];
    vLines = [];
    constructor(line){
        if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Horizontal) {
            this.hLines.push(line);
        } else if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Vertical) {
            this.vLines.push(line);
        }
    }
    get isValid() {
        return this.hLines.length + this.vLines.length > 4;
    }
    get rowPivots() {
        const rowSet = new Set();
        for (const line of this.hLines){
            rowSet.add(line.from.y);
        }
        return [
            ...rowSet
        ].sort((a, b)=>a - b);
    }
    get colPivots() {
        const colSet = new Set();
        for (const line of this.vLines){
            colSet.add(line.from.x);
        }
        return [
            ...colSet
        ].sort((a, b)=>a - b);
    }
    add(line) {
        const hasIntersection = this.intersection(line);
        if (hasIntersection) {
            if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Horizontal) {
                this.hLines.push(line);
                return true;
            } else if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Vertical) {
                this.vLines.push(line);
                return true;
            }
        }
        return false;
    }
    intersection(line) {
        let flag = false;
        if (!line.valid) return flag;
        if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Horizontal) {
            for (const vLine of this.vLines){
                const p = line.intersection(vLine);
                if (p) {
                    flag = true;
                }
            }
        } else if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Vertical) {
            for (const hLine of this.hLines){
                const p = line.intersection(hLine);
                if (p) {
                    flag = true;
                }
            }
        }
        return flag;
    }
    getSameHorizontal(line) {
        const same = [
            line
        ];
        const other = [];
        while(this.hLines.length > 0){
            const hLine = this.hLines.shift();
            if (!hLine) continue;
            if (hLine.from.y === line.from.y) {
                same.push(hLine);
            } else {
                other.push(hLine);
            }
        }
        this.hLines = other;
        return same;
    }
    getSameVertical(line) {
        const same = [
            line
        ];
        const other = [];
        while(this.vLines.length > 0){
            const vLine = this.vLines.shift();
            if (!vLine) continue;
            if (vLine.from.x === line.from.x) {
                same.push(vLine);
            } else {
                other.push(vLine);
            }
        }
        this.vLines = other;
        return same;
    }
    mergeHorizontalLines(lines) {
        lines.sort((l1, l2)=>l1.from.x - l2.from.x);
        const minX = lines[0].from.x;
        const maxX = lines[lines.length - 1].to.x;
        const resultLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](minX, lines[0].from.y), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](maxX, lines[0].from.y));
        for(let i = 1; i < lines.length; i++){
            const prevLine = lines[i - 1];
            const currLine = lines[i];
            if (Math.abs(prevLine.to.x - currLine.from.x) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
                const gapLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](prevLine.to.x, prevLine.from.y), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](currLine.from.x, currLine.from.y));
                resultLine.addGap(gapLine);
            }
        }
        return resultLine;
    }
    mergeVerticalLines(lines) {
        lines.sort((l1, l2)=>l1.from.y - l2.from.y);
        const minY = lines[0].from.y;
        const maxY = lines[lines.length - 1].to.y;
        const resultLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](lines[0].from.x, minY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](lines[0].from.x, maxY));
        for(let i = 1; i < lines.length; i++){
            const prevLine = lines[i - 1];
            const currLine = lines[i];
            if (Math.abs(prevLine.to.y - currLine.from.y) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
                const gapLine = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](prevLine.to.x, prevLine.to.y), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](prevLine.to.x, currLine.from.y));
                resultLine.addGap(gapLine);
            }
        }
        return resultLine;
    }
    normalize() {
        this.hLines = this.hLines.filter((l)=>l.intersections.length > 1);
        this.vLines = this.vLines.filter((l)=>l.intersections.length > 1);
        this.hLines.sort((l1, l2)=>l1.from.y - l2.from.y);
        this.vLines.sort((l1, l2)=>l1.from.x - l2.from.x);
        const newHLines = [];
        while(this.hLines.length > 0){
            const line = this.hLines.shift();
            if (!line) continue;
            const lines = this.getSameHorizontal(line);
            const merged = this.mergeHorizontalLines(lines);
            newHLines.push(merged);
        }
        this.hLines = newHLines;
        const newVLines = [];
        while(this.vLines.length > 0){
            const line = this.vLines.shift();
            if (!line) continue;
            const lines = this.getSameVertical(line);
            const merged = this.mergeVerticalLines(lines);
            newVLines.push(merged);
        }
        this.vLines = newVLines;
    }
    verticalExists(line, y1, y2) {
        if (line.direction !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Vertical) {
            throw new Error('Line is not vertical');
        }
        if (y1 >= y2) {
            throw new Error('y1 must be less than y2');
        }
        if (line.from.y <= y1 && line.to.y >= y2) {
            for (const gap of line.gaps){
                if (gap.from.y <= y1 && gap.to.y >= y2) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    horizontalExists(line, x1, x2) {
        if (line.direction !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Horizontal) {
            throw new Error('Line is not horizontal');
        }
        if (x1 >= x2) {
            throw new Error('x1 must be less than x2');
        }
        if (line.from.x <= x1 && line.to.x >= x2) {
            for (const gap of line.gaps){
                if (gap.from.x <= x1 && gap.to.x >= x2) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    findBottomLineIndex(h2Index, xMiddle) {
        for(let i = h2Index; i < this.hLines.length; i++){
            const hLine = this.hLines[i];
            if (hLine.from.x <= xMiddle && hLine.to.x >= xMiddle) {
                return i;
            }
        }
        return -1;
    }
    findVerticalLineIndexs(topHLine, yMiddle) {
        const result = [];
        for(let i = 0; i < this.vLines.length; i++){
            const vLine = this.vLines[i];
            if (vLine.from.y <= yMiddle && vLine.to.y >= yMiddle && topHLine.intersection(vLine)) {
                result.push(i);
            }
        }
        return result;
    }
    getRow(h1Index, h2Index, yMiddle) {
        const tableRow = [];
        //const colCount = this.vLines.length -1
        const topHLine = this.hLines[h1Index];
        const vLineIndexes = this.findVerticalLineIndexs(topHLine, yMiddle);
        for(let i = 1; i < vLineIndexes.length; i++){
            const leftVLine = this.vLines[vLineIndexes[i - 1]];
            const rightVLine = this.vLines[vLineIndexes[i]];
            const xMiddle = (leftVLine.from.x + rightVLine.from.x) / 2;
            const bottomHLineIndex = this.findBottomLineIndex(h2Index, xMiddle);
            const bottomHLine = this.hLines[bottomHLineIndex];
            // minXY: {x:leftVLine.from.x,y:topHLine.from.y},
            // maxXY: {x:rightVLine.from.x,y:bottomHLine.from.y},
            const tableCell = {
                minXY: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](leftVLine.from.x, topHLine.from.y),
                maxXY: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](rightVLine.from.x, bottomHLine.from.y),
                width: rightVLine.from.x - leftVLine.from.x,
                height: bottomHLine.from.y - topHLine.from.y,
                text: []
            };
            const colSpan = vLineIndexes[i] - vLineIndexes[i - 1];
            const rowSpan = bottomHLineIndex - h1Index;
            if (colSpan > 1) {
                tableCell.colspan = colSpan;
            }
            if (rowSpan > 1) {
                tableCell.rowspan = rowSpan;
            }
            tableRow.push(tableCell);
        }
        return tableRow;
    }
    toData() {
        const rowPivots = this.rowPivots;
        const colPivots = this.colPivots;
        const minXY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](colPivots[0], rowPivots[0]);
        const maxXY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](colPivots[colPivots.length - 1], rowPivots[rowPivots.length - 1]);
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$TableData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableData"](minXY, maxXY, rowPivots, colPivots);
        for(let h1 = 1; h1 < this.hLines.length; h1++){
            const prevHLine = this.hLines[h1 - 1];
            const currHLine = this.hLines[h1];
            const YMiddle = (prevHLine.from.y + currHLine.from.y) / 2;
            const rowData = this.getRow(h1 - 1, h1, YMiddle);
            result.rows.push(rowData);
        }
        return result;
    }
} //# sourceMappingURL=Table.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/LineStore.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineStore",
    ()=>LineStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Table.js [app-rsc] (ecmascript)");
;
;
;
;
class LineStore {
    hLines = [];
    vLines = [];
    add(line) {
        if (line.valid) {
            if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Horizontal) {
                this.hLines.push(line);
            } else if (line.direction === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"].Vertical) {
                this.vLines.push(line);
            }
        }
    }
    addRectangle(rect) {
        for (const line of rect.getLines()){
            this.add(line);
        }
    }
    getTableData() {
        const result = [];
        const tables = this.getTables();
        for (const table of tables){
            const data = table.toData();
            if (data) {
                result.push(data);
            }
        }
        return result;
    }
    getTables() {
        const result = [];
        while(this.hLines.length !== 0){
            const hLine = this.hLines.shift();
            if (!hLine) continue;
            const filled = this.tryFill(result, hLine);
            if (filled) continue;
            const table = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"](hLine);
            this.fillTable(table);
            result.push(table);
        }
        while(this.vLines.length !== 0){
            const vLine = this.vLines.shift();
            if (!vLine) continue;
            const filled = this.tryFill(result, vLine);
            if (filled) continue;
            const table = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"](vLine);
            this.fillTable(table);
            result.push(table);
        }
        const validTables = result.filter((t)=>t.isValid);
        for (const table of validTables){
            table.normalize();
        }
        return validTables;
    }
    normalize() {
        this.normalizeHorizontal();
        this.normalizeVertical();
    }
    normalizeHorizontal() {
        this.hLines.sort((l1, l2)=>l1.from.y - l2.from.y);
        const newLines = [];
        let sameY = [];
        for (const line of this.hLines){
            if (sameY.length === 0) {
                sameY.push(line);
            } else if (Math.abs(sameY[0]?.from.y - line.from.y) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
                sameY.push(line);
            } else {
                const merged = this.margeHorizontalLines(sameY);
                newLines.push(...merged);
                sameY = [
                    line
                ];
            }
        }
        if (sameY.length > 0) {
            const merged = this.margeHorizontalLines(sameY);
            newLines.push(...merged);
        }
        this.hLines = newLines;
    }
    normalizeVertical() {
        this.vLines.sort((l1, l2)=>l1.from.x - l2.from.x);
        const newLines = [];
        let sameX = [];
        for (const line of this.vLines){
            if (sameX.length === 0) {
                sameX.push(line);
            } else if (Math.abs(sameX[0]?.from.x - line.from.x) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
                sameX.push(line);
            } else {
                const merged = this.margeVerticalLines(sameX);
                newLines.push(...merged);
                sameX = [
                    line
                ];
            }
        }
        if (sameX.length > 0) {
            const merged = this.margeVerticalLines(sameX);
            newLines.push(...merged);
        }
        this.vLines = newLines;
    }
    fillTable(table) {
        const newVLines = [];
        const newHLines = [];
        for (const vLine of this.vLines){
            if (!table.add(vLine)) {
                newVLines.push(vLine);
            }
        }
        for (const hLine of this.hLines){
            if (!table.add(hLine)) {
                newHLines.push(hLine);
            }
        }
        this.hLines = newHLines;
        this.vLines = newVLines;
    }
    tryFill(tables, line) {
        for (const table of tables){
            if (table.add(line)) {
                this.fillTable(table);
                return true;
            }
        }
        return false;
    }
    margeHorizontalLines(sameYLines) {
        const result = [];
        sameYLines.sort((l1, l2)=>l1.from.x - l2.from.x);
        const sameY = sameYLines[0]?.from.y;
        if (sameY === undefined) return result;
        let minX = Number.MAX_SAFE_INTEGER;
        let maxX = Number.MIN_SAFE_INTEGER;
        for (const line of sameYLines){
            if (line.from.x - maxX < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
                if (line.from.x < minX) {
                    minX = line.from.x;
                }
                if (line.to.x > maxX) {
                    maxX = line.to.x;
                }
            } else {
                if (maxX > minX) {
                    result.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](minX, sameY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](maxX, sameY)));
                }
                minX = line.from.x;
                maxX = line.to.x;
            }
        }
        const last = result[result.length - 1];
        if (last) {
            if (last.from.x !== minX && last.to.x !== maxX) {
                result.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](minX, sameY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](maxX, sameY)));
            }
        } else {
            result.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](minX, sameY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](maxX, sameY)));
        }
        return result;
    }
    margeVerticalLines(sameXLines) {
        const result = [];
        sameXLines.sort((l1, l2)=>l1.from.y - l2.from.y);
        const sameX = sameXLines[0]?.from.x;
        if (sameX === undefined) return result;
        let minY = Number.MAX_SAFE_INTEGER;
        let maxY = Number.MIN_SAFE_INTEGER;
        for (const line of sameXLines){
            if (line.from.y - maxY < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].tolerance) {
                if (line.from.y < minY) {
                    minY = line.from.y;
                }
                if (line.to.y > maxY) {
                    maxY = line.to.y;
                }
            } else {
                if (maxY > minY) {
                    result.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](sameX, minY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](sameX, maxY)));
                }
                minY = line.from.y;
                maxY = line.to.y;
            }
        }
        const last = result[result.length - 1];
        if (last) {
            if (last.from.y !== minY && last.to.y !== maxY) {
                result.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](sameX, minY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](sameX, maxY)));
            }
        } else {
            result.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](sameX, minY), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](sameX, maxY)));
        }
        return result;
    }
} //# sourceMappingURL=LineStore.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Rectangle.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rectangle",
    ()=>Rectangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
;
;
;
class Rectangle extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"] {
    from;
    width;
    height;
    constructor(from, width, height){
        super();
        this.from = from;
        this.width = width;
        this.height = height;
    }
    get to() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.from.x + this.width, this.from.y + this.height);
    }
    getLines() {
        const to = this.to;
        const lines = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](this.from, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](to.x, this.from.y)),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](this.from, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.from.x, to.y)),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](to.x, this.from.y), to),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](this.from.x, to.y), to)
        ];
        return lines.filter((l)=>l.valid);
    }
    transform(matrix) {
        const p1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].applyTransform([
            this.from.x,
            this.from.y
        ], matrix);
        const p2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"].applyTransform([
            this.from.x + this.width,
            this.from.y + this.height
        ], matrix);
        const x = Math.min(p1[0], p2[0]);
        const y = Math.min(p1[1], p2[1]);
        const width = Math.abs(p1[0] - p2[0]);
        const height = Math.abs(p1[1] - p2[1]);
        this.from = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](x, y);
        this.width = width;
        this.height = height;
        return this;
    }
} //# sourceMappingURL=Rectangle.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$LineStore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/LineStore.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Rectangle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Rectangle.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Table.js [app-rsc] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/ImageResult.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @public
 * ImageResult
 * Helper container for extracted images grouped per page.
 */ __turbopack_context__.s([
    "ImageResult",
    ()=>ImageResult
]);
class ImageResult {
    pages = [];
    total = 0;
    getPageImage(num, name) {
        for (const pageData of this.pages){
            if (pageData.pageNumber === num) {
                for (const img of pageData.images){
                    if (img.name === name) {
                        return img;
                    }
                }
            }
        }
        return null;
    }
    constructor(total){
        this.total = total;
    }
} //# sourceMappingURL=ImageResult.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/InfoResult.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoResult",
    ()=>InfoResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-rsc] (ecmascript)");
;
const XMP_DATE_PROPERTIES = [
    'xmp:createdate',
    'xmp:modifydate',
    'xmp:metadatadate',
    'xap:createdate',
    'xap:modifydate',
    'xap:metadatadate'
];
class InfoResult {
    // Total number of pages in the PDF document (count of physical pages).
    total;
    /**
     * The PDF 'Info' dictionary. Typical fields include title, author, subject,
     * Creator, Producer and Creation/Modification dates. The exact structure is
     * determined by the PDF and as returned by PDF.js.
     */ // biome-ignore lint/suspicious/noExplicitAny: <unsupported underline type>
    info;
    // Low-level document metadata object (XMP). Use this to access extended
    // properties that are not present in the Info dictionary.
    metadata;
    /**
     * An array of document fingerprint strings provided by PDF.js. Useful
     * for caching, de-duplication or identifying a document across runs.
     */ fingerprints;
    /**
     * Permission flags for the document as returned by PDF.js (or null).
     * These flags indicate capabilities such as printing, copying and
     * other restrictions imposed by the PDF security settings.
     */ permission;
    /**
     * Optional document outline (bookmarks). When present this is the
     * hierarchical navigation structure which viewers use for quick access.
     */ outline;
    // Results with per-page hyperlink extraction. Empty array by default.
    pages = [];
    /**
     * Collects dates from different sources (Info dictionary and XMP/XAP metadata)
     * and returns them as a DateNode where available. This helps callers compare
     * and choose the most relevant timestamp (for example a creation date vs XMP date).
     */ getDateNode() {
        const result = {};
        // The Info dictionary may contain CreationDate/ModDate in PDF date string format.
        // biome-ignore lint/suspicious/noExplicitAny: <unsupported underline type>
        const CreationDate = this.info?.CreationDate;
        if (CreationDate) {
            result.CreationDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFDateString"].toDateObject(CreationDate);
        }
        // biome-ignore lint/suspicious/noExplicitAny: <unsupported underline type>
        const ModDate = this.info?.ModDate;
        if (ModDate) {
            result.ModDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFDateString"].toDateObject(ModDate);
        }
        // If no XMP metadata is present, return the Info-based dates only.
        if (!this.metadata) {
            return result;
        }
        // Extract several XMP/XAP date properties (if present) and attempt to
        // parse them as ISO-like strings. Parsed values are added to the
        // corresponding DateNode fields.
        for (const prop of XMP_DATE_PROPERTIES){
            const value = this.metadata?.get(prop);
            const date = this.parseISODateString(value);
            switch(prop){
                case XMP_DATE_PROPERTIES[0]:
                    result.XmpCreateDate = date;
                    break;
                case XMP_DATE_PROPERTIES[1]:
                    result.XmpModifyDate = date;
                    break;
                case XMP_DATE_PROPERTIES[2]:
                    result.XmpMetadataDate = date;
                    break;
                case XMP_DATE_PROPERTIES[3]:
                    result.XapCreateDate = date;
                    break;
                case XMP_DATE_PROPERTIES[4]:
                    result.XapModifyDate = date;
                    break;
                case XMP_DATE_PROPERTIES[5]:
                    result.XapMetadataDate = date;
                    break;
            }
        }
        return result;
    }
    /**
     * Try to parse an ISO-8601 date string from XMP/XAP metadata. If the
     * value is falsy or cannot be parsed, undefined is returned to indicate
     * absence or unparsable input.
     */ parseISODateString(isoDateString) {
        if (!isoDateString) return undefined;
        const parsedDate = Date.parse(isoDateString);
        if (!Number.isNaN(parsedDate)) {
            return new Date(parsedDate);
        }
        return undefined;
    }
    constructor(total){
        this.total = total;
    }
} //# sourceMappingURL=InfoResult.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/ParseParameters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDefaultParseParameters",
    ()=>setDefaultParseParameters
]);
function setDefaultParseParameters(params) {
    params.lineThreshold = params?.lineThreshold ?? 4.6;
    params.cellThreshold = params?.cellThreshold ?? 7;
    params.cellSeparator = params?.cellSeparator ?? '\t';
    params.lineEnforce = params?.lineEnforce ?? true;
    params.pageJoiner = params?.pageJoiner ?? '\n-- page_number of total_number --';
    params.imageThreshold = params?.imageThreshold ?? 80;
    params.imageDataUrl = params?.imageDataUrl ?? true;
    params.imageBuffer = params?.imageBuffer ?? true;
    params.scale = params?.scale ?? 1;
    return params;
} //# sourceMappingURL=ParseParameters.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/PathGeometry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrawOPS",
    ()=>DrawOPS,
    "PathGeometry",
    ()=>PathGeometry
]);
var PathGeometry;
(function(PathGeometry) {
    PathGeometry[PathGeometry["undefined"] = 0] = "undefined";
    PathGeometry[PathGeometry["hline"] = 1] = "hline";
    PathGeometry[PathGeometry["vline"] = 2] = "vline";
    PathGeometry[PathGeometry["rectangle"] = 3] = "rectangle";
})(PathGeometry || (PathGeometry = {}));
var DrawOPS;
(function(DrawOPS) {
    DrawOPS[DrawOPS["moveTo"] = 0] = "moveTo";
    DrawOPS[DrawOPS["lineTo"] = 1] = "lineTo";
    DrawOPS[DrawOPS["curveTo"] = 2] = "curveTo";
    DrawOPS[DrawOPS["closePath"] = 3] = "closePath";
    DrawOPS[DrawOPS["rectangle"] = 4] = "rectangle";
})(DrawOPS || (DrawOPS = {})); //# sourceMappingURL=PathGeometry.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/ScreenshotResult.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @public
 * ScreenshotResult
 */ __turbopack_context__.s([
    "ScreenshotResult",
    ()=>ScreenshotResult
]);
class ScreenshotResult {
    pages = [];
    total = 0;
    constructor(total){
        this.total = total;
    }
} //# sourceMappingURL=ScreenshotResult.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/TableResult.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @public
 * TableResult
 */ __turbopack_context__.s([
    "TableResult",
    ()=>TableResult
]);
class TableResult {
    pages = [];
    mergedTables = [];
    total = 0;
    constructor(total){
        this.total = total;
    }
} //# sourceMappingURL=TableResult.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/TextResult.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @public
 * TextResult
 */ __turbopack_context__.s([
    "TextResult",
    ()=>TextResult
]);
class TextResult {
    pages = [];
    text = '';
    total = 0;
    getPageText(num) {
        for (const pageData of this.pages){
            if (pageData.num === num) return pageData.text;
        }
        return '';
    }
    constructor(total){
        this.total = total;
    }
} //# sourceMappingURL=TextResult.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/PDFParse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFParse",
    ()=>PDFParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/Exception.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$LineStore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/LineStore.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Rectangle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Rectangle.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ImageResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/ImageResult.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$InfoResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/InfoResult.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ParseParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/ParseParameters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/PathGeometry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ScreenshotResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/ScreenshotResult.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$TableResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/TableResult.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$TextResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/TextResult.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
class PDFParse {
    options;
    doc;
    progress = {
        loaded: -1,
        total: 0
    };
    /**
     * Create a new parser with `LoadParameters`.
     * Converts Node.js `Buffer` data to `Uint8Array` automatically and ensures a default verbosity level.
     * @param options - Initialization parameters.
     */ constructor(options){
        if (options.verbosity === undefined) {
            options.verbosity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.VerbosityLevel.ERRORS;
        }
        if (typeof Buffer !== 'undefined' && options.data instanceof Buffer) {
            options.data = new Uint8Array(options.data);
        }
        this.options = options;
    }
    async destroy() {
        if (this.doc) {
            await this.doc.destroy();
            this.doc = undefined;
        }
    }
    // biome-ignore-start lint/suspicious/noExplicitAny: unsupported underline type
    static get isNodeJS() {
        const isNodeJS = typeof process === 'object' && `${process}` === '[object process]' && !process.versions.nw && !(process.versions.electron && typeof process.type !== 'undefined' && process.type !== 'browser');
        return isNodeJS;
    }
    static setWorker(workerSrc) {
        if (typeof globalThis.pdfjs === 'undefined') {
            globalThis.pdfjs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__?.GlobalWorkerOptions === null) return '';
        if (workerSrc !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.GlobalWorkerOptions.workerSrc = workerSrc;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.GlobalWorkerOptions.workerSrc;
        }
        // if (!PDFParse.isNodeJS) {
        // 	pdfjs.GlobalWorkerOptions.workerSrc =
        // 		'https://cdn.jsdelivr.net/npm/pdf-parse@latest/dist/browser/pdf.worker.min.mjs';
        // 	return pdfjs.GlobalWorkerOptions.workerSrc;
        // }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.GlobalWorkerOptions.workerSrc;
    }
    // biome-ignore-end lint/suspicious/noExplicitAny: unsupported underline type
    /**
     * Load document-level metadata (info, outline, permissions, page labels) and optionally gather per-page link details.
     * @param params - Parse options; set `parsePageInfo` to collect per-page metadata described in `ParseParameters`.
     * @returns Aggregated document metadata in an `InfoResult`.
     */ async getInfo(params = {}) {
        const doc = await this.load();
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$InfoResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InfoResult"](doc.numPages);
        const { info, metadata } = await doc.getMetadata();
        result.info = info;
        result.metadata = metadata;
        result.fingerprints = doc.fingerprints;
        result.outline = await doc.getOutline();
        result.permission = await doc.getPermissions();
        const pageLabels = await doc.getPageLabels();
        if (params.parsePageInfo) {
            for(let i = 1; i <= result.total; i++){
                if (this.shouldParse(i, result.total, params)) {
                    const page = await doc.getPage(i);
                    const pageLinkResult = await this.getPageLinks(page);
                    pageLinkResult.pageLabel = pageLabels?.[page.pageNumber];
                    result.pages.push(pageLinkResult);
                    page.cleanup();
                }
            }
        }
        return result;
    }
    async getPageLinks(page) {
        const viewport = page.getViewport({
            scale: 1
        });
        const result = {
            pageNumber: page.pageNumber,
            links: [],
            width: viewport.width,
            height: viewport.height
        };
        // biome-ignore lint/suspicious/noExplicitAny: <unsupported underline type>
        const annotations = await page.getAnnotations({
            intent: 'display'
        }) || [];
        for (const i of annotations){
            if (i.subtype !== 'Link') continue;
            const url = i.url ?? i.unsafeUrl;
            if (!url) continue;
            const text = i.overlaidText || '';
            result.links.push({
                url,
                text
            });
        }
        return result;
    }
    /**
     * Extract plain text for each requested page, optionally enriching hyperlinks and enforcing line or cell separators.
     * @param params - Parse options controlling pagination, link handling, and line/cell thresholds.
     * @returns A `TextResult` containing page-wise text and a concatenated document string.
     */ async getText(params = {}) {
        const doc = await this.load();
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$TextResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextResult"](doc.numPages);
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await doc.getPage(i);
                const text = await this.getPageText(page, params, result.total);
                result.pages.push({
                    text: text,
                    num: i
                });
                page.cleanup();
            }
        }
        for (const page of result.pages){
            if (params.pageJoiner) {
                let pageNumber = params.pageJoiner.replace('page_number', `${page.num}`);
                pageNumber = pageNumber.replace('total_number', `${result.total}`);
                result.text += `${page.text}\n${pageNumber}\n\n`;
            } else {
                result.text += `${page.text}\n\n`;
            }
        }
        return result;
    }
    async load() {
        try {
            if (this.doc === undefined) {
                const loadingTask = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.getDocument(this.options);
                loadingTask.onProgress = (progress)=>{
                    this.progress = progress;
                };
                this.doc = await loadingTask.promise;
            }
            return this.doc;
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getException"])(error);
        }
    }
    shouldParse(currentPage, totalPage, params) {
        params.partial = params?.partial ?? [];
        params.first = params?.first ?? 0;
        params.last = params?.last ?? 0;
        // parse specific pages
        if (params.partial.length > 0) {
            if (params.partial.includes(currentPage)) {
                return true;
            }
            return false;
        }
        // parse pagest beetween first..last
        if (params.first > 0 && params.last > 0) {
            if (currentPage >= params.first && currentPage <= params.last) {
                return true;
            }
            return false;
        }
        // parse first x page
        if (params.first > 0) {
            if (currentPage <= params.first) {
                return true;
            }
            return false;
        }
        // parse last x page
        if (params.last > 0) {
            if (currentPage > totalPage - params.last) {
                return true;
            }
            return false;
        }
        return true;
    }
    async getPageText(page, parseParams, total) {
        const viewport = page.getViewport({
            scale: 1
        });
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ParseParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDefaultParseParameters"])(parseParams);
        const textContent = await page.getTextContent({
            includeMarkedContent: !!params.includeMarkedContent,
            disableNormalization: !!params.disableNormalization
        });
        let links = new Map();
        if (params.parseHyperlinks) {
            links = await this.getHyperlinks(page, viewport);
        }
        const strBuf = [];
        let lastX;
        let lastY;
        let lineHeight = 0;
        for (const item of textContent.items){
            if (!('str' in item)) continue;
            const tm = item.transform ?? item.transform;
            const [x, y] = viewport.convertToViewportPoint(tm[4], tm[5]);
            if (params.parseHyperlinks) {
                const posArr = links.get(item.str) || [];
                const hit = posArr.find((l)=>x >= l.rect.left && x <= l.rect.right && y >= l.rect.top && y <= l.rect.bottom);
                if (hit) {
                    item.str = `[${item.str}](${hit.url})`;
                }
            }
            if (params.lineEnforce) {
                if (lastY !== undefined && Math.abs(lastY - y) > params.lineThreshold) {
                    const lastItem = strBuf.length ? strBuf[strBuf.length - 1] : undefined;
                    const isCurrentItemHasNewLine = item.str.startsWith('\n') || item.str.trim() === '' && item.hasEOL;
                    if (lastItem?.endsWith('\n') === false && !isCurrentItemHasNewLine) {
                        const ydiff = Math.abs(lastY - y);
                        if (ydiff - 1 > lineHeight) {
                            strBuf.push('\n');
                            lineHeight = 0;
                        }
                    }
                }
            }
            if (params.cellSeparator) {
                if (lastY !== undefined && Math.abs(lastY - y) < params.lineThreshold) {
                    if (lastX !== undefined && Math.abs(lastX - x) > params.cellThreshold) {
                        item.str = `${params.cellSeparator}${item.str}`;
                    }
                }
            }
            strBuf.push(item.str);
            lastX = x + item.width;
            lastY = y;
            lineHeight = Math.max(lineHeight, item.height);
            if (item.hasEOL) {
                strBuf.push('\n');
            }
            if (item.hasEOL || item.str.endsWith('\n')) {
                lineHeight = 0;
            }
        }
        if (params.itemJoiner) {
            return strBuf.join(params.itemJoiner);
        }
        return strBuf.join('');
    }
    async getHyperlinks(page, viewport) {
        const result = new Map();
        // biome-ignore lint/suspicious/noExplicitAny: <unsupported underline type>
        const annotations = await page.getAnnotations({
            intent: 'display'
        }) || [];
        for (const i of annotations){
            if (i.subtype !== 'Link') continue;
            const url = i.url ?? i.unsafeUrl;
            if (!url) continue;
            const text = i.overlaidText;
            if (!text) continue;
            const rectVp = viewport.convertToViewportRectangle(i.rect);
            const left = Math.min(rectVp[0], rectVp[2]) - 0.5;
            const top = Math.min(rectVp[1], rectVp[3]) - 0.5;
            const right = Math.max(rectVp[0], rectVp[2]) + 0.5;
            const bottom = Math.max(rectVp[1], rectVp[3]) + 0.5;
            const pos = {
                rect: {
                    left,
                    top,
                    right,
                    bottom
                },
                url,
                text,
                used: false
            };
            const el = result.get(text);
            if (el) {
                el.push(pos);
            } else {
                result.set(text, [
                    pos
                ]);
            }
        }
        return result;
    }
    /**
     * Extract embedded images from requested pages.
     *
     * Behavior notes:
     * - Pages are selected according to ParseParameters (partial, first, last).
     * - Images smaller than `params.imageThreshold` (width OR height) are skipped.
     * - Returned ImageResult contains per-page PageImages; each image entry includes:
     *     - data: Uint8Array (present when params.imageBuffer === true)
     *     - dataUrl: string (present when params.imageDataUrl === true)
     *     - width, height, kind, name
     * - Works in both Node.js (canvas.toBuffer) and browser (canvas.toDataURL) environments.
     *
     * @param params - ParseParameters controlling page selection, thresholds and output format.
     * @returns Promise<ImageResult> with extracted images grouped by page.
     */ async getImage(params = {}) {
        const doc = await this.load();
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ImageResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResult"](doc.numPages);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ParseParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDefaultParseParameters"])(params);
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await doc.getPage(i);
                const ops = await page.getOperatorList();
                const pageImages = {
                    pageNumber: i,
                    images: []
                };
                result.pages.push(pageImages);
                for(let j = 0; j < ops.fnArray.length; j++){
                    if (ops.fnArray[j] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.paintInlineImageXObject || ops.fnArray[j] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.paintImageXObject) {
                        const name = ops.argsArray[j][0];
                        const isCommon = page.commonObjs.has(name);
                        const imgPromise = isCommon ? this.resolveEmbeddedImage(page.commonObjs, name) : this.resolveEmbeddedImage(page.objs, name);
                        const { width, height, kind, data } = await imgPromise;
                        if (params.imageThreshold) {
                            if (params.imageThreshold >= width || params.imageThreshold >= height) {
                                continue;
                            }
                        }
                        // biome-ignore lint/suspicious/noExplicitAny: <underlying library does not contain valid typedefs>
                        const canvasFactory = doc.canvasFactory;
                        const canvasAndContext = canvasFactory.create(width, height);
                        const context = canvasAndContext.context;
                        let imgData = null;
                        if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ImageKind.RGBA_32BPP) {
                            imgData = context.createImageData(width, height);
                            imgData.data.set(data);
                        } else {
                            imgData = context.createImageData(width, height);
                            this.convertToRGBA({
                                src: data,
                                dest: new Uint32Array(imgData.data.buffer),
                                width,
                                height,
                                kind
                            });
                        }
                        context.putImageData(imgData, 0, 0);
                        // Browser and Node.js compatibility
                        let buffer = new Uint8Array();
                        let dataUrl = '';
                        if (typeof canvasAndContext.canvas.toBuffer === 'function') {
                            // Node.js environment (canvas package)
                            // biome-ignore lint/suspicious/noExplicitAny: <underline lib not support>
                            let nodeBuffer;
                            if (params.imageBuffer) {
                                nodeBuffer = canvasAndContext.canvas.toBuffer('image/png');
                                buffer = new Uint8Array(nodeBuffer);
                            }
                            if (params.imageDataUrl) {
                                if (nodeBuffer) {
                                    dataUrl = `data:image/png;base64,${nodeBuffer.toString('base64')}`;
                                } else {
                                    nodeBuffer = canvasAndContext.canvas.toBuffer('image/png');
                                    buffer = new Uint8Array(nodeBuffer);
                                    dataUrl = `data:image/png;base64,${nodeBuffer.toString('base64')}`;
                                }
                            }
                        } else {
                            // Browser environment
                            if (params.imageBuffer) {
                                const imageData = canvasAndContext.context.getImageData(0, 0, canvasAndContext.canvas.width, canvasAndContext.canvas.height);
                                buffer = new Uint8Array(imageData.data);
                            }
                            if (params.imageDataUrl) {
                                dataUrl = canvasAndContext.canvas.toDataURL('image/png');
                            }
                        }
                        pageImages.images.push({
                            data: buffer,
                            dataUrl,
                            name,
                            height,
                            width,
                            kind
                        });
                    }
                }
            }
        }
        return result;
    }
    convertToRGBA({ src, dest, width, height, kind }) {
        if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ImageKind.RGB_24BPP) {
            // RGB 24-bit per pixel
            for(let i = 0, j = 0; i < src.length; i += 3, j++){
                const r = src[i];
                const g = src[i + 1];
                const b = src[i + 2];
                dest[j] = 255 << 24 | b << 16 | g << 8 | r;
            }
        } else if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ImageKind.GRAYSCALE_1BPP) {
            // Grayscale 1-bit per pixel
            let pixelIndex = 0;
            for(let i = 0; i < src.length; i++){
                const byte = src[i];
                for(let bit = 7; bit >= 0; bit--){
                    if (pixelIndex >= width * height) break;
                    const isWhite = (byte >> bit & 1) === 1;
                    const gray = isWhite ? 255 : 0;
                    dest[pixelIndex++] = 255 << 24 | gray << 16 | gray << 8 | gray;
                }
            }
        } else if (kind === undefined || kind === null) {
            // Unknown or undefined kind - try to infer from data length
            const bytesPerPixel = src.length / (width * height);
            if (Math.abs(bytesPerPixel - 3) < 0.1) {
                // Likely RGB 24BPP
                for(let i = 0, j = 0; i < src.length; i += 3, j++){
                    const r = src[i];
                    const g = src[i + 1];
                    const b = src[i + 2];
                    dest[j] = 255 << 24 | b << 16 | g << 8 | r;
                }
            } else if (Math.abs(bytesPerPixel - 4) < 0.1) {
                // Likely RGBA 32BPP
                for(let i = 0, j = 0; i < src.length; i += 4, j++){
                    const r = src[i];
                    const g = src[i + 1];
                    const b = src[i + 2];
                    const a = src[i + 3];
                    dest[j] = a << 24 | b << 16 | g << 8 | r;
                }
            } else if (Math.abs(bytesPerPixel - 1) < 0.1) {
                // Likely grayscale 8BPP
                for(let i = 0; i < src.length; i++){
                    const gray = src[i];
                    dest[i] = 255 << 24 | gray << 16 | gray << 8 | gray;
                }
            } else {
                throw new Error(`convertToRGBA: Cannot infer image format. kind: ${kind}, bytesPerPixel: ${bytesPerPixel}, width: ${width}, height: ${height}, dataLength: ${src.length}`);
            }
        } else {
            throw new Error(`convertToRGBA: Unsupported image kind: ${kind}. Available kinds: GRAYSCALE_1BPP=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ImageKind.GRAYSCALE_1BPP}, RGB_24BPP=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ImageKind.RGB_24BPP}, RGBA_32BPP=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ImageKind.RGBA_32BPP}`);
        }
    }
    resolveEmbeddedImage(pdfObjects, name) {
        return new Promise((resolve, reject)=>{
            // biome-ignore lint/suspicious/noExplicitAny: <underlying library does not contain valid typedefs>
            pdfObjects.get(name, (imgData)=>{
                if (imgData) {
                    // Check different possible data sources
                    let dataBuff;
                    if (imgData.data instanceof Uint8Array) {
                        dataBuff = imgData.data;
                    } else if (imgData.data instanceof Uint8ClampedArray) {
                        dataBuff = new Uint8Array(imgData.data);
                    } else if (imgData.data?.buffer) {
                        // Typed array with buffer
                        dataBuff = new Uint8Array(imgData.data.buffer);
                    } else if (imgData.bitmap) {
                        // Some browsers might use bitmap
                        // biome-ignore lint/suspicious/noExplicitAny: <underlying library does not contain valid typedefs>
                        const canvasFactory = this.doc.canvasFactory;
                        const canvasAndContext = canvasFactory.create(imgData.bitmap.width, imgData.bitmap.height);
                        canvasAndContext.context.drawImage(imgData.bitmap, 0, 0);
                        const imageData = canvasAndContext.context.getImageData(0, 0, imgData.bitmap.width, imgData.bitmap.height);
                        dataBuff = new Uint8Array(imageData.data.buffer);
                    } else if (ArrayBuffer.isView(imgData.data)) {
                        // Generic typed array
                        dataBuff = new Uint8Array(imgData.data.buffer, imgData.data.byteOffset, imgData.data.byteLength);
                    }
                    if (!dataBuff) {
                        reject(new Error(`Image object ${name}: data field is empty or invalid. Available fields: ${Object.keys(imgData).join(', ')}`));
                        return;
                    }
                    if (dataBuff.length === 0) {
                        reject(new Error(`Image object ${name}: data buffer is empty (length: 0)`));
                        return;
                    }
                    resolve({
                        width: imgData.width,
                        height: imgData.height,
                        kind: imgData.kind,
                        data: dataBuff
                    });
                } else {
                    reject(new Error(`Image object ${name} not found`));
                }
            });
        });
    }
    /**
     * Render pages to raster screenshots.
     *
     * Behavior notes:
     * - Pages are selected according to ParseParameters (partial, first, last).
     * - Use params.scale for zoom; if params.desiredWidth is specified it takes precedence.
     * - Each ScreenshotResult page contains:
     *     - data: Uint8Array (when params.imageBuffer === true)
     *     - dataUrl: string (when params.imageDataUrl === true)
     *     - pageNumber, width, height, scale
     * - Works in both Node.js (canvas.toBuffer) and browser (canvas.toDataURL) environments.
     *
     * @param parseParams - ParseParameters controlling page selection and render options.
     * @returns Promise<ScreenshotResult> with rendered page images.
     */ async getScreenshot(parseParams = {}) {
        //const base = new URL('../../node_modules/pdfjs-dist/', import.meta.url);
        //this.options.cMapUrl = new URL('cmaps/', base).href;
        //this.options.cMapPacked = true;
        //this.options.standardFontDataUrl = new URL('legacy/build/standard_fonts/', base).href;
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ParseParameters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDefaultParseParameters"])(parseParams);
        const doc = await this.load();
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$ScreenshotResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScreenshotResult"](doc.numPages);
        if (this.doc === undefined) {
            throw new Error('PDF document not loaded');
        }
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await this.doc.getPage(i);
                let viewport = page.getViewport({
                    scale: params.scale
                });
                if (params.desiredWidth) {
                    viewport = page.getViewport({
                        scale: 1
                    });
                    // desiredWidth
                    const scale = params.desiredWidth / viewport.width;
                    viewport = page.getViewport({
                        scale: scale
                    });
                }
                // biome-ignore lint/suspicious/noExplicitAny: <underlying library does not contain valid typedefs>
                const canvasFactory = this.doc.canvasFactory;
                const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);
                const renderContext = {
                    canvasContext: canvasAndContext.context,
                    viewport,
                    canvas: canvasAndContext.canvas
                };
                const renderTask = page.render(renderContext);
                await renderTask.promise;
                // Convert the canvas to an image buffer.
                let data = new Uint8Array();
                let dataUrl = '';
                if (typeof canvasAndContext.canvas.toBuffer === 'function') {
                    // Node.js environment (canvas package)
                    // biome-ignore lint/suspicious/noExplicitAny: <underline lib not support>
                    let nodeBuffer;
                    if (params.imageBuffer) {
                        nodeBuffer = canvasAndContext.canvas.toBuffer('image/png');
                        data = new Uint8Array(nodeBuffer);
                    }
                    if (params.imageDataUrl) {
                        if (nodeBuffer) {
                            dataUrl = `data:image/png;base64,${nodeBuffer.toString('base64')}`;
                        } else {
                            nodeBuffer = canvasAndContext.canvas.toBuffer('image/png');
                            data = new Uint8Array(nodeBuffer);
                            dataUrl = `data:image/png;base64,${nodeBuffer.toString('base64')}`;
                        }
                    }
                } else {
                    // Browser environment
                    if (params.imageBuffer) {
                        const imageData = canvasAndContext.context.getImageData(0, 0, canvasAndContext.canvas.width, canvasAndContext.canvas.height);
                        data = new Uint8Array(imageData.data);
                    }
                    if (params.imageDataUrl) {
                        dataUrl = canvasAndContext.canvas.toDataURL('image/png');
                    //const base64 = dataUrl.split(',')[1];
                    //const binaryString = atob(base64);
                    //data = new Uint8Array(binaryString.length);
                    //for (let i = 0; i < binaryString.length; i++) {
                    //	data[i] = binaryString.charCodeAt(i);
                    //}
                    }
                }
                result.pages.push({
                    data,
                    dataUrl,
                    pageNumber: i,
                    width: viewport.width,
                    height: viewport.height,
                    scale: viewport.scale
                });
                page.cleanup();
            }
        }
        return result;
    }
    /**
     * Detect and extract tables from pages by analysing vector drawing operators, then populate cells with text.
     *
     * Behavior notes:
     * - Scans operator lists for rectangles/lines that form table grids (uses PathGeometry and LineStore).
     * - Normalizes detected geometry and matches positioned text to table cells.
     * - Honors ParseParameters for page selection.
     *
     * @param params - ParseParameters controlling which pages to analyse (partial/first/last).
     * @returns Promise<TableResult> containing discovered tables per page.
     */ async getTable(params = {}) {
        const doc = await this.load();
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$TableResult$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableResult"](doc.numPages);
        if (this.doc === undefined) {
            throw new Error('PDF document not loaded');
        }
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await this.doc.getPage(i);
                //const viewport = page.getViewport({ scale: 1 });
                //viewport.convertToViewportPoint(0, 0);
                const store = await this.getPageTables(page);
                //const store = await this.getPageGeometry(page);
                store.normalize();
                const tableDataArr = store.getTableData();
                await this.fillPageTables(page, tableDataArr);
                const pageTableResult = {
                    num: i,
                    tables: []
                };
                for (const table of tableDataArr){
                    //if (table.cellCount < 3) continue
                    pageTableResult.tables.push(table.toArray());
                //const pageTableResult: PageTableResult = { num: i, tables: table.toArray() };
                //pageTableResult.tables.push(table.toData())
                }
                result.pages.push(pageTableResult);
                page.cleanup();
            }
        }
        // for (const table of Table.AllTables) {
        //     if (table.cellCount < 3) continue
        //     const str = table.toString()
        //     console.log(str)
        // }
        return result;
    }
    getPathGeometry(mm) {
        const width = mm[2] - mm[0];
        const height = mm[3] - mm[1];
        if (mm[0] === Infinity) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].undefined;
        }
        if (width > 5 && height > 5) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].rectangle;
        } else if (width > 5 && height === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].hline;
        } else if (width === 0 && height > 5) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].vline;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].undefined;
    }
    async getPageTables(page) {
        const lineStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$LineStore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineStore"]();
        const viewport = page.getViewport({
            scale: 1
        });
        let transformMatrix = [
            1,
            0,
            0,
            1,
            0,
            0
        ];
        const transformStack = [];
        const opList = await page.getOperatorList();
        for(let i = 0; i < opList.fnArray.length; i++){
            const fn = opList.fnArray[i];
            const args = opList.argsArray[i];
            const op = args?.[0] ?? 0;
            const mm = args?.[2] ?? [
                Infinity,
                Infinity,
                -Infinity,
                -Infinity
            ];
            //const minMax = new Float32Array([Infinity, Infinity, -Infinity, -Infinity]);
            if (fn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.constructPath) {
                if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.fill) {
                //debugger;
                }
                if (op !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.stroke) {
                    continue;
                }
                const pg = this.getPathGeometry(mm);
                if (pg === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].rectangle) {
                    const rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Rectangle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Rectangle"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](mm[0], mm[1]), mm[2] - mm[0], mm[3] - mm[1]);
                    rect.transform(transformMatrix);
                    rect.transform(viewport.transform);
                    lineStore.addRectangle(rect);
                } else if (pg === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].hline || pg === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PathGeometry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PathGeometry"].vline) {
                    const from = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](mm[0], mm[1]);
                    const to = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"](mm[2], mm[3]);
                    const line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"](from, to);
                    line.transform(transformMatrix);
                    line.transform(viewport.transform);
                    lineStore.add(line);
                } else {
                //debugger;
                }
            // if (op === pdfjs.OPS.rectangle) {
            // 	debugger;
            // } else if (op === pdfjs.OPS.moveTo) {
            // 	debugger;
            // } else if (op === pdfjs.OPS.lineTo) {
            // 	debugger;
            // } else if (op === pdfjs.OPS.endPath) {
            // 	const combinedMatrix = pdfjs.Util.transform(viewport.transform, transformMatrix);
            // 	// while (args[1].length) {
            // 	// 	const drawOp = args[1].shift();
            // 	// 	debugger;
            // 	// }
            // } else {
            // 	//debugger;
            // }
            } else if (fn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.setLineWidth) {
            //debugger;
            } else if (fn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.save) {
                transformStack.push(transformMatrix);
            } else if (fn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.restore) {
                const restoredMatrix = transformStack.pop();
                if (restoredMatrix) {
                    transformMatrix = restoredMatrix;
                }
            } else if (fn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.OPS.transform) {
                //transformMatrix = this.transform_fn(transformMatrix, args);
                transformMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Util.transform(transformMatrix, args);
            }
        }
        return lineStore;
    }
    // private async getPageGeometry(page: PDFPageProxy): Promise<LineStore> {
    // 	const lineStore: LineStore = new LineStore();
    // 	const opList = await page.getOperatorList();
    // 	const viewport = page.getViewport({ scale: 1 });
    // 	let transformMatrix = [1, 0, 0, 1, 0, 0];
    // 	const transformStack: Array<Array<number>> = [];
    // 	let current_x: number = 0;
    // 	let current_y: number = 0;
    // 	for (let j = 0; j < opList.fnArray.length; j++) {
    // 		const fn = opList.fnArray[j];
    // 		const args = opList.argsArray[j];
    // 		if (fn === pdfjs.OPS.constructPath) {
    // 			while (args[0].length) {
    // 				const op = args[0].shift();
    // 				const combinedMatrix = pdfjs.Util.transform(viewport.transform, transformMatrix);
    // 				if (op === pdfjs.OPS.rectangle) {
    // 					const x = args[1].shift();
    // 					const y = args[1].shift();
    // 					const width = args[1].shift();
    // 					const height = args[1].shift();
    // 					if (Math.min(width, height) <= 2) {
    // 						// TODO remove
    // 						debugger;
    // 					}
    // 					const rect = new Rectangle(new Point(x, y), width, height);
    // 					rect.transform(combinedMatrix);
    // 					//rect.transform(viewport.transform);
    // 					lineStore.addRectangle(rect);
    // 				} else if (op === pdfjs.OPS.moveTo) {
    // 					current_x = args[1].shift();
    // 					current_y = args[1].shift();
    // 				} else if (op === pdfjs.OPS.lineTo) {
    // 					const x = args[1].shift();
    // 					const y = args[1].shift();
    // 					//default trasform
    // 					const from = new Point(current_x, current_y);
    // 					const to = new Point(x, y);
    // 					const line = new Line(from, to);
    // 					line.transform(combinedMatrix);
    // 					//line.transform(viewport.transform);
    // 					// // viewport transform
    // 					// const _from = viewport.convertToViewportPoint(line.from.x, line.from.y)
    // 					// const _to = viewport.convertToViewportPoint(line.to.x, line.to.y)
    // 					//
    // 					// const transformedLine = new Line(new Point(_from[0], _from[1]), new Point(_to[0], _to[1]))
    // 					lineStore.add(line);
    // 					current_x = x;
    // 					current_y = y;
    // 				}
    // 			}
    // 		} else if (fn === pdfjs.OPS.save) {
    // 			transformStack.push(transformMatrix);
    // 		} else if (fn === pdfjs.OPS.restore) {
    // 			const restoredMatrix = transformStack.pop();
    // 			if (restoredMatrix) {
    // 				transformMatrix = restoredMatrix;
    // 			}
    // 		} else if (fn === pdfjs.OPS.transform) {
    // 			//transformMatrix = this.transform_fn(transformMatrix, args);
    // 			transformMatrix = pdfjs.Util.transform(transformMatrix, args);
    // 		}
    // 	}
    // 	return lineStore;
    // }
    async fillPageTables(page, pageTables) {
        //const resultTable: Array<Table> = []
        const viewport = page.getViewport({
            scale: 1
        });
        // for (let i = 0; i < pageTables.length; i++) {
        //     const currentTable = pageTables[i]
        // }
        //pageTables = pageTables.filter((table) => table.cellCount > 3)
        const textContent = await page.getTextContent({
            includeMarkedContent: false,
            disableNormalization: false
        });
        for (const textItem of textContent.items){
            if (!('str' in textItem)) continue;
            const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Util.transform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.Util.transform(viewport.transform, textItem.transform), [
                1,
                0,
                0,
                -1,
                0,
                0
            ]);
            //const resXY = viewport.convertToViewportPoint(tx[4], tx[5]);
            // textItem.transform = pdfjs.Util.transform(viewport.transform, textItem.transform)
            // textItem.transform[5] = viewport.height - textItem.transform[5] - textItem.height
            for (const pageTable of pageTables){
                const cell = pageTable.findCell(tx[4], tx[5]);
                if (cell) {
                    cell.text.push(textItem.str);
                    if (textItem.hasEOL) {
                        cell.text.push('\n');
                    }
                    break;
                }
            }
        //Table.tryAddText(pageTables, textItem)
        }
    }
} //PDFParse.setWorker();
 //# sourceMappingURL=PDFParse.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PDFParse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/PDFParse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/Exception.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Line",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"],
    "LineDirection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"],
    "LineStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$LineStore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineStore"],
    "Point",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"],
    "Rectangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Rectangle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Rectangle"],
    "Shape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"],
    "Table",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Line$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Line.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$LineStore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/LineStore.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Point$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Point.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Rectangle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Rectangle.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Shape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Shape.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$Table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/Table.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/pdf-parse/dist/pdf-parse/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbortException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AbortException"],
    "FormatError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormatError"],
    "InvalidPDFException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidPDFException"],
    "Line",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Line"],
    "LineDirection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineDirection"],
    "LineStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LineStore"],
    "PDFParse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PDFParse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFParse"],
    "PasswordException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PasswordException"],
    "Point",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Point"],
    "Rectangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Rectangle"],
    "ResponseException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResponseException"],
    "Shape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Shape"],
    "Table",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"],
    "UnknownErrorException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnknownErrorException"],
    "VerbosityLevel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerbosityLevel"],
    "getException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getException"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$PDFParse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/PDFParse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$legacy$2f$build$2f$pdf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$Exception$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/Exception.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$parse$2f$dist$2f$pdf$2d$parse$2f$esm$2f$geometry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-parse/dist/pdf-parse/esm/geometry/index.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_e14e1ff0._.js.map