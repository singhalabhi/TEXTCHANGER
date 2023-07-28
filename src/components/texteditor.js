
import React, { useState } from 'react'






export default function texteditor(props) {
    const [text,setText]=useState('')


    const handleupclick=()=>{
    
    let newtext=text.toUpperCase();
    setText(newtext);
    
    
    }
    const handledownclick=()=>{
    
        let newtext=text.toLowerCase();
        setText(newtext);
        
        
        }
    const handleOnchange=(event)=>{
    
       setText(event.target.value)
    
    }

    const handlecleartext=()=>{

        setText('');
    }

    const count={
         word: text.split(' ').length,
         ch: text.length

    }


    if(text.length==0||text[text.length-1]==' ')
    count.word--;

    const handleCopy = () => {
        // var text = document.getElementById("exampleFormControlTextarea1");
        
        // text.select();
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

   const[style2,setstyle2]=useState({
    color: 'black'
   })

const [Mystyle,setmyStyle]=useState({
  backgroundColor: 'white',
  color: 'black'

})



if(props.mode=='dark'&&Mystyle.color=='black')
{
  setmyStyle({
    backgroundColor: '#2c1010',
  color: 'white'
  })
 
  setstyle2({
    color: 'white'
  })

}
else if(props.mode=='light'&&Mystyle.color=='white')
{
  setmyStyle({
    backgroundColor: 'white',
  color: 'black'
  })
  setstyle2({
    color: 'black'
  })
}





  return (
   
        

    <div>
       
        
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label " style={style2} >Write Your Text Below</label>
  <textarea class="form-control" value={text} style={Mystyle} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
  <button type="button" onClick={handleupclick} class="btn btn-success mx-1">Convert To Uppercase</button>
  <button type="button"onClick={handledownclick} class="btn btn-success mx-1">Covert To Lowercase</button>
  <button type="button" onClick={handleCopy} class="btn btn-success mx-1">Copy Text</button>
  <button type="button " onClick={handleExtraSpaces} class="btn btn-success mx-1">Delete Extra Spaces</button>
  <button type="button " onClick={handlecleartext} class="btn btn-success mx-1">clear text</button>
     </div>
     <div style={style2} >total number of word is {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} and total number of charcter is {text.length} </div>


    </div>
  )
}
