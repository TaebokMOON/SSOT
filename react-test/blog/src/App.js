import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {

  let [title, setTitle] = useState(['남자코트 추천', '미사 우동 맛집', '리엑트는 어려워']);
  let[like, setLike] = useState(0)
  let[like1, setLike1] = useState(0)
  let[like2, setLike2] = useState(0)
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h2>블로그임</h2>
      </div>

      <button onClick={ ()=>{
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
      } }>글수정</button>

      <button onClick={ ()=>{
        let copy1 = [...title];
        copy1.sort();
        setTitle(copy1)
      }}>가나다순 정리</button>

      <div className='list'>
        <h3 >{ title[0] }<span onClick={ ()=>{ setLike(like+1) } }>👍</span> { like } </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h3>{ title[1] }<span onClick={ ()=>{ setLike1(like1+1) } }>👍</span> { like1 } </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h3>{ title[2] }<span onClick={ ()=>{ setLike2(like2+1) } }>👍</span> { like2 } </h3>
        <p>2월 17일 발행</p>
      </div>
      
      <Modal></Modal>
      
    </div>
  );

}

export default App;
