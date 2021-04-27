import React, { useState, useEffect } from "react";
import axios from "axios";

let counter = 0;

const Students = props => {
    counter += 1;
    const [students, setStudents] = useState([]);
    const [description, setDescription] = useState(null);




    useEffect(async () => {
        console.log("useEffect []");
        counter += 10;
        // console.log("useEffect []");    
        setDescription("loading...");

        
        // log += " (useEffect [])\n";
        const response = await axios.get("/api/students");
        console.log("response");  
        setStudents(response.data);
    }, [])

    useEffect(() => {
        counter += 10;
        console.log("useEffect [students.length]");
        // counter *= 3
        // setCounter2("activated");
        // console.log("useEffect []");    
        // setDescription("captured");
        // ++counter;
        // log += " (useEffect [students.length])\n";
    }, [students.length])

    return (
        <div>
            <p>{students.length === 0 ? "no data" : "there is data"}</p>
            {/* <p>{description}</p> */}
            {/* {log.split("\n").map(str => {
                return (
                    <p>{str }</p>
                )
            })}             */}
            {/* <p>{ counter }</p> */}
            <p>{ counter }</p>
        </div>)
}

export default Students;