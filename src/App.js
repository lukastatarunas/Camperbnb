import React from 'react'
import Nav from './components/Nav'
import Burger from './components/Burger';
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'
import Footer from './components/Footer'
import './App.css'
import './components/Nav.css'
import './components/SearchBox.css'
import './components/Footer.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      campgrounds: [],
      searchfield: 'England',
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://camperbnb.herokuapp.com/api/search')
      .then(response => response.json())
      .then(data => this.setState({campgrounds: data.campgrounds}))
  }

  onSearchChange = event => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    let count = 0
    const { campgrounds, searchfield } = this.state
    const filteredCampgrounds = campgrounds.filter(campground => {
      if (campground.location.toLowerCase().includes(searchfield.toLowerCase()))
        count++
      return campground.location.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className="App">
        <Nav />
        <Burger />
        <header className="header">
          <h1 className="title">Search Results</h1>
          <SearchBox searchChange={ this.onSearchChange } />
        </header>
        {count === 415 ? <h1 className="h1">There are { count } campgrounds available</h1> : <h1 className="h1">There are { count } campgrounds available in { searchfield }</h1>}
        <CardList campgrounds={ filteredCampgrounds } />
        <Footer />
      </div>
    )
  }
}

export default App