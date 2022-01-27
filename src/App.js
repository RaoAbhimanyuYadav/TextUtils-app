import "./App.css";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import React, {useState } from 'react';
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor = '#212529eb';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils-DarkMode'
    }
    else{
      setMode ( 'light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = 'TextUtils Home'
      setInterval(() => {
        document.title = 'Download TextUtils now '
      }, 2000);
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=> {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Router>
      <NavBar title='TextUtils'  mode={mode} toggleMode= {toggleMode}  />
      <Alert alert={alert}/>
        <Switch>
            <Route exact path="/about">
              <About />
            </Route>
             <Route exact path="/">
              <TextForm heading="Write your text below" mode={mode} showAlert={showAlert}/>
            </Route>
        </Switch>
       </Router>
    </>
  );
}

export default App;
