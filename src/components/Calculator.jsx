import React, { useState } from 'react';
import calculate from './logic/calculate';
import Buttons from './Buttons';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    text: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };

  const displayResult = calcData.text || calcData.total || '0';

  return (
    <div className="wrapper">
      <div className="screen">{displayResult}</div>
      <Buttons className="btn light-gray" text="AC" onClick={() => handleClick('AC')} />
      <Buttons className="btn light-gray" text="+/-" onClick={() => handleClick('+/-')} />
      <Buttons className="btn light-gray" text="%" onClick={() => handleClick('%')} />
      <Buttons className="btn orange" text="÷" onClick={() => handleClick('÷')} />
      <Buttons className="btn" text="7" onClick={() => handleClick('7')} />
      <Buttons className="btn" text="8" onClick={() => handleClick('8')} />
      <Buttons className="btn" text="9" onClick={() => handleClick('9')} />
      <Buttons className="btn orange" text="x" onClick={() => handleClick('x')} />
      <Buttons className="btn" text="4" onClick={() => handleClick('4')} />
      <Buttons className="btn" text="5" onClick={() => handleClick('5')} />
      <Buttons className="btn" text="6" onClick={() => handleClick('6')} />
      <Buttons className="btn orange" text="+" onClick={() => handleClick('+')} />
      <Buttons className="btn" text="1" onClick={() => handleClick('1')} />
      <Buttons className="btn" text="2" onClick={() => handleClick('2')} />
      <Buttons className="btn" text="3" onClick={() => handleClick('3')} />
      <Buttons className="btn orange" text="-" onClick={() => handleClick('-')} />
      <Buttons className="btn zero" text="0" onClick={() => handleClick('0')} />
      <Buttons className="btn" text="." onClick={() => handleClick('.')} />
      <Buttons className="btn orange" text="=" onClick={() => handleClick('=')} />
    </div>
  );
};

export default Calculator;
