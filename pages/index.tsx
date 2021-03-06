import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const coolBox: string =
  "m-4 p-6 text-left no-underline border-solid border-4 hover:border-opacity-50 border-light-blue-500 rounded-lg text-white max-w-screen-sm";

const Home: NextPage = () => {
  return (
    <div>
      <section className="w-full px-6 pb-12 antialiased">
        <div className="mx-auto max-w-7xl ">
          <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-6xl lg:text-7xl">
              <span className="inline md:block">Protect your server with</span>{" "}
              <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
                Safecord
              </span>
              🔒
            </h1>
            <div className="mx-auto mt-5 text-gray-300 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
              &quot;keeping that server of yours safe&quot;
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-550... relative inline-flex w-full md:w-auto">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=908904270978494514&permissions=402656272&scope=bot%20applications.commands"
                  type="button"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-5 hover:animate-ping"></span>
                  Invite Now!
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Our Features
          </h2>
          <p className="mt-2 text-lg text-center text-gray-300">
            Check out our list of awesome features below.
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
                  <circle cx={6} cy={14} r={3} />
                  <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Secure Captchas
              </h4>
              <p className="text-base text-center text-gray-500">
                Screen every user to complete a captcha to make sure they
                aren&apos;t bots.
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 8a3 3 0 0 1 0 6" />
                  <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                  <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Easy to setup!
              </h4>
              <p className="text-base text-center text-gray-500">
                Start setting up Safecord by inviting it to your server then
                start the setup process with /setup
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                  <line x1={12} y1={12} x2={20} y2="7.5" />
                  <line x1={12} y1={12} x2={12} y2={21} />
                  <line x1={12} y1={12} x2={4} y2="7.5" />
                  <line x1={16} y1="5.25" x2={8} y2="9.75" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                Customizable
              </h4>
              <p className="text-base text-center text-gray-500">
                Safecord is extremely customizable, so you can easily configure
                it the way you want for your server.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
