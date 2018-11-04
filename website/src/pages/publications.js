import React from 'react'
import styles from "./pages.module.css"
import Layout from '../components/Layout/Layout'
import { graphql } from "gatsby"
import {Index} from "elasticlunr"
import elasticlunr from "elasticlunr"

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
      this.setRef('index');
    });
    const publicationsdata = this.props.data.allPublications.edges
    publicationsdata.forEach(function(publication) {
      var doc = {
          'authors': publication.node.authors,
          'title': publication.node.title,
          'index': publication.node.index
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
                authors: {boost: 1}
            },
            bool: "OR",
            expand: true
          }
          this.index = this.getOrCreateIndex();
          this.setState({
              query,
              // Query the index with search string to get an [] of IDs
              results: this.index.search(query, config)
                  // Map over each ID and return the full document
                  .map(({
                  ref,
                  }) => this.index.documentStore.getDoc(ref)),
          });
  }

  render() {

    return(
      <Layout>
        <h1>Publications</h1>
        <div>

        </div>

        <div>
          <input type="text" value={this.state.query} onChange={this.search}/>
          <ul>
            {this.state.results.map(p => (
              <li>
                {p.title}
              </li>
            ))}
          </ul>
        </div>

      </Layout>
    )
  }
}

export default PublicationsPage

// in data>publications:
//type: type of poblication: j (journal), c (conference), b (book)
//research: index number of the reaserch wich the publication related to
//code: link to the code =
export const publicationsQuery = graphql
`
query publicationsQuery {
  allPublications: allPublicationsCsv {
    edges {
      node {
        index
        authors
        title
      }
    }
  }
}
`
