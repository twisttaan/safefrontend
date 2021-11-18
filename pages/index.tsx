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
              screen every user with our amazing cool captcha thingo
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-550... relative inline-flex w-full md:w-auto">
                <a
                  href="#_"
                  type="button"
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-5 hover:animate-ping"></span>
                  Invite Now!
                </a>
                <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">
                  1 servers
                </span>
              </span>
              <a href="#" className="mt-3 text-sm text-indigo-500">
                Learn More
              </a>
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
                We use our own simple to complete captchas to make sure
                you&apos;re not a bot, but not make you read your teachers
                photocopy of the work.
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
              <h4 className="text-xl font-medium text-gray-700">Do it once!</h4>
              <p className="text-base text-center text-gray-500">
                Once you have done a captcha in the past we won&apos;t force you
                to do it again, unless you were found in a raid.
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
              <h4 className="text-xl font-medium text-gray-700">Modular</h4>
              <p className="text-base text-center text-gray-500">
                Safecord is extremely modular, so you can easily configure it
                the way you want.
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
                  <path d="M8 9l3 3l-3 3" />
                  <line x1={13} y1={15} x2={16} y2={15} />
                  <rect x={3} y={4} width={18} height={16} rx={2} />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">Public API</h4>
              <p className="text-base text-center text-gray-500">
                Safecord has a public API for you to use, so you can easily
                check if a user&apos;s captcha completed ratio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-ful">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-blurple">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <p className="mb-2 font-medium text-wite uppercase">
                      Start Today
                    </p>
                    <h2 className="text-5xl font-bold text-white xl:text-6xl">
                      Start protecting your server today!
                    </h2>
                  </div>
                  <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <Image
                      className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                      src="https://avatars.githubusercontent.com/u/20760160?v=4"
                      alt=""
                      width="384"
                      height="512"
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <blockquote>
                        <p className="text-lg font-semibold text-black">
                          “Safecord helped protect my{" "}
                          <a
                            className="no-underline hover:underline text-blurple"
                            href="https://discord.gg/djs"
                          >
                            server
                          </a>{" "}
                          from about 1,000,000 spammers.”
                        </p>
                      </blockquote>
                      <figcaption className="font-medium">
                        <div className="text-blurple">Crawl</div>
                        <div className="text-gray-500">
                          This is only a placeholder and is all fake, we
                          don&apos;t have any reviews yet..
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
