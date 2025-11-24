import { z } from "zod";

const summarySchema = `A detailed, structured summary of the generated project in the following EXACT format:
### Title
[Project Name Based on User Request]

### Description
[2–3 sentences describing what the app does and its purpose]

### Theme & Design
  [Choice of colors, typography, layout style,animations, and overall aesthetic]

### Key Features
 [Features included in the app]
`;

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
  summary: z.string().describe(summarySchema),
});
