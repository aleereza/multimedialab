import React from "react"
import cx from "classnames"

import styles from "./content.module.css"

class Content extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}


export default Content
