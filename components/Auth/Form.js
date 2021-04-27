import React from "react";
import Input from "./Input";
import styles from "./Auth.module.scss";

const Form = props => {
    return (
        <form className={styles["form"]}>
            {/* <Input type="submit"/> */}
            {props.children}
        </form>
    )
}

export default Form;