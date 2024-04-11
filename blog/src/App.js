import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let post = '삼각지 고기 맛집';

  let [글제목, 글제목변경] = useState(['시험기간 간식 배부','저가 커피 맛집']);

  return (
    <div className="App">
      <div className="black-nav"> 
        <h4 style={{color:'orange', fontSize:'16pt'}}> 코딩애플 리액트 개발 중</h4>  
        </div>

        <div className="list">
          <h3>{ post } </h3>
          <p>4월 10일 발행</p>
          <hr></hr>
        </div>
        <div className="list">
          <h3>{ 글제목[1] } </h3>
          <p>4월 11일 발행</p>
          <hr></hr>
        </div>
        <div className="list">
          <h3>{ 글제목[0] } </h3>
          <p>4월 11일 발행</p>
          <hr></hr>
        </div>
    </div>
  );
}

export default App;
