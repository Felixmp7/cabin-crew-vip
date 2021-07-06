import { AppProps } from 'next/app';
import '../globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default MyApp;
