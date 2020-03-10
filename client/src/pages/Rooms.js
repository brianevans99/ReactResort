import React, { Fragment } from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import RoomsContainer from '../Components/RoomsContainer2'
import { Link } from 'react-router-dom'

export default function Rooms() {
  return (
    <Fragment>
      <Hero hero='roomsHero'>
        <Banner title='our rooms'>
          <Link to='/' className='btn-primary'>
            return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>
  )
}
