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
                rababw at ece dot ubc dot ca
              </FooterElement>
              <FooterElement>
                (604) 266-4261
              </FooterElement>
            </div>
            <div className={styles.col}>
              <FooterElement>
                University of British Columbia, The Fred Kaiser Building, 5500-2332 Main Mall, Vancouver, BC, Canada, V6T 1Z4
              </FooterElement>
            </div>
        </div>
        </div>
      </div>
    )
  }
}


export default Footer
