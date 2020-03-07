import React, { Component } from 'react'
import defaultImg from '../images/default-img.jpg'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../Components/StyledHero'

export default class SingleRoom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slug: this.props.match.params.slug,
      defaultImg
    }
  }
  static contextType = RoomContext

  // componentDidMount() {}
  render() {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)
    if (!room) {
      return (
        <div className='error'>
          <h3>room does not exist</h3>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </div>
      )
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room
    return (
      <StyledHero img={images[0] || this.state.defaultImg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    )
  }
}
