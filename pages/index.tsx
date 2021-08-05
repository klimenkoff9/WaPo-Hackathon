import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import CoinbaseCredentials from "../components/CoinbaseCredentials";
import PlaceOrder from "../components/PlaceOrder";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recurring Investment</title>
        <meta
          name="description"
          content="Set up recurring buy for your Coinbase Pro account!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col justify-center items-center">
        <PlaceOrder />
      </main>
    </div>
  );
}
