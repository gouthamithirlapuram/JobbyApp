import React, {useState} from 'react'
import './App.css'

const words = ['apple', 'grape', 'peach', 'lemon', 'mango']
const targetWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [guesses, setGuesses] = useState([])
  const [attemptsLeft, setAttemptsLeft] = useState(6)
  const [gameStatus, setGameStatus] = useState(null)
  const [currentGuess, setCurrentGuess] = useState('')

  const checkGuess = guess => {
    const result = []
    for (let i = 0; i < 5; i++) {
      if (guess[i] === targetWord[i]) {
        result.push('green')
      } else if (targetWord.includes(guess)) {
        result.push('yellow')
      } else {
        result.push('gray')
      }
    }
    return result
  }

  const handleSubmitGuess = () => {
    if (!words.includes(currentGuess)) {
      alert('Invalid word! Please enter a valid 5-letter word')
      return
    }
    if (currentGuess === targetWord) {
      setGameStatus('You Win!')
    } else if (attemptsLeft - 1 === 0) {
      setGameStatus('Game over! The word was: ' + targetWord)
    }

    setGuesses([...guesses, checkGuess(currentGuess)])
    setAttemptsLeft(attemptsLeft - 1)
    setCurrentGuess('')
  }

  const resetGame = () => {
    setGuesses([])
    setAttemptsLeft(6)
    setGameStatus(null)
    setCurrentGuess('')
  }

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      {gameStatus ? (
        <div>
          <p>{gameStatus}</p>
          <button onClick={resetGame}>New Game</button>
        </div>
      ) : (
        <div>
          <div className="grid">
            {guesses.map((guess, index) => (
              <div key={index}>
                {guess.map((color, i) => (
                  <div className='cell' key={i}>
                    {words[index][i].toUpperCase()}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              maxLength="5"
              value={currentGuess}
              onChange={e => setCurrentGuess(e.target.value)}
              disabled={gameStatus}
              placeholder="Enter your guess"
            />
            <button onClick={handleSubmitGuess} disabled={gameStatus}>
              Submit
            </button>
          </div>
          <p>Attempts left: {attemptsLeft}</p>
        </div>
      )}
    </div>
  )
}

export default App
