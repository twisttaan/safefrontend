import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const coolBox: string =
  "m-4 p-6 text-left no-underline border-solid border-4 hover:border-opacity-50 border-light-blue-500 rounded-lg text-white max-w-screen-sm";

const Home: NextPage = () => {
  return (
    <div>
      <div className=" grid justify-items-stretch ...">
        <div className="justify-self-center ...">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight  mt-10 mb-8 sm:mt-14 sm:mb-10 text-white text-center">
            It&apos;s time to use Evie in your Discord server.
          </h1>
          <br></br>
          <div className="justify-self-center ...">
            <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-center">
              Evie is a feature-rich, easy to use Discord bot built to deliver
              the best experience of a bot on Discord!
            </p>

            <div className="grid justify-items-stretch ...">
              <div className="justify-self-center ...">
                <div className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-550...">
                  <div className="hover: transition duration-500 hover:scale-125">
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=807543126424158238&permissions=518855707712&scope=bot%20applications.commands"
                      id="GFG"
                      className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blurple rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                    >
                      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                      <span className="relative z-20 flex items-center text-sm">
                        <svg
                          className="relative w-5 h-5 mr-2 text-white"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
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
      <br></br>
      <div className="text-5xl leading-none font-extrabold tracking-tight mb-4 text-white text-center">
        What is Evie all about?
      </div>
      <div className="text-2xl tracking-tight mb-10 text-center">
        Evie is a public moderation/music/fun/economy/utility bot for Discord,
        designed with modern Discord features like slash commands.
      </div>
      <div className="grid justify-items-stretch bg-darkBlurple   ...">
        <div className="justify-self-center bg-darkBlurple  ...">
          <div className="rounded-xl ...">
            <div className="w-full flex md:flex-col bg-gradient-to-br from-blurple to-blurple">
              <div className="sm:max-w-sm max-w-lg sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8 ">
                <h5 className="text-xl font-semibold mb-2 text-shadow">
                  Utilities
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-left">
                  <ul>
                    <li>
                      Google the internet with{" "}
                      <code>/google &lt;thing you want to search for&gt;</code>
                    </li>
                    <li>
                      If you ping @Evie✨#1625 she will now respond with a
                      message on how to use her commands!
                    </li>
                    <li>
                      Need help with any commands <code>/help</code>
                    </li>
                  </ul>
                </p>
                <img
                  className="w-200 h-200 rounded-2xl mx-auto text-center"
                  src="/assets/leaderboard.png"
                />
              </div>
            </div>

            <div className="w-full flex md:flex-col bg-gradient-to-br from-blurple to-blurple">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h5 className="text-xl font-semibold mb-2 text-shadow">
                  $EVIE
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-left">
                  <ul>
                    <li>
                      See how much $EVIE you have with <code>/bal</code>
                    </li>
                    <li>
                      Vote for a free 10k $EVIE <code>/vote</code>
                    </li>
                    <li>
                      Beg for money with <code>/beg</code>
                    </li>
                    <li>
                      Check who has the most $EVIE <code>/leaderboard</code>
                    </li>
                    <li>
                      <code>/inventory</code> to check your inventory out!
                    </li>
                    <li>
                      Baking! Buy an oven in the <code>/shop</code> then use{" "}
                      <code>/buy &lt;itemid&gt;</code> and finally, start baking
                      those muffins with <code>/bake muffin</code> You can also
                      sell those muffins for money{" "}
                      <code>/sell &lt;itemid&gt;</code> (if you ever want to
                      know an item id do <code>/shop</code> to see a list of the
                      item ids!)
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-col bg-gradient-to-br from-blurple to-blurple text-center">
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8 text-center">
                <h5 className="text-xl font-semibold mb-2 text-shadow text-center">
                  Moderation
                </h5>
                <p className="font-medium text-violet-100 text-shadow mb-4 text-left">
                  <ul>
                    <li>
                      Using the{" "}
                      <a href="https://dash.eviebot.rocks/">Dashboard</a> set
                      banned words and/or use our default list of banned words
                      to protect your Discord server.
                    </li>
                    <li>
                      Welcome new people that join your Discord server and set a
                      custom message in the{" "}
                      <a href="https://dash.eviebot.rocks/">Dashboard</a>
                    </li>
                    <li>
                      Change the colour Evie uses for every embed in your server
                      on the <a href="https://dash.eviebot.rocks/">Dashboard</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
