import React from 'react';
import styled, {keyframes} from 'styled-components';
import closeIcon from 'assets/close.png';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

const showIn = keyframes`
  0%{
    transform:translate(-50%,-150%);
    opacity:.3;
  }
  100%{
    transform:translate(-50%,-50%);
    opacity:1;
  }
`
const StyledButton = styled.button`
  position:absolute;
  top:10px;
  right:10px;
  border-radius:50%;
  width:35px;
  height:35px;
  background:url(${closeIcon});
  background-size:100%;
  cursor:pointer;
  border:none;
`

const StyledWrapper = styled.div`
  width:80%;
  max-width:1000px;
  height:30vh;
  position:fixed;
  z-index:100;
  top:50%;
  left:50%;
  border-radius:10px; 
  transform:translate(-50%,-50%);
  animation: ${showIn} .3s ; 
  background-color:#FFDB58;
`
const StyledInfoWrapper = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  height:50%;
  transform:translate(-50%, -50%);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const StyledHeading = styled(Heading)`
  color:#e24c4b;
  text-align:center;
`
const StyledParagraph = styled(Paragraph)`
  color:#e24c4b;
  text-align:center;
`

const Modal = ({btnClickFucn, message}) => (
  <StyledWrapper>
    <StyledButton onClick={btnClickFucn}></StyledButton>
    <StyledInfoWrapper>
      <StyledHeading fontSize='1.8rem' as="h2">{message}</StyledHeading>
      <StyledParagraph>Wpisz miasto ponownie</StyledParagraph>
    </StyledInfoWrapper>
  </StyledWrapper>
)

export default Modal;