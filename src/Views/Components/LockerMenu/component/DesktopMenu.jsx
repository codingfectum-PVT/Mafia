import React from "react";
import logo from "../../../../assets/logo.png";
import { MenuLink, SiteLogo } from "../styles";
import { Box } from "@mui/material";
import emotionStyled from "@emotion/styled";
import { dexToolsLink, tgLink, xLink } from "../../../../links";
export const MenuLinkex = emotionStyled(MenuLink)`

    // @media(min-width: 900px){
        display: inline-block;
        width: unset;
        padding: 0 10px;
        margin: 0;
    // }
    @media(max-width: 599px){
        display: none;
    }

`
export const MenuLinkLogo = emotionStyled(MenuLink)`
    padding: 0;
    margin: 0;
    text-align: left;
    @media(max-width: 599px){
        padding: 0 10px;
        margin: 0;
    }
`
const DesktopMenu = (props) => {
 
  return (
    <Box sx={{backgroundColor: '#000', maxWidth: 620, padding: '20px', margin: '0px auto', display: {xs:"none",sm:'flex'}, justifyContent: 'center',alignItems: 'center'}}>
                        <MenuLinkLogo>
                            <SiteLogo src={logo} />
                        </MenuLinkLogo>
                        <MenuLinkex href={dexToolsLink} target='_blank'>
                            Dextools
                        </MenuLinkex>
                        <MenuLinkex href={xLink} target='_blank'>
                            X(Twitter)
                        </MenuLinkex>
                        <MenuLinkex href={tgLink} target='_blank'>
                            Telegram
                        </MenuLinkex>
                    </Box>
  );
};

export default DesktopMenu;
