import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

const XTerminal = ({ output }) => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal();
    term.open(terminalRef.current);
    term.write(output);
  }, [output]);

  return (
    <div ref={terminalRef} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default XTerminal;
