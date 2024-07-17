import React from "react";
import logo from "../../../../assets/logo.png";
import { MenuLink, SiteLogo } from "../styles";
import { Box, Button } from "@mui/material";
import emotionStyled from "@emotion/styled";
import { dexToolsLink, tgLink, uniSwapLink, xLink } from "../../../../links";
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
    <Box sx={{backgroundColor: '#002768', borderRadius: 2, maxWidth: '100%', height: 50, padding: '0 20px', margin: '0px auto', display: {xs:"none",md:'flex'}, justifyContent: 'space-between',alignItems: 'center'}}>
        <MenuLinkLogo flexBasis="200px">
            <SiteLogo src={logo} />
        </MenuLinkLogo>
        <Box display={"flex"} alignItems={"center"}>
            <MenuLinkex href='#'>
                Home
            </MenuLinkex>
            <MenuLinkex href='#key-info'>
                Key Info
            </MenuLinkex>
            <MenuLinkex href='#tokenomics'>
                Tokenomics
            </MenuLinkex>
            <MenuLinkex href='#community'>
                Join Community
            </MenuLinkex>
            <Button sx={{width:"fit-content"}} href={uniSwapLink} target='_blank' className="cbutton">
                Buy Now
            </Button>
        </Box>
    </Box>
  );
};

export default DesktopMenu;
