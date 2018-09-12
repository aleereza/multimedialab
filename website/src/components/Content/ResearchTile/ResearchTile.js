import React from 'react'
import styles from "./researchtile.module.css"
import Img from "gatsby-image"

class ResearchTile extends React.Component {
  render() {
    const image = this.props.image
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image} />
        </div>
        <div className={styles.text}>
          {this.props.title}
        </div>
        <div className={styles.text}>
          {this.props.short}
        </div>
      </div>
    );
  }
}

export default ResearchTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
