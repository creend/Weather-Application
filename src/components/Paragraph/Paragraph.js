import styled from 'styled-components';

const Paragraph = styled.p`
  font-size:${({fontSize})=> fontSize || '1.6rem'};
  text-align:${({ aligned }) => aligned || 'left'};
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || 0};
  color:${({ secondary, theme }) => secondary && theme.secondaryColor};
  width:${({width}) => width || '100%'};
`

export default Paragraph;
