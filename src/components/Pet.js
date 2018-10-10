import React from 'react'

class Pet extends React.Component {

  gender = () => this.props.pet.gender === 'male' ? '♂' : '♀'

  onAdoptPet = () => this.props.onAdoptPet(this.props.pet.id)

  adopted = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button>
    }
  }


  render() {
    const { name, type, age, weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender()}
            PET NAME: {name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE: {age}</p>
            <p>Weight: PET WEIGHT: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adopted()}
        </div>
      </div>
    )
  }
}

export default Pet
