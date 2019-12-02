import React from "react";
import styles from "./faculty.module.css";
import Img from "gatsby-image";

class Faculty extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.left_container}>
            <div className={styles.image}>
              <Img fluid={this.props.image} />
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.info_right}>
              <div className={styles.info_right_1}>
                <h2>{this.props.name}</h2>
                <p className={styles.title}>{this.props.title}</p>
              </div>
              <div className={styles.info_right_2}>
                <a className={styles.links} href={"mailto:" + this.props.email}>
                  {this.props.email}
                </a>
                <a
                  className={styles.links}
                  href={this.props.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.website}
                </a>
              </div>
            </div>
            <div className={styles.bio_right}>
              <p>{this.props.bio}</p>
            </div>
          </div>
        </div>
        <div className={styles.info_bottom}>
          <div className={styles.bio_bottom}>
            <p>{this.props.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
