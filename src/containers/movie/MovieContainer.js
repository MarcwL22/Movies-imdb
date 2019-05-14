import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { openCloseMovieModal } from './duck';
// Components
import Modal from './components/MovieModal';
import Movie from './components/Movie';

class MovieContainer extends Component {
  render() {
    const { modalOpen, movie } = this.props.movieReducer;
    return (
      <Modal isOpen={modalOpen} handleClose={this.props.openCloseMovieModal}>
        <Movie movie={movie} handleClose={this.props.openCloseMovieModal} />
      </Modal>
    );
  }
}

const mapStateToProps = ({ movieReducer }) => {
  return { movieReducer };
};

export default connect(
  mapStateToProps,
  { openCloseMovieModal }
)(MovieContainer);
