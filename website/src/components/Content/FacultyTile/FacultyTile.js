import React from "react";
import styles from "./facultytile.module.css";
import Img from "gatsby-image";
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";

class FacultyTile extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image} />
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
          <div className={styles.more_container}>
            <IconContext.Provider
              value={{ className: styles.icon, size: ".7rem", color: "silver" }}
            >
              <div>
                <a
                  href={this.props.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <small className={styles.more}>website </small>
                  <FaChevronRight />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default FacultyTile;
