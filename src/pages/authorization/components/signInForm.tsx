import React from "react";
import styled from "styled-components";
import Input from "../../../ui/input/Input";
import Title from "../../../ui/title/Title";

/*interface IProps {
    login: string;
    userID: number;
    authorized: boolean;
}*/

const SignInForm = () => {
    return (
        <Form>
            <Title value="SignIn"/>
            <Input type="text" labelValue="Login" />
            <Input type="password" labelValue="Password" />
        </Form>
    );
}

const Form = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  @media (max-width: 992px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

/*const FormGroup = styled.div`
`;*/

export default SignInForm;