import React, { useState } from 'react';
import RunButton from './RunButton';
import Terminal from './Terminal';

const CrabbyRunner = () => {
    const [output, setOutput] = useState('');

    return (
        <div>
            <RunButton setOutput={setOutput} />
            <Terminal output={output} />
        </div>
    );
};

export default CrabbyRunner;