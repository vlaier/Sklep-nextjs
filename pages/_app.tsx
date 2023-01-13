import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";
import { CartStateContextProvider } from "../components/Cart/CartContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartStateContextProvider>
      <Layout>
        <DefaultSeo {...NEXT_SEO_DEFAULT} />
        <Component {...pageProps} />
      </Layout>
    </CartStateContextProvider>
  );
}

export default MyApp;
