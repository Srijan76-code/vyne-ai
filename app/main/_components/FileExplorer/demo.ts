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

type AiFile = {
  path: string;
  contents: string;
};

interface ExplorerItem {
  id: string;
  name: string;
  isFolder: boolean;
  items?: ExplorerItem[];
  contents?: string; // Add contents for files
}

interface BuildOptions {
  rootName?: string;
}

export default function buildExplorerFromBoilerplate(
  files: AiFile[],
  options: BuildOptions = {}
): ExplorerItem {
  const { rootName = "root" } = options;

  const root: ExplorerItem = {
    id: rootName,
    name: rootName,
    isFolder: true,
    items: [],
  };

  // Validate input
  if (!files || !Array.isArray(files)) {
    console.warn("buildExplorerFromBoilerplate: invalid files input");
    return root;
  }

  // Helper to find or create a folder in the tree
  function ensureFolder(parentFolder: ExplorerItem, folderName: string): ExplorerItem {
    let folder = parentFolder.items?.find(
      (item) => item.isFolder && item.name === folderName
    );

    if (!folder) {
      folder = {
        id: `${parentFolder.id}/${folderName}`,
        name: folderName,
        isFolder: true,
        items: [],
      };
      if (!parentFolder.items) parentFolder.items = [];
      parentFolder.items.push(folder);
    }

    return folder;
  }

  // Process each file
  files.forEach((file) => {
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
    for (let i = 0; i < parts.length - 1; i++) {
      currentFolder = ensureFolder(currentFolder, parts[i]);
    }

    // Add the file to the final folder WITH CONTENTS
    const fileName = parts[parts.length - 1];
    if (fileName) {
      const fileItem: ExplorerItem = {
        id: `${currentFolder.id}/${fileName}`,
        name: fileName,
        isFolder: false,
        contents: file.contents || "", // Include file contents!
      };

      if (!currentFolder.items) currentFolder.items = [];
      currentFolder.items.push(fileItem);
    }
  });

  return root;
}





