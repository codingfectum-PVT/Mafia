import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';
import { dexToolsLink, tgLink, xLink } from '../../../links';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "Dextools",
        link: dexToolsLink,
        target:'_blank'
        },
        {
        title: "X(Twitter)",
        link: xLink,
        target:'_blank'
        },
        {
        title: "Telegram",
        link: tgLink,
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