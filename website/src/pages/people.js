import React from 'react'
import styles from "./pages.module.css"

class PeoplePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={styles.pagecontainer}>
        <h1>Areas of special interest and accomplishments</h1>
        <p>My research has mainly focused on the field of Signal Processing, dealing with the analysis, interpretation, and manipulation of signals that represent observable quantities. An unexhaustive list of these signals include audio, video, speech, image, geophysical, sonar, radar, medical, musical and communication. My research involves solving real-life issues using  signal processing theories and techniques.
        </p>
      </div>
    )
  }
}

  export default PeoplePage