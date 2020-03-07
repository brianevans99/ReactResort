import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RoomsLink extends Component {
  render() {
    return (
      <div>
        <Link to='/rooms'>Rooms</Link>
      </div>
    )
  }
}
