import { AppProps } from 'next/app';
import '@styles/globals.css';

function Application({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default Application;
