import { useState } from 'react';
import './App.css'
import Die from './components/Die'

function App() {
  const [number, setNumber] = useState(generateAllNewDice())


  function generateAllNewDice() {
    // return new Array(10)
    //   .fill(0)
    //   .map(() => Math.floor(Math.random() * 6) + 1)

    const dice = [];
    for(let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random() * 6) + 1
      dice.push(random)
    }
    return dice
  }

  return (
    <main>
      <div className='container'>
        {number.map((n, index) => (
          <Die key={index} value={n}/>
        ))}
      </div>
    </main>
  )
}

export default App
