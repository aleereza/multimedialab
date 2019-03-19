import React from 'react'
import Header from "../Header/Header"
import Content from "../Content/Content"

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
		<meta charSet="utf-8" />
        <title>SFU Multimedia Lab</title>
        <Header yscroll={this.state.Yscroll}/>
        <Content yscroll={this.state.Yscroll}>
          {this.props.children}
        </Content>
      </div>
    )
  }
};

export default Layout
