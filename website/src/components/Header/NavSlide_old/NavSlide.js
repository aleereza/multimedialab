import React from 'react'
import styles from "./navslide.module.css"
// import cx from "classnames";
import MenuButton from "../MenuButton/MenuButton"
import Link from 'gatsby-link'
// import logo from "../../../images/UBC-logo-white.png"

class NavSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };
  ChangeNav = () => {
    this.setState(
    (prevState)=>({open: !prevState.open})
    )
  };
  render() {
    // var containerClasses=["sidenav_container"];
    // if (this.state.open){
    //   containerClasses.push("open")
    // }

    // let sidenav_container1 = cx(styles.sidenav_container1, {
    //   [styles.sidenav_container1_disp]: this.state.open,
    // });
    //
    // let sidenav_container2 = cx(styles.sidenav_container2, {
    //   [styles.open]: this.state.open,
    // });

    var w;
    if (this.state.open){
      w = "100%";
    }
    else{
      w = "0";
    }

    return (
      <div>
        <div className={styles.navbar}>
          <div className={styles.logocontainer}>

          </div>
          <div className={styles.title}>
            <Link to="/">
              <h1>Rabab Kreidieh Ward</h1>
              <p>Professor Emeritus, Electrical and Computer Engineering</p>
            </Link>
          </div>
          <div className={styles.menubutton} onClick={() => this.ChangeNav()}>
            <MenuButton state={!this.state.open}/>
          </div>
        </div>


        <div className={styles.sidenav} style={{width: w}} onClick={() => this.ChangeNav()}>
          {this.props.children}
        </div>


      </div>
    );
  }
}

export default NavSlide
// <img className={styles.logo} src={logo}/>
