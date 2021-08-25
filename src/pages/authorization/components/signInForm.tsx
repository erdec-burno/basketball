import React from "react";
import styled from "styled-components";
import Input from "../../../ui/input/Input";

/*interface IProps {
    login: string;
    userID: number;
    authorized: boolean;
}*/

const SignInForm = () => {
    return (
        <Form>
            <Input type="text" labelValue="Login" />
            <Input type="password" labelValue="Password" />
            {/*<div className="">
                <label htmlFor="login">Password</label>
                <input type="text" className="form-control" id="login" placeholder="" />
            </div>
            <div className="">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="" />
            </div>*/}
        </Form>
    );
}

const Form = styled.div`
  /*top: 122px;*/
  position: relative;
  width: 100%;
`;

/*const FormGroup = styled.div`
`;*/

export default SignInForm;