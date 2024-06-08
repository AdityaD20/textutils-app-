{/*}
import React, {useState}  from 'react'

 
 
export default function TextForm(props) {
  const [text, setText] = useState('Enter text here2');
// text = "new text"; // this is wrong way to change the state 
// setText("new text"); // correct way to change the state 
 const handleUpClick = ()=>{
  console.log("Uppercase was clicked " + text )
  let newText = text.toUpperCase();
  setText(newText)
props.showAlert("Convert to Uppercase!" , "success");


 }
 const handleOnChange = (event)=>{
  console.log(" on change ")
setText(event.target.value); 

 }
 //This is for lowercase 
 const handleLRClick = ()=>{
  console.log("Lowercase was clicked " + text )
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Convert to Lowercase!" , "success");
 }

 //This is for Firstuppercase in sentence  
 const handleFUClick = () => {
  console.log("Lowercase was clicked " + text);
  let newText = text.toLowerCase().replace(/(^|\.\s+)([a-z])/g, function(match, p1, p2) {
    return p1 + p2.toUpperCase();
  });
  setText(newText);
  props.showAlert("Convert to Firstuppercase!" , "success");
};
 



  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white': 'black'  }} >
        <h1>{props.heading} </h1>
   <div className="mb-3"> 
    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{ backgroundColor:props.mode==='dark'? 'grey': 'white', color:props.mode==='dark'?'white' : 'black' }}  id="myBox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>  
 
 <button className="btn btn-primary mx-3" onClick={handleLRClick}>Convert To Lowercase </button>
 
 <button className="btn btn-primary mx-3" onClick={handleFUClick}>Convert To FirstUppercase </button>
 <div className="mb-3" /> 
 
 

    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'? 'white': 'black'  }}>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
 

*/}

















import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-p imary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}







