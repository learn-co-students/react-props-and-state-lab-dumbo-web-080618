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
  onChangeType = (typeArg) => {
    this.setState({
      filters: {type: typeArg}
    })
  }
 onFindPetsClick = () => {

   if (this.state.filters.type === "all") {
     fetch("/api/pets").then(r=>r.json()).then((e) => {
       this.setState({
         pets: e
       })
     })
   } else {
     fetch(`/api/pets?type=${this.state.filters.type}`).then(r=>r.json()).then((e) => {
       this.setState({
         pets: e
       })
     })
   }
 }


    onAdoptPet = (id) => {
      // this.props.pet.isAdopted = true
      let petsCopy = [...this.state.pets]

      let pet = petsCopy.find(function(pet) {
        return pet.id === id
      })
      pet.isAdopted = true
      // console.log(petsCopy);
      this.setState({
        pets: petsCopy
      })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
