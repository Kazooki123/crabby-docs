import React, { useState, useCallback } from 'react';
import { exec } from 'child_process';
import path from 'path';
import XTerminal from './Terminal';

const RunButton = ({ code }) => {
    const [output, setOutput] = useState('');

    const handleInput = useCallback((input) => {
        // Process the input here
        // For example, you can set the output based on the input
        setOutput(`You typed: ${input}`);
    }, []);

    const runCrabby = () => {
        const crabbyExePath = path.join(__dirname, 'crabby.exe');
        const helloCbPath = path.join(__dirname, 'hello.cb');

        exec(`${crabbyExePath}` `${helloCbPath}`, (error, stdout, stderr) => {
            if (error) {
                setOutput(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                setOutput(`stderr: ${stderr}`);
                return;
            }
            setOutput(stdout);
        });
    };

    return (
        <div>
            <button onClick={runCrabby}>Run</button>           
            <XTerminal onInput={handleInput} output={output} />
        </div>
    );
};

export default RunButton;