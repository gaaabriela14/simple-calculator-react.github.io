import React, { useState } from 'react';
import '../index.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    // Verifica si el último carácter es un operador
    const lastChar = input.charAt(input.length - 1);
    const isOperator = ['+', '-', '*', '/'].includes(lastChar);

    // Si el último carácter es un operador y el nuevo valor también es un operador, no lo añade
    if (isOperator && ['+', '-', '*', '/'].includes(value)) {
      return;
    }

    // Añade el nuevo valor al input
    setInput((prevInput) => prevInput + value);
  };

  // Función para manejar el botón "C" (borra el último carácter)
  const handleClear = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
    setResult(''); // Limpiamos el resultado cuando el usuario borra la entrada
  };

  // Función para manejar el botón "AC" (borra toda la entrada)
  const handleAllClear = () => {
    setInput('');
  };

  // Función para evaluar la expresión matemática y actualizar la entrada
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  //Funcion para porcentaje
  const handlePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  //Funcion para Modulo
  const handleModulo = () => {
    try {
      setInput((parseFloat(input) % 1).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={handleAllClear} className="ac-button">AC</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>

        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>

        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={handlePercentage}>%</button>
        <button onClick={handleModulo}>Mo</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;