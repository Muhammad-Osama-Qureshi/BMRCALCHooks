
import './App.css';
import { useState } from 'react';

function App() {
const [weight,setweight]=useState("")
const [height,setheight]=useState("")
const [Bmi,setBMI]=useState("")
const [result,setresult]=useState("")





function handler(e)
{
  setweight(e.target.value)
}
function handler2(e){
  setheight(e.target.value)
}
 

function HandleBmi (){
  const calcBmi = (weight / (height / 100) ** 2).toFixed(2);
  setBMI(calcBmi)
 
  let resultDisplay = ""; //to display BMI result

  if (Bmi < 18)
      resultDisplay = "Too thin"; //Less than 18 means too thin
  else if (Bmi>=18 && Bmi<25)
      resultDisplay = "Perfect"; //otherwise >= 18 && < 25
  else 
      resultDisplay = "Overweight"; //otherwise > 25

   setresult(resultDisplay)    


function reset(){
  setBMI("")
  setheight("")
  setweight("")
  setresult("")
}


  return (
    
    <div className="App">
      <div className="container">
        <div className="cal">
          BMR Calculator
          <br/>
          <br/>
          Weight<input placeholder="Weight in Kg" value={weight} onChange={handler} type="number" name="weight"  id=""/>
          <br/>
          Height<input placeholder="Height in cm" value={height} onChange={handler2} type="number" name="height"  id=""/>
          <br/>
          BMI <input  placeholder="BMI" value={Bmi} type="number" name="" id=""/>
          <br/>
        
      <button className="btn" onClick={HandleBmi}>Calculate</button>
          <br/>
          <button onClick={reset} className="reset">Reset</button>
          {result}
        </div>
      </div>
    </div>

  );
}

export default App;
