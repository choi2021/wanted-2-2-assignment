import Guide from 'components/guide/Guide';
import React from 'react';
import styled from 'styled-components';
import Menu from '../menu/Menu';

const Layout = styled.aside`
  flex: 1 1 20%;
  padding: 2rem 1.5rem;
  box-shadow: 5px 0px 3px -1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 5px 0px 3px -1px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 0px 3px -1px rgba(0, 0, 0, 1);
`;

const Header = styled.header`
  background-color: #ffffff;
  height: 10%;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGrey};
  margin-bottom: 2rem;
  div {
    width: 50%;
    margin-bottom: 1rem;
  }
  img {
    min-width: 70px;
    max-width: 100%;
  }
`;

const Sidebar = () => {
  return (
    <Layout>
      <Header>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
      </Header>
      <Menu />
      <Guide />
    </Layout>
  );
};

export default Sidebar;
