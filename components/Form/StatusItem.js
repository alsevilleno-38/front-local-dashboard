import React, { useState, useEffect } from "react";
import axios from "axios";

const StatusItem = (props) => {
    const [info, setInfo] = useState("");
    const [desc, setDesc] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState(100);
    const [initialLoad, setInitialLoad] = useState(true);
    const validateInfo = () => {

    }
    useEffect(() => {
        setAge(prevAge => prevAge + 1);
    }, []);
    const onInfoChange = (e) => {        
        setInfo(e.target.value);        
        setDesc("setting desc");        
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();
        setJob("initial");        
        const response = await axios.get(`/api/users/0`);
        setJob("after");        
    }
    const getValue = (val) => {
        if (val == "initial") {
            return "searching...";
        }
        else if (val == "after") {
            return "found!";
        }
        else {
            return "undefined";
        }
    }    
    return (
        <>
            <form onSubmit={ onSubmitForm }>
                <div>
                    <label htmlFor="info">Info: </label>
                    <input value={info} id="info" onChange={onInfoChange} />
                    <p></p>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <p>{getValue(job)}</p>
            <p>{age}</p>
        </>
    )
}

export default StatusItem;