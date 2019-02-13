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
    const publicationsdata = this.props.data.selectedPublications.edges
    const facultydata = this.props.data.allFaculty.edges

    return(
      <Layout>
       

        <ResearchSection>
          {[0,1,2,3].map((i) => (
            <ResearchTile
              key={i}
              index={researchdata[i].node.index}
              title={researchdata[i].node.title}
              short={researchdata[i].node.short}
              image={researchimagesdata[i].node.childImageSharp.sizes}
            />
          ))}
        </ResearchSection>

	    
	   <div className={styles.publications_section}>
           <PublicationsSection>
            {publicationsdata.map((row,i) => (
              <Publication
                key={i}
                authors={publicationsdata[i].node.authors}
                title={publicationsdata[i].node.title}
                reference={publicationsdata[i].node.reference}
                reference_detail={publicationsdata[i].node.reference_detail}
                month={publicationsdata[i].node.month}
                year={publicationsdata[i].node.year}
              />
            ))}
           </PublicationsSection>
           </div>

        <FacultySection>
            <FacultyTile
              name={facultydata[0].node.name}
              title={facultydata[0].node.title}
              image={this.props.data.IvanImg.childImageSharp.sizes}
              website={facultydata[0].node.website}
              research1={facultydata[0].node.research1}
              research2={facultydata[0].node.research2}
              research3={facultydata[0].node.research3}
            />
            <FacultyTile
              name={facultydata[1].node.name}
              title={facultydata[1].node.title}
              image={this.props.data.JieImg.childImageSharp.sizes}
              website={facultydata[1].node.website}
              research1={facultydata[1].node.research1}
              research2={facultydata[1].node.research2}
              research3={facultydata[1].node.research3}
            />
            <FacultyTile
              name={facultydata[2].node.name}
              title={facultydata[2].node.title}
              image={this.props.data.AtousaImg.childImageSharp.sizes}
              website={facultydata[2].node.website}
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

    selectedPublications: allPublicationsCsv(
      filter: { selected: { eq: "1" } },
      sort: {fields: [index], order: ASC},
    ){
      edges {
        node {
          authors
          title
	  reference
	  reference_detail
          month
          year
        }
      }
    }

    allResearch: allResearchCsv {
      edges {
        node {
          index
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

    allImages: allFile(
      filter: { sourceInstanceName: { eq: "research_small" } },
      sort: {fields: name, order: ASC},
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
