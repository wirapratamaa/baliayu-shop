import Nav from "../components/Navigation/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="relative">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
