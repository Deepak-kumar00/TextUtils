import React, {useState} from 'react';


export default function TextForm(props) {
  const[text, setText]=useState('');

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    console.log("Upper Case Button fired.");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    console.log("Lower Case Button fired.");
  }
  const handleOnClick=(event)=>{
    console.log("HandleOnClicke Fired");
    setText(event.target.value);
  }
  const clear=()=>{
    setText('');
  }
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnClick} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-danger" onClick={clear}>Clear</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summery</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
