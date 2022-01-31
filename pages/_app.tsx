import "../styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PlausibleProvider domain="jyao.me" trackOutboundLinks={true}>
      <Component {...pageProps} />
    </PlausibleProvider>
  )
};

export default App;
