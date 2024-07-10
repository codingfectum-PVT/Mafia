import React from 'react'

import bg from '../../../assets/footer.jpg';
import emotionStyled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import BigHorn from '../BigHorn';
import Paragraph from '../Paragraph';
import { MenuLink } from '../LockerMenu/styles';
import x from "../../../assets/x.jpg"
import tg from "../../../assets/tg.jpg"
import dexscreener from "../../../assets/dexscreener.jpg"
import dextools from "../../../assets/dextools.jpg"
import uniswap from "../../../assets/uniswap.jpg"
import { dexScreenerLink, dexToolsLink, tgLink, uniSwapLink, xLink } from '../../../links';

const SocialLogo = emotionStyled.img`
    width: 40px;
    height: auto;
`
const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 80px 0;
    
`
const TypographyHeading = emotionStyled(Typography)`
    -webkit-text-stroke: 2px black;
    text-shadow: 0 2px 5px #ec1826;
`

export default function Footer() {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <Grid container justifyContent='center'>
                <Grid xs={12}>
                    <BigHorn />
                </Grid>
                <Grid xs={12}>
                    <Box sx={{backgroundColor: '#fff', maxWidth: 990, margin: '30px auto', padding: 4}}>
                        <Paragraph variant="h5" fontSize="40px" margin="0 auto 15px" fontFamily="SuperMario">Disclamer</Paragraph> 
                        <Paragraph variant="body2" fontSize={{xs:"17px"}}>Big Horn Red Dragon is a creative project and should not be considered a financial or investment advice. Engage with this project at your own risk, and always conduct your own research before making any decisions.</Paragraph>
                    </Box>
                </Grid>
                <Grid xs={12} textAlign='center'>
                    <TypographyHeading variant='h3' paddingY={2} textAlign='center' color="#fff" fontFamily="SuperMario"  >Social & Onchain Data</TypographyHeading>
                    <MenuLink href={xLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={x} />
                    </MenuLink>
                    <MenuLink href={tgLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={tg} />
                    </MenuLink>
                    <MenuLink href={dexScreenerLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={dexscreener} />
                    </MenuLink>
                    <MenuLink href={dexToolsLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={dextools} />
                    </MenuLink>
                    <MenuLink href={uniSwapLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                        <SocialLogo src={uniswap} />
                    </MenuLink>
                </Grid>
                <Grid xs={12} textAlign='center'>
                <Paragraph variant="body2" fontWeight="900" fontSize={{xs:"18px"}}>Email: info@bighornreddragon.com</Paragraph>

                </Grid>
            </Grid>
        </Container>
    </SectionWrapper>
  )
}
