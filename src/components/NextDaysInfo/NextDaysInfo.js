import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledWrapper = styled.section`
  margin:20px auto;
  background-color:rgba(0,0,0,.2);
  border-radius:7px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows:repeat(2,1fr);
  width:99%;

  @media (min-width:360px){
      width:90%;
  };  

  @media (min-width:450px){
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: 1fr;
  };

  @media (min-width:1000px){
    width:99%;
  };
`;

const StyledWeatherDesc = styled(Paragraph)`
  ::first-letter{
    text-transform:uppercase;
  };
  display:none;
  @media(min-width:1000px){
    display:block;
  }
`

const StyledBox = styled.div`
  padding:10px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
`

const StyledImg = styled.img`
  width:90%;

  @media (min-width:450px){
    width:100%;
  };
`

const NextDaysInfo = ({weather}) => {
  const { date, iconUrl, minTemperature, maxTemperature, pressure, windSpeed, weatherDesc} = weather;
  return(
    <StyledWrapper>
      <StyledBox>
        <Heading fontSize="1.5rem" as="h3">Data</Heading>
        <Paragraph aligned="center">{date}</Paragraph>
      </StyledBox>
      <StyledBox>
        <Heading fontSize="1.5rem" as="h3">Min</Heading>
        <Paragraph aligned="center">{minTemperature}</Paragraph>
      </StyledBox>
      <StyledBox>
        <Heading fontSize="1.5rem" as="h3">Max</Heading>
        <Paragraph aligned="center">{maxTemperature}</Paragraph>
      </StyledBox>
      <StyledBox centered>
        {iconUrl ? <StyledImg alt="weather icon" src={iconUrl} /> : <Heading fontSize="1.5rem" as="h3">Ikonka</Heading>}
        <StyledWeatherDesc aligned="center">{weatherDesc}</StyledWeatherDesc>
      </StyledBox>
      <StyledBox>
        <Heading fontSize="1.5rem" as="h3">Ciśnienie</Heading>
        <Paragraph aligned="center">{pressure}</Paragraph>
      </StyledBox>
      <StyledBox>
        <Heading aligned="center" fontSize="1.5rem" as="h3">Wiatr</Heading>
        <Paragraph aligned="center">{windSpeed}</Paragraph>
      </StyledBox>
    </StyledWrapper>
  );
}

const mapStateToProps = state => ({weathers : state});

NextDaysInfo.propTypes = {
  day: PropTypes.number,
}

export default connect(mapStateToProps)(NextDaysInfo);