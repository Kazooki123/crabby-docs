import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const XTerminal = ({ onInput }) => {
    const terminalRef = useRef(null);
    const term = useRef(null);

    // Define the prompt function
    const prompt = () => {
      if (term.current) {
        term.current.write("\\r\\n$ ");
      }
    };

    useEffect(() => {
      term.current = new Terminal({
        cursorBlink: true,
      });

      term.current.onKey(({ key, domEvent }) => {
        const char = domEvent.keyCode;
        if (char === 13) {
          // Enter key
          prompt();
        } else if (char === 32) {
          // Space key
          term.current.write(" ");
          prompt();
        } else if (char === 8) {
          // Backspace key
          // Do not delete the prompt
          if (term.current._core.buffer.x > 2) {
            term.current.write("\\b \\b");
          }
        } else {
          term.current.write(key);
        }

        onInput(key); // Pass the input to the parent component
      });

      term.current.open(terminalRef.current);
      prompt();
    }, []);

    return (
      <div ref={terminalRef} style={{ width: "100%", height: "100%" }}></div>
    );
};

export default XTerminal;
