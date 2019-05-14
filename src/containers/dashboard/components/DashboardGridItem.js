import React from 'react';
import styled from 'styled-components';
import pT from 'prop-types';
// UIComponents
import { SmallText, Heading3 } from '../../../components';
// Assets
import { COLORS, BREAKPOINTS } from '../../../assets/variables';

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  border-radius: 0.5rem;
  @media (min-width: ${BREAKPOINTS.phone}) {
    ${CardContainer}:hover & {
      filter: opacity(0.5);
    }
  }
`;
const CardGroup = styled.div`
  position: absolute;
  bottom: -15rem;
  opacity: 0;
  padding: 1.6rem;
  transition: all 0.2s;
  @media (min-width: ${BREAKPOINTS.phone}) {
    ${CardContainer}:hover & {
      bottom: 2rem;
      opacity: 1;
    }
  }
`;
const CardTitle = styled(Heading3)`
  color: ${COLORS.white};
  line-height: 1.25;
  margin-bottom: 0.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;
const CardSubtitle = styled(SmallText)`
  color: ${COLORS.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const DashboardGridItem = ({ image, title, year, onPress }) => {
  return (
    <CardContainer onClick={onPress}>
      <CardImage src={image} alt={`${title}img`} />
      <CardGroup>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{year}</CardSubtitle>
      </CardGroup>
    </CardContainer>
  );
};

DashboardGridItem.propTypes = {
  image: pT.string,
  title: pT.string,
  year: pT.string,
  onPress: pT.func
};
DashboardGridItem.defaultProps = {
  image: 0,
  title: 'titulo',
  year: '2018',
  onPress: () => {}
};

export default DashboardGridItem;
