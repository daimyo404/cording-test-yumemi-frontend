import Head from "next/head";
import { VoidFunctionComponent } from "react";

const HtmlHead: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
};

export default HtmlHead;
