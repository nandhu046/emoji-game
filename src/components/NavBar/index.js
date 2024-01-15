import './index.css'

const NavBar = props => {
  const {gameScore = null, topScoreForNow = null} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="img-style"
        />
        <h1>Emoji Game</h1>
      </div>
      {gameScore === null ? null : (
        <div className="scores-container">
          <p className="scores">Score: {gameScore}</p>
          <p className="scores">Top Score: {topScoreForNow}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
