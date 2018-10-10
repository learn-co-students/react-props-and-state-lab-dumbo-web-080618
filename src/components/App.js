import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
let URL = '/api/pets'

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
  onChangeType = (event) => {
    // console.log(event);
    this.setState({
      filters: {type: event.target.value} // value is all the pets in filters
    })
  }

  onFindPetsClick = () => {
    this.state.filters.type === 'all' ? URL = URL : URL = `${URL}?type=${this.state.filters.type}`
    fetch(URL)
    .then(r => r.json())
    .then(data => this.setState({
      pets: data //changing key pets to data that holds arr
    }))
    // console.log(this.state.pets);
  }



  // handleChange = (petsArr) => {
  //   // ERIC WAS HERE HUE HUE HUE
  //   return petsArr.map(pet => {
  //     this.
  //   })
  // }

  onAdoptPet = (id) => {
    const newPets = this.state.pets.map((pet) => {
      if (pet.id === id){
        return {...pet, isAdopted: !pet.isAdopted}
      }
      else{
        return pet
      }
    })
    this.setState({pets: newPets})
  }

  render() {

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
          <img src="https://millbafs.com/wp-content/uploads/2014/01/group-of-pets-together-15229056.jpg" height="200" width="500"/>
        </div>
      </div>
    )
  }
}

export default App
