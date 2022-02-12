import React from 'react'
import Login from './Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Buses from "./Buses"


const App=()=>{
  return (
     <>
     <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
            {(localStorage.getItem("user"))?<>
            
            <Route path="/home" exact element={<Home/>}/>
            <Route path="/bus" exact element={<Buses/>}/>
            </>:
            <> </> } 
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;