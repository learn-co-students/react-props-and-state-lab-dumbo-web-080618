import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // onAdoptPet = (id) => {
  //   // this.props.pet.isAdopted = true
  //   let pet = this.props.pets.find(function(pet) {
  //     return pet.id === id
  //   })
  //   pet.isAdopted = true
  //   console.log(pet);
  // }

  isAdopted = (petObj) => {
    return petObj.isAdopted
  }

  render() {
    const petComponets = this.props.pets.map((petObj) => {
      return <Pet isAdopted={this.isAdopted(petObj)} onAdoptPet={this.props.onAdoptPet} pet={petObj} key={petObj.id}/>
    })
    return (
    <div className="ui cards">
      {petComponets}
    </div>)
  }
}

export default PetBrowser
