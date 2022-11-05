import React from 'react';
import ServiceMenu from 'components/service_menu/ServiceMenu';
import AdMenu from 'components/ad_menu/AdMenu';
import S from './styles';

const Menu = () => {
  return (
    <S.Layout>
      <ServiceMenu />
      <AdMenu />
    </S.Layout>
  );
};

export default Menu;
