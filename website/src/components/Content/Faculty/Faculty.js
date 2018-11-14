import React from 'react'
import styles from "./faculty.module.css"
import Img from "gatsby-image"

class Faculty extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.image}>
            <Img sizes={this.props.image}/>
          </div>
          <div className={styles.info_left}>
            <div className={styles.info_left_1}>
              <h2>{this.props.name}</h2>
              <p className={styles.title}>{this.props.title}</p>
            </div>
            <div className={styles.info_left_2}>
              <a className={styles.links} href={"mailto:"+this.props.email}>{this.props.email}</a>
              <a className={styles.links} href={this.props.website}>{this.props.website}</a>
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.info_right}>
            <div className={styles.info_right_1}>
              <h2>{this.props.name}</h2>
              <p className={styles.title}>{this.props.title}</p>
            </div>
            <div className={styles.info_right_2}>
              <a className={styles.links} href={"mailto:"+this.props.email}>{this.props.email}</a>
              <a className={styles.links} href={this.props.website}>{this.props.website}</a>
            </div>
          </div>
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