import Head from "next/head";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="Website" />
        <title> Website</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
};


export default Layout;