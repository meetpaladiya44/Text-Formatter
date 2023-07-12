import './App.css';
import Alert from './Component/Alert';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // by default the mode is light..
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2500);
  }

  const removeAllClasses = () => {
    document.body.className = ''; 
    //? this will remove all the classess from body element
  }

  const toggleMode = (cls) => {
    console.log(cls);
    removeAllClasses();
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      setMode('dark');
      // you can specify return keyword here
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  
  return (
    <>
    <Router>
    {/* Harry - 6, 12 */}
    <Navbar title="Text-utils" aboutchange="About" modeValue={mode} toggleMode={toggleMode}/>

    {/* Harry - 13 */}
    <Alert alert={alert}/>

    {/* Harry - 7, 8, 11 */}
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About modeValue={mode}/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text below" modeValue={mode}/>}></Route>
    </Routes>
    </div>
    
    {/* Harry - 10 */}
    {/* <About/> */}
    </Router>
    </> 
  ); 
}
export default App;