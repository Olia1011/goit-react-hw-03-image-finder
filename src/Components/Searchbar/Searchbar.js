import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({
      query,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: "",
    });
  };

  render() {
    const query = this.state.query;
    return (
      <>
        <header className={styles.searchbar}>
          <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles["searchForm-button"]}>
              <span className={styles["searchForm-button-label"]}>Search</span>
            </button>

            <input
              className={styles["searchForm-input"]}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={query}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};

export default Searchbar;
