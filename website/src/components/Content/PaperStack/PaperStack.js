import React from 'react'
import styles from "./paperstack.module.css"


class paperstack extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.paper}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default paperstack
