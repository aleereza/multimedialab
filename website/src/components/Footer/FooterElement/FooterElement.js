import React from "react"
import styles from "./footerelement.module.css"

class FooterElement extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col2}>
            <p>{this.props.children}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterElement
