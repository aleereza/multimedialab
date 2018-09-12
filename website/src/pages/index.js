import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import ResearchTile from "../components/Content/ResearchTile/ResearchTile"

class IndexPage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const researchdata = this.props.data.allResearch.edges
    const researchimagesdata = this.props.data.allImages.edges

    return(
      <Layout>
        <div>
          <h1>Areas of special interest and accomplishments</h1>
          <p>My research has mainly focused on the field of Signal Processing, dealing with the analysis, interpretation, and manipulation of signals that represent observable quantities. An unexhaustive list of these signals include audio, video, speech, image, geophysical, sonar, radar, medical, musical and communication. My research involves solving real-life issues using  signal processing theories and techniques.
          </p>
        </div>
        {[0,1,2].map((i) => (
          <ResearchTile
            title={researchdata[i].node.title}
            short={researchdata[i].node.short}
            image={researchimagesdata[i].node.childImageSharp.sizes}
          />
        ))}
      </Layout>
    )
  }
}

  export default IndexPage

export const pageQuery = graphql`
  query ResearchQuery {
    allResearch: allResearchCsv {
      edges {
        node {
          title
          short
        }
      }
    }
    allImages: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges{
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 1280) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
