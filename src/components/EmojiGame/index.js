/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.


*/

import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLossCard from '../WinOrLoseCard'

let topScore = 0
let shuffledEmojisList = ''
class EmojiGame extends Component {
  state = {
    score: 0,
    gameLoss: false,
    gameTurns: [],
  }

  shuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {gameTurns} = this.state

    if (gameTurns.includes(id) === true) {
      this.setState({gameLoss: true})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameTurns: [...prevState.gameTurns, id],
      }))
    }
  }

  startNewMatch = defaultScore => {
    this.setState({score: defaultScore, gameLoss: false, gameTurns: []})
  }

  render() {
    const {emojisList} = this.props
    shuffledEmojisList = emojisList
    shuffledEmojisList = this.shuffledEmojis()
    const {score, gameLoss} = this.state

    let displayElement = ''
    if (score <= 11 && gameLoss === false) {
      displayElement = (
        <ul className="emojis-container">
          {shuffledEmojisList.map(emoji => (
            <EmojiCard
              emojiDetails={emoji}
              key={emoji.id}
              toGetEmojiId={this.clickedEmoji}
            />
          ))}
        </ul>
      )
    } else if (score === 12) {
      topScore = topScore >= score ? topScore : score
      displayElement = (
        <WinOrLossCard
          scoreOfAGame={score}
          greet="You Won"
          text="Best Score"
          newMatch={this.startNewMatch}
        />
      )
    } else {
      topScore = topScore >= score ? topScore : score
      displayElement = (
        <WinOrLossCard
          scoreOfAGame={score}
          greet="You Lose"
          text="Score"
          newMatch={this.startNewMatch}
        />
      )
    }

    return (
      <div className="container">
        {score <= 11 && !gameLoss ? (
          <NavBar gameScore={score} topScoreForNow={topScore} />
        ) : (
          <NavBar />
        )}
        <div className="main-container">{displayElement}</div>
      </div>
    )
  }
}

export default EmojiGame
