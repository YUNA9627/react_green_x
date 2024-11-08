import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = ()=>{
  const [email, setEmail] = useState(''); // 초기값은 빈 것
  const [password, setPassword] = useState(''); // 초기값은 빈 것
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const auth = getAuth();

  const onChange = (e)=>{
    // const emailvalue = e.target.email;
    // const passwordvalue = e.target.password; 비효율적

    /*
    if(e.target.name === 'email') {
      setEmail(e.target.email);
    }else if(e.target.name === 'password') {
      setPassword(e.target.password);
    } 밑과같이 변환
     */ 

    const {target:{name, value}} = e; // 비구조할당
    if(name === 'email') {
      setEmail(value);
    }else if(name === 'password') {
      setPassword(value);
    }
    
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    if(newAccount) {
      // 회원가입
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 계정생성 완료 후 할일
        const user = userCredential.user; // 생성된 계정의 유저정보 확인
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    }else {
      // -- 로그인
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
      // -- 
    }
  }

  const toggleAccount = ()=>{
    setNewAccount(prev=>!prev);
  }

  return(
    <div className="container">
      <h1 className="mt-3">{newAccount ? '회원가입' : '로그인'}</h1>
      <Form onSubmit={onSubmit} className="mt-5">
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" onChange={onChange} placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPw">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={onChange} />
        </Form.Group>
        <Button type="submit" variant="success" className="mt-3">{newAccount ? '회원가입' : '로그인'}</Button>
        <div className="mt-2">{error}</div>
      </Form>
      <hr/>
      <Button type="submit" onClick={toggleAccount} variant="outline-dark" size="sm" className="mt-3">{newAccount ? '로그인으로 전환' : '회원가입으로 전환'}</Button>
  </div>
  )
}

export default Auth;