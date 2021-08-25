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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 1024px;
  /*top: 340px;*/
  /*border: 1px solid #CCC;*/
  /*@media (min-width: 1400px) {
    width: 1320px;
    padding: 1.5rem 2.5rem;
  }
  @media (min-width: 768px) {
    width: 720px;
    padding: 1rem 2rem;
  }*/
`;

const Left = styled.div`
  /*position: absolute;
  width: 606px;
  height: 1024px;
  left: 0px;
  top: 0px;*/
  flex: 2 1 606px;
  background: #FFFFFF;
`;

const Right = styled.div`
  /*position: absolute;
  width: 834px;
  height: 1024px;
  left: 606px;
  top: 0px;*/
  flex: 2 1 834px;
  background: #F5FBFF;
`;

export default SignIn;