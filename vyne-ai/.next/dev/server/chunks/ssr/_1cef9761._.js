module.exports = [
"[project]/app/api/vyne/schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectSchema",
    ()=>ProjectSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
// A single file representation
const FileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The full path of the file, e.g., 'src/main.jsx' or 'index.html'"),
    contents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("The complete text content of the file.")
});
const ProjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    files: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(FileSchema).describe("A flat list of all files in the project."),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe(`A detailed, structured summary of the generated project in the following EXACT format:

# 🎯 Project Summary

## Title
[Project Name Based on User Request]

## Theme & Design
- Color Scheme: Dark theme (bg-gray-900, bg-gray-800) with [blue/purple/cyan] accents
- Typography: [font sizes and weights used]
- Layout: [grid/flexbox structure, max-width, spacing]
- Animations: [hover effects, transitions, transform animations used]

## Description
[2-3 sentences describing what the app does and its purpose]

## Features Implemented
List EVERY feature explicitly:
- [Feature 1 with specific details]
- [Feature 2 with specific details]
- [Feature 3 with specific details]
- [localStorage usage if applicable]
- [Form validation if applicable]
- [Filtering/sorting if applicable]

## Component Architecture
List all components created:
- App.jsx: [what it handles]
- Component1.jsx: [what it handles]
- Component2.jsx: [what it handles]
- [etc.]

## Tech Stack
- **Frontend:** React 18.2 + Vite 5
- **Styling:** Tailwind CSS 3.3
- **Icons:** Lucide React v0.294.0
- **Storage:** localStorage [if used]
- **Deployment:** Static hosting ready (Vercel/Netlify/Cloudflare Pages)

## Design Highlights
- Dark theme with professional gradients
- Smooth hover/focus animations (transition-all duration-200)
- Fully responsive design (mobile-first approach)
- Consistent spacing (p-4, p-6, gap-4)
- Accessible (ARIA labels, keyboard navigation, focus states)
- Professional shadows and borders

## File Structure
\`\`\`
project-root/
├── package.json (React 18.2, Vite 5, Tailwind 3.3, Lucide 0.294.0)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── [list all component files]
\`\`\`

## Key Implementation Details
- State Management: [useState, useEffect hooks used]
- Event Handlers: [onClick, onChange, onSubmit handlers]
- Data Persistence: [localStorage keys and structure if used]
- Validation Logic: [form validation, error handling]
- Responsive Breakpoints: [sm:, md:, lg: usage]

## How to Run
\`\`\`bash
npm install
npm run dev
\`\`\`

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## Next Steps for Customization
- Modify colors in tailwind.config.js
- Add more features as needed
- Deploy to preferred hosting platform
- Customize localStorage key names
- Extend component functionality

---

✅ **This project is production-ready and fully functional. All files are complete with no TODOs or placeholders. The app runs immediately after npm install && npm run dev.**

⚠️ **Anti-Hallucination Verification:**
- ❌ No authentication added (unless explicitly requested)
- ❌ No external API calls (unless explicitly requested)
- ❌ No routing library (single page app)
- ❌ No backend code (client-side only)
- ❌ No extra dependencies beyond React, Vite, Tailwind, Lucide
- ✅ Only features explicitly requested by user were implemented
- ✅ All code is syntactically correct and ready to run
- ✅ localStorage used for persistence (no database)
- ✅ Professional UI with dark theme and smooth animations`)
});
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button-group.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroup",
    ()=>ButtonGroup,
    "ButtonGroupSeparator",
    ()=>ButtonGroupSeparator,
    "ButtonGroupText",
    ()=>ButtonGroupText,
    "buttonGroupVariants",
    ()=>buttonGroupVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonGroupVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", {
    variants: {
        orientation: {
            horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
            vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});
