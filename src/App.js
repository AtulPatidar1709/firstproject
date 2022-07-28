import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
   return (
      <>
         <Navbar title="TextUtils" aboutText="About TextUtils" />
         <div className="container">
            <TextForm heading="Enter Your Text here" />
         </div>
      </>
   );
}

export default App;
