import React from 'react';


const Keypad  = () => {


    return (
        <div className="keypad-view">
            <div className="btn-row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="NaN-btn">+</button>
            </div>
            <div className="btn-row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="NaN-btn">-</button>
            </div>
            <div className="btn-row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="NaN-btn">*</button>
            </div>
            <div className="btn-row">
                <button>.</button>
                <button>0</button>
                <button>=</button>
                <button className="NaN-btn">/</button>
            </div>
            <div className="clear-btn-div">
                <button className="clear-btn">CLEAR</button>
            </div>
        </div>
    );
};

export default Keypad;