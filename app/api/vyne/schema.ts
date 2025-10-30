import { z } from "zod";

// A single file representation
const FileSchema = z.object({
  path: z
    .string()
    .describe(
      "The full path of the file, e.g., 'src/main.jsx' or 'index.html'"
    ),
  contents: z.string().describe("The complete text content of the file."),
});

// The root project schema
export const ProjectSchema = z.object({
  files: z
    .array(FileSchema)
    .describe("A flat list of all files in the project."),
  summary: z
    .string()
    .describe(
      `A detailed, structured summary of the generated project in the following EXACT format:

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
- ✅ Professional UI with dark theme and smooth animations`
    ),
});
