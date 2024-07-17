import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { MenuLink } from '../LockerMenu/styles'
import emotionStyled from '@emotion/styled'
import copy from "../../../assets/copy.png"
import headerimg from "../../../assets/trumpToken.png"
import x from "../../../assets/x.png"
import tg from "../../../assets/tg.png"
import dexscreener from "../../../assets/dexscreener.png"
import dextools from "../../../assets/dextools.png"
import uniswap from "../../../assets/uniswap.png"
import { buySellTax, CA, dexScreenerLink, dexToolsLink, supply, tgLink, uniSwapLink, xLink } from '../../../links'
import Paragraph from '../Paragraph'

const SocialLogo = emotionStyled.img`
    width: 40px;
    height: auto;
`
const GridEx = emotionStyled(Grid)`
    background: #BF1539;
    padding: 100px 0 80px;
    background-image: url(${headerimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
`


function Tokenomics() {
  return (
    <Container maxWidth="xl">
        <GridEx container justifyContent='center'>
            <Grid xs={12} paddingBottom={2}>
                <Typography variant='h3' textAlign='center' color="#fff">TOKENOMICS</Typography>
            </Grid>
            <Grid xs={12} md={9} container>
                <Grid xs={12} padding={2}>
                    <Box sx={{backgroundColor:'#fff', padding:2, display: 'flex', justifyContent:'space-between', borderRadius:"8px"}}>
                        <Paragraph variant="body2" fontWeight="900" color="#000" fontSize={{xs:"18px"}}>Contract Address:</Paragraph>
                        <Box display='flex'>
                            <Paragraph variant="body2" marginRight={1} fontWeight="900" color="#000" fontSize={{xs:"18px"}}>{CA}</Paragraph>
                            <img onClick={()=>{navigator.clipboard.writeText(CA)}} src={copy} style={{width: '18px', height: '25px'}} />
                        </Box> 
                    </Box>
                </Grid>
                <Grid xs={12} sm={3} padding={2}>
                    <Box sx={{backgroundColor:'#fff', padding:2, borderRadius:"8px"}}>
                        <Paragraph variant="h4" textAlign="left" color="#000" marginBottom={2} fontSize={{xs:"18px"}}>Taxes</Paragraph> 
                        <Paragraph variant="h4" textAlign="left" fontWeight="900" color="#000" fontSize={{xs:"18px"}}>{buySellTax}</Paragraph> 
                    </Box>
                </Grid>
                <Grid xs={12} sm={5} padding={2}>
                    <Box sx={{backgroundColor:'#fff', padding:2, borderRadius:"8px"}}>
                        <Paragraph variant="h4" textAlign="left" color="#000" marginBottom={2} fontSize={{xs:"18px"}}>Contract</Paragraph> 
                        <Paragraph variant="h4" textAlign="left" fontWeight="900" color="#000" fontSize={{xs:"18px"}}>Renounced</Paragraph> 
                    </Box>
                </Grid>
                <Grid xs={12} sm={4} padding={2}>
                    <Box sx={{backgroundColor:'#fff', padding:2, borderRadius:"8px"}}>
                        <Paragraph variant="h4" textAlign="left" color="#000" marginBottom={2} fontSize={{xs:"18px"}}>Liquidity</Paragraph> 
                        <Paragraph variant="h4" textAlign="left" fontWeight="900" color="#000" fontSize={{xs:"18px"}}>Burned</Paragraph> 
                    </Box>
                </Grid>
                <Grid xs={12} padding={2}>
                    <Box sx={{backgroundColor:'#fff', padding:2, borderRadius:"8px"}}>
                        <Paragraph variant="h4" textAlign="left" color="#000" marginBottom={2} fontSize={{xs:"18px"}}>Total Supply</Paragraph> 
                        <Paragraph variant="h4" textAlign="left" fontWeight="900" color="#000" fontSize={{xs:"18px"}}>{supply}</Paragraph> 
                    </Box>
                </Grid>
            </Grid>
            <Grid xs={12} textAlign='center'>
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
        </GridEx>
    </Container>
  )
}

export default Tokenomics