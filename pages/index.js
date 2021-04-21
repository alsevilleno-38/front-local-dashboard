import React, {Fragment} from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

class Index extends React.Component {
	render() {		
		return (
			<Fragment>
				<Head>
					<title>Index</title>
				</Head>
				<h1>Welcome to Index Page</h1>
			</Fragment>
		)
	}
}

export default Index;