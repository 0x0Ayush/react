import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxx1};
color: ${props => props.theme.txt};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
    <Link to="/">Aptos Bulls</Link>
    </LogoText>
  )
}

export default Logo