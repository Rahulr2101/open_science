import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignIn from './components/sign_in'



function App() {

    
  
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Hero/>}/>
      <Route path='/signup' element ={<SignIn/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}




export default App;
