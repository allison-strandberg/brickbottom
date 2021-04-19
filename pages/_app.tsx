import { AppProps } from 'next/app';
import '@styles/globals.css';
import SimpleReactLightbox from 'simple-react-lightbox-pro';

function Application({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default Application;
