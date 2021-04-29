import React from "react";
import SignUp from "../../../components/Auth/SignUp"
import Head from "next/head";

const IndexPage = props => {
    return (
        <>
            <Head>
                <title>Sign Up</title>                
            </Head>  
            <SignUp/>            
        </>
    )
}

export default IndexPage;