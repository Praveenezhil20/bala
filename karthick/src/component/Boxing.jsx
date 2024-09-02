import React from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import image from 'Background.png';

const Boxing = () => {
  const StyledBox = styled.div`
  height: 620px;
  width: 600px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: 2px solid white;
  border-radius: 15px;
  position:absolute;
  z-index: 1000;
  background-color: white;
  margin-top: 70px;
  margin-left: 500px;
  
`;
const StyledImage=styled.img`
     height: 20px;
     width: 100px; 
     margin-left: 120px;
     margin-top:0px;
`
  return (
    <StyledBox>
   <StyledImage src={image} alt="" />
  </StyledBox>
  
  )
}

export default Boxing;