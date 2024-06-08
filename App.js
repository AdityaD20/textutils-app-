{/*comments 
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
 import React, { useState } from 'react';
 import Alert from './components/Alert';
  
 function App() {
  const [Mode, setMode ] = useState('light'); //wheather dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode =()=>{
  if(Mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark Mode has been enabled", "success");
    document.title = 'Textutils - Dark  Mode ';
setInterval(() => { // using this we can show massage to user like virus 

  document.title = 'Textutils - is Amazing Mode ';
}, 2000);
setInterval(() => {
  document.title = 'Install Textutils Now   ';
}, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
    document.title = 'Textutils - Light  Mode ';
  }
}
 return (
<Router>
 {/* <Navbar title="textutils2" aboutText="About textutils2"/>  */}
 {/*<Navbar/>    if the props  is not set then above Navbar convert into comments an server will choose defalut props which given in the navbar.js  */}
  
  {/* comment 
 <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
 <Alert alert={alert} /> 
 <div className="container my-3 ">  {/*This is for keeping margin */}
 





{/* comments 

 
     </Switch>
        </div>
         </Router>
 </>

  );
} 


export default App;
*/}
 

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}


export default App;