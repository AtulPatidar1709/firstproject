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

   const [text, setText] = useState("Enter your text here");

   return (
      <>
         <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea
                  className="form-control"
                  value={text}
                  onChange={handleOnChange}
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
         </div>
         <div className="container my-2">
            <h1>Your Text Summary</h1>
            <p>
               {text.split(" ").length} words , {text.length} characters
            </p>
         </div>
      </>
   );
}
