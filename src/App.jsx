import React from 'react'
import { useState } from 'react';

const App = () => {

    const [calc,setCalc]= useState({
        current:"0",
        total:"0",
        isInitial:true,
        prevOp:""
    });


    function handleNumber(value){
        let newValue=value;

        if(!calc.isInitial){ //it will show 0 only wheen isInitial is true 
        newValue= calc.current + value; // to print value in sequence eg. 1234 
        }  

        setCalc({current:newValue , total: calc.total , isInitial:false , prevOp:calc.prevOp});
    }

    function renderDisplay(){
        return calc.current;
    }

    function handleOperator(value){
        const total=doCalculation();
        setCalc({current: total.toString() , total:total.toString() , isInitial:true , prevOp:value});
    }

    function doCalculation(){
        let total =parseInt(calc.total); // to convert string to integer

        switch(calc.prevOp){
            case "+":
                total += parseInt(calc.current);
                break;
            case "-":
                total -= parseInt(calc.current);
                break;
            case "*":
                total *= parseInt(calc.current);
                break;
            case "/":
                total /= parseInt(calc.current);
                break;
            default:
                total =parseInt(calc.current);                    
        }

        return total;

    }

    function handleClear(){
        setCalc({
            current:"0",
            total:"0",
            isInitial:true,
            prevOp:""
        });
    }

  return (
    <div className="calculator">
        <div className="display">{renderDisplay()}</div>
        <CalcButton value="7" onClick={handleNumber}/>
        <CalcButton value="8" onClick={handleNumber}/>
        <CalcButton value="9" onClick={handleNumber}/>
        <CalcButton className="button-operator" value="/" onClick={handleOperator}/>

        <CalcButton value="4" onClick={handleNumber}/>
        <CalcButton value="5" onClick={handleNumber}/>
        <CalcButton value="6" onClick={handleNumber}/>
        <CalcButton className="button-operator" value="*" onClick={handleOperator}/>

        <CalcButton value="1" onClick={handleNumber}/>
        <CalcButton value="2" onClick={handleNumber}/>
        <CalcButton value="3" onClick={handleNumber}/>
        <CalcButton className="button-operator" value="-" onClick={handleOperator}/>

        <CalcButton value="C" onClick={handleClear} />
        <CalcButton value="0" onClick={handleNumber}/>
        <CalcButton value="=" onClick={handleOperator}/>
        <CalcButton className="button-operator" value="+" onClick={handleOperator}/>
    </div>
  )
}

function CalcButton(props){
return <button className={props.className} onClick={ ()=>props.onClick(props.value)}>{props.value}</button> //callback function for onClick sending props.value to the function
}
export default App