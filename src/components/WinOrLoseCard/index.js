import './index.css'

const WinOrLoseCard = props => {
  const {scoreOfAGame, text, greet, newMatch} = props
  const imgUrl =
    scoreOfAGame === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const restartGame = () => {
    newMatch(0)
  }

  return (
    <div className="lossCard-container">
      <div className="game-info-container">
        <h1 className="heading">{greet}</h1>
        <p className="para">{text}</p>
        <p className="game-result">{scoreOfAGame}/12</p>
        <button type="button" className="button" onClick={restartGame}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="result-img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
