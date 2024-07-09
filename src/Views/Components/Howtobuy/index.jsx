import styled from "@emotion/styled";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import zIndex from "@mui/material/styles/zIndex";
import Paragraph from "../Paragraph";
import howtobuy from '../../../assets/howtobuy.jpg'
import emotionStyled from "@emotion/styled";


const SectionWrapper = emotionStyled(Box)`
    background-image: url(${howtobuy});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    padding: 80px 0;
    
`
const CustomGrid = emotionStyled(Grid)`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.fd ? props.fd : "row")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  padding: ${(props) => (props.p ? props.p : "0px")};
  margin: ${(props) => (props.m ? props.m : "0")};
  gap: ${(props) => (props.g ? props.g : "0")};
  @media (max-width: 599px) {
    flex-direction: ${(props) => props.fd599};
  }
`; 
// text-shadow: 0 2px 5px #ec1826;
//     -webkit-text-stroke: 2px black;
const HowToBuy = () => {
  return (
    <SectionWrapper>
        <Container maxWidth="xxl" id="how-to-buy">
        <Container maxWidth="xl" >
            <Grid container sx={{ display: "flex",  gap:{xs:"30px",lg:"50px"} }} > 
                <CustomGrid item xs={12}><Typography variant='h3' textAlign='center' color="#fff" fontFamily="SuperMario" >How to Buy</Typography></CustomGrid>  
                <CustomGrid item container xs={12} sx={{position:"relative"}} g="20px"> 
                <Divider sx={{display:{xs:"none",lg:"block"},position:"absolute",top:"30px",left:"50%",transform:"translate(-50%,-0px)",background:"#000",height:"2px",width:"60%"}}/> 
                <CustomGrid container item xs={12} md={5.8} lg={3.3} ai="start" fd="column" g="20px">  
                <CustomGrid
                item
                xs={12}
                >  
                <Paragraph
                    // data-aos="zoom-in"
                    variant="h6"  
                    fontSize={{xs:"35px",lg:"35px"}}
                    style={{'-webkit-text-stroke': '2px black'}}
                    sx={{textShadow: '0 2px 5px #ec1826', backgroundColor:"#fff", border: '1px solid #000',color:"#FFFB31",fontFamily:'SuperMario', padding:"0px 25px",zIndex:"1"}}
                >
                01
                </Paragraph>
                </CustomGrid> 
                <CustomGrid
                item
                xs={12} 
                >  
                <Box sx={{backgroundColor:"#FFFFFF", minHeight:"220px",padding:"30px 30px 35px",  width:"100%",display:"flex", flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>  
                    <Paragraph variant="h5" fontSize="25px"  margin="auto" sx={{whiteSpace:{xs:"wrap",lg:"nowrap"}}} fontFamily="SuperMario">   
                    DOWNLOAD METAMASK
                    </Paragraph>    
                    <Paragraph variant="body2" minHeight="80px" fontSize={{xs:"17px"}}> Begin your crypto adventure by installing MetaMask, a secure and easy-to-use wallet.</Paragraph>
                </Box>
                </CustomGrid>
                </CustomGrid> 
                <CustomGrid
                container
                item
                xs={12}  
                md={5.8}
                lg={3.3}
                ai="start"
                fd="column"
                g="20px"
                >  
                <CustomGrid
                item
                xs={12}
                >  
                <Paragraph
                    // data-aos="zoom-in" 
                    variant="h6"  
                    fontSize={{xs:"35px",lg:"35px"}}
                    style={{'-webkit-text-stroke': '2px black'}}
                    sx={{textShadow: '0 2px 5px #ec1826', backgroundColor:"#fff", border: '1px solid #000',color:"#FFFB31",fontFamily:'SuperMario', padding:"0px 25px",zIndex:"1"}}
                >
                02
                </Paragraph>
                </CustomGrid> 
                <CustomGrid
                item
                xs={12} 
                >  
                <Box sx={{backgroundColor:"#FFFFFF",  minHeight:"220px",padding:"30px 30px 35px",  width:"100%",display:"flex", flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>  
                    <Paragraph variant="h5" fontSize="25px" margin="auto" fontFamily="SuperMario">   
                    SECURE ETHEREUM (ETH)
                    </Paragraph>    
                    <Paragraph variant="body2" minHeight="80px" fontSize={{xs:"17px"}}>Acquire Ethereum (ETH) from a reputable exchange to load your wallet.</Paragraph>
                </Box>
                </CustomGrid>
                </CustomGrid> 
                <CustomGrid
                container
                item
                xs={12}  
                md={5.8}
                lg={3.3}
                ai="start"
                fd="column"
                g="20px"
                >  
                <CustomGrid
                item
                xs={12}
                >  
                <Paragraph 
                    // data-aos="zoom-in"
                    variant="h6"  
                    fontSize="35px"
                    style={{'-webkit-text-stroke': '2px black'}}
                    sx={{textShadow: '0 2px 5px #ec1826', backgroundColor:"#fff", border: '1px solid #000',color:"#FFFB31",fontFamily:'SuperMario', padding:"0px 25px",zIndex:"1"}}
                >
                03
                </Paragraph>
                </CustomGrid> 
                <CustomGrid
                item
                xs={12} 
                >  
                <Box sx={{backgroundColor:"#FFFFFF", minHeight:"220px",padding:"30px 30px 35px",  width:"100%",display:"flex", flexDirection:"column",justifyContent:"start",alignItems:"start",gap:"5px"}}>   
                    <Paragraph variant="h5" fontSize="25px" margin="auto" fontFamily="SuperMario">   
                    BUY $REDDRAGON
                    </Paragraph> 
                    <Paragraph variant="body2" minHeight="80px" fontSize={{xs:"17px"}}>With your wallet ready, proceed to your preferred exchange and purchase $REDDRAGON.</Paragraph>
                </Box>
                </CustomGrid>
                </CustomGrid>
                </CustomGrid> 
            </Grid>
        </Container>
        </Container>
    </SectionWrapper>
  );
};

export default HowToBuy;