import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { TiTimes, TiPlus, TiMinus, TiDivide, TiEquals } from 'react-icons/ti';
import { BsDot } from 'react-icons/bs';


const Keypad  = () => {


    return (
        <div className="keypad-view">
            <div className="btn-row">
                <button name='7'>7</button>
                <button name='8'>8</button>
                <button name='9'>9</button>
                <button className="NaN-btn" name='+'> <TiPlus /> </button>
            </div>
            <div className="btn-row">
                <button name='4'>4</button>
                <button name='5'>5</button>
                <button name='6'>6</button>
                <button className="NaN-btn" name='-'> <TiMinus /> </button>
            </div>
            <div className="btn-row">
                <button name='1'>1</button>
                <button name='2'>2</button>
                <button name='3'>3</button>
                <button className="NaN-btn" name='*'> <TiTimes /> </button>
            </div>
            <div className="btn-row">
                <button name='.'> <BsDot /> </button>
                <button name='0'>0</button>
                <button name='='> <TiEquals /> </button>
                <button className="NaN-btn" name='/'> <TiDivide /> </button>
            </div>
            <div className="clear-btn-div">
                <button className="clear-btn" name='clear'>
                    CLEAR
                </button>
            </div>
        </div>
    );
};

export default Keypad;