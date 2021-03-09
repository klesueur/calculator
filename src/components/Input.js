import React from 'react';
import { IoIosBackspace } from 'react-icons/io';


const Input  = ({ input }) => {


    return (
        <div className="input-view">
            <p className="results-input">input</p>
            <button> <IoIosBackspace /> </button>
        </div>
    );
};

export default Input;