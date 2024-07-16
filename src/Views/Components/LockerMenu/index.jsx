import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';
import { dexToolsLink, tgLink, uniSwapLink, xLink } from '../../../links';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
      {
        title: "Home",
        link: '#',
        },
        {
          title: "Key Info",
          link: '#',
        },
        {
          title: "Tokenomics",
          link: '#',
        },
        {
          title: "Join Community",
          link: '#',
        },
        {
        title: "Buy Now",
        link: uniSwapLink,
        target: "_blank"
        },
    ];
  return (
    <Container maxWidth="xl">
        <DesktopMenu menuList={menuList} />
        <MobileMenu menuList={menuList} />
    </Container>
  )
}

export default LockerMenu