import React from "react";
import styled from "styled-components";

interface IProps {
    type: string;
    labelValue: string;
}

const Input: React.FC<IProps> = (props) => {
  return (
      <FormGroup>
          <Label htmlFor={props.type}>{props.labelValue}</Label>
          <InputStyled type={props.type} placeholder="" />
      </FormGroup>
  );
}

const FormGroup = styled.div`
  /*position: absolute;
  width: 366px;
  height: 92px;
  left: 120px;*/
  /*top: 422px;*/
  /*display: block;*/
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const Label = styled.label`
  /*position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 80.43%;
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #707070;*/
  display: inline-block;
  /*margin-bottom: 1rem;*/
`;

const InputStyled = styled.input`
  /*position: absolute;*/
  //left: 0%;
  //right: 0%;
  //top: 28.26%;
  //bottom: 28.26%;
  height: 40px;
  width: 366px;
  left: 0px;
  top: 26px;
  border-radius: 4px;

  background: #F6F6F6;
  border-radius: 4px;
  border-color: transparent;
  
  &:hover {
    background: #D1D1D1;
  }
  
  &:focus {
    background: #F6F6F6;
    box-shadow: 0px 0px 5px #D9D9D9;
    outline: none;
  }
`;

export default Input;