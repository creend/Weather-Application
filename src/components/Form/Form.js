import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import searchIcon from 'assets/search.svg';

const StyledInput = styled.input`
  border:none;
  border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
  transition: .3s;
  outline:none;
  background-color:transparent;
  width:150px;
  height:30px;
  color:white;
  ::placeholder{
    color:${({ theme }) => theme.primaryColor};
  }
  :focus,
  :not(:placeholder-shown) {
    border-bottom: 2px solid #ff9912;
    background-color: rgba(255,255,255,.1);
  }

  :focus + label,
  :not(:placeholder-shown) + label{
    top:-16px; 
    color:#ff9912;
  }

  :focus ~ button,
  :not(:placeholder-shown) ~ button{
    background-color: #ff9912;
  }
  
  padding:0 10px;
`

const StyledLabel = styled.label`
  position: absolute;
  top:5px;
  left:0;
  color:#999;
  transition: .5s;
  pointer-events:none;
  font-size:1.6rem;
`

const StyledForm = styled.form` 
  position:relative;
  display:flex;
  justify-content:flex-end;
  @media(min-width:440px){
    position: absolute;
    top:50px;
    right:40px;
  };
`

const StyledButton = styled.button`
  width:30px;
  height:30px;
  border:0;
  cursor:pointer;
  transition:.3s;
  background-color: white;
  background-image: url(${searchIcon});
  background-position:center;
  background-size: 100%;
  background-repeat:no-repeat;
`

const Form = ({ value, onChangeFunc, onSubmitFunc}) => (
  <StyledForm onSubmit={onSubmitFunc} autoComplete="off">
    <StyledInput type="text" placeholder=" " name="city" value={value} onChange={onChangeFunc}/>
    <StyledLabel for="city">Miasto</StyledLabel>    
    <StyledButton type="submit"></StyledButton>
  </StyledForm>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFunc:PropTypes.func.isRequired,
  onSubmitFunc:PropTypes.func.isRequired,
}

export default Form;