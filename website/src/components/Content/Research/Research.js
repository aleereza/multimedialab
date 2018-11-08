import React from 'react'
import styles from "./research.module.css"
import Img from "gatsby-image"
import PubItemGroupInResearch from "../PubItem/PubItemGroupInResearch"

//component for research page
class Research extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container_1}>
          <div className={styles.image}>
            <Img sizes={this.props.image}/>
          </div>
          <div className={styles.text}>
            <h2>{this.props.title}</h2>
            <p>{this.props.long}</p>
          </div>
        </div>
        <PubItemGroupInResearch
          pubdata={this.props.pubdata}
        />
      </div>
    );
  }
}

export default Research

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
