import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletConnectionProvider } from "../utils/WalletConnectionProvider";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletConnectionProvider>
  );
}
