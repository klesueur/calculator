import React from 'react';
import Input from './Input';
import Keypad from './Keypad';


const Calculator = () => {


    return(
        <div className="calculator-view">
            <Input />
            <Keypad />
        </div>
    )
};

export default Calculator;