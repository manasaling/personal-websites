// Styling
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Container from "react-bootstrap/Container";

// Next.js
import type { AppProps } from "next/app";

// Components
import NavigationBar from "../components/NavigationBar";
import { StateProvider } from "../context/store"; // react "context" for global state, edit file to add more contexts

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Container fluid>
        <NavigationBar />
        <Component {...pageProps} />
      </Container>
    </StateProvider>
  );
}
export default MyApp;
