import React from "react";
import PubItem from "./PubItem"
import styles from "./pubitemgroupinresearch.module.css"

class PubItemGroupInResearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {show : false};
  }
  change = () => {
    this.setState((prevState)=>({show : !prevState.show}))
  };
  render() {
    const data = this.props.pubdata
    return(
      <div className={styles.container}>
        <div className={styles.publications_container}>
          {data.map((row,i) => (
              <PubItem key={i}
              title={data[i].node.title}
              authors={data[i].node.authors}
              reference={data[i].node.reference}
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
export default PubItemGroupInResearch
