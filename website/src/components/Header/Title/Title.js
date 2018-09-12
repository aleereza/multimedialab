import React from 'react'
import {Link} from 'gatsby'

import styles from "./title.module.css"


class Title extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titlediv}>
          <div className={styles.namecontainer}>
            <Link to="/">
              <h1>Multimedia Lab</h1>
              <p className={styles.sub}>short explanation</p>
            </Link>
          </div>
          <div className={styles.logocontainer}>
            sfu logo
          </div>
        </div>
      </div>
    );
  }
}

export default Title
