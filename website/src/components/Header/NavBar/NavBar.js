import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styles from "./navbar.module.css"
import NavBarLink from "../NavBarLink/NavBarLink"
import cx from "classnames";

class NavBar extends React.Component {

  render() {

    var title_height = 5.5 * 16;

    let navbarclass = cx(styles.navcontainer, {
      [styles.sticky]: (this.props.yscroll >= title_height),
    });

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
          <div className={styles.container}>
            <div className={navbarclass}>
              <div className={styles.navdiv}>
                {data.allNav.edges.map((row,i) => (
                  <NavBarLink key={i}
                    name={row.node.name}
                    to={row.node.to}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}

export default NavBar
