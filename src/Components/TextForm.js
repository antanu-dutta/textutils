import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    props.showSetAlert("Text is Uppercase", "success")
    setText(newText)
  }
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    props.showSetAlert("Text is Lowercase", "success")
    setText(newText)
  }
  const handleClearText = () => {
    let newText = "";
    props.showSetAlert("Text box is clear", "success")
    setText(newText);
  }
  const handletTextCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      props.showSetAlert("Text is copied", "success")
    } else {
      props.showSetAlert("There is nothing to copy", "danger")
    }
  }
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, '')
    setText(newText);
    props.showSetAlert("Extra spaces removed", "success")
  }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}  </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="myBox" rows="8" style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} placeholder="Enter Text here"></textarea>
        </div>
        <button className='btn btn-primary me-3' onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className='btn btn-primary me-3' onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        <button className='btn btn-primary me-3' onClick={handleClearText}>Clear Text</button>
        <button className='btn btn-primary me-3' onClick={handletTextCopy}>Copy Text</button>
        <button className='btn btn-primary me-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>
      <div className='container my-4'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{(0.008 * text.split(" ").length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length === 0 ? "Enter Your Text to preview" : text}</p>
      </div>
    </>

  )
}