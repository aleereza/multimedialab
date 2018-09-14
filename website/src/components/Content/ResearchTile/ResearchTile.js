import React from 'react'
import styles from "./researchtile.module.css"
import Img from "gatsby-image"

class ResearchTile extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image}/>
        </div>
        <div className={styles.text}>
          <h2>{this.props.title}</h2>
          <p>{this.props.short}</p>
        </div>
      </div>
    );
  }
}

export default ResearchTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
