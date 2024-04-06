import React, { useState, useCallback } from "react";
import RunButton from './RunButton';
import XTerminal from './Terminal';

const CrabbyRunner = () => {
  const [output, setOutput] = useState("");

  // This function will handle the input from the terminal
  const handleInput = useCallback((input) => {
    // Process the input here
    // For example, you can set the output based on the input
    setOutput(`You typed: ${input}`);
  }, []);

  return (
    <div>
      <RunButton setOutput={setOutput} />
      <XTerminal onInput={handleInput} output={output} />
    </div>
  );
};

export default CrabbyRunner;