import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import NavSlideLink from "../NavSlideLink/NavSlideLink"

class NavSlide extends React.Component {

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
      <StaticQuery
        query={
          graphql`
            query {
              allNav: allNavCsv {
                edges {
                  node {
                    name
                    to
                  }
                }
              }
            }
          `
        }

        render={data => (
          <Menu right styles={ styles }>
            {data.allNav.edges.map((row,i) => (
              <NavSlideLink key={i}
                name={row.node.name}
                to={row.node.to}
              />
            ))}
          </Menu>
        )}
      />
    );
  }
}

export default NavSlide
