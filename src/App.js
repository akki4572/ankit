import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//import Contact from './Components/Contact';
import React,{useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');//weather dark mode is enable or not
  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }

  }

  return (
  <>
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<div className='container my-3'>
<TextForm heading="Enter the text to analyze below"/>

 <About/> 
{/* <Contact/> */}
</div>
</>

  ); 
}

export default App;
 