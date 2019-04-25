import React from 'react'
import { Helmet } from "react-helmet"
import Header from "../Header/Header"
import Content from "../Content/Content"
import favicon from "../../images/icons/m_for_ml_32x32.png"

class Layout extends React.Component {


  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SFU Multimedia Lab</title>
		  <link rel="icon" type="image/png" href={favicon} />
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
