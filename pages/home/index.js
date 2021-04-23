import React, {Fragment} from "react";
import Head from 'next/head'
import styles from "./index.module.css";
import AlertButton from "../../components/Alert/AlertButton";
import FormItem from "../../components/Form/FormItem";
import StatusItem from "../../components/Form/StatusItem";
import List from "../../components/List/List";

const Index = () =>  {	
		// console.log(utilsStyles.body);
	return (
		<Fragment>								
			<Head>
				<title>Home</title>
			</Head>
			<style jsx global>
			{`
				body {
					margin: 2rem;
				}
			`}
			</style>				
			<h1 className={styles.box}>Welcome to Home Page</h1>
			<AlertButton timeNow="12:00:02 PM"/>						
			{/* <FormItem/> */}
			{/* <StatusItem/> */}
			<List/>
		</Fragment>
	)	
}

export default Index;