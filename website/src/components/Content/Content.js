import React from "react";
import styles from "./content.module.css";

class Content extends React.Component {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}

export default Content;
