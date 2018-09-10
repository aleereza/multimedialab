import React from "react"

import Layout from '../components/Layout/Layout'

class IndexPage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return(
      <Layout>
        <div>
          <h1>Areas of special interest and accomplishments</h1>
          <p>My research has mainly focused on the field of Signal Processing, dealing with the analysis, interpretation, and manipulation of signals that represent observable quantities. An unexhaustive list of these signals include audio, video, speech, image, geophysical, sonar, radar, medical, musical and communication. My research involves solving real-life issues using  signal processing theories and techniques.
          </p>
        </div>
      </Layout>
    )
  }
}

  export default IndexPage
