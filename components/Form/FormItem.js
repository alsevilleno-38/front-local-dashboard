import React, {Fragment, useState} from "react";
import styles from "./FormItem.module.css";
import axios from "axios";

const test = (props) => {
    Object.keys(user).forEach(k => {
        <p><strong>{k}: </strong>{user[k]}</p>
    })
}

const FormItem = () => {
    // console.log("[FormItem]");
    const [id, setId] = useState("");
    const [user, setUser] = useState({});
    const [initialReload, setInitialReload] = useState(true);
    // const [userData, setUserData] = useState({
    //     isGet: false,
    //     data: {}
    // })
    
    const searchName = async (e) => {    
        console.log("[searchName]");
        let data;
        e.preventDefault();
        // console.log(id);
        const response = await axios.get(`/api/users/${id}`);
        // console.log(response.data);
        // console.log("responding");
        if (response.data) {
            console.log("before [setUser]");            
            setUser(response.data);          // render again after setUser  
            data = response.data
            console.log("[setUser]"); 
        }
        else {
            data = null;
            console.log("before [setUser]");
            setUser(null);
            console.log("[setUser]"); 
        }
        // setUserData({
        //     isGet: true,
        //     data: data
        // })
        // console.log("before [setInitialReload]");
        setInitialReload(false);
        console.log("[setInitialReload]"); 
    }
    const changeId = (e) => {
        setId(e.target.value);
    }
    // console.log("render");
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
                {/* {userData.isGet ?  <p>{userData.data ? `Name: ${userData.data.name}` : "No user matches"}</p>: null} */}
            </div>
        </Fragment>
    )
}

export default FormItem;