/* eslint-disable jsx-a11y/alt-text */
import './index.css'

const SuggestionItem = props => {
  const {suggestItem, arrowEachClick} = props
  const {suggestion} = suggestItem

  const onarrowClick = () => {
    arrowEachClick(suggestion)
  }

  return (
    <li className="each-arrow-list">
      <p className="suggestion-description">{suggestion}</p>
      <button type="button" className="arrow-enter" onClick={onarrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-Element"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
