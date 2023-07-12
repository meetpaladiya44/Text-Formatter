import React, {useState} from 'react'

export default function TextForm(props) {
    const upperClick = () => {
      console.log("uppercase was clicked.." + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "success");
    }

    const lowerClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("text is cleared", "success");
    }

    const handleReverseClick = () => {
      let newText = text.split('').reverse().join('');
      setText(newText);
      props.showAlert("text is reversed", "success");
    }

    const handleRemoveClick = () => {
      let newText = text.trim();
      setText(newText);
      props.showAlert("spaces from front and end is removed", "success");
    }

    const handleCopyClick = () => {
      let newText = document.getElementById('myText');
      newText.select();
      navigator.clipboard.writeText(newText.value);
      document.getSelection().removeAllRanges();
      props.showAlert("text is copied to navigator's clipboard", "success");
    }

    const handleOnChange = (event) => {
      console.log("onchange was clicked..")
      setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
    // text = "newText";
    //* this will give an error bcz you cannot modify like this instead you have to use the second
    // parameter function setText for changing the value of the text..
    // setText("hello here the text is changed..") 
  return (
    <>
    <div className='container' style = {{color : props.modeValue === 'light'?'#042743' : 'white'}}>
        <h1 className='mb-3'>{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="6" style = {{backgroundColor : props.modeValue === 'light'?'white' : '#13466e', color : props.modeValue === 'light'?'gray' : 'white'}}></textarea>
         </div>

         <button disabled={text.length===0} className="btn btn-primary my-1" onClick={upperClick}>Convert to UpperCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerClick}>Convert to LowerCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveClick}>Remove spaces</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>

    </div>
    <div className="container my-4" style = {{color:props.modeValue === 'light'?'#042743' : 'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Minutes taken for reading your text</p>
      {/* here /\s+/ is a RegExp which shows non breaking space and new line so split by space and new line also that is the mean of that */}
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
    </div>
    </>
  );
}