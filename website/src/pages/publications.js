import React from 'react'
import styles from "./pages.module.css"
import Layout from '../components/Layout/Layout'
import PubItem from '../components/Content/PubItem/PubItem'
import PubItemGroup from '../components/Content/PubItem/PubItemGroup'
import { graphql } from "gatsby"

class PublicationsPage extends React.Component {

  render() {
    // const publicationsdata = this.props.data.allPublications.edges
    const publicationsdata_2019 = this.props.data.pub2019.edges
    const publicationsdata_2018 = this.props.data.pub2018.edges
    const publicationsdata_2017 = this.props.data.pub2017.edges
    const publicationsdata_2016 = this.props.data.pub2016.edges
    const publicationsdata_2015 = this.props.data.pub2015.edges
    const publicationsdata_2014 = this.props.data.pub2014.edges
    const publicationsdata_2013 = this.props.data.pub2013.edges

    return(
        <Layout>
          <div>

			      <PubItemGroup
              year={"2019"}
              pubdata={publicationsdata_2019}
            />

            <PubItemGroup
              year={"2018"}
              pubdata={publicationsdata_2018}
            />

            <PubItemGroup
              year={"2017"}
              pubdata={publicationsdata_2017}
            />

            <PubItemGroup
              year={"2016"}
              pubdata={publicationsdata_2016}
            />

            <PubItemGroup
              year={"2015"}
              pubdata={publicationsdata_2015}
            />

            <PubItemGroup
              year={"2014"}
              pubdata={publicationsdata_2014}
            />

            <PubItemGroup
              year={"2013"}
              pubdata={publicationsdata_2013}
            />

            <p>For earlier publications, please refer to individual professor’s webpage.</p>

          </div>

        </Layout>
      )

  }
}

export default PublicationsPage

// in data>publications:
//type: type of poblication: j (journal), c (conference), b (book)
//research: index number of the reaserch wich the publication related to
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

  pub2019: allPublicationsCsv(
    filter: { year: { eq: "2019" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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

  pub2018: allPublicationsCsv(
    filter: { year: { eq: "2018" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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

  pub2017: allPublicationsCsv(
    filter: { year: { eq: "2017" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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

  pub2016: allPublicationsCsv(
    filter: { year: { eq: "2016" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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

  pub2015: allPublicationsCsv(
    filter: { year: { eq: "2015" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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

  pub2014: allPublicationsCsv(
    filter: { year: { eq: "2014" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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

  pub2013: allPublicationsCsv(
    filter: { year: { eq: "2013" } },
    sort: {fields: [index], order: ASC},
  ){
    edges {
      node{
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
