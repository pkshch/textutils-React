
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
const [mode, setMode] =useState('light');
const [alert,setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
   setTimeout(()=>{
     setAlert(null);
   },1500);
}
const toggleMode=()=>{
  if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode has been enabled","success");
    document.title='textutil-Dark mode'; 
    // setInterval(()=>{
    //   document.title='textutil is amazing';
    // },2000)
    // setInterval(()=>{
    //   document.title='install textutil now';
    // },2000)
  }else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    document.title='textutil-light mode';
  }
}
  return (
    <>
 {/* <Router> */}
 <Navbar title="Textutils"mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert} />
 <div className="container my-3">
 {/* <Routes>
          <Route exact path="/about"element={ <About />}>
           
          </Route>
        <TextForm showAlert={showAlert} heading="enter the text to analyze below :" mode={mode}/>
          <Route exact path="/"element=
          {}>
          </Route>
 </Routes> */}
  <TextForm showAlert={showAlert} heading="enter the text to analyze below :" mode={mode}/>
  </div>
  {/* </Router> */}
 

</>
  );
}

export default App;

