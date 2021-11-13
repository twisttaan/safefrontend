import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

async function testPost() {
  await fetch("http://localhost:3000/api/post", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
}

const coolBox: string =
  "m-4 p-6 text-left no-underline border-solid border-4 hover:border-opacity-50 border-light-blue-500 rounded-lg text-white max-w-screen-sm";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-darkBlurple">
      <main className="font-mono min-h-screen flex flex-col justify-center items-center bg-darkBlurple">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-white mt-10 mb-8 sm:mt-14 sm:mb-10">
          Welcome to Flash⚡!
        </h1>

        <div className="flex items-center justify-center flex-wrap max-w-screen-md">
          <a onClick={testPost} className={coolBox}>
            <h2>Post Test</h2>
            <p>Post a test post.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
