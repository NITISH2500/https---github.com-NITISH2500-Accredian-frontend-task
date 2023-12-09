import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import Axios from 'axios';
import{
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
function App() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[loginStatus,setLoginStatus]=useState("");
  const[signupStatus,setSignupStatus]=useState("");
  const signup=(e)=>{
    console.log("Ee")
    e.preventDefault();
    if(email!==""&&password!==""){
    Axios.post("http://localhost:4000/signup",{
      email:email,
      password:password,
      
    }).then((response)=>{
      if(response.data.message){
        setSignupStatus(response.data.message);
      }else{
        setSignupStatus("Account Created");
      }
    })
  }
  else{
    setSignupStatus("Field is empty ");
  }  
  }
  const login=(e)=>{
    e.preventDefault();
    if(email!==""&&password!==""){
    Axios.post("http://localhost:4000/login",{
      email:email,
      password:password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus("Wrong Details");
      }else{
        setLoginStatus("Account exist");
      }
    })
  }
  else{
    setLoginStatus("login fields are empty")
  }
}
  let too=(e)=>{setEmail(e.target.value)
 
  }
  let pass=(e)=>{setPassword(e.target.value)}
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navbar/>}/>
        <Route exact path="/login" element={<Login too={too} pass={pass} login={login} loginStatus={loginStatus}/>}/>
        <Route exact path="/signup" element={<Signup too={too} pass={pass} signup={signup} signupStatus={signupStatus} />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
