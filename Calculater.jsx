
import React, { useState } from 'react'
import './calculater.css'

function Calculater() {
    const [input, setInput] = useState('');


    const calculatedresult = (input) => {
        
        try {
             const opreaters = ['+', '-', '*', '/']
            let opreater = null;

            for (let i = 0; i <= input.length; i++) {
                if (opreaters.includes(input[i])) {
                    opreater = input[i];
                    break;
                }
            }

            if(!opreater){
                setInput(parseFloat(input).toString());
                return;
            }

            const [operand1, operrand2] = input.split(opreater).map(parseFloat);
            let result;

            switch (opreater) {
                case '+':
                    result = operand1 + operrand2;
                    break;

                case '-':
                    result = operand1 - operrand2;
                    break;
                case '*':
                    result = operand1 * operrand2;
                    break;
                case '/':
                    result = operand1 / operrand2;
                    break;

                default:
                    throw new error('invalid opreater');

            }
            setInput(result.toString());


        }
        catch (error) {
            setInput('error');


        }
    }


    const handlebuttonclick = (value) => {
        if (value === 'C') {
            setInput('');
        } else if (value === '<') {
            setInput(input.slice(0, -1));
        } else if (value === '=') {
            calculatedresult(input);

        }
        else {
            setInput(prev => prev + value);
        }
    }


    return (
        <div className='container'>
            <div className="calc">
                <h1 id='input'>{input}</h1>
                <div>
                    <button onClick={() => handlebuttonclick('C')}>c</button>
                    <button onClick={() => handlebuttonclick('<')} >&lt;</button>
                    <button onClick={() => handlebuttonclick('%')}>%</button>
                    <button onClick={() => handlebuttonclick('/')}>/</button>
                </div>
                <div>
                    <button onClick={() => handlebuttonclick('7')}>7</button>
                    <button onClick={() => handlebuttonclick('8')}>8</button>
                    <button onClick={() => handlebuttonclick('9')}>9</button>
                    <button onClick={() => handlebuttonclick('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => handlebuttonclick('4')}>4</button>
                    <button onClick={() => handlebuttonclick('5')}>5</button>
                    <button onClick={() => handlebuttonclick('6')}>6</button>
                    <button onClick={() => handlebuttonclick('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => handlebuttonclick('1')}>1</button>
                    <button onClick={() => handlebuttonclick('2')}>2</button>
                    <button onClick={() => handlebuttonclick('3')}>3</button>
                    <button onClick={() => handlebuttonclick('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => handlebuttonclick('0')}>0</button>
                    <button onClick={() => handlebuttonclick('00')}>00</button>
                    <button onClick={() => handlebuttonclick('.')}>.</button>
                    <button onClick={() => handlebuttonclick('=')}>=</button>
                </div>

            </div>



        </div>
    )
}

export default Calculater
