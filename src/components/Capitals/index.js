import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    const currentStateId = event.target.value
    this.setState({capitalId: currentStateId})
  }

  getCountry = () => {
    const {capitalId} = this.state
    const countryItem = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )
    return countryItem.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)
    console.log(country)
    return (
      <div className="main-container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="select-tab">
            <select onChange={this.onChangeCapital} value={capitalId}>
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
