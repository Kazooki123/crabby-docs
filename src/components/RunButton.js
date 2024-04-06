import React, { useState } from 'react';
import { exec } from 'child_process';
import path from 'path';

const RunButton = ({ code }) => {
    const [output, setOutput] = useState('');

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
            {/* <Terminal output={output} */}
        </div>
    );
};

export default RunButton;