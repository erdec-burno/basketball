import React from "react";
import styled from "styled-components";
import Title from "../../ui/title/Title";
import SignInForm from "./components/signInForm";

const SignIn: React.FC = () => {
    return (
        <Wrapper>
            <Left>
                <Title value="SignIn"/>
                <SignInForm />
            </Left>
            <Right>
                right
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  background: #F5FBFF;
  top: 340px;
  border: 1px solid #CCC;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 1140px;
  }
`;

const Left = styled.div`
  position: absolute;
  width: 606px;
  height: 1024px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
`;

const Right = styled.div`
  position: absolute;
  width: 834px;
  height: 1024px;
  left: 606px;
  top: 0px;
  background: #F5FBFF;
`;

export default SignIn;