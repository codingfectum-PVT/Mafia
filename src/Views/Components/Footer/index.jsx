import React from 'react'

import bg from '../../../assets/footer.jpg';
import emotionStyled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import BigHorn from '../BigHorn';
import Paragraph from '../Paragraph';
import { MenuLink } from '../LockerMenu/styles';
import x from "../../../assets/x.png"
import tg from "../../../assets/tg.png"
import { dexScreenerLink, dexToolsLink, tgLink, uniSwapLink, xLink } from '../../../links';

const SocialLogo = emotionStyled.img`
    width: 40px;
    height: auto;
`
const SectionWrapper = emotionStyled(Grid)`
    min-height: 80vh;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    border-radius: 0 10px 10px 0; 
    
`
const TypographyHeading = emotionStyled(Typography)`
    -webkit-text-stroke: 2px black;
    text-shadow: 0 2px 5px #ec1826;
`

export default function Footer() {
  return (
    <Container maxWidth="xl">
        <SectionWrapper container>
            <Grid xs={12} textAlign='left' padding='15% 20px 30px' minHeight="calc( 80vh - 86px )">
                <TypographyHeading variant='h3' paddingY={2} textAlign='left' color="#fff">Join The Gang!</TypographyHeading>
                <MenuLink href={xLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                    <SocialLogo src={x} />
                </MenuLink>
                <MenuLink href={tgLink} target='_blank' style={{padding: "5px", display: 'inline-block', width: 'unset'}} >
                    <SocialLogo src={tg} />
                </MenuLink>
            </Grid>
            <Grid xs={12} justifyContent='space-between' display={{xs:'block', sm:'flex'}} padding='30px 20px'>
                <Paragraph variant="body2" fontWeight="900" color="#fff" fontSize={{xs:"18px"}}>Copyright © 2024 $MAFIA</Paragraph>
                <Paragraph variant="body2" fontWeight="900" color="#fff" fontSize={{xs:"18px"}}>info@mafia.com</Paragraph>
            </Grid>
        </SectionWrapper>
    </Container>
  )
}
