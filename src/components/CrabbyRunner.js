import React, { useState } from 'react';
import RunButton from './RunButton';
import XTerminal from './Terminal';

const CrabbyRunner = () => {
    const [output, setOutput] = useState('');

    return (
        <div>
            <RunButton setOutput={setOutput} />
            <XTerminal output={output} />
        </div>
    );
};

export default CrabbyRunner;