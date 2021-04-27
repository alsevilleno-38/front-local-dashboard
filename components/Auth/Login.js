import React, { useEffect } from "react";

const Login = props => {
    useEffect(async () => {

        const result = await client.db("testing").collections("default").insertOne({ name: "Dam" });
        console.log(result);
    }, [])
    return (
        <>
            <p>Success</p>
        </>
    )
}

export default Login;