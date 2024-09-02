import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Button } from '@mui/material';
import Car from '../Images/car.png'; 
import Circle from '../Images/Ellipse.png'; 
import Robot from '../Images/robot.png'; 
import Shield from '../Images/shield.png';
import Red from '../Images/Ellipse2.png';
import Yellow from '../Images/Ellipse3.png';
import Ban from '../Images/ban.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 620px;
  border-radius: 15px;
  background: #FFFFFF;
  overflow: hidden;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 31px;
  height: 31px;
  margin-bottom:30px;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
  margin: 20px 0;
`;

const StyledImage1 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImage2 = styled.img`
  width: 70px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Typography1 = styled.h4`
  font-family: Ubuntu, sans-serif;
  font-size: 28px;
  font-style: italic;
  font-weight: 600;
  line-height: 32.17px;
  text-align: center;
  color: #00205C;
  margin-top: 10px;
`;

const Typography3 = styled.h4`
  font-family: Ubuntu, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 20.41px;
  text-align: center;
  color: #00205C;
`;

const Typography2 = styled.h4`
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #5B738B;
  margin-top: 10px;
  width: 440px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const PlaceholderButton = styled.div`
  width: 95px;
`;

const StyledButton = styled(Button)`
  background-color: #00205C;
  color: white;
  &:hover {
    background-color: #00205C;
  }
`;

const BlueButton = styled(Button)`
  background-color: #00205C;
  color: white;
  &:hover {
    background-color: #001748;
  }
`;

const GetStartedButton = styled(Button)`
  background-color: #28a745;
  color: white;
  &:hover {
    background-color: #218838;
  }
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Indicator = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#00205C' : '#E0E0E0')};
  cursor: pointer;
`;

const data = [
  {
    circleImage: Circle,
    robotImage: Robot,
    subtitle: 'Simplify your Work',
    description: 'Our AI model will track all vehicles that enter your building. It will create a database of vehicles that come in and out of your building.',
  },
  {
    circleImage: Yellow,
    robotImage: Ban,
    subtitle: 'Track Traffic Violations',
    description: 'Our AI model will detect traffic violations like speeding,and the are triples, and no helmet.',
  },
  {
    circleImage: Red,
    robotImage: Shield,
    subtitle: 'Secure your Building',
    description: 'A database of pre-registered people can be added and can weed out people who enter the premises in an unrecognized vehicle.',
  },
];

const Startpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <StyledContainer>
      <Grid container alignItems="center" justifyContent="center" marginTop="-40px">
        <Grid item>
          <StyledImage src={Car} alt="car" /> 
        </Grid>
        <Grid item>
          <Typography1>ParkXpert</Typography1>
        </Grid>
      </Grid>
      <StyledImageWrapper>
        <StyledImage1 src={data[currentIndex].circleImage} alt="circle" />
        <StyledImage2 src={data[currentIndex].robotImage} alt="robot" />
      </StyledImageWrapper>
      <Typography3>{data[currentIndex].subtitle}</Typography3>
      <Typography2>{data[currentIndex].description}</Typography2>
      <IndicatorContainer>
        {data.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </IndicatorContainer>
      <ButtonContainer>
        {currentIndex > 0 ? (
          <StyledButton
            onClick={handlePrevClick}
            startIcon={<ArrowBackIcon />}
            sx={{ marginLeft: '40px', top: '40px' }}
          >
            Back
          </StyledButton>
        ) : (
          <PlaceholderButton />
        )}
        {currentIndex === data.length - 1 ? (
          <GetStartedButton
            variant="contained" 
            sx={{ marginRight: '40px', top: '40px' }}
          >
            Get Started
          </GetStartedButton>
        ) : (
          <BlueButton
            onClick={handleNextClick}
            variant="contained" 
            endIcon={<ArrowForwardIcon />}
            sx={{ marginRight: '40px', top: '40px' }}
          >
            Next
          </BlueButton>
        )}
      </ButtonContainer>
    </StyledContainer>
  );
};

export default Startpage;
