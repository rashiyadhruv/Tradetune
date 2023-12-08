import "../styles/app.sass";
import type { AppProps } from "next/app";
import { ToolProvider } from "../context/toolContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToolProvider>
      <Component {...pageProps} />
    </ToolProvider>
  );
}

export default MyApp;
