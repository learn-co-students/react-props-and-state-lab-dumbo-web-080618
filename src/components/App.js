import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  filterOption = (event) => {
    this.setState({
      filters: {
        type: event
      }
    })
  }

  findPets = () => {
    const url = '/api/pets'
    if (this.state.filters.type === 'all') {
      fetch(url).then(res => res.json()).then(res => this.setState({pets: res}))
    } else {
      fetch(url + `?type=${this.state.filters.type}`).then(res => res.json()).then(res => this.setState({pets: res}))
    }
  }

  toggleAdopted = (id) => {
    const newPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: !pet.isAdopted}
      }
      return pet
    })
    this.setState({
      pets: newPets
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.filterOption} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser getPets={this.state.pets} onAdoptPet={this.toggleAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
