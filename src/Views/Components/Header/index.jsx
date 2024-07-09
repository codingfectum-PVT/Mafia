import emotionStyled from '@emotion/styled'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import headerimg  from '../../../assets/header-img.jpg'
import heroImage  from '../../../assets/heroImage.png'
import logo  from '../../../assets/logo.png'
import { MenuLink, SiteLogo } from '../LockerMenu/styles'
import { Image } from '../../Styles/style'
import Paragraph from '../Paragraph'
import BigHorn from '../BigHorn'
import { CA } from '../../../links'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background-image: url(${headerimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    
`
const MenuLinkex = emotionStyled(MenuLink)`

    @media(min-width: 900px){
        display: inline-block;
        width: unset;
        padding: 0 10px;
        margin: 0;
    }
    @media(max-width: 899px){
        display: none;
    }

`
const MenuLinkLogo = emotionStyled(MenuLink)`
    padding: 0;
    margin: 0;
    text-align: left;
    @media(max-width: 899px){
        padding: 0 10px;
        margin: 0;
    }
`

function Header() {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <Grid container display="flex" alignContent="space-between" minHeight={{xs:"calc(100vh - 300px)",lg:"auto"}} justifyContent={"center"}>
                <Grid xs={12}>
                    <Box style={{backgroundColor: '#000', maxWidth: 620, padding: '20px', margin: '20px auto', display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                        <MenuLinkLogo>
                            <SiteLogo src={logo} />
                        </MenuLinkLogo>
                        <MenuLinkex href="#">
                        Dextools
                        </MenuLinkex>
                        <MenuLinkex href="#">
                        X(Twitter)
                        </MenuLinkex>
                        <MenuLinkex href="#">
                        Telegram
                        </MenuLinkex>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8} marginBottom={10} display="flex" flexDirection="column" alignItems={"center"} >
                    <BigHorn />
                    <Paragraph maxWidth="300px" fontWeight="bold" marginY="10px">
                    This dragon is on a mission to take over the meme universe. The time has come for meme greatness.
                    </Paragraph>
                    <Box display="flex"  alignItems={"center"} justifyContent={"space-between"} width="100%" maxWidth="600px" height="50px" padding="0 20px" sx={{background:"linear-gradient(to top,#fff 10%,#000 0%)",border:"2px solid #000"}}>
                        <Paragraph color="#fff" fontWeight="900">
                            CA
                        </Paragraph>
                        <Paragraph fontFamily="" color="#fff">
                            {CA}
                        </Paragraph>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </SectionWrapper>
  )
}

export default Header