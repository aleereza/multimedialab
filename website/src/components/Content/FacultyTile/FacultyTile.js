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
          <p className={styles.title}>{this.props.title}</p>
          <h4>Research Interests:</h4>
          <ul>
            <li>{this.props.research1}</li>
            <li>{this.props.research2}</li>
            <li>{this.props.research3}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FacultyTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
