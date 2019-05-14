import React from 'react';
import styled from 'styled-components';
import pT from 'prop-types';
// UIComponents
import { Container, Loading, Heading2 } from '../../../components';
// Components
import DashboardGridItem from './DashboardGridItem';
// Assets
import { BREAKPOINTS } from '../../../assets/variables';

const GridContainer = styled(Container)`
  padding: 1.6rem;
  flex-direction: row;
  flex-wrap: wrap;
  display: grid;
  justify-content: space-between;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  &::after {
    content: '';
    flex: auto;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    padding: 1.6rem 0.8rem;
  }
`;

const GridLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GridErrorText = styled(Heading2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DashboardGrid = ({ data, loading, error, onPress }) => {
  if (loading) {
    return (
      <GridLoading>
        <Loading />
      </GridLoading>
    );
  } else if (!loading && error) {
    return <GridErrorText>Ops! Não achamos nada</GridErrorText>;
  } else {
    return (
      <GridContainer>
        {data.Search &&
          data.Search.map((obj, i) => (
            <DashboardGridItem
              key={i}
              image={obj.Poster}
              title={obj.Title}
              year={obj.Year}
              onPress={() => onPress(obj.imdbID)}
            />
          ))}
      </GridContainer>
    );
  }
};

DashboardGrid.propTypes = {
  data: pT.shape({
    Search: pT.array
  }),
  loading: pT.bool,
  error: pT.bool,
  onPress: pT.func
};
DashboardGrid.defaultProps = {
  data: {
    Search: []
  },
  loading: false,
  error: false,
  onPress: () => {}
};

export default DashboardGrid;
