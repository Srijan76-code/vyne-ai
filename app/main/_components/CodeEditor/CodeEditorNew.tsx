"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useCurrentFileStore } from "@/store/useCurrentFileStore";

export default function CodeEditorNew() {
  const { currentFile } = useCurrentFileStore();

  const handleEditorWillMount = (monacoInstance) => {
    monacoInstance.editor.defineTheme("vyne-premium-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "E0E0E0" },
        { token: "comment", foreground: "6B7280", fontStyle: "italic" },
        { token: "keyword", foreground: "7C3AED", fontStyle: "bold" },
        { token: "string", foreground: "10B981" },
        { token: "number", foreground: "F59E0B" },
        { token: "variable", foreground: "60A5FA" },
        { token: "type", foreground: "F472B6" },
        { token: "function", foreground: "34D399" },
        { token: "operator", foreground: "A78BFA" },
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
        "editorGutter.background": "#000000",
      },
    });
  };

  return (
    <div className="h-screen w-full border-l border-neutral-800 "

      >
      <Editor
      
        beforeMount={handleEditorWillMount}
        theme="vyne-premium-dark"
        path={currentFile?.name}
        defaultValue={currentFile?.contents}
        options={{
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontLigatures: true,
          fontSize: 14,
          lineHeight: 22,
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: true,
          smoothScrolling: true,
          minimap: { enabled: false },
          padding: { top: 16 },
          renderWhitespace: "selection",
          renderLineHighlight: "line",
          bracketPairColorization: { enabled: true },
          guides: { bracketPairs: true },
          scrollBeyondLastLine: false,
          scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
          },
        }}
      />
    </div>
  );
}
