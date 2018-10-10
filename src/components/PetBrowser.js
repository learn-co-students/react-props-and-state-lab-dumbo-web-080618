import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {

  onAdoptPet = (id) => {
    this.props.onAdoptPet(id)
  }
  petCards = () => {

  }
  render() {
    const petCards = this.props.pets.map(pet => <Pet key={pet.id} singlePet={pet} onAdoptPet={this.onAdoptPet} isAdopted={pet.isAdopted}/>)
    return <div className="ui cards">{petCards} </div>
  }
}

export default PetBrowser
