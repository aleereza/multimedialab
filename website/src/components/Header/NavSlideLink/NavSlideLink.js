import React from 'react'
import Link from 'gatsby-link'
import styles from "./navslidelink.module.css"

class NavSlideLink extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return(
      <div className={styles.container}>
        <Link to={this.props.to}>
          <h5 className={styles.link}>
            {this.props.children}
          </h5>
        </Link>
      </div>
    )
  }
}

export default NavSlideLink
