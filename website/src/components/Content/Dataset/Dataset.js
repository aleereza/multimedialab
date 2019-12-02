import React from "react";
import styles from "./dataset.module.css";
import Img from "gatsby-image";
import PubItemGroupInResearch from "../PubItem/PubItemGroupInResearch";

//component for research page
class Dataset extends React.Component {
  render() {
    return (
      <div className={styles.container} id={this.props.id}>
        <div className={styles.container_1}>
          <div className={styles.image}>
            <Img fluid={this.props.image} />
          </div>
          <div className={styles.text}>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <p>
              <a href={this.props.link} target="_blank">
                Download dataset
              </a>
            </p>
            <h3>Related publications</h3>
            <PubItemGroupInResearch pubdata={this.props.pubdata} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dataset;
