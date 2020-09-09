import React, {Component} from 'react';
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { connect} from 'react-redux';
import { theme } from 'theme/theme';
import { getAllWeather as getWeather} from 'action';
import GlobalStyle from 'theme/GlobalStyle';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Form from 'components/Form/Form';
import Modal from 'components/Modal/Modal';
import WeatherInfo from 'components/WeatherInfo/WeatherInfo';
import MainWeatherInfo from 'components/MainWeatherInfo/MainWeatherInfo';
import NextDaysInfo from 'components/NextDaysInfo/NextDaysInfo';

const StyledWrapper = styled.section`
  margin: 12px;
  color: ${({ theme }) => theme.primaryColor};
  position:relative;
  @media(min-width:1000px){
    width:1000px;
    margin:0 auto;
  }
`;

const StyledHeading = styled(Heading)`
  @media(min-width:1000px){
    padding: 10px 0 0 30px;
  }
`
const StyledParagraph = styled(Paragraph)`
  @media(min-width:1000px){
    padding: 15px  0 0 30px;
  }
`

class App extends Component {
  state = {
    inputValue: '',
    error:'',
    isModalOpened:false,
  }

  handleInputChange = e => {
    const inputValue = e.target.value;
    this.setState(prevState=>({
      inputValue: inputValue
    }))
  };

  handleButtonClick = () => {
    this.setState({ isModalOpened: false});
  }

  handleCitySubmit = async e => {
    e.preventDefault();

    const { getAllWeather } = this.props;
    const { inputValue } = this.state;

    const apiKey = '264aaa5e1524a7f9f55fa8910a9ea14c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=${apiKey}&lang=pl`;
    
    try{
      const response = await fetch(apiUrl);
      if(!response.ok){
        throw new Error('Nie znaleziono miasta')
      }
      const data = await response.json(); 
      getAllWeather(data);
    }catch(err){
      console.log(err);
      this.setState({
        error: err.message,
        isModalOpened:true,
      });
    }
  }

  render(){
    const { inputValue, error, isModalOpened} = this.state;
    const { weatherDay1, weatherDay2, weatherDay3, weatherDay4, weatherDay5, weatherDay6 } = this.props.weather;
    const { cityName, cityCountry, date} = weatherDay1;
    const { handleButtonClick, handleInputChange, handleCitySubmit} = this;
    return (
      <>
          <GlobalStyle />
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Open+Sans:wght@300;400;600&display=swap"
              rel="stylesheet"
            />

          </Helmet>
          <ThemeProvider theme={theme}>
          {isModalOpened && <Modal message={error} btnClickFucn={handleButtonClick}/> }
            <StyledWrapper>
              <StyledHeading>
                  {cityName}, {cityCountry}
              </StyledHeading>
              <StyledParagraph StyledParagraph padding="5px 0 0">{date}</StyledParagraph>
              <Form
                value={inputValue}
                onChangeFunc={handleInputChange}
                onSubmitFunc={handleCitySubmit}
              />
                <MainWeatherInfo />
                <WeatherInfo/>
              <Paragraph width="95%" margin="20px auto">Następne 5 dni</Paragraph>
              <NextDaysInfo weather={weatherDay2}/>
              <NextDaysInfo weather={weatherDay3}/>
              <NextDaysInfo weather={weatherDay4}/>
              <NextDaysInfo weather={weatherDay5}/>
              <NextDaysInfo weather={weatherDay6}/>
            </StyledWrapper>
          </ThemeProvider>
      </>
    );
  }
}

App.propTypes = {
  cityName:PropTypes.string,
  cityCountry:PropTypes.string,
  date:PropTypes.string,
}

App.defaultProps = {
  cityName: 'Miasto',
  cityCountry: 'Kraj',
  date: 'Data',
} 

const mapStateToProps = state => ({weather:state});

const mapDispatchToProps = dispatch => ({
  getAllWeather: (data) => dispatch(getWeather(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
