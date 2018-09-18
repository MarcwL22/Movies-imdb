import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Container, SmallText } from '../../../components';
// Assets
import { COLORS, BREAKPOINTS } from '../../../assets/variables';
import SearchImg from '../../../assets/images/search.png';
import LogoImg from '../../../assets/images/logo.png';
import UserImg from '../../../assets/images/user.jpg';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const HeaderLogo = styled.img`
  height: 3.2rem;
  width: auto;
`;

const UserGroup = styled.div`
  display: flex;
  align-items: center;
`;

const UserLogo = styled.img`
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
  margin-right: 0.8rem;
`;

const UserName = styled(SmallText)`
  @media (max-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
`;

const SearchForm = styled.form`
  flex: 0 0 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    flex: 0 0 40%;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    flex: 1;
    position: initial;
    justify-content: flex-end;
  }
`;

const SearchInput = styled.input`
  border-radius: 1.6rem;
  background-color: ${COLORS.white15};
  color: ${COLORS.white50};
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  padding: 0.8rem 1.6rem;
  width: 100%;
  border-width: 0;
  transition: all 0.2s;
  &:focus {
    outline: none;
    background-color: ${COLORS.white25};
    color: ${COLORS.white75};
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
`;

const SearchInputMobile = styled(SearchInput)`
  @media (min-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
  display: block;
  width: 2.4rem;
  margin-right: 1.2rem;
  border-radius: 0;
  background: ${COLORS.black} url(${SearchImg}) no-repeat center;
  padding: 1.2rem 0 1.2rem 3rem;
  transition: all 0.4s ease;
  margin-left: 100%;
  &:focus {
    background-color: ${COLORS.black};
    border-bottom: 1px solid ${COLORS.white};
    position: absolute;
    width: 100%;
    left: 0;
    margin-left: 0%;
    background-position: left center;
  }
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0.8rem;
  top: 0.5rem;
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.phone}) {
    display: none;
  }
`;

const SearchButtonImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const DashboardHeader = ({ onChange = () => {}, value = '', onSubmit = () => {} }) => {
  return (
    <Container>
      <Header>
        <HeaderLogo src={LogoImg} alt="Logo" />
        <SearchForm onSubmit={onSubmit}>
          <SearchInput value={value} onChange={onChange} placeholder={'Que filme você procura?'} />
          <SearchInputMobile value={value} type="search" onChange={onChange} placeholder={'Que filme você procura?'} />
          <SearchButton type="submit">
            <SearchButtonImage src={SearchImg} alt="SearchImg" />
          </SearchButton>
        </SearchForm>
        <UserGroup>
          <UserLogo src={UserImg} alt="UserImg" />
          <UserName>Marcus Vinicius</UserName>
        </UserGroup>
      </Header>
    </Container>
  );
};

DashboardHeader.propTypes = {
  onSubmit: pT.func,
  onChange: pT.func,
  value: pT.string
};

export default DashboardHeader;
