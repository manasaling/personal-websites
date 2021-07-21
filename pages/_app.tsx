// Styling
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

// Next.js
import type { AppProps } from "next/app";

// Components
import NavigationBar from "../components/NavigationBar";
import { AppWrapper } from "../context/state"; // react "context" for global state, edit file to add more contexts

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <NavigationBar />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
export default MyApp;
