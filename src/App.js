import React from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Join from './components/Join';
import Mypage from './components/Mypage';
import Test from './components/Test';
import Play from './components/Play';
import Make from './components/Make';
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";

const AppStyle = styled.div `
  height: 100vh;
  background : #eef2ff;
`;

const MainContent = styled.div `
  height: 100vh;
`

const App=()=>{
  return(
    <>
      <AppStyle>
        <Header/>
        {/* <Nav/> */}
        {/* 메인부분 변화하는 페이지 */}
        <MainContent>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Join" element={<Join/>}/>
          <Route path="/Mypage" element={<Mypage/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/Play" element={<Play/>}/>
          <Route path="/Make" element={<Make/>}/>
        </Routes>
        </MainContent>
        <Footer/>
      </AppStyle>
    </>
  )
}

export default App;
