import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import moon from '../img/moon.png'
import galaxy from './galaxy.png'

const HomePage = () => {
  return (
    <div class='container'>
      <div class='row align-items-center'>
        <div class='col'>
          <h1>test</h1>
        </div>
        <div class='col'>
          <img src={galaxy}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
// export default function Home() {
//   return <div>Hello world!</div>
// }
