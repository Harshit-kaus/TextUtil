import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpclick = ()=>{
    // console.log("upclicked " + text)
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showAlert("Converted to uppercase!", "success")
  }

  const handleCaclick = ()=>{
    // console.log("upclicked " + text)
    let newtext = text.split(' ').map(el=> el.charAt(0).toUpperCase()+el.slice(1)).join(' ');
    settext(newtext)
    props.showAlert("Text is captilized!", "success")
  }

  const handleloclick = ()=>{
    // console.log("upclicked " + text)
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showAlert("Converted to lowerrcase!", "success")
  }

  const clearclick = ()=>{
    // console.log("upclicked " + text)
    let newtext = '';
    settext(newtext)
    props.showAlert("Text Cleared!", "success")
  }

  const handleOnchange = (event)=>{
    // console.log('onchsn');
    settext(event.target.value)
    
  }

  const handleSPerLineClick =() =>{
    let newText = text.replaceAll('.',".\n" );
    settext(newText);
    props.showAlert("Paragraph breaked in lines!", "success")
}

const copyClick = ()=>{
  var text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value)
  document.getSelection().removeAllRanges()
  props.showAlert("Text copied!", "success")

}

const removeSpace = () =>{
let newWrite = text.split(/[ ]+/);
settext(newWrite.join(" "))
props.showAlert("Extra space removed!", "success")
} 
  const [text, settext] = useState('');
   
  return (
    <>
<div className='container my-3' style={{color: props.mode==='light'?'#042743':'white'}} >
        <h1>{props.heading}</h1>
     <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="10" ></textarea>
</div>
<div className='container' style={{display: 'flex', justifyContent: 'space-evenly' }}>
<button disabled={text.length===0} className='btn btn-primary' onClick={handleUpclick} >Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary' onClick={handleloclick} >Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary' onClick={handleCaclick} >Capitalized</button>
<button disabled={text.length===0} className='btn btn-primary' onClick={clearclick} >Clear all text</button>
<button disabled={text.length===0} className='btn btn-primary' onClick={handleSPerLineClick} >Break para in lines</button>
<button disabled={text.length===0} className='btn btn-primary' onClick={copyClick} >Copy Text</button>
<button disabled={text.length===0} className='btn btn-primary' onClick={removeSpace} >Remove Extra Space</button>
</div>
    </div>
    <div className='container my-3'style={{color: props.mode==='light'?'#042743':'white'}} >
      <h2>your text summery</h2>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Prewiew</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
