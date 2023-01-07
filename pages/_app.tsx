import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
