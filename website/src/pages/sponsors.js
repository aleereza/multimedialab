import React from "react"
import styles from "./pages.module.css"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SponsorTile from "../components/Content/SponsorTile/SponsorTile"

class SponsorsPage extends React.Component {

  render() {

    const sponsorsdata = this.props.data.allSponsors.edges
    const sponsorsimagesdata = this.props.data.allImages.edges
    return(
      <Layout>
        <div>

          <div className={styles.sponsortile_container}>

            {sponsorsdata.map((sponsor,i) => (
              <div className={styles.sponsortile} key={i}>

                <SponsorTile
                  link={sponsor.node.link}
                  image={sponsorsimagesdata[sponsor.node.index].node.childImageSharp.sizes}
                />

              </div>
            ))}

          </div>
        </div>
      </Layout>
    )
  }

}
export default SponsorsPage

export const sponsorsQuery = graphql`
  query sponsorsQuery {

    allSponsors: allSponsorsCsv {
      edges {
        node {
          index
          name
          link
        }
      }
    }

    allImages: allFile(
      filter: { sourceInstanceName: { eq: "logos" } },
      sort: {fields: name, order: ASC},
    ){
      edges{
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 640) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`

//image={sponsorsimagesdata[sponsor.node.index].node.childImageSharp.sizes}
