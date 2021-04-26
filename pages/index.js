import React, {Fragment} from "react";
import Head from 'next/head'
import indexStyle from "./index.module.css";

const IndexPage = () => {	
	return (
		<Fragment>
			<Head>
				<title>Index</title>
			</Head>
			<h1 className={indexStyle.box}>Welcome to Index Page</h1>
		</Fragment>
	)	
}

export default IndexPage;