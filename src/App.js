import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

function App() {
   const [mode, setMode] = useState('light');

   const toggleMode = () => {
      if (mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = 'grey';
      } else {
         setMode('light');
         document.body.style.backgroundColor = 'white';
      }
   };
   return (
      <>
         <Navbar
            title="TextUtils"
            mode={mode}
            aboutText="About TextUtils"
            toggleMode={toggleMode}
         />
         <div className="container">
            <TextForm heading="Enter Your Text here" mode = {mode} />
            {/* <About /> */}
         </div>
      </>
   );
}

export default App;
