import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.shoeAlert("converted to uppercase","success");
    }
    const handletoclear=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=(' ');
        setText(newText);
        props.shoeAlert("text cleared","success");
    }
    const handleLoClick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.shoeAlert("converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text="new text"; wrong way to change the state
    //   setText("new text");// wrong way to change the state
  return (
      <>
    <div className="container"style={{color:props.mode==='dark'?'grey':'#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
             {/* <label for="myBox" className="form-label">Example textarea</label> */}
             <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}rows="8"style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'? 'white':'#042743' }}></textarea>
        </div>
        <button className="btn btn-dark mx-0" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-dark mx-2" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-dark mx-2" onClick={handletoclear}>clear text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'dark' }}>
        <h2>your text summary</h2>
        <p>  {text.split(" ").length} words and {text.length} characters</p>
        <p>  {0.008*text.split(" ").length} Minute read</p>
        <h2>  preview</h2>
        <p> {text.length>0 ?text:"still learning more"} </p>
    </div>
    </>
  )
}
