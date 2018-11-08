import React from "react";
import PubItem from "./PubItem"
import Heading from "../Heading/Heading"

// a group of publications, used to render all publications of a specific year
class PubItemGroup extends React.Component {
  render() {
    const data = this.props.pubdata
    const year = this.props.year //string
    return(
      <div>
        <Heading text={year}/>
        {data.map((row,i) => (
            <PubItem key={i}
            title={data[i].node.title}
            authors={data[i].node.authors}
            reference={data[i].node.reference}
            month={data[i].node.month}
            year={data[i].node.year}
            type={data[i].node.type}
            link={data[i].node.link}
            code={data[i].node.code}
            />
        ))}
      </div>
    )

  }
}
export default PubItemGroup
