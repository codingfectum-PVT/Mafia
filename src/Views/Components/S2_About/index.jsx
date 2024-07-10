import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import aboutBg  from '../../../assets/aboutBg.jpg'
import aboutImg  from '../../../assets/about-img.png'
import { Image } from '../../Styles/style'
import Paragraph from '../Paragraph'
import { uniSwapLink } from '../../../links'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background-image: url(${aboutBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    display:grid;
    place-items:center;
    
`
const CustomButton = emotionStyled(Button)`
    background:linear-gradient(to top,#fff 10%,#FF006A 0%);
    min-width:170px;
    margin-top:20px;
    font-size:22px;
    font-family: "SuperMario";
    color:#fff;
    -webkit-text-stroke:2px;
    -webkit-text-stroke-color:#000;
    border:2px solid #000;
`
function AboutSection() {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <Grid container display="flex" alignContent="space-between" justifyContent={"center"}>
                <Grid item xs={12} lg={9} display="flex" flexDirection="column" alignItems={"center"} sx={{background:"linear-gradient(to top,#000 85%,transparent 0%)", paddingBottom: '30px'}}>
                    <Image mw="200px" src={aboutImg} alt="Bighorn Reddragon"/>
                    <Paragraph fontSize={{xs:"40px",md:"50px"}} color="#fff" fontFamily="SuperMario" fontWeight="900" marginBottom={1}>
                        $Reddragon is live!!
                    </Paragraph>
                    <Paragraph  color="#fff" maxWidth={740} padding={2}>
                    Dive into the fantastical world of Matt Furie's **Big Horn Red Dragon**. This vibrant creation embodies Furie's signature blend of whimsical charm and intricate detail. The Big Horn Red Dragon, with its striking red hue and majestic horns, is a testament to Furie's ability to create captivating and imaginative characters. Whether you're an art enthusiast or a newcomer to Furie's work, the Big Horn Red Dragon promises to enchant and inspire with its unique presence and story. Join us in celebrating this extraordinary piece of art and explore the magic it brings to the world.                   
                    </Paragraph>
                    <CustomButton href={uniSwapLink}>
                        ape In
                    </CustomButton>
                    <Paragraph fontFamily="" color="#808080">
                        JEETERS GO HOME
                    </Paragraph>
                    
                </Grid>
            </Grid>
        </Container>
    </SectionWrapper>
  )
}

export default AboutSection