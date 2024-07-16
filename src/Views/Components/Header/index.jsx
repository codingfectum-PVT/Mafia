import emotionStyled from '@emotion/styled'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import headerimg  from '../../../assets/header-img.jpg'
import heading  from '../../../assets/$Mafia.png'

import Paragraph from '../Paragraph'
import BigHorn from '../BigHorn'
import { CA } from '../../../links'
import LockerMenu from '../LockerMenu'
import { MenuLink } from '../LockerMenu/styles'

const GridEx = emotionStyled(Box)`
    min-height: calc( 100vh - 40px );
    background-image: url(${headerimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 20px 0;
    border-radius: 10px;
    margin-bottom: 20px;
    
`


function Header() {
  return (
    <Container maxWidth="xl">
        <GridEx container>
            <Grid item xs={12}>  
                <LockerMenu/>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent='flex-end' paddingBottom={4} flexDirection="column" alignItems={"center"} minHeight="calc(100vh - 130px)">
                <Box textAlign='center'>
                    <img src={heading} style={{maxWidth: '340px', width: '100%', marginBottom: '-2%'}} />
                    <Paragraph maxWidth="430px" color="#fff" fontWeight="bold" marginBottom="35px">
                    Join the MAGA MAFIA revolution where Trump takes matters into his own hands!
                    </Paragraph>
                    <MenuLink className='cbutton' width="100%" maxWidth="650px" >
                    <Box display={"inline-block"} width={"100%"} maxWidth={400}>
                        <span style={{}} color="#fff" fontWeight="900">
                            CA
                        </span>
                        <span style={{}} fontFamily="" sx={{wordBreak:"break-all"}} color="#fff">
                            {CA}
                        </span>
                    </Box>
                    </MenuLink>
                </Box>
            </Grid>
        </GridEx>
    </Container>
  )
}

export default Header