import React from 'react'
// import styles from "./navslide.module.css"
// import cx from "classnames";
// import MenuButton from "../MenuButton/MenuButton"
import Link from 'gatsby-link'
// import logo from "../../../images/UBC-logo-white.png"
// import "./navslide.module.css"

import { slide as Menu } from 'react-burger-menu'

class NavSlide extends React.Component {
  // showSettings (event) {
  //   event.preventDefault();
  //
  // }


  render () {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
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
      <Menu right styles={ styles }>
        <ul>
          <li>
            l1
          </li>
          <li>
            l2
          </li>
          <li>
            l3
          </li>
        </ul>
      </Menu>
    );
  }
}

export default NavSlide
// <Menu right width={'100%'} isOpen={false}>
