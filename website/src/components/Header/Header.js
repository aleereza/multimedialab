import React from "react"

import styles from "./header.module.css"

import NavBar from "./NavBar/NavBar"
import NavSlide from "./NavSlide/NavSlide"

class Header extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <div className={styles.navslide}>
          <NavSlide/>
        </div>
        <NavBar/>
      </div>
    )
  }
}


export default Header

        //

// <div className={styles.container}>
// <div className={styles.navslide_container}>
//   <NavSlide>
//     <NavSlideLink to="/">Home</NavSlideLink>
//     <NavSlideLink to="/biography">Biography</NavSlideLink>
//     <NavSlideLink to="/recognition">Recognition</NavSlideLink>
//     <NavSlideLink to="/activities">Professional Activities</NavSlideLink>
//     <NavSlideLink to="/publications">Publications</NavSlideLink>
//     <NavSlideLink to="/research">Research</NavSlideLink>
//     <NavSlideLink to="/students">Mentoring and Students</NavSlideLink>
//   </NavSlide>
// </div>
//
// <div className={styles.navbar_container}>
//   <Title/>
//   <NavBar yscroll={this.props.yscroll}>
//     <NavBarLink to="/">Home</NavBarLink>
//     <NavBarLink to="/biography">Biography</NavBarLink>
//     <NavBarLink to="/recognition">Recognition</NavBarLink>
//     <NavBarLink to="/activities">Professional Activities</NavBarLink>
//     <NavBarLink to="/publications">Publications</NavBarLink>
//     <NavBarLink to="/research">Research</NavBarLink>
//     <NavBarLink to="/students">Mentoring and Students</NavBarLink>
//   </NavBar>
// </div>
// </div>
