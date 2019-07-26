import React from "react";
import styles from "./publication.module.css"
import cx from "classnames"

class News extends React.Component {
  render() {
	  
	/*var containerclass
    containerclass = cx({
      [styles.container]: true,
      [styles.journalclass]: (this.props.type === "j"),
      [styles.conferenceclass]: (this.props.type === "c"),
      [styles.bookclass]: (this.props.type === "b"),
	  [styles.bookclass]: (this.props.type === "n"),
    });
	
	var displaylink1
    displaylink1 = cx({
      [styles.displaynone]: (this.props.link1 === ""),
    });*/
      
    return (
      <div className={styles.container}>
        <span className={styles.title}>{this.props.title}</span>
        <span>, </span>
        <span className={styles.month}>{this.props.month}</span>
        <span> </span>
        <span className={styles.year}>{this.props.year}</span>
        <span>. </span>
		<a href={this.props.link1} target="_blank"> [{this.props.link1_name}]</a>
      </div>
    )
  }
}

export default News

