import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // count의 값을 바꾸고 싶으면 setCount를 실행
  // const [count, setCount] = useState(0) //useState함수의 결과는 리스트
  const [row, setRow] = useState([]);

  function loadbtn(){
  if(row.length === 0)
  fetch("http://openapi.seoul.go.kr:8088/636f65566e6273683737536e467763/json/RealtimeCityAir/1/25/").then(
    function(res2) {
      res2.json().then(function(res3) {
        setRow(res3.RealtimeCityAir.row);
      })
    }
  )
  }

  // async await 사용 힘듬
  // const res = await fetch("http://openapi.seoul.go.kr:8088/636f65566e6273683737536e467763/json/RealtimeCityAir/1/25/");
  // const res2 = await res.json();

  console.log(row)

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

      <button onClick={loadbtn}>Loading</button>

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
          {row.map(function(obj) 
          {
            return <tr>
              <td>{obj.MSRSTE_NM}</td>
              <td>{obj.PM10}</td>
              <td>{obj.O3}</td>
              <td>{obj.IDEX_NM}</td>
            </tr>
          })
          }
        </tbody>
      </table>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          안녕하세요 한글
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
