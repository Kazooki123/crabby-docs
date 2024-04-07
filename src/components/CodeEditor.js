import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "../css/global.css";

const CodeEditor = ({ language, code }) => {
  const [value, setValue] = useState(
    'const std = @import("std");\\n\\npub fn main() !void {\\n    std.debug.print("Hello, World!\\n", .{});\\n}'
  );

  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: false,
  };

  return (
    <div>
      <h3 style={{ marginBottom: "0.5rem" }}>hello.cb</h3>
      <MonacoEditor
        language="zig"
        value={value}
        options={options}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

export default CodeEditor;
