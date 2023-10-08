import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignIn from './components/sign_in'
import SignUp from './components/sign_up'
import Managment from './components/management';



function App() {

    
  
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Hero/>}/>
      <Route path='/signup' element ={<SignUp/>}/>
      <Route path ='/signin' element={<SignIn/>}/>
      <Route path='/Management' element={<Managment/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}




export default App;
