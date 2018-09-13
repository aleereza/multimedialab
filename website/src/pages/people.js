import React from 'react'
import styles from "./pages.module.css"

import Layout from '../components/Layout/Layout'
import StudentTile from "../components/Content/StudentTile/StudentTile"

class PeoplePage extends React.Component {


  render() {
    const studentsdata = this.props.data.allStudents.edges
    const studentsimagesdata = this.props.data.allImages.edges
    return(
      <Layout>
        <h1>Students</h1>
        <div className={styles.studentstile_container}>

          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <div className={styles.studentstile}>
              <StudentTile
                name={studentsdata[i].node.name}
                title={studentsdata[i].node.title}
                image={studentsimagesdata[i].node.childImageSharp.sizes}
              />
            </div>
          ))}

        </div>
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
  }
`
