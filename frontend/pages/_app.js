import Layout from "@/components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "next-seo.config";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
