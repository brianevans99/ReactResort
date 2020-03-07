import React, { Fragment } from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'

export default function Home() {
  return (
    <Fragment>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $499'
        >
          <Link to='/rooms' className='btn-primary'>
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  )
}
