import { useState } from 'react';
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {
  const [number, setNumber] = useState(generateAllNewDice())


  function generateAllNewDice() {
    // return new Array(10)
    //   .fill(0)
    //   .map(() => ({value: Math.floor(Math.random() * 6) + 1), isHeld: false})

    const dice = [];
    for(let i = 0; i < 10; i++) {
      const random = {value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: nanoid()}
      dice.push(random)
    }
    return dice
  }

  function clickDice (id) {
    setNumber((prev) => 
      prev.map((d) => (
        d.id === id
        ? { ...d, isHeld: !d.isHeld}
        : d
      ))
    )
  }

  function reRoll () {
    setNumber(generateAllNewDice())
  }

  return (
    <main>
      <div className='container'>
        {number.map((n) => (
          <Die key={n.id} id={n.id} value={n.value} isHeld={n.isHeld} click={clickDice}/>
        ))}
      </div>
      <button className='roll-dice' onClick={reRoll}>Roll</button>
    </main>
  )
}

export default App
