import React from 'react'
import styles from "./publicationssection.module.css"
import PaperStack from "../PaperStack/PaperStack"


class PublicationsSection extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>About Publications</h2>
          <p>A paragraph about publications</p>
        </div>
        <div className={styles.paperstack}>
          <PaperStack>
            {this.props.children}
          </PaperStack>
        </div>
      </div>
    );
  }
}

export default PublicationsSection
