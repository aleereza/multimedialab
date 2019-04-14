import React from 'react'
import styles from "./pages.module.css"
import Layout from '../components/Layout/Layout'
import PubItem from '../components/Content/PubItem/PubItem'
import PubItemGroup from '../components/Content/PubItem/PubItemGroup'
import { graphql } from "gatsby"

class PublicationsPage extends React.Component {

  find_pubs(year){
    const publicationsdata = this.props.data.allPublications.edges
    var year_publications = publicationsdata.filter(function (row) {
      return row.node.year == year;
    });
    return(year_publications)
  }

  render() {
    const publicationsdata = this.props.data.allPublications.edges

    //find unique years in publications
    let years = [...new Set(publicationsdata.map(row => row.node.year))]
    //convert set to array to work with map function
    years = Array.from(years[0])

    return(
        <Layout>
          <div>

            {years.map((year) => (
              <PubItemGroup key={year}
                year={year}
                pubdata={this.find_pubs(year)}
              />
            ))}

            <p>For earlier publications, please refer to individual professor’s webpage.</p>

          </div>
        </Layout>
      )

  }
}

export default PublicationsPage

// in data>publications:
//type: type of poblication: j (journal), c (conference), b (book)
//research: index number of the reaserch which the publication related to
export const publicationsQuery = graphql`
query publicationsQuery {
  allPublications: allPublicationsCsv(
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node {
        index
        authors
        title
        reference
	reference_detail
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
`
