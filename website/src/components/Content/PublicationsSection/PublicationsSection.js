import React from 'react'
import styles from "./publicationssection.module.css"
import PaperStack from "../PaperStack/PaperStack"
import { Link } from "gatsby"


class PublicationsSection extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.flexcont}>
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
        <div className={styles.more}>
          <Link to="/publications">
            <small>view all publications</small>
          </Link>
        </div>
      </div>
    );
  }
}

export default PublicationsSection
