import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // count의 값을 바꾸고 싶으면 setCount를 실행
  const [count, setCount] = useState(0) //useState함수의 결과는 리스트
  const [row, setRow] = useState([]);
  

  useEffect(() => { // useEffect는 mount되거나 update될때 실행    fetch하는 것을 여기에 넣으면 update가 계속 반복됨
    console.log('mount or update')
    document.title = 'Vite + React';

    return () => {  // 지웠다가 다시 update되는 과정이 실행될때
      console.log('unmount');
    }
  });
  
  //화면에 첫 렌더링 될때
  useEffect(() => {
    console.log('mount only');
    fetch("http://openapi.seoul.go.kr:8088/636f65566e6273683737536e467763/json/RealtimeCityAir/1/25/").then(
      function(res2) {
        res2.json().then(function(res3) {
          setRow(res3.RealtimeCityAir.row);
        })
      }
    )
  }, []);

  useEffect(() => { //row가 update되었을때만 실행 (여러개 관찰하는 것도 가능)
    console.log('update only', row)
  }, [row])


  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('count',count)

  }, [count]);


  // async await 사용 힘듬
  // const res = await fetch("http://openapi.seoul.go.kr:8088/636f65566e6273683737536e467763/json/RealtimeCityAir/1/25/");
  // const res2 = await res.json();

  // console.log(row)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* <button>Loading</button> */}

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>PM10</th>
            <th>O3</th>
            <th>상태</th>
          </tr>
        </thead>

        <tbody>
          { // 여기부터 html이 아닌 js사용하겠다는 의미의 괄호
          row.map((gu, index ) =>{   //arrow function
            return (          // jsx문법 앞뒤로 ()붙여서 줄바꿔도 jsx가능하게
            <tr key={index}>   
              <td>{gu.MSRSTE_NM}</td>
              <td>{gu.PM10}</td>
              <td>{gu.O3}</td>
              <td>{gu.IDEX_NM}</td>
            </tr>
            )
          })
          }
        </tbody>
      </table>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          안녕하세요 한글
        </p> */}
      </div> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
