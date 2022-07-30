import React, { useState } from "react";

export default function TextForm(props) {
   const [text, setText] = useState("Enter your text here");

   return (
      <>
         <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
               <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="9"
               ></textarea>
            </div>
            <button className="btn btn-primary">Convert to UpperCase</button>
         </div>
      </>
   );
}
