import React from 'react'
import styles from "./researchtile.module.css"
import Img from "gatsby-image"
import {Link} from 'gatsby'

import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";

class ResearchTile extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image}/>
        </div>
        <div className={styles.text}>
          <h2>{this.props.title}</h2>
          <p>{this.props.short}</p>
          <div className={styles.more_container}>
            <IconContext.Provider value={{className: styles.icon, size: ".7rem", color: "black"}}>
              <div>
                <Link to={"/research#"+this.props.index}><small className={styles.more}>more</small><FaChevronRight/></Link>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default ResearchTile

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />

// <div className={styles.more_container}>
// </div>
