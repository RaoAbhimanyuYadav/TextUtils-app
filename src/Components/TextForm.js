import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    // console.log('Upper Case Clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case is applied","success")
  };
  const lowerCase = () => {
    // console.log('Upper Case Clicked');
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log('Change in Textarea');
    setText(event.target.value);
  };
  const handleClear = () => {
    setText('');
  };
  const handleCopy= ()=>{
    let text= document.getElemId("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
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
  };
  const [text, setText] = useState("Enter your text");
  // text='new text'----wrong way
  //setText('new text');----correct way
  return (
    <>
    <div className="container my-3"style= {{color : props.mode ==='dark'?'white':'#212529'}}>
      <h1>{props.heading} </h1>
      <textarea  className="form-control"  value={text}  id="exampleFormControlTextarea1"  rows="8"  onChange={handleOnChange} style= {{backgroundColor : props.mode==='dark'?'#212529f5':'white', color : props.mode ==='dark'?'white':'#212529'}} ></textarea>{/*execute when u type in textarea*/} 
      <button    className="btn btn-primary mx-2"    onClick={upperCase}  >    To Upper Case  </button> {/*run upperCase function on clicking button*/} 
      <button   className="btn btn-primary mx-1 my-1"   onClick={lowerCase} >   To Lower Case </button>
      <button   className="btn btn-primary mx-1 my-1"   onClick={handleClear} >   Clear </button>
      <button   className="btn btn-primary mx-1 my-1"   onClick={handleFormat} >   Format </button>
      <button   className="btn btn-primary mx-1 my-1"   onClick={handleCopy} >   Copy </button>
    </div>
    <div className="container my-3" style= {{color : props.mode ==='dark'?'white':'#212529'}} >
      <h3>Your text summary</h3>
      <p>Number of words are {text.split(" ").filter((element)=>  {return element.length!==0}).length} and characters are {text.length}</p>
      {/* filter(function) and the function output tell filter to set that as output */}
      <p>Time to read the text will be {0.08 * text.split(" ").filter((element)=>  {return element.length!==0}).length} minutes</p>
    </div>
    </>
  );
}
