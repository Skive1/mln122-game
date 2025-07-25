import { useState } from 'react'
import PreGame from './pages/PreGame'
import InGame from './pages/InGame'
import PostGame from './pages/PostGame'

function App() {
  const [gameState, setGameState] = useState<'preGame' | 'inGame' | 'postGame'>('preGame')
  const [winner, setWinner] = useState<number | null>(null)

  const handleStartGame = () => {
    setGameState('inGame')
    console.log('Game started!')
  }

  const handleGameEnd = (winnerNumber: number | null) => {
    setWinner(winnerNumber)
    setGameState('postGame')
  }

  const handlePlayAgain = () => {
    setGameState('preGame')
    setWinner(null)
  }

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{ backgroundColor: 'rgb(129, 207, 255)' }}
    >
      {gameState === 'preGame' && (
        <PreGame onStartGame={handleStartGame} />
      )}
      
      {gameState === 'inGame' && (
        <InGame onGameEnd={handleGameEnd} />
      )}
      
      {gameState === 'postGame' && (
        <PostGame 
          winner={winner}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  )
}

export default App
