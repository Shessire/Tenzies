import { useState, useRef, useEffect } from 'react';
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [number, setNumber] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null)

  function generateAllNewDice() {
    // return new Array(10)
    //   .fill(0)
    //   .map(() => ({value: Math.floor(Math.random() * 6) + 1), isHeld: false})

    const dice = [];
    for(let i = 0; i < 10; i++) {
      const random = {
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false, 
        id: nanoid()
      }
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
    if (!gameWon) {
      setNumber((prev) => (
        prev.map((d) => (
          d.isHeld
          ? d
          : {...d, value: Math.floor(Math.random() * 6) + 1}
        ))
      ))
    } else {
      setNumber(generateAllNewDice())
    }
  }

 
  const gameWon = number.every(n => n.isHeld)
    && number.every(n => n.value === number[0].value)


  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon])
  
  return (
    <main>
      {gameWon 
        ? <Confetti />
        : null
      }
      <div aria-live='polite' className='sr-only'>
        {gameWon && <p>Congratulations! You won! press "New Game" to start again.</p>}
      </div>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
        {number.map((n) => (
          <Die 
            key={n.id} 
            id={n.id} 
            value={n.value} 
            isHeld={n.isHeld} 
            click={clickDice}
          />
        ))}
      </div>
      <button ref={buttonRef} className='roll-dice' onClick={reRoll}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
