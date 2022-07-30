import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
   return (
      <>
         <Navbar title="TextUtils" aboutText="About TextUtils" />
         <div className="container">
            <TextForm heading="Enter Your Text here" />
            {/* <About /> */}
         </div>
      </>
   );
}

export default App;
