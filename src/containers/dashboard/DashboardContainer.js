import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './duck';
import { fetchMovie } from '../movie/duck';
// UIComponents
import { Container, Heading2 } from '../../components';
// Components
import MovieContainer from '../movie/MovieContainer';
import DashboardHeader from './components/DashboardHeader';
import DashboardGrid from './components/DashboardGrid';
import styled from 'styled-components';
// Assets
import { BREAKPOINTS } from '../../assets/variables';

const GridTitleContainer = styled(Container)`
  padding: 0 3.2rem;
  @media (max-width: ${BREAKPOINTS.phone}) {
    padding: 0 1.6rem;
  }
`;

export class DashboardContainer extends Component {
  state = { searchText: '' };

  componentDidMount = () => {
    this.props.fetchMovies('Avengers');
  };

  formSubmit = event => {
    console.log(this.state.searchText);
    event.preventDefault();
    this.props.fetchMovies(this.state.searchText);
  };

  onChangeText = event => {
    this.setState({ searchText: event.target.value });
    this.props.fetchMovies(this.state.searchText);
  };

  render() {
    const { searchText } = this.state;
    const { movies, loading, error } = this.props;
    return (
      <div>
        <DashboardHeader onSubmit={this.formSubmit} value={searchText} onChange={this.onChangeText} />
        <GridTitleContainer>
          <Heading2>{searchText}</Heading2>
        </GridTitleContainer>
        <DashboardGrid loading={loading} error={error} data={movies} onPress={this.props.fetchMovie} />
        <MovieContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ dashboardReducer }) => {
  return { ...dashboardReducer };
};

export default connect(
  mapStateToProps,
  { fetchMovies, fetchMovie }
)(DashboardContainer);
