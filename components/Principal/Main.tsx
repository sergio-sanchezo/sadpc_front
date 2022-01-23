import Head from "next/head";
import React from "react";

const Main = (props: { children: JSX.Element }) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Sadpc</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Main;
