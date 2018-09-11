import React from 'react'
import {Link} from 'gatsby'

import styles from "./title.module.css"

// import logo from "../../../images/UBC-logo-white.png"

class Title extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titlediv}>
          <div className={styles.namecontainer}>
            <Link to="/">
              <h1>Rabab Kreidieh Ward</h1>
              <p className={styles.sub}>Professor Emeritus, Electrical and Computer Engineering</p>
            </Link>
          </div>
          <div className={styles.logocontainer}>

          </div>
        </div>
      </div>
    );
  }
}

export default Title
