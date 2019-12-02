import React from "react";
import { graphql } from "gatsby";
// import styles from "./pages.module.css"
import Layout from "../components/Layout/Layout";
import Dataset from "../components/Content/Dataset/Dataset";

class DataPage extends React.Component {
  findpub(datasetIndex) {
    const all_dataset_publications = this.props.data.dataset_pubs.edges;
    var dataset_publications = all_dataset_publications.filter(function(row) {
      return row.node.dataset === datasetIndex;
    });
    return dataset_publications;
  }

  render() {
    const datasetsdata = this.props.data.allDatasets.edges;
    const datasetimagesdata = this.props.data.allImages.edges;

    return (
      <Layout>
        <div>
          {datasetsdata.map((row, i) => (
            <Dataset
              key={i}
              title={row.node.title}
              description={row.node.description}
              link={row.node.link}
              image={datasetimagesdata[i].node.childImageSharp.fluid}
              id={toString(row.node.index)}
              pubdata={this.findpub(row.node.index)}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

export default DataPage;

export const pageQuery = graphql`
  query {
    allDatasets: allDatasetsCsv {
      edges {
        node {
          index
          title
          description
          link
        }
      }
    }

    allImages: allFile(
      filter: { sourceInstanceName: { eq: "datasets" } }
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

    # publications related to datasets
    dataset_pubs: allPublicationsCsv(
      filter: { dataset: { ne: "" } }
      sort: { fields: [index], order: ASC }
    ) {
      edges {
        node {
          index
          dataset
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
