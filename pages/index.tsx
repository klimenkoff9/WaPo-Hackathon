import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import CoinbaseCredentials from "../components/CoinbaseCredentials";
import PlaceOrder from "../components/PlaceOrder";

export default function Home() {
  const handleSubmitAuth = async (values: { apiKey: string; }) => {
    
    console.log(values);
  }
  const handleSubmitOrder = async () => {
  }
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

      <main className="flex flex-1 flex-col justify-center items-center h-screen bg-black">
        <h1 className="text-white m-15 text-4xl font-sans">
          Build a recurring investment plan for your Coinbase Pro account!
        </h1>
        {true && <div>
          <h2 className="text-white m-10 text-4xl font-sans">Step 1: Enter your Coinbase Pro API</h2>
          <CoinbaseCredentials handleSubmitAuth={handleSubmitAuth} />
        </div>}
        {true && 
        <div>
          <h2 className="text-white m-10 text-4xl font-sans">Step 2: Place Order</h2>
        <PlaceOrder handleSubmitOrder={handleSubmitOrder} />
        </div>}
      </main>
    </div>
  );
}
