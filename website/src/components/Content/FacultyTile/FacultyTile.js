import React from 'react'
import styles from "./facultytile.module.css"
import Img from "gatsby-image"

class FacultyTile extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image}/>
        </div>
        <div className={styles.text}>
          <h2>{this.props.name}</h2>
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default FacultyTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
