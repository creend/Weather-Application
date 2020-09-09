import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';

const StyledWrapper = styled.div`
  display:flex;
  justify-content:flex-start; 
  align-items:center;
  height: 173px;
`;

const StyledWeatherImg = styled.img`
  padding: 15px 5px 0 10px;
  width: 120px;
  height: 120px;
  position: absolute;
  top:calc(50% - 120px / 2);
  left:calc(50% - 120px / 2);
`;

const StyledImgWrapper = styled.div`
  width: 50vw;
  height:100%;
  position:relative;
`

const StyledWeatherInfoWrapper = styled.div`
  padding:0 0 0 30px;
`

const StyledWeatherInfo = styled.p`
  font-size:1.8rem;
  ::first-letter{
    text-transform:uppercase;
  }
`;

const MainWeatherInfo = ({temperature, weatherDesc, iconUrl}) => (
  <StyledWrapper>
    <StyledImgWrapper>
      <>
        {iconUrl ? (
          <StyledWeatherImg alt="weatherIcon" src={iconUrl} />
        ) : null}
      </>
    </StyledImgWrapper>
    <StyledWeatherInfoWrapper>
      <Heading fontSize='6rem' padding="10px 30px 10px 0" weigth="sb" as="h2">{temperature}</Heading>
      <StyledWeatherInfo>{weatherDesc}</StyledWeatherInfo>
    </StyledWeatherInfoWrapper>
  </StyledWrapper>
)

MainWeatherInfo.propTypes = {
  temperature: PropTypes.string,
  weatherDesc: PropTypes.string,
  iconUrl: PropTypes.string,
};
MainWeatherInfo.defaultProps = {
  temperature: 'Temp',
  weatherDesc: 'Opis',
  iconUrl: '',
};

const mapStateToProps = state => {
  const { temperature, weatherDesc, iconUrl} = state.weatherDay1;
  return{
    temperature,
    weatherDesc,
    iconUrl,
  };
}

export default connect(mapStateToProps)(MainWeatherInfo);