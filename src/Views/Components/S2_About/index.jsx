import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import aboutBg  from '../../../assets/aboutBg.jpg'
import aboutImg  from '../../../assets/about-img.png'
import { Image } from '../../Styles/style'
import Paragraph from '../Paragraph'
import { dexScreenerLink, dexToolsLink, uniSwapLink } from '../../../links'
import { MenuLink } from '../LockerMenu/styles'

function AboutSection() {
  return (
    <Container maxWidth="xl">
        <Grid container sx={{background:"#000", position:'relative', zIndex:0}}>
            <Grid item  xs={12} md={6} style={{background:"linear-gradient(91deg, #000000 40%, transparent)"}} padding="80px 20px">
                <Paragraph fontSize={{xs:"40px",md:"50px"}} textAlign="left" color="#fff" fontWeight="900">Key Info</Paragraph>
                <Paragraph  color="#fff" marginY="40px" maxWidth={450} textAlign='left'>Welcome to $MAFIA, the meme token inspired by Trump's bold move to create the MAGA MAFIA after an assassination attempt. In a world where traditional power structures fail, the MAGA MAFIA rises, bringing together supporters and enthusiasts in a new decentralized community. $MAFIA is more than just a token; it's a movement, a statement, and a digital embodiment of resilience and strength.</Paragraph>
                <Box display="flex" gap="10px" flexWrap={"wrap"}>
                    <Button sx={{width:"fit-content"}} href={dexToolsLink}  className='cbutton' target='_blank'>Dextools</Button >
                    <Button sx={{width:"fit-content"}} href={dexScreenerLink}  className='cbutton' target='_blank'>Dexscreener</Button >
                    <Button sx={{width:"fit-content"}} href={uniSwapLink} className='cbutton' target='_blank'>Buy Now</Button >
                </Box>
            </Grid>
            <Image  src={aboutImg} alt=""/>
        </Grid>
    </Container>
  )
}

export default AboutSection