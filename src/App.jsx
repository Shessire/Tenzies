import './App.css'
import Die from './components/Die'

function App() {

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
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
      </div>
    </main>
  )
}

export default App
