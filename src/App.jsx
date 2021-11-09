import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


const CounterApp = () => {
    const [counter, setstate] = useState(0);

    const countNumber = () => {
        setstate((counter + 1) * 3);
    }
    const countNumber2 = () => {
        setstate(counter - 1);
    }

    useEffect(() => {
        async function getData() {
            const respoApi = await axios.get(`https://gorest.co.in/public/v1/todos`);


        } getData();
    })
    return (
        <>
            <div className="headingC">
            <h1>Counter</h1>
            <div className="container">            
                <button class="btn1" onClick={countNumber2}>-</button>
                <h1>{counter}</h1>
                <button class="btn2" onClick={countNumber}>+</button>
                </div>
                </div>
            <div class="container2">
                <span></span>
                <span></span>
                <span></span>                
                </div>
                

        </>
    );
}


export default CounterApp;