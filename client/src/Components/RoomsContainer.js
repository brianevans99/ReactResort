import React, { Fragment } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../Context'
import Loading from './Loading'

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value
        if (loading) {
          return <Loading />
        }
        return (
          <Fragment>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </Fragment>
        )
      }}
    </RoomConsumer>
  )
}
