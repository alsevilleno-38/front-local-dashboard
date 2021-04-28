import React from "react";
import InitialLogin from "../../../components/Auth/InitialLogin"
import Head from "next/head";

const IndexPage = props => {
    return (
        <>
            <Head>
                <title>Login</title>                
            </Head>  
            <InitialLogin/>            
        </>
    )
}

export default IndexPage;