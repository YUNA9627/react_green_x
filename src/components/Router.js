import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn})=>{ // 부모로부터 가져오기
  return (
    <Routes>
      { isLoggedIn ? 
        <Route path="/" element={<Home/>}/>       
        :
        <Route path="/" element={<Auth/>}/>      
      }           
    </Routes>
  )

}
export default AppRouter;