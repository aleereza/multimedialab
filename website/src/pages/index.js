import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import ResearchTile from "../components/Content/ResearchTile/ResearchTile"
import ResearchSection from "../components/Content/ResearchSection/ResearchSection"
import PublicationsSection from "../components/Content/PublicationsSection/PublicationsSection"
import Publication from "../components/Content/Publication/Publication"
import FacultyTile from "../components/Content/FacultyTile/FacultyTile"
import FacultySection from "../components/Content/FacultySection/FacultySection"

import styles from "./pages.module.css"

class IndexPage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const researchdata = this.props.data.allResearch.edges
    const researchimagesdata = this.props.data.allImages.edges
    const publicationsdata = this.props.data.allPublications.edges
    const facultydata = this.props.data.allFaculty.edges

    return(
      <Layout>
        <div className={styles.introsection}>
          <p>The Lab specializes in the design and testing of new algorithms for the compression and transmission of digital image, video and audio signals. These exciting topics have been experiencing an explosion of activity over the past years, due to the development of the next-generation image coding standard JPEG2000 and video coding standard H.264, as well as multiview and 3D video.
          </p>
        </div>

        <ResearchSection>
          {[0,1,2,3].map((i) => (
            <ResearchTile
              key={i}
              title={researchdata[i].node.title}
              short={researchdata[i].node.short}
              image={researchimagesdata[i].node.childImageSharp.sizes}
            />
          ))}
        </ResearchSection>

        <PublicationsSection>
          {[0,1,2,3,4,5].map((i) => (
            <Publication
              key={i}
              authors={publicationsdata[i].node.authors}
              title={publicationsdata[i].node.title}
              journal={publicationsdata[i].node.journal}
            />
          ))}
        </PublicationsSection>

        <FacultySection>
            <FacultyTile
              name={facultydata[0].node.name}
              title={facultydata[0].node.title}
              image={this.props.data.IvanImg.childImageSharp.sizes}
              research1={facultydata[0].node.research1}
              research2={facultydata[0].node.research2}
              research3={facultydata[0].node.research3}
            />
            <FacultyTile
              name={facultydata[1].node.name}
              title={facultydata[1].node.title}
              image={this.props.data.JieImg.childImageSharp.sizes}
              research1={facultydata[1].node.research1}
              research2={facultydata[1].node.research2}
              research3={facultydata[1].node.research3}
            />
            <FacultyTile
              name={facultydata[2].node.name}
              title={facultydata[2].node.title}
              image={this.props.data.AtousaImg.childImageSharp.sizes}
              research1={facultydata[2].node.research1}
              research2={facultydata[2].node.research2}
              research3={facultydata[2].node.research3}
            />
        </FacultySection>
      </Layout>
    )
  }
}

  export default IndexPage

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

    allFaculty: allFacultyCsv {
      edges {
        node {
          name
          title
          email
          website
          research1
          research2
          research3
        }
      }
    }

    allImages: allFile(filter: { sourceInstanceName: { eq: "research_small" } }) {
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

    IvanImg: file(sourceInstanceName: { eq: "faculty_images" }, relativePath: { eq: "ivanbajic.jpg" }) {
    childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    AtousaImg: file(sourceInstanceName: { eq: "faculty_images" }, relativePath: { eq: "atousahajshirmohammadi.jpg" }) {
    childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    JieImg: file(sourceInstanceName: { eq: "faculty_images" }, relativePath: { eq: "jieliang.jpg" }) {
    childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }

  }
`;
