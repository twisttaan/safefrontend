import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Contributors from "../react-contributors";
import React, { Component } from "react";

// Username of the repo owner.
const owner = "twisttaan";

// Repository name or array with multiple repositories names.
const repos = ["EvieWeb", "jamble"];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="stylesheet" href="/legacy.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <title>Evie</title>
        <meta content="Evie Bot" property="og:title" />
        <meta name="theme-color" content="#7289da" />
        <meta
          content="Evie is a feature-rich, easy to use Discord bot built to deliver the best experience of a bot on Discord!"
          property="og:description"
        />
        <meta content="https://eviebot.rocks" property="og:url" />
        <meta
          content="https://eviebot.rocks/assets/EvieIcon.png"
          property="og:image"
        />
        <meta content="#43B581" data-react-helmet="true" name="theme-color" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7289da" />
        <meta name="msapplication-TileColor" content="#7289da" />
        <meta name="theme-color" content="#7289da" />
      </Head>
      <nav className="relative flex flex-wrap items-center content-between py-3 px-4  bg-transparent">
        <div className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-150 ...">
          <img src="assets/EvieHead.svg" width="60" height="60" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://dash.eviebot.rocks"
          className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Dashboard
          </span>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://docs.eviebot.rocks"
          className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Documentation
          </span>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="https://discord.gg/82Crd8tZRF"
          className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blurple rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Support Server
          </span>
        </a>
      </nav>
      <Component {...pageProps} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="page_end"></div>
      <div className="flex-auto p-6 gs-card">
        <div className="text-5xl leading-none font-extrabold tracking-tight mb-4 text-white">
          Invite Evie Today!
        </div>
        <div className="text-2xl tracking-tight mb-10">
          and give your server a fun and reliable Discord Bot!
        </div>
        <div className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-550...">
          <a
            href="https://discord.com/oauth2/authorize?client_id=807543126424158238&permissions=518855707712&scope=bot%20applications.commands"
            id="GFG"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blurple rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 mb-2 font-medium leading-tight text-lg mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Invite Evie
            </span>
          </a>
        </div>
      </div>
      <br />
      <div className="page_end"></div>
      <div className="footer">
        <br />
        <div className="twisttaan">
          eviebot.rocks made with ❤️ by
          <div className="grid justify-items-stretch ...">
            <div className="justify-self-center ...">
              <Contributors owner={owner} repo={repos} />
            </div>
          </div>
        </div>
      </div>

      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={0}
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={3}
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={5}
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x={48} y={7} fill="#2c2f33" />
        </g>
      </svg>
    </div>
  );
}

export default MyApp;
