import React from 'react'
import styled from 'styled-components';
import Background from "../Images/car.png";

const Back1 = () => {
  const StyledImage = styled.img`
  width: 100vw; 
  height: 100vh; 
  object-fit: cover; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 999;
  ` 
  return (
    <StyledImage src={Background} alt="" />
  )
}


export default Back1;
