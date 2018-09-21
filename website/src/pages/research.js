import React from 'react'
import { graphql } from "gatsby"
import styles from "./pages.module.css"
import Layout from '../components/Layout/Layout'
import Research from "../components/Content/Research/Research"

class ResearchPage extends React.Component {


  render() {
    const researchdata = this.props.data.allResearch.edges
    const researchimagesdata = this.props.data.allImages.edges
    const publicationsdata = this.props.data.allPublications.edges

    return(
      <Layout>
        <h1>Research</h1>
        <p>A paragraph about research in Multimedia Lab</p>
        <div>
        <Research
          title={researchdata[0].node.title}
          long={researchdata[0].node.long}
          image={researchimagesdata[0].node.childImageSharp.sizes}
        />
        </div>
      </Layout>
    )
  }
}

export default ResearchPage

export const pageQuery = graphql`
  query {

    allPublications: allPublicationsCsv {
      edges {
        node {
          authors
          title
          journal
        }
      }
    }

    allResearch: allResearchCsv {
      edges {
        node {
          title
          short
        }
      }
    }

    allImages: allFile(filter: { sourceInstanceName: { eq: "research_large" } }) {
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
`;
