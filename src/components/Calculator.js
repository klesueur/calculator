import React, {useState} from 'react';
import Input from './Input';
import Keypad from './Keypad';


const Calculator = () => {
    const [input, setInput] = useState('');

    const calculate = () => {
        try {
            setInput((eval(input) || '') + '')
        } catch {
            setInput('ERROR')
        }
    };

    const backspace = () => {
        setInput(input.slice(0, -1));
    };

    const reset = () => {

    };

    return(
        <div className="calculator-view">
            <Input input={input} />
            <Keypad />
        </div>
    )
};

export default Calculator;