import React from 'react'

import banner from '../../../assets/banner.png';
import { Box, Typography } from '@mui/material';
import emotionStyled from '@emotion/styled';

const ImgEx = emotionStyled.img`
    max-width: 250px;
    width: 100%;
    height: auto;
    margin-bottom: -8px;

    @media(min-width: 1300px){
        max-width: 290px;
        margin-bottom: -7px;
    }
`
const TypographyA = emotionStyled(Typography)`
    background-color: #000;
    color: #fff;
    text-align: center;
    font-family: "SuperMario";
    display: table;
    margin: auto;
    padding: 2px 25px;
    position: relative;
    z-index: 2;
    @media(min-width: 1300px){
        font-size: 3rem;
    }
    @media(max-width: 670px){
        font-size: 6vw;
    }
`
const TypographyB = emotionStyled(Typography)`0;
    color: #fff;
    text-align: center;
    font-family: "SuperMario";
    display: table;
    margin: auto;
    padding: 2px 25px;
    margin-top: -13px;
    position: relative;
    z-index: 1;
    -webkit-text-stroke: 3px black;
    text-shadow: 0 2px 5px #ec1826;
    line-height: 90px;

    @media(min-width: 1300px){
        font-size: 8rem;
        line-height: 110px;
    }
    @media(max-width: 670px){
        font-size: 15vw;
        padding: 0;
        line-height: 100%;
        margin-top: -5px;
    }
    span{
        color: red;
    }
`

export default function BigHorn() {
  return (
    <Box textAlign='center'>
        <ImgEx src={banner}  />
        <TypographyA variant='h4' >Matt Furie's</TypographyA>
        <TypographyB variant='h1' >Bighorn<br /><span>Red</span>dragon</TypographyB>
    </Box>
  )
}
