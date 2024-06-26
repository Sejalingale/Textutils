import React,{useState} from 'react'

export default function Textarea(props) {
 
  const handleupclick=()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted into upper case","success");
  }
  const handlelowclick=()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted into lower case","success");
  }
  const handleclearclick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleared","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard ","success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed","success");
}

  const handlechange=(event)=>{
    setText(event.target.value);
  }

  const[text,setText]=useState("");
  return (
    <>
<div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>     
 <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} id="myBox" onChange={handlechange} style={{backgroundColor:props.mode==="dark"?"#2a5899":"white", color:props.mode==="dark"?"white":"#042743"}} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick} >Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowclick} >Convert to lowercasecase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearclick} >clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
</div>
<div className="container my-3"  style={{color:props.mode==="dark"?"white":"#042743"}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} chracters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the text</p>
  <h2>Text Preview</h2>
  <p>{text.length>0?text:"Enter the text to preview it here"}</p>

</div>
</>
  )
}
