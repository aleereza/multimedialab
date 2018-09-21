import React from 'react'
import styles from "./studenttile.module.css"
import Img from "gatsby-image"
import email_icon from "../../../images/icons/email.png"
import website_icon from "../../../images/icons/link.png"

// min image resolution: 256x256px
class StudentTile extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image} />
        </div>
        <div className={styles.text}>
          <h3>{this.props.name}</h3>
          <p className={styles.title}>{this.props.title}</p>
          <a href={this.props.website}><img src={website_icon} className={styles.icon} alt="" /></a>
          <a href={this.props.email}><img src={email_icon} className={styles.icon} alt="" /></a>
        </div>
      </div>
    );
  }
}

export default StudentTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />
