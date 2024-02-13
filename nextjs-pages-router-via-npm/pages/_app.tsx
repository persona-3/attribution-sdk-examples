import { AppProps } from "next/app";
import { useEffect } from "react";
import { Attribution } from "@personaxyz/attribution-sdk";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Attribution.init({
      apiKey: "<Your_API_Key_here>",
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
