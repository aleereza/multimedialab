import React from 'react'
import styles from "./facultysectionpeople.module.css"
import {Link} from "gatsby"


class FacultySectionPeople extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tilescontainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FacultySectionPeople
