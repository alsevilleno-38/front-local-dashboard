import React, { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import axios from "axios";

const fieldState = {};
const InitialLogin = props => {
    const initialize = () => {
        setEmail("");
        setPassword("");
        setIsEmailValid(null);
        setIsPasswordValid(null);
        setIsFormValid(true);
    }
    const [email, setEmail] = useState("");   
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [isFormValid, setIsFormValid] = useState(null);
    const submitForm = e => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid) {
            initialize();
            alert("Form has been send");
        }
        else {
            setIsFormValid(false);
        }
    }
    const emailChanged = async e => {
        const t0 = performance.now();
        setIsFormValid(null);
        const newEmail = e.target.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        if (emailRegex.test(newEmail.toLowerCase()) && newEmail.length > 0) {
            setIsEmailValid(true);
            // const result = await axios.get("/api/email");
            
        }
        else {
            setIsEmailValid(false);
        }        
        setEmail(newEmail);        
        
        
    }
    const passwordChanged = e => {
        setIsFormValid(null);
        const newPassword = e.target.value;
        if (newPassword.length <= 0) {
            setIsPasswordValid(false);
        }
        else {
            setIsPasswordValid(true);
        }
        setPassword(newPassword);
    }
    return (        
        <form className={styles["login-form"]} onSubmit={submitForm} noValidate>
            <p className={ styles["legend"]} >Login</p>
            <div className={ styles["input-group"] }>
                <label htmlFor="email">Email</label>      
                <input type="email" id="email" value={email} onChange={emailChanged} />
                {isEmailValid == null || isEmailValid == true ? null :
                    <p className={styles["invalid-text"]}>
                        Email is not valid
                    </p>
                }                
            </div>
            <div className={ styles["input-group"] }>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={passwordChanged} value={ password }/>
                {isPasswordValid == null || isPasswordValid == true ? null :
                    <p className={styles["invalid-text"]}>
                        Password is not valid
                    </p>
                }
            </div>
            <div>
                <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
                {isFormValid == null || isFormValid == true ? null :
                    <p className={styles["invalid-text"]}>
                        Form cannot be submitted
                    </p>
                }
            </div>
        </form>        
    )
}

export default InitialLogin;