import React from "react";
import PubItem from "./PubItem"
import Heading from "../Heading/Heading"
import styles from "./pubitemgroup.module.css"

// a group of publications, used to render all publications of a specific year
class PubItemGroup extends React.Component {
  render() {
    const data = this.props.pubdata
    const year = this.props.year //string
    return(
      <div>
        <Heading text={year}/>
      	<div className={styles.container}>
              {data.map((row,i) => (
                  <PubItem key={i}
                  title={data[i].node.title}
                  authors={data[i].node.authors}
                  reference={data[i].node.reference}
                  reference_detail={data[i].node.reference_detail}
                  month={data[i].node.month}
                  year={data[i].node.year}
                  type={data[i].node.type}
                  link1={data[i].node.link1}
                  link2={data[i].node.link2}
                  link1_name={data[i].node.link1_name}
                  link2_name={data[i].node.link2_name}
                  />
      	))}
        </div>
      </div>
    )

  }
}
export default PubItemGroup
