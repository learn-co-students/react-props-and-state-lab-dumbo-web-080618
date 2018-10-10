import React from 'react'

class Pet extends React.Component {

  // onAdoptPet = () => {
  //   // console.log(this.props.singlePet.id.)
  //   this.setState([this.state.pets]: this.props.singlePe)
  //
  // }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">

            {this.props.singlePet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.singlePet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.singlePet.age}</p>
            <p>Weight: {this.props.singlePet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.singlePet.id)}>Adopt pet</button>}

        </div>
      </div>
    )
  }
}

export default Pet
