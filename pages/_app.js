import { Fragment } from 'react'
import Head from 'next/head'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {	
	return (
		<Fragment>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Component {...pageProps} />

		</Fragment>
	)
}

export default MyApp
