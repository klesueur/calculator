import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { TiTimes, TiPlus, TiMinus, TiDivide, TiEquals } from 'react-icons/ti';
import { BsDot } from 'react-icons/bs';


const Keypad  = () => {


    return (
        <div className="keypad-view">
            <div className="btn-row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="NaN-btn"> <TiPlus /> </button>
            </div>
            <div className="btn-row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="NaN-btn"> <TiMinus /> </button>
            </div>
            <div className="btn-row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="NaN-btn"> <TiTimes /> </button>
            </div>
            <div className="btn-row">
                <button> <BsDot /> </button>
                <button>0</button>
                <button> <TiEquals /> </button>
                <button className="NaN-btn"> <TiDivide /> </button>
            </div>
            <div className="clear-btn-div">
                <button className="clear-btn">CLEAR</button>
            </div>
        </div>
    );
};

export default Keypad;