import React from "react";
import styles from "./publication.module.css"

class Publication extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.authors}>{this.props.authors}</span>
        <span>, </span>
        <span className={styles.title}>{this.props.title}</span>
        <span>, </span>
        <span className={styles.ref}>{this.props.reference}</span>
        <span>, </span>
        <span className={styles.ref_detail}>{this.props.reference_detail}</span>
        <span>, </span>
        <span className={styles.month}>{this.props.month}</span>
        <span> </span>
        <span className={styles.year}>{this.props.year}</span>
        <span>.</span>
      </div>
    )
  }
}

export default Publication
