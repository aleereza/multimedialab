import React from 'react'
import { graphql } from "gatsby"
// import styles from "./pages.module.css"
import Layout from '../components/Layout/Layout'
import Research from "../components/Content/Research/Research"

class ResearchPage extends React.Component {


  render() {
    const researchdata = this.props.data.allResearch.edges
    const researchimagesdata = this.props.data.allImages.edges
    const publication_research1 = this.props.data.pub_1.edges
    const publication_research2 = this.props.data.pub_2.edges
    const publication_research3 = this.props.data.pub_3.edges
    const publication_research4 = this.props.data.pub_4.edges

    return(
      <Layout>
        <p></p>
        <div>
          <Research
          title={researchdata[0].node.title}
          long={researchdata[0].node.long}
          image={researchimagesdata[0].node.childImageSharp.sizes}
          pubdata={publication_research1}
          />

          <Research
          title={researchdata[1].node.title}
          long={researchdata[1].node.long}
          image={researchimagesdata[1].node.childImageSharp.sizes}
          pubdata={publication_research2}
          />

          <Research
          title={researchdata[2].node.title}
          long={researchdata[2].node.long}
          image={researchimagesdata[2].node.childImageSharp.sizes}
          pubdata={publication_research3}
          />

          <Research
          title={researchdata[3].node.title}
          long={researchdata[3].node.long}
          image={researchimagesdata[3].node.childImageSharp.sizes}
          pubdata={publication_research4}
          />

        </div>
      </Layout>
    )
  }
}

export default ResearchPage

export const pageQuery = graphql`
  query {

    allResearch: allResearchCsv {
      edges {
        node {
          index
          title
          long
        }
      }
    }

    allImages: allFile(
      filter: { sourceInstanceName: { eq: "research_small" } },
      sort: { order: ASC, fields: [name]},
    ){
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

    # publications related to research 1
    pub_1: allPublicationsCsv(
      filter: { research: { eq: "1" } },
      sort: {fields: [index], order: ASC},
    ){
      edges {
        node{
          index
          authors
          title
          reference
          month
          year
          type
          link1
          link2
          link2_name
        }
      }
    }

    pub_2: allPublicationsCsv(
      filter: { research: { eq: "2" } },
      sort: {fields: [index], order: ASC},
    ){
      edges {
        node{
          index
          authors
          title
          reference
          month
          year
          type
          link1
          link2
          link2_name
        }
      }
    }

    pub_3: allPublicationsCsv(
      filter: { research: { eq: "3" } },
      sort: {fields: [index], order: ASC},
    ){
      edges {
        node{
          index
          authors
          title
          reference
          month
          year
          type
          link1
          link2
          link2_name
        }
      }
    }

    pub_4: allPublicationsCsv(
      filter: { research: { eq: "4" } },
      sort: {fields: [index], order: ASC},
    ){
      edges {
        node{
          index
          authors
          title
          reference
          month
          year
          type
          link1
          link2
          link2_name
        }
      }
    }

  }
`;
