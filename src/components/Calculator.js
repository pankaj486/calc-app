import React, {useState} from "react";
import "./Calculator.css";


// const [changeValue, setChangeValue] = useState([]);


    // console.log(changeValue);

    // const handleChange = () => {
    //     setChangeValue((prev) => {
    //         return [...prev, dataValue]
    //     });
    // }

    // onChange={(e) => setDataValue(e.target.value)} onClick={handleChange} disabled


const Calculator = () => {

    const [dataValue, setDataValue] = useState('');


    const handleClick = (e) => {
        setDataValue(dataValue.concat(e.target.name))
    }
     
    const calculateResult = () => {
        setDataValue(eval(dataValue));
    }
    // console.log(typeof(dataValue));

    return (
        <div className="calc-app">
            <input type="text" style={{width:'233px'}} onChange={handleClick} value={dataValue}></input>
            <br />
            <div className="keypad">
            <button onClick={() => setDataValue("")}>Clear</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="%" onClick={handleClick}>%</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="*" onClick={handleClick}>*</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="=" onClick={calculateResult}>=</button>
            <button name="/" onClick={handleClick}>/</button>
            <button name="-" onClick={handleClick}>-</button>
            </div>
        </div>
    );
}



export default Calculator;