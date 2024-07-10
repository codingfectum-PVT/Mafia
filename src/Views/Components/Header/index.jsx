import emotionStyled from '@emotion/styled'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import headerimg  from '../../../assets/header-img.jpg'
import Paragraph from '../Paragraph'
import BigHorn from '../BigHorn'
import { CA } from '../../../links'
import LockerMenu from '../LockerMenu'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100dvh;
    background-image: url(${headerimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding-top:10px;
    
`


function Header() {
  return (
    <SectionWrapper>
        <LockerMenu/>
        <Container maxWidth="xl">
            <Grid container display="flex" alignContent="space-between" minHeight={{xs:"calc(100vh - 300px)",lg:"auto"}} justifyContent={"center"}>
                <Grid item xs={12} lg={8} marginBottom={10} display="flex" flexDirection="column" alignItems={"center"} >
                    <BigHorn />
                    <Paragraph maxWidth="300px" fontWeight="bold" marginY="10px">
                    This dragon is on a mission to take over the meme universe. The time has come for meme greatness.
                    </Paragraph>
                    <Box display="flex"  alignItems={"center"} justifyContent={"space-between"} width="100%" maxWidth="600px" height="50px" padding="0 20px" sx={{background:"linear-gradient(to top,#fff 10%,#000 0%)",border:"2px solid #000"}}>
                        <Paragraph color="#fff" fontWeight="900">
                            CA
                        </Paragraph>
                        <Paragraph fontFamily="" sx={{wordBreak:"break-all"}} color="#fff">
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