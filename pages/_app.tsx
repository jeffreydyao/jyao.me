import '../styles/globals.css';
import PlausibleProvider from 'next-plausible';
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <PlausibleProvider domain="jyao.me" trackOutboundLinks={true}>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default App;
