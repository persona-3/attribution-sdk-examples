import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Attribution } from "@personaxyz/attribution-sdk";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sample App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="flex items-center justify-center flex-col">
        <h1>Welcome to Persona</h1>
        <button
          onClick={() => {
            Attribution.track("button-click", { foo: "bar" });
          }}
        >
          Track Custom Event
        </button>
        <div>
          <Link href="/about">About section</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
