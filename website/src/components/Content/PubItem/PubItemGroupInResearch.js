import React from "react";
import PubItem from "./PubItem"
import cx from "classnames"
import styles from "./pubitemgroupinresearch.module.css"

import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";

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
    var publications_container
    publications_container = cx({
      [styles.publications_container]: true,
      [styles.open]: this.state.show,
    })
    var chevron
    chevron = cx({
      [styles.chevron]: true,
      [styles.chevron_open]: this.state.show,
    })
    return(
      <div className={styles.container}>
        <div className={styles.button} onClick={()=>this.change()}>
          Selected Publications
          <IconContext.Provider value={{className: chevron}}>
            <FaChevronDown/>
          </IconContext.Provider>
        </div>
        <div className={publications_container}>
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
              link2_name={data[i].node.link2_name}
              />
          ))}
        </div>
      </div>
    )

  }
}
export default PubItemGroupInResearch
