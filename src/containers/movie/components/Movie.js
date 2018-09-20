import React from 'react';
import styled from 'styled-components';
import pT from 'prop-types';
// Temporario
import { BREAKPOINTS, COLORS } from '../../../assets/variables';
// Components
import { Heading1, Heading2, Text, Heading3 } from '../../../components';
// Assets
import StarImg from '../../../assets/images/star.png';
import StarFilledImg from '../../../assets/images/star-filled.png';

const MovieImg = styled.div`
  background: url(${props => props.image}) center no-repeat;
  position: relative;
  background-size: cover;
  flex-basis: 30%;
  @media (max-width: ${BREAKPOINTS.phone}) {
    flex-basis: initial;
    width: 100%;
    height: 60%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -1rem;
    bottom: 0;
    width: 40%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #000000);
    @media (max-width: ${BREAKPOINTS.phone}) {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
      width: 100%;
      height: 50%;
      right: 0;
      bottom: -1rem;
      top: initial;
    }
  }
`;

const MovieContent = styled.div`
  flex: 1;
  padding: 0 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    padding: 0 2.4rem;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    position: absolute;
    bottom: 4.8rem;
    padding: 0 2.4rem;
  }
`;

const MoviePlot = styled(Text)`
  margin-top: 0.8rem;
`;

const MovieRatingContainer = styled.div`
  margin: 0.8rem 0 1.6rem 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const MovieRatingStarContainer = styled.div`
  display: flex;
  margin-right: 0.8rem;
`;

const CustomImg = styled.img`
  height: 2.4rem;
  width: 2.4rem;
`;

const MovieRatingText = styled(Heading3)`
  color: ${COLORS.white75};
`;

const ModalPhoneCloseButton = styled.button`
  display: none;
  @media (max-width: ${BREAKPOINTS.phone}) {
    display: initial;
    border-radius: 3px;
    background-color: ${COLORS.white25};
    padding: 1rem 0;
    width: 100%;
    margin-top: 3.2rem;
    border: none;
  }
`;

const Movie = ({ movie, handleClose }) => {
  let starView = [];
  for (let i = 1; i < 6; i++) {
    let reviewRating = Math.floor(movie.imdbRating / 2);
    let starImg;
    if (i <= reviewRating) {
      starImg = StarFilledImg;
    } else {
      starImg = StarImg;
    }
    starView.push(<CustomImg src={starImg} alt={`StarImg${i}`} key={i} />);
  }
  return (
    <React.Fragment>
      <MovieImg image={movie.Poster} />
      <MovieContent>
        <Heading1>{movie.Title}</Heading1>
        <Text>
          {movie.Year} | {movie.Runtime} | {movie.Genre}
        </Text>
        <MovieRatingContainer>
          <MovieRatingStarContainer>{starView}</MovieRatingStarContainer>
          <MovieRatingText>{movie.imdbRating} / 10</MovieRatingText>
        </MovieRatingContainer>
        <Heading2>Sinopse</Heading2>
        <MoviePlot>{movie.Plot}</MoviePlot>
        <ModalPhoneCloseButton onClick={handleClose}>
          <Text>Voltar</Text>
        </ModalPhoneCloseButton>
      </MovieContent>
    </React.Fragment>
  );
};

Movie.propTypes = {
  handleClose: pT.func,
  movie: pT.shape({
    Poster: pT.string,
    Title: pT.string,
    Year: pT.string,
    Runtime: pT.string,
    Genre: pT.string,
    imdbRating: pT.string,
    Plot: pT.string
  })
};

Movie.defaultProps = {
  handleClose: () => {},
  movie: {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    Runtime: '141 min',
    Genre: 'Genre',
    imdbRating: '7.4',
    Plot:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."
  }
};

export default Movie;
