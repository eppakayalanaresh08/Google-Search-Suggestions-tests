import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  suggestInput = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowEachClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const suggestResult = suggestionsList.filter(eachSuggest =>
      eachSuggest.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="image-search"
              />
              <input
                type="search"
                className="input-element"
                placeholder="Search Google"
                onChange={this.suggestInput}
                value={searchInput}
              />
            </div>
            <ul className="list-Items">
              {suggestResult.map(eachItem => (
                <SuggestionItem
                  arrowEachClick={this.arrowEachClick}
                  suggestItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
