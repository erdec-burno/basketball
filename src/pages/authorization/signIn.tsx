import React from "react";
import styled from "styled-components";
import SignInForm from "./components/signInForm";

const SignIn: React.FC = () => {
    return (
        <Wrapper>
            <Left>
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
  /*flex-direction: row;*/
  justify-content: center;
  height: 100vh;
  /*top: 340px;*/
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
  width: 606px;
  height: 100%;
  margin-top: 20rem;
  left: 0px;
  flex: 2 1 606px;
  background: #FFFFFF;
  
  @media (max-height: 768px) {
    margin-top: 10%;
  }
`;

const Right = styled.div`
  width: 834px;
  height: 100%;
  padding-top: 100px;
  flex: 2 1 834px;
  background: #F5FBFF;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export default SignIn;