import React, {useState} from "react";
import {numbers, arrCount} from './data';
import NumberBtn from "./NumberBtn";
import CountBtn from "./CountBtn";
import ClearBtn from "./ClearBtn";
import DeleteBtn from "./DeleteBtn";
import PointBtn from "./PointBtn";
import EqualBtn from "./EqualBtn";

function App() {
  const [result, setResult] = useState('');
  const lastElem = result[result.length - 1];
  const handleClick = (e) => { 
    if(result.length === 1 && result[0] === "0" && ~parseInt(e.target.name)) {
        setResult(e.target.name);
    } else {
      setResult(result.concat(e.target.name));
    }
  };
  const handleCountClick = (e) => {
   if(!parseInt(lastElem)) {
    setResult(result.substring(0, result.length - 1) + e.target.name)
   } else {
    setResult(result.concat(e.target.name))
  };
  };
  const handlePointClick = (e) => {
    if((lastElem === e.target.name && lastElem === ".") || result.includes(".")) {
      setResult(result);
    } else {
      setResult(result.concat(e.target.name))
    }
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }
  const getResult = () => {
    try {
      let res = eval(result).toString();
      setResult(res);
    } catch {
      setResult("");
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} onChange={(e) => setResult(e.target.value)}/>
      </form>
      <div className="btn-container">
        <NumberBtn numbers={numbers} handleClick={handleClick}/>
        <CountBtn arrCount={arrCount} handleClick={handleCountClick} />
        <ClearBtn clear={clear}/>
        <DeleteBtn backspace={backspace}/>
        <PointBtn handleClick={handlePointClick} />
        <EqualBtn getResult={getResult}/>
      </div>
    </div>
  );
}

export default App;