import React, {Fragment, useState} from "react";
import styles from "./FormItem.module.css";
import axios from "axios";

const test = () => {
    Object.keys(user).forEach(k => {
        <p><strong>{k}: </strong>{user[k]}</p>
    })
}

const FormItem = () => {
    const [id, setId] = useState("");
    const [user, setUser] = useState({});
    const [initialReload, setInitialReload] = useState(true);
    const searchName = async (e) => {        
        e.preventDefault();
        console.log(id);
        const response = await axios.get(`/api/users/${id}`);
        console.log(response.data);
        if (response.data) {
            setUser(response.data);            
        }
        else {
            setUser(null);
        }
        setInitialReload(false);
    }
    const changeId = (e) => {
        setId(e.target.value);
    }
    return (
        <Fragment>
            <form onSubmit={searchName}>
                <div className={styles.inputItem}>
                    <label htmlFor="id">ID: </label>
                    <input type="text" id="id" value={id} onChange={changeId}/>
                </div>
                <div className={styles.inputItem}>
                    <input type="submit" value="Search"/>
                </div>            
            </form>
            <div>
                <p><strong>Details</strong></p>
                {initialReload ? <p>Name: {user.name}</p> : null}
            </div>
        </Fragment>
    )
}

export default FormItem;