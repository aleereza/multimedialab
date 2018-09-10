import React from 'react'
// import PropTypes from 'prop-types'

import Header from "../Header/Header"
import Content from "../Content/Content"
import Footer from "../Footer/Footer"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {Yscroll: 0}
  }
  updateYscroll = () => {
    if (typeof window !== 'undefined'){
      var w = window;
      var y = w.scrollY
      this.setState({ Yscroll: y });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.updateYscroll);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateYscroll);
  };

  render() {
    return (
      <div>
        <Header yscroll={this.state.Yscroll}/>
        <Content yscroll={this.state.Yscroll}>
          {this.props.children}
        </Content>
        <Footer/>
      </div>
    )
  }
};

// MainLayout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout

// export const query = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// <Search/>
// <Warning content="The deadline for regular and special session papers has been extended to April 25"/>
