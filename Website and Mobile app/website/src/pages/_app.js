import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}
