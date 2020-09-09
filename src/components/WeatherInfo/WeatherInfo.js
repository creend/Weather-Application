import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledGridWrapper = styled.div`
  margin: 30px 0 0 0;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows:repeat(2,1fr);
  height:170px;
`
const StyledInfoBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const WeatherInfo = ({minTemperature, windSpeed, sunriseDate, maxTemperature, pressure, sunsetDate}) => (
  <StyledGridWrapper>
    <StyledInfoBox>
      <Paragraph aligned="center" fontSize='2.3rem' >{minTemperature}</Paragraph>
      <Paragraph secondary aligned="center">Od</Paragraph>
    </StyledInfoBox>
    <StyledInfoBox>
      <Paragraph aligned="center" fontSize='2.3rem'>{windSpeed}</Paragraph>
      <Paragraph secondary aligned="center">Prędkość wiatru</Paragraph>
    </StyledInfoBox>
    <StyledInfoBox>
      <Paragraph aligned="center" fontSize='2.3rem'>{sunriseDate}</Paragraph>
      <Paragraph secondary aligned="center">Wschód słońca</Paragraph>
    </StyledInfoBox>
    <StyledInfoBox>
      <Paragraph aligned="center" fontSize='2.3rem'>{maxTemperature}</Paragraph>
      <Paragraph secondary aligned="center">Do</Paragraph>
    </StyledInfoBox>
    <StyledInfoBox>
      <Paragraph aligned="center" fontSize='2.3rem'>{pressure}</Paragraph>
      <Paragraph secondary aligned="center">Ciśnienie</Paragraph>
    </StyledInfoBox>
    <StyledInfoBox>
      <Paragraph aligned="center" fontSize='2.3rem'>{sunsetDate}</Paragraph>
      <Paragraph secondary aligned="center">Zachód słońca</Paragraph>
    </StyledInfoBox>
  </StyledGridWrapper>
);

WeatherInfo.propTypes = {
  minTemperature:PropTypes.string,
  windSpeed:PropTypes.string,
  sunriseDate:PropTypes.string,
  maxTemperature:PropTypes.string,
  pressure:PropTypes.string,
  sunsetDate:PropTypes.string,
}

WeatherInfo.defaultProps = {
  minTemperature:'-',
  windSpeed:'-',
  sunriseDate:'-',
  maxTemperature:'-',
  pressure:'-',
  sunsetDate:'-',
}

const mapStateToProps = state => {
  const {minTemperature, windSpeed, sunriseDate, maxTemperature, pressure, sunsetDate} = state.weatherDay1;

  return{
    minTemperature,
    windSpeed,
    sunriseDate,
    maxTemperature,
    pressure,
    sunsetDate
  };
}

export default connect(mapStateToProps)(WeatherInfo);