import React from 'react'
import styles from "./searchbar.module.css"


class SearchBar extends React.Component {
  render() {
    return (
      <form className={styles.searchcontainer}>
          {this.props.children}
      </form>
    );
  }
}

export default SearchBar
