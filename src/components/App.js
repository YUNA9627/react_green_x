import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './Router';
import { authService } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
console.log(authService);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false); // 로그인 여부 파악 (시작했는지?)
  useEffect(()=>{

    // -- 페이지가 열리자마자 최초 한 번 실행되어야 (생명주기함수연동)
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 유저정보가 있다면
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
    // --

  },[])

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..." }
    </>
  );
}

export default App;