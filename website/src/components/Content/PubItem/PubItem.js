import React from "react";
import styles from "./pubitem.module.css"
import cx from "classnames"

// all icons: https://react-icons.netlify.com/#/icons/fa
import { IconContext } from "react-icons";
import { FaCode } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from "react-icons/fa";


class PubItem extends React.Component {
  render() {

    var containerclass, conferenceclass, bookclass
    containerclass = cx({
      [styles.container]: true,
      [styles.journalclass]: (this.props.type === "j"),
      [styles.conferenceclass]: (this.props.type === "c"),
      [styles.bookclass]: (this.props.type === "b"),
    });

    var displaylink1, displaylink2
    displaylink1 = cx({
      [styles.displaynone]: (this.props.link === ""),
    });
    displaylink2 = cx({
      [styles.displaynone]: (this.props.code === ""),
    });


    return (
      <div className={containerclass}>
        <div className={styles.textcontainer}>
          <span className={styles.authors}>{this.props.authors}</span>
          <span>, </span>
          <span className={styles.title}>{this.props.title}</span>
          <span>, </span>
          <span className={styles.reference}>{this.props.reference} </span>
          <span className={styles.month}>{this.props.month}. </span>
          <span className={styles.year}>{this.props.year}.</span>
        </div>
        <div className={styles.iconcontainer}>
          <IconContext.Provider value={{ className: styles.icon, color: "#007096"}}>
            <div>
              <a className={displaylink1} href={this.props.link}><FaExternalLinkSquareAlt/></a>
            </div>
            <div>
              <a className={displaylink2} href={this.props.code}><FaCode/></a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    )
  }
}

export default PubItem
