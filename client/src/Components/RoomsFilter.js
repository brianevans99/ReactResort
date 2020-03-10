import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../Components/Title'

//get all unique values
const getUniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext)

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context
  //get unique types
  let types = getUniqueValues(rooms, 'type')
  //add all
  types = ['all', ...types]

  //map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })
  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select type */}
        {/* end select type */}
        <div className='form-group'>
          <label htmlFor='type'> room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  )
}
