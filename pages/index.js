import { useTheme } from "@mui/material";
import Head from "next/head";

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
