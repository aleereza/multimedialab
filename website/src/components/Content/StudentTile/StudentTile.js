import React from 'react'
import styles from "./studenttile.module.css"
import Img from "gatsby-image"
import cx from "classnames"
// import email_icon from "../../../images/icons/email.png"
// import website_icon from "../../../images/icons/link.png"

// all icons: https://react-icons.netlify.com/#/icons/fa
import { FaEnvelopeSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IconContext } from "react-icons";


// min image resolution: 256x256px
class StudentTile extends React.Component {
  render() {
    var displayemail, displaywebsite, displaygithub, displaylinkedin
    displayemail = cx({
      [styles.displaynone]: (this.props.email === ""),
    });
    displaywebsite = cx({
      [styles.displaynone]: (this.props.website === ""),
    });
    displaygithub = cx({
      [styles.displaynone]: (this.props.github === ""),
    });
    displaylinkedin = cx({
      [styles.displaynone]: (this.props.linkedin === ""),
    });

    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Img sizes={this.props.image} />
        </div>
        <div className={styles.text}>
          <h3>{this.props.name}</h3>
          <p className={styles.title}>{this.props.title}</p>
          <p className={styles.research}>{this.props.research}</p>

          <IconContext.Provider value={{ className: styles.icon, size: "1.5rem", color: "#007096"}}>
            <div>
              <a className={displaywebsite} href={this.props.website} target="_blank"><FaExternalLinkSquareAlt/></a>
              <a className={displayemail} href={this.props.email} target="_blank"><FaEnvelopeSquare/></a>
              <a className={displaygithub} href={this.props.github} target="_blank"><FaGithubSquare/></a>
              <a className={displaylinkedin} href={this.props.linkedin} target="_blank"><FaLinkedin/></a>
            </div>
          </IconContext.Provider>

        </div>
      </div>
    );
  }
}

export default StudentTile

              // <a href={this.props.website}><FaLink/></a>

// <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} />

// <IconContext.Provider value={{ className: 'react-icons' }}>
//   <div>
//     <FaEnvelope/>
//   </div>
// </IconContext.Provider>
