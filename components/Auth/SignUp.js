import React, { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import axios from "axios";

const fieldState = {};
const InitialLogin = props => {
    const initialize = () => {
        setName("");
        setEmail("");
        setPassword("");

        setIsNameValid(null);
        setIsEmailValid(null);
        setIsPasswordValid(null);

        setIsFormValid(true);
    }
    const [name, setName] = useState("");    
    const [email, setEmail] = useState("");   
    const [password, setPassword] = useState("");

    const [isNameValid, setIsNameValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(null);

    const [isFormValid, setIsFormValid] = useState(null);

    const submitForm = e => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid) {
            initialize();
            alert("Form has been sent");
        }
        else {
            setIsNameValid(isNameValid == null ? false : isNameValid);
            setIsPasswordValid(isPasswordValid == null ? false : isPasswordValid);
            setIsEmailValid(isEmailValid == null ? false : isEmailValid);

            setIsFormValid(false);
        }
    }
    const nameChanged = e => {
        setIsFormValid(null);
        const newName = e.target.value;

        if (newName.length <= 0) {
            setIsNameValid(false);
        }
        else {
            setIsNameValid(true);
        }
        setName(newName);
    }
    const emailChanged = async e => {
        let t0 = performance.now();
        setIsFormValid(null);
        const newEmail = e.target.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        axios.post("http://127.0.0.1:5500/test", {newEmail}).then(result => {
            console.log(newEmail);
            // console.log(result.data.isExist);
            if (result.data.isExist) {
                setIsEmailValid(false);
            }
            else {
                setIsEmailValid(true);
            }
        })
                
        if (emailRegex.test(newEmail.toLowerCase()) && newEmail.length > 0) {                     
            // setIsEmailValid(result.data.isValid);                
            // send request only after 200ms
           
        }
        else {
            setIsEmailValid(false);
        }        
        setEmail(newEmail);
        let t1 = performance.now();
        console.log(t1 - t0);
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
            <p className={ styles["legend"]} >Sign Up</p>
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
            <div className={ styles["input-group"] }>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={nameChanged} value={ name }/>
                {isNameValid == null || isNameValid == true ? null :
                    <p className={styles["invalid-text"]}>
                        Name is not valid
                    </p>
                }
            </div>
            <div>
                <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
                {isFormValid == null || isFormValid == true ? null :
                    <p className={styles["invalid-text"]} style={{textAlign: "center", fontWeight: "bold"}}>
                        Form cannot be submitted
                    </p>
                }
            </div>
        </form>        
    )
}

export default InitialLogin;    