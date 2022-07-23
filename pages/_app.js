import "../styles/globals.css";
// import { AppProps } from "next/app";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

// the chain id 4 represents the rinkeby network and
//the injected connector is a web 3 connection method used by meta mask
const supportedChainIds = [4];
const connectors = {
  injected: {},
};
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
