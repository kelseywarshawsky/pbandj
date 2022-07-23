import { useTheme } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Pricing from "../components/Pricing";

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="PB&J" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
