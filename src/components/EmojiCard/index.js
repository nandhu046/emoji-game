import './index.css'

const EmojiCard = props => {
  const {emojiDetails, toGetEmojiId} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    toGetEmojiId(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmoji}>
      <button className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
