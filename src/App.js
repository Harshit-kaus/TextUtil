import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setmode] =  useState('light');
  const [alert, setalert] = useState(null);

const showAlert = (message,type)=>{
  setalert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setalert(null)
  },1500)
}


  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    
<Navbar title="TextUtils" aboutText="About-Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForm heading="Enter The Text To Analzye" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
