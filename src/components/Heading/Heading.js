import styled from 'styled-components';

const Heading = styled.h1`
  font-size:${({ fontSize }) => fontSize || '3rem'};
  text-align:${({ aligned }) => aligned || 'left'};
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || 0};
  font-weight:${({ theme, weigth }) => theme.fontWeigth[weigth]};
`;

export default Heading;