import React from 'react';
import { Terminal as ReactTerminal } from 'react-console-emulator';

const Terminal = ({ output }) => {
    const commands = {
        showOutput: () => output,
    };

    return (
        <ReactTerminal
            commands={commands}
            startState="showOutput"
            prompt="$ "
            styles={{
                fontFamily: 'monospace',
                fontSize: '14px',
                backgroundColor: '#000',
                color: '#0f0',
            }}
        />
    );
};

export default Terminal;