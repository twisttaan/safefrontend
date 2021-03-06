import "tailwindcss/tailwind.css";
import Head from "next/head";
import Link from "next/link";
import type {} from "@skyra/discord-components-core";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import "../public/legacy.css";
import Image from "next/image";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="App">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Safecord</title>
        <meta content="Safecord" property="og:title" />
        <meta
          content="keeping that server of yours safe"
          property="og:description"
        />
        <meta content="https://www.safecord.xyz/" property="og:url" />
        <meta content="https://www.safecord.xyz/s.png" property="og:image" />
        <meta content="#000001" data-react-helmet="true" name="theme-color" />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="bg-darkblurple">
        <nav className="relative flex flex-wrap items-center content-between py-3 px-4  bg-transparent">
          <Link href="/">
            <a className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-150 ...">
              <Image
                alt="Safecord Safe Logo"
                src="/s.png"
                width="60"
                height="60"
              />
            </a>
          </Link>
        </nav>
        <br />
        <br />
        <Component {...pageProps} />
        <section className="">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=908904270978494514&permissions=402656272&scope=bot%20applications.commands"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Use Safecord in Your Server
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="https://discord.gg/r5jF68pdHd"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Support Server
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="/privacy"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Privacy
                </a>
              </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
              <a
                href="https://twitter.com/TeamSafecord"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/TeamSafecord"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
              &quot;keeping that server of yours safe&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
