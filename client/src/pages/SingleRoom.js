import React, { Component, Fragment } from 'react'
import defaultImg from '../images/default-img.jpg'
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

    //if you don't want the main room image to show in the smaller images...(use rest operator)
    const [mainImg, ...defaultImg] = images

    return (
      <Fragment>
        <StyledHero img={mainImg || this.state.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3> details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity < 2 ? ` ${capacity} person ` : ` ${capacity} people `}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </Fragment>
    )
  }
}
