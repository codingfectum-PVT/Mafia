import { Typography } from '@mui/material'
import React from 'react'

const Paragraph = (props) => {
  return (
    <Typography color="#000" textAlign="center" fontFamily="Arvo" fontSize="15px" {...props}>
{props.children}
    </Typography>
  )
}

export default Paragraph