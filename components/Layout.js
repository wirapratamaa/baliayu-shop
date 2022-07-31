import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Bali Ayu Shop {"| " + title}</title>
        <meta name="description" content="Bali Ayu Aromatheraphy" />
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
