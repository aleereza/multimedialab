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
            <h2>About</h2>	   
            <p>SFU Multimedia Lab was founded in the early 1990’s by the late Dr. Jacques Vaisey, as the Image Communications Laboratory. In 2004 and 2005, Drs. Jie Liang, Atousa Hajshirmohammadi, and Ivan Bajić joined SFU, and the lab was renamed to Multimedia Communications Laboratory. In recent years, the lab’s name has evolved to the Multimedia Lab, to reflect the breadth of the research being undertaken. Our work encompases multimedia signal processing, compression, communications, multimedia ergonomics, analytics, and AI. Our students have won numerous national and international awards, and are highly sought after by employers.
	    </p>
          </div>
          <div className={styles.paperstack}>
            <PaperStack>
              {this.props.children}
              <div className={styles.more}>
                <Link to="/publications">
                  <small>view all publications</small>
                </Link>
              </div>
            </PaperStack>
          </div>
        </div>
     
      </div>
    );
  }
}

export default PublicationsSection
