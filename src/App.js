import React ,{ useState } from 'react'; // useState hook is imported for declaring state variables.
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';


export default function App() {

  const[Mode,SetMode] = useState("light"); // State var 'Mode' tells the mode of the application: dark or light.
  
  let toggleMode = () =>{
    if(Mode === "light"){
      // Apply Dark Mode
      SetMode("dark");
      document.body.style.background = "#450e0e";
      showAlert("Dark mode has been Enabled!","success");
    }
    else{
      //Apply Light mode
      SetMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been Enabled!","success");
    }
  }

  const[alert,setalert] = useState(null); // State object 'alert' describes the alert message.
  //Here alert is an object
  
  //fat arrow function, when called used setalert to set the value of alert object
  let showAlert = (message,type) => { 
    setalert({
      msg: message,
      type: type
    });
    
    // SetTimeout will automatically dismiss the alert (by setting it null) after 2000ms.
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <>
      {/* NavBar Component */}
      <Navbar mode={Mode} toggleMode={toggleMode}/>

      {/* Alert Component */}
      <Alert alert={alert}/> 

      {/* TextForm Component */}
      <TextForm mode={Mode} showAlert={showAlert} />

      {/* About Component */}
      <About mode={Mode}/>
      
      {/* Footer Component */}
      <Footer mode={Mode}/>
    </>
  );
}

