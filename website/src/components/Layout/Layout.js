import React from 'react'
import { Helmet } from "react-helmet"
import Header from "../Header/Header"
import Content from "../Content/Content"

class Layout extends React.Component {


  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SFU Multimedia Lab</title>
        </Helmet>
        <Header/>
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
};

export default Layout
