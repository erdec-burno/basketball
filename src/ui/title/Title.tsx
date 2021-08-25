import React from "react";
import styled from "styled-components";

interface IProps {
  value: string;
}

const Title: React.FC<IProps> = ({value}) => {
  return <Header>{value}</Header>;
}

const Header = styled.h1`
  /*position: absolute;*/
  width: 130px;
  height: 50px;
  left: 120px;
  top: 340px;

  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: #344472;
`;

export default Title;