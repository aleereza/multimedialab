import React from 'react'
import styles from "./menubutton.module.css"
import cx from "classnames";

class MenuButton extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let className = cx(styles.container, {
      [styles.close]: !this.props.state,
    });

    return (
      <span className={className}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </span>
    );
  }
}

export default MenuButton
