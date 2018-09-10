import React from 'react'
import Link from 'gatsby-link'
import styles from "./navbarlink.module.css"

class NavBarLink extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    // if (this.props.active && this.props.change){
    //   this.setState({})
    // }
    return(
      <div className={styles.container}>
        <Link to={this.props.to}>
          <div className={styles.innercontainer}>
            <p className={styles.link}>
              {this.props.children}
            </p>
          </div>
        </Link>
      </div>

    )
  }
}

export default NavBarLink