function ButtonGroup({ className, orientation, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "data-slot": "button-group",
        "data-orientation": orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonGroupVariants({
            orientation
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button-group.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function ButtonGroupText({ className, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button-group.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "button-group-separator",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button-group.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/store/useDeployStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeployStore",
    ()=>useDeployStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useDeployStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        url: null,
        setUrl: (newUrl)=>set({
                url: newUrl
            }),
        clearUrl: ()=>set({
                url: null
            })
    }));
}),
"[project]/store/useWebContainerStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebContainerStore",
    ()=>useWebContainerStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useWebContainerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        webContainer: null,
        setWebContainer: (wc)=>set({
                webContainer: wc
            }),
        clearWebContainer: ()=>set({
                webContainer: null
            })
    }));
}),
"[project]/app/main/_components/Deployment/BuildAndDeploy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAndDeploy",
    ()=>buildAndDeploy
]);
async function buildAndDeploy(webContainer) {
    // 1. Run build
    const buildProcess = await webContainer.spawn("npm", [
        "run",
        "build"
    ]);
    const buildLogs = [];
    buildProcess.output.pipeTo(new WritableStream({
        write (chunk) {
            const line = chunk.toString();
            buildLogs.push(line);
        }
    }));
    const buildExit = await buildProcess.exit;
    if (buildExit !== 0) {
        throw new Error(`Build failed (exit ${buildExit}). Recent build output:\n${buildLogs.slice(-200).join("")}`);
    }
    // 2. Detect build output directory
    const candidates = [
        "/dist",
        "/build",
        "/out"
    ];
    let outputDir = null;
    for (const candidate of candidates){
        try {
            await webContainer.fs.readdir(candidate, {
                withFileTypes: true
            });
            outputDir = candidate;
            console.log("✅ Build output detected at:", candidate);
            break;
        } catch (e) {
        // Directory doesn't exist, continue
        }
    }
    if (!outputDir) {
        let rootList = [];
        try {
            const rootEntries = await webContainer.fs.readdir("/", {
                withFileTypes: true
            });
            rootList = rootEntries.map((e)=>e.name);
        } catch (e) {
        // ignore
        }
        throw new Error(`No build output folder found. Checked: ${candidates.join(", ")}. Root contents: ${JSON.stringify(rootList)}\n\nRecent build logs:\n${buildLogs.join("")}`);
    }
    // 3. Collect all files recursively
    const filesList = [];
    async function collectFiles(basePath) {
        const entries = await webContainer.fs.readdir(basePath, {
            withFileTypes: true
        });
        for (const entry of entries){
            const fullPath = `${basePath}/${entry.name}`;
            if (entry.isFile()) {
                const fileData = await webContainer.fs.readFile(fullPath);
                // Remove leading slash and output directory prefix
                const relativePath = fullPath.replace(outputDir, "").replace(/^\//, "");
                filesList.push({
                    path: relativePath,
                    data: fileData
                });
            } else if (entry.isDirectory()) {
                await collectFiles(fullPath);
            }
        }
    }
    await collectFiles(outputDir);
    // 4. Build manifest for Cloudflare Pages
    const manifest = {
        format: 1,
        files: {}
    };
    const digestHex = async (u8)=>{
        const hash = await crypto.subtle.digest("SHA-256", u8);
        return Array.from(new Uint8Array(hash)).map((b)=>b.toString(16).padStart(2, "0")).join("");
    };
    const form = new FormData();
    for (const file of filesList){
        const sha = await digestHex(file.data);
        manifest.files[file.path] = sha;
        const blob = new Blob([
            file.data
        ], {
            type: "application/octet-stream"
        });
        form.append(sha, blob, file.path);
    }
    form.append("manifest", JSON.stringify(manifest));
    // 5. Deploy to Cloudflare Pages
    const res = await fetch("/api/deploy", {
        method: "POST",
        body: form
    });
    const text = await res.text();
    let data = null;
    try {
        data = JSON.parse(text);
    } catch (e) {
        throw new Error(`Deploy endpoint returned non-JSON response (status ${res.status}):\n${text}`);
    }
    if (!res.ok) {
        throw new Error(`Deploy failed (HTTP ${res.status}): ${JSON.stringify(data, null, 2)}`);
    }
    if (!data?.success) {
        throw new Error(`Deploy API returned success=false:\n${JSON.stringify(data, null, 2)}`);
    }
    console.log("🚀 Deployment successful!");
    return data; // { url: string, success: true }
}
}),
"[project]/components/Buttons/HoverButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverButton",
    ()=>HoverButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const HoverButton = ({ children, onClick, className = '', disabled = false, glowColor = 'white', backgroundColor = 'transparent', textColor = '#ffffff', hoverTextColor = 'black', ...props })=>{
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [glowPosition, setGlowPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseMove = (e)=>{
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setGlowPosition({
                x,
                y
            });
        }
    };
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        ref: buttonRef,
        onClick: onClick,
        disabled: disabled,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: `
        relative inline-block px-4 py-1.5 border border-neutral-900 
        cursor-pointer overflow-hidden transition-colors duration-300 
        rounded-lg z-10 text-sm font-medium
        ${disabled ? 'opacity-80 cursor-not-allowed' : ''}
        ${className}
      `,
        style: {
            backgroundColor: backgroundColor,
            color: isHovered ? hoverTextColor : textColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          absolute w-[200px] h-[200px] rounded-full opacity-90 pointer-events-none 
          transition-transform duration-400 ease-out -translate-x-1/2 -translate-y-1/2
          ${isHovered ? 'scale-120' : 'scale-0'}
        `,
                style: {
                    left: `${glowPosition.x}px`,
                    top: `${glowPosition.y}px`,
                    background: `radial-gradient(circle, ${glowColor} 10%, transparent 70%)`,
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/Buttons/HoverButton.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Buttons/HoverButton.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Buttons/HoverButton.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/tooltip.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/components/ui/tooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/tooltip.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/main/_components/Deployment/Deploy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDeployStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDeployStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useWebContainerStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useWebContainerStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$Deployment$2f$BuildAndDeploy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/main/_components/Deployment/BuildAndDeploy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Buttons$2f$HoverButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Buttons/HoverButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const Deploy = ()=>{
    const { url, setUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDeployStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeployStore"])();
    const { webContainer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useWebContainerStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebContainerStore"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleDeploy() {
        if (!webContainer) {
            console.log("WebContainer not initialized");
            return;
        }
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$Deployment$2f$BuildAndDeploy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildAndDeploy"])(webContainer);
            console.log("Deployment result:", result);
            if (result?.url) setUrl(result.url);
        } catch (err) {
            console.error("Deployment failed:", err);
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-green-400 mb-2",
            children: [
                "Deployed at:",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: url
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Buttons$2f$HoverButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverButton"], {
                        onClick: handleDeploy,
                        disabled: loading,
                        children: loading ? "Publishing..." : "Publish"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
                        lineNumber: 53,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    children: "Publish to web"
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
                    lineNumber: 57,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
            lineNumber: 51,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/main/_components/Deployment/Deploy.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Deploy;
}),
"[project]/store/useCurrentFileStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentFileStore",
    ()=>useCurrentFileStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useCurrentFileStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        currentFile: null,
        setCurrentFile: (currentFile)=>set({
                currentFile
            })
    }));
}),
"[project]/app/main/_components/FileExplorer/Folder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCurrentFileStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useCurrentFileStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check-2.js [app-ssr] (ecmascript) <export default as FileCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$closed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderClosed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-closed.js [app-ssr] (ecmascript) <export default as FolderClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
function Folder({ handleInsertNode = ()=>{}, explorer }) {
    const { currentFile, setCurrentFile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCurrentFileStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFileStore"])();
    const [expand, setExpand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showInput, setShowInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        isFolder: false
    });
    const handleNewFolder = (e, isFolder)=>{
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    };
    const onAddFolder = (e)=>{
        if (e.key === "Enter" && e.currentTarget.value) {
            handleInsertNode(explorer.id, e.currentTarget.value, showInput.isFolder);
            setShowInput({
                ...showInput,
                visible: false
            });
        }
    };
    if (explorer.isFolder) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>setExpand(!expand),
                    className: "folder flex items-center justify-between px-3 py-[2px] hover:bg-[#252525] hover:rounded-md  rounded cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: ()=>setExpand(!expand),
                        className: "flex items-center gap-2 text-gray-200 cursor-pointer select-none hover:text-white/90 transition-colors duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: `w-4 h-4 text-gray-400 transition-transform duration-300 ${expand ? "rotate-90" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            expand ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                className: "w-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$closed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderClosed$3e$__["FolderClosed"], {
                                className: "w-4 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm  ",
                                children: explorer.name
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-6 transition-all",
                    style: {
                        display: expand ? "block" : "none"
                    },
                    children: [
                        showInput.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 p-2 bg-gray-800 rounded my-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: showInput.isFolder ? "📁" : "📄"
                                }, void 0, false, {
                                    fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "flex-1 bg-gray-700 text-white px-2 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500",
                                    autoFocus: true,
                                    onKeyDown: onAddFolder,
                                    onBlur: ()=>setShowInput({
                                            ...showInput,
                                            visible: false
                                        }),
                                    placeholder: showInput.isFolder ? "Folder name..." : "File name..."
                                }, void 0, false, {
                                    fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        explorer.items?.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Folder, {
                                handleInsertNode: handleInsertNode,
                                explorer: exp
                            }, exp.id, false, {
                                fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{
                setCurrentFile(explorer);
                console.log("Current file set to:", explorer);
            },
            className: "file  px-3 py-[2px] hover:bg-[#252525]  hover:rounded-md  rounded cursor-pointer text-gray-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex  text-sm items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__["FileCheck2"], {
                        className: "w-4 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    " ",
                    explorer.name
                ]
            }, void 0, true, {
                fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/_components/FileExplorer/Folder.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    }
}
const __TURBOPACK__default__export__ = Folder;
}),
"[project]/app/main/_components/FileExplorer/demo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// const explorer = {
//   id:"1",
//   name: "root",
//   isFolder: true,
//   items: [
//     {
//       id:"2",
//       name: "public",
//       isFolder: true,
//       items: [
//         {
//           id:"3",
//           name: "public nested 1",
//           isFolder: true,
//           items: [
//             {
//               id:"4",
//               name: "index.html",
//               isFolder: false,
//               items: []
//             },
//             {
//               id:"5",
//               name: "hello.html",
//               isFolder: false,
//               items: []
//             }
//           ]
//         },
//         {
//           id:"6",
//           name: "public_nested_file",
//           isFolder: false,
//           items: []
//         }
//       ]
//     },
//     {
//       id:"7",
//       name: "src",
//       isFolder: true,
//       items: [
//         {
//           id:"8",
//           name: "App.js",
//           isFolder: false,
//           items: []
//         },
//         {
//           id:"9",
//           name: "Index.js",
//           isFolder: false,
//           items: []
//         },
//         {
//           id:"10",
//           name: "styles.css",
//           isFolder: false,
//           items: []
//         }
//       ]
//     },
//     {
//       id:"11",
//       name: "package.json",
//       isFolder: false,
//       items: []
//     }
//   ]
// };
// export const NewBoilerPlate = {
//   files: [
//     {
//       path: "index.html",
//       contents: `
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>React + Vite + Tailwind</title>
//     <link rel="stylesheet" href="/src/index.css">
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>
//       `.trim(),
//     },
//     {
//       path: "package.json",
//       contents: `
// {
//   "name": "react-vite-tailwind-app",
//   "version": "0.0.1",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   },
//   "devDependencies": {
//     "vite": "^5.0.0",
//     "@vitejs/plugin-react": "^3.0.0",
//     "tailwindcss": "^4.0.0",
//     "autoprefixer": "^11.0.0",
//     "postcss": "^8.0.0"
//   }
// }
//       `.trim(),
//     },
//     {
//       path: "src/main.jsx",
//       contents: `
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//       `.trim(),
//     },
//     {
//       path: "src/App.jsx",
//       contents: `
// export default function App() {
//   return <h1 className="text-2xl font-bold">Hello Vite + React + Tailwind!</h1>;
// }
//       `.trim(),
//     },
//     {
//       path: "src/index.css",
//       contents: `
// @import "tailwindcss"
//       `.trim(),
//     },
//   ],
// };
// /**
//  * Convert a boilerplate `files: [{path, contents}]` list into an explorer tree.
//  * - Time: O(totalPathSegments)
//  * - Space: O(totalNodes)
//  *
//  * Each path segment becomes a node with shape { id, name, isFolder, items }.
//  * Files are leaves (isFolder: false, items: []).
//  */
// export function convertBoilerplateToExplorer(boilerplate, rootName = 'root') {
//   // Use deterministic ids based on path. Root id is the rootName.
//   const root = { id: String(rootName), name: rootName, isFolder: true, items: [] };
//   // Map from absolute path (relative to root) to node
//   const nodeMap = new Map();
//   nodeMap.set('', root);
//   if (!boilerplate || !Array.isArray(boilerplate.files)) return root;
//   for (const file of boilerplate.files) {
//     // Split and ignore empty parts (leading/trailing slashes)
//     const parts = String(file.path || '').split('/').filter(Boolean);
//     let curPath = '';
//     let parent = root;
//     for (let i = 0; i < parts.length; i++) {
//       const part = parts[i];
//       curPath = curPath ? curPath + '/' + part : part;
//       if (!nodeMap.has(curPath)) {
//         const isFolder = i < parts.length - 1;
//         // Include file contents on leaf nodes when available. Use curPath as deterministic id.
//         const node = isFolder
//           ? { id: curPath, name: part, isFolder, items: [] }
//           : { id: curPath, name: part, isFolder, items: [], contents: file.contents ?? '' };
//         nodeMap.set(curPath, node);
//         parent.items.push(node);
//       }
//       parent = nodeMap.get(curPath);
//     }
//   }
//   return root;
// }
// /**
//  * Sort explorer tree in-place.
//  * Default behavior: folders first, then files; both groups sorted alphabetically (case-insensitive).
//  */
// function sortExplorer(node, { foldersFirst = true } = {}) {
//   if (!node || !Array.isArray(node.items) || node.items.length === 0) return;
//   // Mimic VS Code explorer ordering:
//   // - folders first (when requested)
//   // - natural numeric ordering
//   // - case-insensitive base comparison, with a case-sensitive tiebreaker
//   node.items.sort((a, b) => {
//     if (foldersFirst) {
//       if (a.isFolder && !b.isFolder) return -1;
//       if (!a.isFolder && b.isFolder) return 1;
//     }
//     // primary: localeCompare with numeric natural sort, case-insensitive (base)
//     const primary = String(a.name).localeCompare(String(b.name), undefined, { numeric: true, sensitivity: 'base' });
//     if (primary !== 0) return primary;
//     // secondary tiebreaker: variant (case-sensitive)
//     return String(a.name).localeCompare(String(b.name), undefined, { numeric: true, sensitivity: 'variant' });
//   });
//   for (const child of node.items) sortExplorer(child, { foldersFirst });
// }
// /**
//  * Final wrapper: convert a boilerplate object into a sorted explorer tree.
//  * Usage: import { buildExplorerFromBoilerplate } and call with your boilerplate.
//  * Options:
//  *   - rootName: string (default: 'root')
//  *   - foldersFirst: boolean (default: true)
//  */
// export default function buildExplorerFromBoilerplate(boilerplate, { rootName = 'root', foldersFirst = true } = {}) {
//   const root = convertBoilerplateToExplorer(boilerplate, rootName);
//   sortExplorer(root, { foldersFirst });
//   return root;
// }
// // Example (commented):
// // const check = buildExplorerFromBoilerplate(NewBoilerPlate, { rootName: 'files' });
// // console.log(check);
__turbopack_context__.s([
    "default",
    ()=>buildExplorerFromBoilerplate
]);
function buildExplorerFromBoilerplate(files, options = {}) {
    const { rootName = "root" } = options;
    const root = {
        id: rootName,
        name: rootName,
        isFolder: true,
        items: []
    };
    // Validate input
    if (!files || !Array.isArray(files)) {
        console.warn("buildExplorerFromBoilerplate: invalid files input");
        return root;
    }
    // Helper to find or create a folder in the tree
    function ensureFolder(parentFolder, folderName) {
        let folder = parentFolder.items?.find((item)=>item.isFolder && item.name === folderName);
        if (!folder) {
            folder = {
                id: `${parentFolder.id}/${folderName}`,
                name: folderName,
                isFolder: true,
                items: []
            };
            if (!parentFolder.items) parentFolder.items = [];
            parentFolder.items.push(folder);
        }
        return folder;
    }
    // Process each file
    files.forEach((file)=>{
        // Validate file object and path
        if (!file || typeof file.path !== "string" || !file.path.trim()) {
            console.warn("buildExplorerFromBoilerplate: skipping invalid file", file);
            return; // Skip this file
        }
        const parts = file.path.split("/").filter(Boolean); // Remove empty strings
        // Skip if no valid parts
        if (parts.length === 0) {
            console.warn("buildExplorerFromBoilerplate: empty path after split", file.path);
            return;
        }
        let currentFolder = root;
        // Navigate/create folder structure
        for(let i = 0; i < parts.length - 1; i++){
            currentFolder = ensureFolder(currentFolder, parts[i]);
        }
        // Add the file to the final folder WITH CONTENTS
        const fileName = parts[parts.length - 1];
        if (fileName) {
            const fileItem = {
                id: `${currentFolder.id}/${fileName}`,
                name: fileName,
                isFolder: false,
                contents: file.contents || ""
            };
            if (!currentFolder.items) currentFolder.items = [];
            currentFolder.items.push(fileItem);
        }
    });
    return root;
}
}),
"[project]/data/folderData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const explorer = {
    id: "1",
    name: "app",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "vite.svg",
                    isFolder: false,
                    items: [],
                    contents: "/* SVG file used as app logo */"
                }
            ]
        },
        {
            id: "7",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "8",
                    name: "App.jsx",
                    isFolder: false,
                    items: [],
                    contents: `import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App`
                },
                {
                    id: "9",
                    name: "main.jsx",
                    isFolder: false,
                    items: [],
                    contents: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`
                },
                {
                    id: "10",
                    name: "index.css",
                    isFolder: false,
                    items: [],
                    contents: `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}`
                },
                {
                    id: "11",
                    name: "App.css",
                    isFolder: false,
                    items: [],
                    contents: `.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}`
                }
            ]
        },
        {
            id: "12",
            name: "package.json",
            isFolder: false,
            items: [],
            contents: `{
  "name": "vite-react-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.4"
  }
}`
        },
        {
            id: "13",
            name: "vite.config.js",
            isFolder: false,
            items: [],
            contents: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})`
        },
        {
            id: "14",
            name: "index.html",
            isFolder: false,
            items: [],
            contents: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
        }
    ]
};
const __TURBOPACK__default__export__ = explorer;
}),
"[project]/app/main/_components/FileExplorer/MainExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$FileExplorer$2f$Folder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/main/_components/FileExplorer/Folder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$FileExplorer$2f$demo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/main/_components/FileExplorer/demo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$folderData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/folderData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MainExplorer({ object }) {
    const [explorerData, setExplorerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update explorer whenever object.files changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!object?.files || object.files.length === 0) {
            console.log("No files yet, clearing explorer");
            setExplorerData(null);
            return;
        }
        console.log("Building explorer from", object.files.length, "files");
        const newData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$FileExplorer$2f$demo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(object.files, {
            rootName: "files"
        });
        console.log("Explorer built:", newData);
        setExplorerData(newData);
    }, [
        object?.files?.length
    ]); // Re-run when file count changes
    console.log("MainExplorer render - explorerData:", explorerData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black  p-4",
        children: explorerData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-400 mb-2",
                    children: [
                        "Files: ",
                        object?.files?.length || 0
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/main/_components/FileExplorer/MainExplorer.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$FileExplorer$2f$Folder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    explorer: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$folderData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/FileExplorer/MainExplorer.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-neutral-400 text-center py-64",
            children: object?.files?.length === 0 ? "Waiting for files..." : "No files generated yet..."
        }, void 0, false, {
            fileName: "[project]/app/main/_components/FileExplorer/MainExplorer.tsx",
            lineNumber: 58,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/main/_components/FileExplorer/MainExplorer.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/main/_components/CodeEditor/CodeEditorNew.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeEditorNew
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@monaco-editor/react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCurrentFileStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useCurrentFileStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CodeEditorNew() {
    const { currentFile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useCurrentFileStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentFileStore"])();
    const handleEditorWillMount = (monacoInstance)=>{
        monacoInstance.editor.defineTheme("vyne-premium-dark", {
            base: "vs-dark",
            inherit: true,
            rules: [
                {
                    token: "",
                    foreground: "E0E0E0"
                },
                {
                    token: "comment",
                    foreground: "6B7280",
                    fontStyle: "italic"
                },
                {
                    token: "keyword",
                    foreground: "7C3AED",
                    fontStyle: "bold"
                },
                {
                    token: "string",
                    foreground: "10B981"
                },
                {
                    token: "number",
                    foreground: "F59E0B"
                },
                {
                    token: "variable",
                    foreground: "60A5FA"
                },
                {
                    token: "type",
                    foreground: "F472B6"
                },
                {
                    token: "function",
                    foreground: "34D399"
                },
                {
                    token: "operator",
                    foreground: "A78BFA"
                }
            ],
            colors: {
                "editor.background": "#000000",
                "editor.foreground": "#E5E5E5",
                "editorCursor.foreground": "#FFFFFF",
                "editorLineNumber.foreground": "#4B5563",
                "editorLineNumber.activeForeground": "#F3F4F6",
                "editor.lineHighlightBackground": "#1F29371A",
                "editor.selectionBackground": "#3B82F61A",
                "editorBracketMatch.border": "#6366F1",
                "editorIndentGuide.background": "#27272A",
                "editorGutter.background": "#000000"
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full border-l border-neutral-800 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Editor"], {
            beforeMount: handleEditorWillMount,
            theme: "vyne-premium-dark",
            path: currentFile?.name,
            defaultValue: currentFile?.contents,
            options: {
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontLigatures: true,
                fontSize: 14,
                lineHeight: 22,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: true,
                smoothScrolling: true,
                minimap: {
                    enabled: false
                },
                padding: {
                    top: 16
                },
                renderWhitespace: "selection",
                renderLineHighlight: "line",
                bracketPairColorization: {
                    enabled: true
                },
                guides: {
                    bracketPairs: true
                },
                scrollBeyondLastLine: false,
                scrollbar: {
                    verticalScrollbarSize: 6,
                    horizontalScrollbarSize: 6
                }
            }
        }, void 0, false, {
            fileName: "[project]/app/main/_components/CodeEditor/CodeEditorNew.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/main/_components/CodeEditor/CodeEditorNew.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/main/_components/Webcontainers/Preview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function Preview({ serverUrl }) {
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (serverUrl && iframeRef.current) {
            console.log("🖼️ Loading preview:", serverUrl);
            iframeRef.current.src = serverUrl;
        }
    }, [
        serverUrl
    ]);
    if (!serverUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full flex items-center justify-center bg-gray-900 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin text-6xl mb-4",
                        children: "🔄"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "Waiting for dev server URL..."
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full flex flex-col bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-gray-700 rounded px-3 py-1 text-sm text-gray-300 font-mono truncate",
                    children: serverUrl
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: iframeRef,
                className: "flex-1 w-full border-0 bg-white",
                title: "Preview"
            }, void 0, false, {
                fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/main/_components/Webcontainers/Preview.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/main/_components/Animations/AnimatedLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedLoader",
    ()=>AnimatedLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@lottiefiles/dotlottie-react/dist/index.js [app-ssr] (ecmascript)");
;
;
const AnimatedLoader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotLottieReact"], {
        src: "https://lottie.host/40cc5f67-d834-4c98-9127-32563ff88952/hj805QWfQn.lottie",
        loop: true,
        autoplay: true
    }, void 0, false, {
        fileName: "[project]/app/main/_components/Animations/AnimatedLoader.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ShinyText.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
const ShinyText = ({ text, disabled = false, speed = 5, className = '' })=>{
    const animationDuration = `${speed}s`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `shiny-text ${disabled ? 'disabled' : ''} ${className}`,
        style: {
            animationDuration
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/components/ShinyText.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ShinyText;
}),
"[project]/app/main/_components/Webcontainers/Webcontainers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebContainers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$webcontainer$2f$api$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@webcontainer/api/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useWebContainerStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useWebContainerStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$Webcontainers$2f$Preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/main/_components/Webcontainers/Preview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$Animations$2f$AnimatedLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/main/_components/Animations/AnimatedLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShinyText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ShinyText.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
async function getWebContainerInstance() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    console.log("🚀 Booting WebContainer for the first time...");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const bootPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$webcontainer$2f$api$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebContainer"].boot().then((instance)=>{
        console.log("✅ WebContainer booted successfully");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return instance;
    }).catch((err)=>{
        console.error("❌ Failed to boot WebContainer:", err);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        throw err;
    });
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return bootPromise;
}
function areFilesComplete(files) {
    return files.every((file)=>file && typeof file.path === "string" && file.path.length > 0 && typeof file.contents === "string" && file.contents.length > 0);
}
function hasRequiredFiles(files) {
    const paths = files.map((f)=>f.path).filter(Boolean);
    return paths.includes("package.json") && paths.some((p)=>p.includes("index.html")) && paths.some((p)=>p.includes("src/App.jsx") || p.includes("src/App.tsx"));
}
const FALLBACK_VITE_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`;
function WebContainers({ object, isLoading }) {
    const { setWebContainer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useWebContainerStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebContainerStore"])();
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [installLogs, setInstallLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [serverUrl, setServerUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // ⭐ Add this
    const devProcessRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasRunSetupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // ⭐ Track if we've already set up
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ⭐ WAIT for streaming to complete before doing anything
        if (isLoading) {
            console.log("⏳ AI is still generating files...");
            return;
        }
        // Guard: No data yet
        if (!object?.files || object.files.length === 0) {
            console.log("⏳ Waiting for files...");
            setIsReady(false);
            return;
        }
        if (!areFilesComplete(object.files)) {
            console.log("⏳ Files incomplete...");
            setIsReady(false);
            return;
        }
        if (!hasRequiredFiles(object.files)) {
            console.log("⏳ Missing required files...");
            setIsReady(false);
            return;
        }
        // ⭐ Only run setup ONCE when streaming is complete
        if (hasRunSetupRef.current) {
            console.log("✓ Setup already completed, skipping");
            return;
        }
        hasRunSetupRef.current = true;
        let isMounted = true;
        const setupWebContainer = async ()=>{
            try {
                setError(null);
                setInstallLogs([]);
                setIsReady(false);
                console.log("🎬 Starting WebContainer setup (streaming complete)");
                const instance = await getWebContainerInstance();
                if (!isMounted) return;
                // Kill previous dev server if exists
                if (devProcessRef.current) {
                    console.log("🛑 Killing previous dev server...");
                    devProcessRef.current.kill();
                    devProcessRef.current = null;
                }
                // Build file system
                const fileSystem = {};
                for (const file of object.files){
                    if (!file || !file.path || typeof file.path !== "string") {
                        continue;
                    }
                    let contents = file.contents || "";
                    // ⭐ Fix vite.config.js if broken
                    if (file.path === "vite.config.js" || file.path === "vite.config.ts") {
                        if (contents.includes("from 'vite'import") || !contents.includes("export default")) {
                            console.warn("⚠️ Using fallback vite.config.js");
                            contents = FALLBACK_VITE_CONFIG;
                        }
                    }
                    const pathParts = file.path.split("/").filter((p)=>p);
                    if (pathParts.length === 0) continue;
                    const fileName = pathParts.pop();
                    let current = fileSystem;
                    for (const dir of pathParts){
                        if (!current[dir]) {
                            current[dir] = {
                                directory: {}
                            };
                        }
                        current = current[dir].directory;
                    }
                    current[fileName] = {
                        file: {
                            contents
                        }
                    };
                }
                console.log("📂 Mounting file system:", Object.keys(fileSystem));
                await instance.mount(fileSystem);
                if (!isMounted) return;
                setWebContainer(instance);
                // ⭐ Run npm install ONCE
                console.log("📦 Installing dependencies (one time)...");
                const installProcess = await instance.spawn("npm", [
                    "install"
                ]);
                const logs = [];
                installProcess.output.pipeTo(new WritableStream({
                    write (data) {
                        const logLine = data.toString();
                        console.log("📦", logLine);
                        logs.push(logLine);
                        setInstallLogs([
                            ...logs
                        ]);
                    }
                }));
                const installExitCode = await installProcess.exit;
                if (installExitCode !== 0) {
                    const errorMessage = logs.join("\n").slice(-500);
                    throw new Error(`npm install failed\n\n${errorMessage}`);
                }
                if (!isMounted) return;
                // ⭐ Start dev server ONCE
                console.log("🔥 Starting dev server (one time)...");
                const devProcess = await instance.spawn("npm", [
                    "run",
                    "dev"
                ]);
                devProcessRef.current = devProcess;
                // ⭐ Wait for the server to be ready and get the URL
                instance.on("server-ready", (port, url)=>{
                    console.log("🎉 Dev server ready at:", url);
                    setServerUrl(url); // Add this state
                });
                devProcess.output.pipeTo(new WritableStream({
                    write (data) {
                        console.log("🔥", data);
                    }
                }));
                setIsReady(true);
                console.log("✅ WebContainer setup complete!");
            } catch (err) {
                console.error("❌ WebContainer setup error:", err);
                if (isMounted) {
                    setError(err.message || "Unknown error");
                    setIsReady(false);
                    hasRunSetupRef.current = false; // Allow retry
                }
            }
        };
        setupWebContainer();
        return ()=>{
            isMounted = false;
        };
    }, [
        isLoading,
        object?.files
    ]); // ⭐ Re-run when isLoading changes
    // Streaming in progress
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-dvh p-2 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse text-6xl mb-4",
                        children: "🤖"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-lg",
                        children: "AI is generating files..."
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm mt-2",
                        children: [
                            object?.files?.length || 0,
                            " files received so far"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-bounce",
                                style: {
                                    animationDelay: "0.1s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-bounce",
                                style: {
                                    animationDelay: "0.2s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this);
    }
    if (!object?.files || object.files.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-dvh flex flex-col justify-center items-center mx-auto ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShinyText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    text: "Your Preview will come here ...",
                    disabled: false,
                    speed: 2.5,
                    className: "custom-class text-center "
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$Animations$2f$AnimatedLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedLoader"], {}, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
            lineNumber: 301,
            columnNumber: 7
        }, this);
    }
    if (!areFilesComplete(object.files) || !hasRequiredFiles(object.files)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-dvh p-2 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse text-6xl mb-4",
                        children: "📋"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-lg",
                        children: "Validating files..."
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                lineNumber: 319,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
            lineNumber: 318,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-dvh p-2 flex items-center justify-center overflow-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-2xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "❌"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 font-semibold text-lg mb-2",
                        children: "Setup Error"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left bg-gray-900 p-4 rounded text-xs text-gray-300 overflow-auto max-h-96 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "whitespace-pre-wrap",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            hasRunSetupRef.current = false;
                            setError(null);
                            window.location.reload();
                        },
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
            lineNumber: 329,
            columnNumber: 7
        }, this);
    }
    if (!isReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-dvh p-2 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin text-6xl mb-4",
                        children: "⚙️"
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-lg",
                        children: "Setting up project..."
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm mt-2",
                        children: [
                            "Installing ",
                            object.files.length,
                            " files"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this),
                    installLogs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 bg-black p-3 rounded text-xs text-gray-400 max-w-md mx-auto max-h-32 overflow-auto text-left",
                        children: installLogs.slice(-5).map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: log
                            }, i, false, {
                                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                                lineNumber: 364,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                        lineNumber: 362,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                lineNumber: 354,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
            lineNumber: 353,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-dvh p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$main$2f$_components$2f$Webcontainers$2f$Preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                serverUrl: serverUrl
            }, void 0, false, {
                fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/app/main/_components/Webcontainers/Webcontainers.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
}),
"[project]/store/useStatus.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStatus",
    ()=>useStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        status: "ready",
        setStatus: (status)=>set({
                status: status
            })
    }));
}),
"[project]/store/useChatStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useChatStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        messages: [],
        addMessage: (msg)=>set((state)=>({
                    messages: [
                        ...state.messages,
                        msg
                    ]
                })),
        clearMessages: ()=>set({
                messages: []
            })
    }), {
    name: 'vyne-ai-chat-session',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>sessionStorage)
}));
const __TURBOPACK__default__export__ = useChatStore;
}),
"[project]/app/main/_components/Home.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/main/_components/Home.tsx'\n\nExpected '</', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=_1cef9761._.js.map