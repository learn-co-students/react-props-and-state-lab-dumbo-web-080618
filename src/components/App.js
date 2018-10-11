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

  onChangeType = (changeType) =>{
    this.setState({
      filters: {
        type: changeType
      }
    })
  }

  onFindPetsClick = () => {
    let URL = '/api/pets'
    if(this.state.filters.type != 'all'){
      URL += `?type=${this.state.filters.type}`
    }
    fetch(URL).then(res => res.json()).then(pets => this.setState({ pets:pets }))
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(p => {
     return p.id === petId ? { ...p, isAdopted: true } : p;
   });
   this.setState({ pets });
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
