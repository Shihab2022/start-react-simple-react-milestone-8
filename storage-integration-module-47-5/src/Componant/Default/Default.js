import React from 'react';
import { addition, multipaly } from './Result/Result';


const Default = () => {
    const first=20
    const second =30
    const resultForMultiple =multipaly(first,second)
    const additionResult =addition(first ,second)
    
    return (
        <div>
           <h1>Multiply : {resultForMultiple}</h1>
           <h2>Addition : {additionResult}</h2>
        </div>
    );
};

export default Default;