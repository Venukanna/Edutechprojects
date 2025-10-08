
import { Sandpack } from "@codesandbox/sandpack-react";

export default function ReactSandpackPlayground({ files }) {
  return (
    <Sandpack
      template="react"
      files={files}
      options={{
        showTabs: false,           // Hides Sandpack file tabs!
        showLineNumbers: true,
        showConsole: true,
        wrapContent: false,
        editorHeight: 650,
        editorWidthPercentage: 0,
        editorHeightPercentage: 50,
        showNavigator: false,      // Hides the file navigator
        showPreview: false,         // Show the rendered React app preview
      }}
      style={{
        minHeight: 300,
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        background: "#fff",
        marginTop: "1rem",
      }}
    />
  );
}
