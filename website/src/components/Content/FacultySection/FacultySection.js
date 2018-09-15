import React from 'react'
import styles from "./facultysection.module.css"
import {Link} from "gatsby"


class FacultySection extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tilescontainer}>
          {this.props.children}
        </div>
        <div className={styles.more}>
          <Link to="/people">
            <small>view all people</small>
          </Link>
        </div>
      </div>
    );
  }
}

export default FacultySection
