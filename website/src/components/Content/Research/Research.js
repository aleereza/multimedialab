import React from 'react'
import styles from "./research.module.css"
import Img from "gatsby-image"

//component for research page
class Research extends React.Component {
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

export default Research

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
