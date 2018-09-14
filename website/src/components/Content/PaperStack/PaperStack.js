import React from 'react'
import styles from "./paperstack.module.css"


class PaperStack extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default PaperStack
