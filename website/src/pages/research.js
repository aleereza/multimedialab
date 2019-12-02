import React from "react";
import { graphql } from "gatsby";
// import styles from "./pages.module.css"
import Layout from "../components/Layout/Layout";
import Research from "../components/Content/Research/Research";

class ResearchPage extends React.Component {
  findpub(researchIndex) {
    const all_research_publications = this.props.data.research_pubs.edges;
    var research_publications = all_research_publications.filter(function(row) {
      return row.node.research == researchIndex;
    });
    return research_publications;
  }

  render() {
    const researchdata = this.props.data.allResearch.edges;
    const researchimagesdata = this.props.data.allImages.edges;

    return (
      <Layout>
        <div>
          {researchdata.map((row, i) => (
            <Research
              key={i}
              title={row.node.title}
              long={row.node.long}
              image={researchimagesdata[i].node.childImageSharp.fluid}
              id={toString(row.node.index)}
              pubdata={this.findpub(row.node.index)}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

export default ResearchPage;

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
      filter: { sourceInstanceName: { eq: "research_small" } }
      sort: { order: ASC, fields: [name] }
    ) {
      edges {
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }

    # publications related to research 1
    research_pubs: allPublicationsCsv(
      filter: { research: { ne: "" } }
      sort: { fields: [index], order: ASC }
    ) {
      edges {
        node {
          index
          research
          authors
          title
          reference
          month
          year
          type
          link1
          link2
          link1_name
          link2_name
        }
      }
    }
  }
`;
