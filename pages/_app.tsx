import 'tailwindcss/tailwind.css';
import 'inter-ui/inter.css';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';

const Tls = ({Component, pageProps}: AppProps) => {
	return <Component {...pageProps} />;
};

export default Tls;
