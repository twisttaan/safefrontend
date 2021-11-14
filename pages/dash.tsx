import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  DiscordActionRow,
  DiscordAttachment,
  DiscordAttachments,
  DiscordButton,
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordInvite,
  DiscordMention,
  DiscordMessage,
  DiscordMessages,
  DiscordReaction,
  DiscordReactions,
  DiscordReply,
  DiscordSystemMessage,
  DiscordTenorVideo,
  DiscordThread,
  DiscordThreadMessage,
} from "@skyra/discord-components-react";

const Dash: NextPage = () => {
  const [dembd, setdembd] = useState("");

  return (
    <div>
      <section className="w-ful">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-darkBlurple">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <h2 className="text-5xl font-bold text-white xl:text-6xl">
                      Verify Message
                    </h2>
                    <br />
                    <div className="relative">
                      <label className="font-medium text-white">
                        Description
                      </label>
                      <input
                        type="text"
                        onChange={(event) => setdembd(event.target.value)}
                        className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 text-black"
                        placeholder="Click verify me!"
                      />
                    </div>
                    <div className="flex flex-col items-center mt-12 text-center">
                      <span className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-550... relative inline-flex w-full md:w-auto">
                        <a
                          href="#_"
                          type="button"
                          className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          Apply!
                        </a>
                        <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">
                          Saved
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-5/12">
              <DiscordMessages>
                <DiscordMessage
                  author="tristan"
                  avatar="https://cdn.discordapp.com/avatars/97470053615673344/a_687f01f835717fdcd41a2596908fe877.gif?size=1024"
                >
                  <div className="accessory"></div>
                  <div className="embed-wrapper"></div>
                  <div
                    className="embed-color-pill"
                    style={{ backgroundColor: "rgb(198, 255, 87)" }}
                  >
                    <div className="embed embed-rich bg-embedDark text-white">
                      <div className="embed-content text-white">
                        <div className="embed-content-inner text-white">
                          <div className="embed-description markup text-white">
                            {dembd}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <DiscordAttachments slot="components">
                    <DiscordActionRow>
                      <DiscordButton
                        url="https://safecord.xyz/verify/908908168682299413"
                        emoji="/eyes.svg"
                        emojiName="👀"
                      >
                        Verify Me!
                      </DiscordButton>
                    </DiscordActionRow>
                  </DiscordAttachments>
                </DiscordMessage>
              </DiscordMessages>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dash;
