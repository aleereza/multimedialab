import React from 'react'
import styles from "./researchsection.module.css"


class ResearchSection extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tilescontainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ResearchSection
