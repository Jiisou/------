/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let post = '삼각지 고기 맛집';

  let [글제목, 글제목변경] = useState(['스타벅스 할인 코드','여자 셔츠 추천','수험생 의자 추천']);
  let [좋아요, 좋아요증가] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '더베이크 할인 코드';
    글제목변경(newArray);
  }
  
  return (
    <div className="App">
      <div className="black-nav"> 
        <h4 style={{color:'orange', fontSize:'16pt'}}> 코딩애플 리액트 개발 중</h4>  
        </div>

        <button onClick={ 제목바꾸기 }>새로운 제목</button>
        <div className="list">
          <h3>{ 글제목[0] } <span onClick={()=> { 좋아요증가(좋아요+1) } }> 😽 {좋아요} </span></h3>
          <p style={{color:'gray',fontSize:'13pt',fontWeight:'700', paddingBottom:'20px'}}>4월 11일 발행</p>
          <hr style={{height:'1.5px', backgroundColor:'#1F85DE'}}></hr>
        </div>
        <div className="list">
          <h3>{ 글제목[1] } </h3>
          <p  style={{color:'gray',fontSize:'13pt',fontWeight:'700', paddingBottom:'20px'}}>4월 11일 발행</p>
          <hr style={{height:'1.5px', backgroundColor:'#1F85DE'}}></hr>
        </div>
        <div className="list">
          <h3>{ 글제목[2]}</h3>
          <p  style={{color:'gray',fontSize:'13pt',fontWeight:'700', paddingBottom:'20px'}}> 4월 10일 발행</p>
          <hr style={{height:'1.5px', backgroundColor:'#1F85DE'}}></hr>
        </div>
        
        <Modal />
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
          <h2>modal 창 제목</h2>
          <p>날짜 </p>
          <p>상세 내용</p>
                    
        </div>
  )
}

export default App;
