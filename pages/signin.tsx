import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Sign: NextPage = () => {
  return (
    <div>
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
                    <img
                      className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                      src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/extras/Face.png?t=1635555468"
                      alt=""
                      width="384"
                      height="512"
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <blockquote>
                        <p className="text-lg font-semibold text-black">
                          “Safecord helped protect my server from about 2 raid
                          things.”
                        </p>
                      </blockquote>
                      <figcaption className="font-medium">
                        <div className="text-blurple">Jeff</div>
                        <div className="text-gray-500">
                          Some Discord User, Earth
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block text-5xl font-extrabold leading-10 tracking-tight text-lef md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                  Safecord
                </span>

                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative"></div>
                  <div className="relative">
                    <img
                      className="w-32 h-32 md:w-48 md:h-auto mx-auto"
                      src="/s.png"
                      alt=""
                      width="384"
                      height="512"
                    />
                    <br />
                    <br />
                    <a
                      href="https://api.safecord.xyz/discord/auth"
                      className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blurple ease"
                    >
                      Sign in via Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sign;
