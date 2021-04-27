import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";

const obj = () => {
    return {
        getMethod: () => {}
    }
}
const Students = props => {
    // const {isLoading, students, isLoaded, sendRequest } = useHttp({
    //     resource: "students"
    // });    
    const {sendRequest} = useHttp();
    const [desc, setDesc] = useState({});
    const [name, setName] = useState({});
    const [initialLoad, setInitialLoad] = useState(true);

    const changeButton = () => {
        setDesc({});
    }
    useEffect(() => {
        setDesc({});
    }, [sendRequest]);

    return (
        <div>
            <button onClick={changeButton}>Change desc</button>     
            <p>{name.name}</p>
        </div>
    )
}

export default Students;