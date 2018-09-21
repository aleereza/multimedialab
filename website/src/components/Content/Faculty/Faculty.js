import React from 'react'
import styles from "./faculty.module.css"
import Img from "gatsby-image"

class Faculty extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.info_container}>
          <div className={styles.image}>
            <Img sizes={this.props.image}/>
          </div>
          <div className={styles.info_text}>
            <h2>{this.props.name}</h2>
            <p className={styles.title}>{this.props.title}</p>
          </div>
        </div>
        <div className={styles.bio_container}>
          <div className={styles.bio}>
            <p>
              {this.props.bio}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty
