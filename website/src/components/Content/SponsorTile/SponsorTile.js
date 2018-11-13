import React from 'react'
import styles from "./sponsortile.module.css"
import Img from "gatsby-image"

class SponsorTile extends React.Component {
  render() {

    return (
      <div className={styles.container}>
        <div className={styles.cell}>
          <a className={styles.aclass} href={this.props.link}>
            <div className={styles.image}>
              <Img sizes={this.props.image}/>
            </div>
            <div className={styles.text}>
              <h3>{this.props.name}</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SponsorTile
