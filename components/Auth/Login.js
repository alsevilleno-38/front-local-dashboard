import React, { useEffect } from "react";
import styles from "./Auth.module.scss";
import Input from "./Input";
import Form from "./Form";

const Login = props => {
    return (
        <div className={styles["login-form"]}>
            <Form>
                <Input type="email"/>
                <Input type="password"/>                
                <Input type="submit"/>
            </Form>
        </div>
    )
}

export default Login;