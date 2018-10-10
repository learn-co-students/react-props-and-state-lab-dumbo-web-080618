import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  onAdoptPet = (id) => {
    this.props.onAdoptPet(id)
  }

  render() {
    const allPets = this.props.getPets.map(pet => <Pet key={pet.id} onAdoptPet={this.onAdoptPet} pet={pet}/>)
    return <div className="ui cards">{allPets}</div>
  }
}

export default PetBrowser
