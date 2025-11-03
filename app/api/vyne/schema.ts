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

# Title
[Project Name Based on User Request]

# Description
[2-3 sentences describing what the app does and its purpose]

# Theme & Design
- 1.Color Scheme: [primary, secondary, accent colors]
- 2.Typography: [font families, sizes, weights]
- 3.Layout: [grid/flexbox structure, max-width, spacing]
- 4.Animations: [hover effects, transitions, transform animations used]

`
    ),
});


