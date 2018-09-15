import React from 'react'
import styles from "./paperstack.module.css"


class PaperStack extends React.Component {
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

export default PaperStack
