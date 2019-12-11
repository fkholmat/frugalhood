import React from 'react'
import Link from 'next/link'
import NavMenu from '../components/NavMenu'

class NavBar extends React.Component {
  toggleNavBurger = () => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navMenu').classList.toggle('is-active')
  }

  render() {
    return (
      <header className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <img src="../images/frugalhood-logo.png" alt="Frugalhood Logo"/>
              </a>
            </Link>
            <a id="burger" onClick={this.toggleNavBurger}
              role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <NavMenu />
        </nav>
      </header>
    )
  }
}

export default NavBar
