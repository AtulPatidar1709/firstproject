import React, { useState } from "react";

export default function TextForm(props) {
   const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
   };

   const handleClearText = () => {
      let newText = "";
      setText(newText);
   };

   const handleOnChange = (event) => {
      setText(event.target.value);
   };

   const handleLoClick = (event) => {
      let newText = text.toLowerCase();
      setText(newText);
   };

   const handleReverse = (event) => {
      let newText = text.split(" ").reverse().join(" ");
      setText(newText);
   };

   const copyToClipboard = (event) => {
      let newText = text;
      navigator.clipboard.writeText(newText).then(() => {
         // Alert the user that the action took place.
         // Nobody likes hidden stuff being done under the hood!
         alert("Copied to clipboard");
      });
   };

   const [text, setText] = useState("Enter your text here");

   return (
      <>
         <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea
                  className="form-control"
                  value={text}
                  onChange={handleOnChange}
                  style = {{
                     backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,
                     color : props.mode === 'dark' ? 'white' : 'black'
                  }}
                  id="myBox"
                  rows="9"
               ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
               Upper-Case
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>
               Clear-Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>
               Lower-Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleReverse}>
               Text-Reverse
            </button>
            <button
               className="btn btn-primary mx-2 my-2"
               onClick={copyToClipboard}
            >
               Copy-Text
            </button>
         </div>
         <div className="container my-2" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your Text Summary</h1>
            <p>
               {text.split(" ").length} words , {text.length} characters
            </p>
         </div>
      </>
   );
}
