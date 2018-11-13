import React from 'react'
// import styles from "./pages.module.css"
import Layout from '../components/Layout/Layout'
import PubItem from '../components/Content/PubItem/PubItem'
import PubItemGroup from '../components/Content/PubItem/PubItemGroup'
import { graphql } from "gatsby"
// import {Index} from "elasticlunr"
import elasticlunr from "elasticlunr"
import SearchBar from "../components/Content/SearchBar/SearchBar"

class PublicationsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    };
  }

  createIndex = () => {
    var index = elasticlunr(function () {
      this.addField('authors');
      this.addField('title');
      this.addField('year');
      this.addField('month');
      this.addField('reference');
      this.setRef('index');
    });
    const publicationsdata = this.props.data.allPublications.edges
    publicationsdata.forEach(function(publication) {
      var doc = {
          'index': publication.node.index,
          'authors': publication.node.authors,
          'title': publication.node.title,
          'reference': publication.node.reference,
          'month': publication.node.month,
          'year': publication.node.year,
          'type': publication.node.type,
          'link1': publication.node.link1,
          'link2': publication.node.link2,
          'link2_name': publication.node.link2_name,
      };
      index.addDoc(doc);
    });
    return index
  }

  getOrCreateIndex = () => this.index ? this.index : this.createIndex();

  search = (evt) => {
          const query = evt.target.value;
          const config = {
            fields: {
                title: {boost: 2},
                authors: {boost: 1},
                reference: {boost: 1},
                year: {boost: 1},
                month: {boost: 1},
            },
            bool: "AND",
            expand: true
          }
          this.index = this.getOrCreateIndex();
          this.setState({
              query,
              // Query the index with search string to get an [] of IDs
              results: this.index.search(query, config)
                  // Map over each ID and return the full document
                  .map(({ref,}) => this.index.documentStore.getDoc(ref)),});
  }

  render() {
    // const publicationsdata = this.props.data.allPublications.edges
    const publicationsdata_2018 = this.props.data.pub2018.edges
    const publicationsdata_2017 = this.props.data.pub2017.edges
    const publicationsdata_2016 = this.props.data.pub2016.edges
    const publicationsdata_2015 = this.props.data.pub2015.edges
    const publicationsdata_2014 = this.props.data.pub2014.edges
    const publicationsdata_2013 = this.props.data.pub2013.edges

    if(this.state.query===''){
      return(
        <Layout>
          <div>
            <SearchBar>
              <input type="text" value={this.state.query} onChange={this.search} placeholder="Search..."/>
            </SearchBar>
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
    else{
      return(
        <Layout>
          <div>
            <SearchBar>
              <input type="text" value={this.state.query} onChange={this.search}/>
            </SearchBar>

            {this.state.results.map((r,i) => (
              <PubItem key={i}
              authors={r.authors}
              title={r.title}
              reference={r.reference}
              month={r.month}
              year={r.year}
              type={r.type}
              link1={r.link1}
              link2={r.link2}
              link2_name={r.link2_name}
              />
            ))}

          </div>

        </Layout>
      )
    }

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
        month
        year
        type
        link1
        link2
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
        month
        year
        type
        link1
        link2
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
        month
        year
        type
        link1
        link2
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
        month
        year
        type
        link1
        link2
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
        month
        year
        type
        link1
        link2
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
        month
        year
        type
        link1
        link2
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
`
