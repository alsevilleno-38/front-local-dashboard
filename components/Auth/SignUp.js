import React, { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import axios from "axios";

const fieldState = {};
let counter = 0;
const InitialLogin = props => {
    const initialize = () => {
        setName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");        

        setIsNameValid(null);
        setIsEmailValid(null);
        setIsPasswordValid(null);
        setIsRepeatPasswordValid(null);

        setIsFormValid(true);
    }
    const [name, setName] = useState("");    
    const [email, setEmail] = useState("");   
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [displayPassword, setDisplayPassword] = useState(false);
    const [displayRepeatPassword, setdisplayRepeatPassword] = useState(false);

    const [isNameValid, setIsNameValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const [isFormValid, setIsFormValid] = useState(null);
    
    const submitForm = e => {
        e.preventDefault();
        if (isEmailValid && isPasswordValid) {
            
            setIsSubmitDisabled(true);
            axios.post("http://127.0.0.1:5500/submit", {
                name,
                email,
                password
            }).then((result) => {
                console.log(result.data);
                initialize();
                alert("Form has been processed");
                setIsSubmitDisabled(false);

            }).catch(err => {
                console.log(err);
                alert("Error processing form!");
                setIsSubmitDisabled(false);
            })
            
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
        
                
        if (emailRegex.test(newEmail.toLowerCase()) && newEmail.length > 0) {                     
            // setIsEmailValid(result.data.isValid);                
            // send request only after 200ms
            axios.post("http://127.0.0.1:5500/test", {newEmail}).then(result => {
            // counter++;
            // console.log(`${newEmail} - ${result.data.isExist}`);
            // console.log(counter);
            // console.log(result.data.isExist);
            if (result.data.isExist) {
                setIsEmailValid(false);
            }
            else {``
                setIsEmailValid(true);
            }
        })
           
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

        if (newPassword == repeatPassword) {
            setIsRepeatPasswordValid(true);
        }
        else {
            setIsRepeatPasswordValid(false);
        }
        setPassword(newPassword);
    }
    const repeatPasswordChanged = e => {
        const newPasswordRepeat = e.target.value
        setRepeatPassword(newPasswordRepeat);
        if (newPasswordRepeat == password) {
            setIsRepeatPasswordValid(true);
        }
        else {
            setIsRepeatPasswordValid(false);
        }
    }
    const displayPasswordChanged = e => {
        setDisplayPassword(e.target.checked);
    }
    const displayRepeatPasswordChanged = e => {
        setdisplayRepeatPassword(e.target.checked);
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
                <input type={`${displayPassword ? "text" : "password"}`} id="password" onChange={passwordChanged} value={ password }/>
                <div className={styles["checkbox"]}>
                    <input type="checkbox" id="displayPassword" checked={displayPassword} onChange={displayPasswordChanged}/>
                    <label htmlFor="displayPassword">Display password</label>
                </div>
                {isPasswordValid == null || isPasswordValid == true ? null :
                    <p className={styles["invalid-text"]}>
                        Password is not valid
                    </p>
                }
            </div>
            <div className={ styles["input-group"] }>
                <label htmlFor="password">Repeat Password</label>
                <input type={`${displayRepeatPassword ? "text" : "password"}`} id="repeatPassword" onChange={repeatPasswordChanged} value={ repeatPassword }/>
                <div className={styles["checkbox"]}>
                    <input type="checkbox" id="displayRepeatPassword" checked={displayRepeatPassword} onChange={displayRepeatPasswordChanged}/>
                    <label htmlFor="displayRepeatPassword">Display password</label>
                </div>
                {isRepeatPasswordValid == null || isRepeatPasswordValid == true ? null :
                    <p className={styles["invalid-text"]}>
                        Password does not match
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
                <input type="submit" value="Submit" style={{ cursor: "pointer" }} disabled={isSubmitDisabled}/>
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