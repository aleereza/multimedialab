import React from "react";
import styles from "./publication.module.css";

class News extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.title}>{this.props.title}</span>
        <span>, </span>
        <span className={styles.month}>{this.props.month}</span>
        <span> </span>
        <span className={styles.year}>{this.props.year}</span>
        <span>. </span>
        <a href={this.props.link1} target="_blank" rel="noopener noreferrer">
          {" "}
          [{this.props.link1_name}]
        </a>
      </div>
    );
  }
}

export default News;
