import styled from 'styled-components';
import { BREAKPOINTS } from '../assets/variables';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  /* BREAKPOINTS FOR PHONE AND UP */
  @media (max-width: ${BREAKPOINTS.phone} ) {
    padding: 2.4rem;
  }
  /* BREAKPOINTS FOR PHONE AND UP */
  @media (min-width: ${BREAKPOINTS.phone}) {
    padding: 3.2rem;
  }
  /* BREAKPOINTS FOR TABLETS LANDS */
  @media (min-width: ${BREAKPOINTS.tabletLandscape}) {
    max-width: 120rem;
  }
  /* BREAKPOINTS FOR BIG DESKTOPS
  @media (min-width: ${BREAKPOINTS.bigDesktops}) {
    max-width: 120rem;
  } */
`;
