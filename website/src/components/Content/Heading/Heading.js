import React from 'react'
import styles from "./heading.module.css"


class Heading extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>
          {this.props.text}
        </h1>
      </div>
    );
  }
}

export default Heading
