import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HomeLink from '../data/HomeLink'
import RoomsLink from '../data/RoomsLink'

export default class Navbar extends Component {
  state = {
    isOpen: false,
    openNav: 'nav-links show-nav',
    closeNav: 'nav-links'
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
            <button
              type='button'
              className='nav-btn'
              onClick={this.handleToggle}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={
              this.state.isOpen ? this.state.openNav : this.state.closeNav
            }
          >
            <li onClick={this.handleToggle}>
              <HomeLink />
            </li>
            <li onClick={this.handleToggle}>
              <RoomsLink />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
