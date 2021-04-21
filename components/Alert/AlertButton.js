import React, {useState} from "react";
import styles from "./AlertButton.module.css";

const AlertButton = (props) => {    
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        let newCount = count + 1;
        setCount(newCount);        
    }    
    return (
        <div className={styles.box}>                
            <p className={styles.info}>Ding Dong! Your alarm clock is ringing!</p>
            <p className={`${styles.alert} ${styles.info}`}>The time is now: {props.timeNow}</p>
            <p className={styles.info}>{props.children || "Please wake up now!"}</p>
            <p className={`${styles.alert} ${styles.info}`}>Your count is now: {count}</p>
            <button onClick={incrementCount}>Increment Value</button>
        </div>
    )    
}

export default AlertButton;