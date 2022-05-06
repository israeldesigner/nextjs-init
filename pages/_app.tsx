// eslint-disable-next-line @next/next/no-sync-scripts
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import '../styles/globals.scss';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);  
  return <Component {...pageProps} />
}

export default MyApp
