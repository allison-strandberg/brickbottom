/* eslint-disable react/prop-types */
import '@styles/globals.css';

function Application({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default Application;
