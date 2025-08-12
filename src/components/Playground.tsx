import React, { JSX, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import 'xterm/css/xterm.css';
import { runCrabbyCode } from '@site/src/lib/runcode';

interface PlaygroundProps {
  defaultCode?: string;
}

export default function Playground({ defaultCode = '' }: PlaygroundProps): JSX.Element {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleRunCode = async () => {
    try {
      const result = await runCrabbyCode(code);
      setOutput(result);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="playground-container">
      <div className="editor-section">
        <Editor
          height="400px"
          defaultLanguage="crabby"
          defaultValue={defaultCode}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
      <div className="controls">
        <button 
          className="button button--primary"
          onClick={handleRunCode}
        >
          Run Code
        </button>
      </div>
      <div className="output-section">
        <pre className="output-terminal">
          {output}
        </pre>
      </div>
    </div>
  );
}
