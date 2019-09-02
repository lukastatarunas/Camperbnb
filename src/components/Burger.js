import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '20px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%'
      },
      bmMenu: {
        background: '#FFFFFF',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#FFFFFF',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      <Menu right styles={ styles } >
        <a id="login" className="menu-item" href="https://camperbnb.herokuapp.com/login"><strong>LOGIN</strong></a><br></br><br></br>
        <a id="register" className="menu-item" href="https://camperbnb.herokuapp.com/register"><strong>SIGN UP</strong></a>
      </Menu>
    )
  }
}

export default Burger