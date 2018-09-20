import React from 'react';
import styled from 'styled-components';
// UIComponents
import { Text } from '../../../components';
// Assets
import { BREAKPOINTS, COLORS } from '../../../assets/variables';
import CloseImg from '../../../assets/images/close.png';

const Modal = styled.div`
  display: ${props => (props.isOpen ? 'initial' : 'none')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 114rem;
  max-height: 40rem;
  position: absolute;
  background-color: ${COLORS.black};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  @media (max-width: ${BREAKPOINTS.phone}) {
    max-height: 100%;
    flex-direction: column;
  }
`;

const ModalCloseButton = styled.a`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    top: 1.6rem;
    right: 1.6rem;
  }
`;

const ModalCloseImg = styled.img`
  height: 2.4rem;
  width: 2.4rem;
  margin-right: 0.8rem;
`;

const ModalCloseText = styled(Text)`
  @media (max-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
`;

const MovieModal = ({ isOpen = false, children, handleClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalContainer>
        {children}
        <ModalCloseButton onClick={handleClose}>
          <ModalCloseImg src={CloseImg} />
          <ModalCloseText>Voltar</ModalCloseText>
        </ModalCloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default MovieModal;
