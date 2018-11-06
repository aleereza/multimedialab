import React from 'react'
import styles from "./pages.module.css"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import StudentTile from "../components/Content/StudentTile/StudentTile"
import Faculty from "../components/Content/Faculty/Faculty"
import Heading from "../components/Content/Heading/Heading"

class PeoplePage extends React.Component {

  render() {
    const studentsdata = this.props.data.allStudents.edges
    const studentsimagesdata = this.props.data.allImages.edges
    const facultydata = this.props.data.allFaculty.edges
    return(
      <Layout>
        <Heading text="Faculty"/>
        <Faculty
          name={facultydata[0].node.name}
          title={facultydata[0].node.title}
          email={facultydata[0].node.email}
          website={facultydata[0].node.website}
          image={this.props.data.IvanImg.childImageSharp.sizes}
          research1={facultydata[0].node.research1}
          research2={facultydata[0].node.research2}
          research3={facultydata[0].node.research3}
          bio={facultydata[0].node.bio}
        />
        <Faculty
          name={facultydata[1].node.name}
          title={facultydata[1].node.title}
          email={facultydata[1].node.email}
          website={facultydata[1].node.website}
          image={this.props.data.JieImg.childImageSharp.sizes}
          research1={facultydata[1].node.research1}
          research2={facultydata[1].node.research2}
          research3={facultydata[1].node.research3}
          bio={facultydata[1].node.bio}
        />
        <Faculty
          name={facultydata[2].node.name}
          title={facultydata[2].node.title}
          email={facultydata[2].node.email}
          website={facultydata[2].node.website}
          image={this.props.data.AtousaImg.childImageSharp.sizes}
          research1={facultydata[2].node.research1}
          research2={facultydata[2].node.research2}
          research3={facultydata[2].node.research3}
          bio={facultydata[2].node.bio}
        />

        <Heading text="Students"/>
        <div className={styles.studentstile_container}>

          {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
            <div className={styles.studentstile} key={i}>

              <StudentTile
                name={studentsdata[i].node.name}
                title={studentsdata[i].node.title}
                image={studentsimagesdata[i].node.childImageSharp.sizes}
                website={studentsdata[i].node.website}
                email={studentsdata[i].node.email}
                github={studentsdata[i].node.github}
                linkedin={studentsdata[i].node.linkedin}
              />

            </div>
          ))}

        </div>

        <Heading text="Alumni"/>
      </Layout>
    )
  }
}

export default PeoplePage

export const studentsQuery = graphql`
  query studentsQuery {

    allStudents: allStudentsCsv {
      edges {
        node {
          name
          title
          email
          website
          github
          linkedin
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
          bio
          research1
          research2
          research3
        }
      }
    }

    allImages: allFile(filter: { sourceInstanceName: { eq: "students_images" } }) {
      edges{
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 300) {
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
`
