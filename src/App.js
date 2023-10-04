
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import TextFrom from './components/TextFrom';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light');

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#464444';
      showAlert("Dark mode has been enabled", "success")
      
      // document.title = 'TextUtils-DarkMode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing';

      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';

      // },1500)

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils-LightMode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route excat path="/">
              <TextFrom heading="Try TextUtils-Word Counter,Character Counter,Remove extra spaces" mode={mode} showAlert={showAlert} />
            </Route>

          </Switch>
        </div>
        <Footer mode={mode}/>
      </Router>

    </>
  );
}

export default App;
