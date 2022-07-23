// import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import Header from "../components/Header";
const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
  const { address, connectWallet } = useWeb3();

  ///const welcomUser = ()=>{}

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };
      // const result = await client.createIfNotExists(userDoc);
      // welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div className={style.wrapper}>
      {/* <Toaster position='top-center' reverseOrder={false}/> */}
      {address ? (
        <>
          <Header />
          {/* <Hero/> */}
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome to be <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}

// export default Home;
