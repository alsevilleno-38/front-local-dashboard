import React, {useState, useEffect} from "react";
import {capitalizeWord} from "../../utils/helper";
import styles from "./Auth.module.scss";

const Input = props => {
    const [value, setValue] = useState("");
    const type = props.type;
    const name = props.name || props.type;
    const changeInput = e => {
        setValue(e.target.value);
    }
    let inputRender;
    switch (type)  {
        case "email":
        case "password":
            inputRender = (
                <>
                    <label htmlFor={name}>{`${capitalizeWord(name)}:`}</label>
                    <input type={type} id={name} value={value} onChange={changeInput} className={styles["input-item"]}/>
                </>
            )
            break;
        case "submit":
            inputRender = <input type={type} defaultValue="Submit" className={styles["input-submit-item"]}/>
            break;
    }
    return (
        <div className={styles["input-group"]}>
            {inputRender}
        </div>
    )
}

export default Input;