import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './duck';
// UIComponents
import { Container, SmallText, Loading } from '../../components';
// Components
import DashboardHeader from './components/DashboardHeader';
import styled from 'styled-components';
// Assets
import { COLORS, BREAKPOINTS } from '../../assets/variables';

class DashboardContainer extends Component {
  state = { searchText: '' };

  formSubmit = event => {
    console.log(this.state.searchText);
    event.preventDefault();
    this.props.fetchMovies(this.state.searchText);
  };

  onChangeText = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    console.log(this.props);
    const { searchText } = this.state;
    return (
      <div>
        <DashboardHeader onSubmit={this.formSubmit} value={searchText} onChange={this.onChangeText} />
        <main />
        <Loading />
      </div>
    );
  }
}

const mapStateToProps = ({ dashboardReducer }) => {
  return { dashboardReducer };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(DashboardContainer);
