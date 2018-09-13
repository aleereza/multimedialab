import React from 'react'
import styles from "./studenttile.module.css"
import Img from "gatsby-image"

class StudentTile extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image} />
        </div>
        <div className={styles.text}>
          {this.props.name}
        </div>
        <div className={styles.text}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default StudentTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
