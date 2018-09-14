import React from "react"
import styles from "./footer.module.css"

import FooterElement from "./FooterElement/FooterElement"

class Footer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.footerdiv}>
          <div className={styles.row}>
            <div className={styles.col}>
              <FooterElement>
                Multimedia Lab
              </FooterElement>
              <FooterElement>
                School fo Engneering Science
              </FooterElement>
            </div>
            <div className={styles.col}>
              <FooterElement>
                Simon Fraser University
              </FooterElement>
            </div>
        </div>
        </div>
      </div>
    )
  }
}


export default Footer
