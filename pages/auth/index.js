import React, { useState } from "react";
import Head from "next/head"
import Login from "../../components/Auth/Login"


const authPage = (props) => {    
    return (
        <>
            <Head>
                <title>Authentication</title>                
            </Head>  
            <Login/>          
        </>
    )
    
}

export default authPage;