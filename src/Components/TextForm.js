import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case is applied!","success")
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower Case is applied!","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText('');
    props.showAlert("Text cleared!","success")
  };
  const handleCopy= ()=>{
    let text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!","success")
  }
  const handleFormat = () => {
    let tarray = text.split(".");
    let tstr = '';
    function ltrim(str, chars)
 {
  chars = chars || "\\s";
  return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
 }
    for( let i=0; i<tarray.length; i++){
      tarray[i] = ltrim(tarray[i],' ');
      tstr = tstr + tarray[i].substring(0,1).toUpperCase() + tarray[i].slice(1).toLowerCase();
      if(i<(tarray[i].length - 1)){
        tstr= tstr + '. ';
      }
    }
    setText(tstr);
    props.showAlert("Text edited in formal way!","success")
  };
  const [text, setText] = useState("Enter your text");

  return (
    <>
    <div className="container my-3"style= {{color : props.mode ==='dark'?'white':'#212529'}}>
      <h1>{props.heading} </h1>
      <textarea  className="form-control"  value={text}  id="myBox"  rows="8"  onChange={handleOnChange} style= {{backgroundColor : props.mode==='dark'?'#212529f5':'white', color : props.mode ==='dark'?'white':'#212529'}} ></textarea>
      <button  disabled= {text.length===0}  className="btn btn-primary mx-2"    onClick={upperCase}  >    To Upper Case  </button>
      <button  disabled= {text.length===0} className="btn btn-primary mx-1 my-1"   onClick={lowerCase} >   To Lower Case </button>
      <button  disabled= {text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleClear} >   Clear </button>
      <button  disabled= {text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleFormat} >   Format </button>
      <button  disabled= {text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleCopy} >   Copy </button>
    </div>
    <div className="container my-3" style= {{color : props.mode ==='dark'?'white':'#212529'}} >
      <h3>Your text summary</h3>
      <p>Number of words are {text.split(" ").filter((element)=>  {return element.length!==0}).length} and characters are {text.length}</p>
      <p>Time to read the text will be {0.08 * text.split(" ").filter((element)=>  {return element.length!==0}).length} minutes</p>
    </div>
    </>
  );
}
