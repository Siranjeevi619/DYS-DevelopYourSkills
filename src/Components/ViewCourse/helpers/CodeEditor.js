import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

function CodeEditor() {
  const [code, setCode] = useState("// Enter your JavaScript code here...");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = eval(code); 
      setOutput(result || "No output");
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>JavaScript Code Editor</h2>
      <Editor
        height="50vh"
        language="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button onClick={runCode} className="btn btn-primary my-2">
        Run Code
      </button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodeEditor;
