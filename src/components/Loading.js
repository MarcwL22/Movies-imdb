import React from 'react';
import styled, { keyframes } from 'styled-components';
// Assets
import Spinner from '../assets/images/spinner.png';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingImage = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  animation: ${rotate360} 0.2s linear infinite;
`;

export const Loading = () => {
  return <LoadingImage src={Spinner} alt={'Loading'} />;
};
