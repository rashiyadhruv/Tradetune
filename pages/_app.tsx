import "../styles/app.sass";
import type { AppProps } from "next/app";
import { ToolProvider } from "../context/toolContext";
import { init } from "@airstack/airstack-react";
init("1361c31fee7c84ba39a8bcd30ff8cd666");
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToolProvider>
      <Component {...pageProps} />
    </ToolProvider>
  );
}

export default MyApp;
