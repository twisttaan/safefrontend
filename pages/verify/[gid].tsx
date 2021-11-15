import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Image from "next/image";
const snowflake = require("discord-snowflake");

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

const Verify: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const sD = snowflake(user?.id) as Date;
  const eD: Date = new Date((Date.now() - sD.getMilliseconds()) / 1000);

  useEffect(() => {
    if (router.isReady) {
      axios
        .get<User>("https://api.safecord.xyz/discord/user", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(() =>
          router.push(
            `https://api.safecord.xyz/discord/auth?redirect=/verify/${router.query.gid}`
          )
        );
    }
  }, [router.isReady, router]);

  while (loading) {
    return (
      <button type="button" className="bg-rose-600 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading
      </button>
    );
  }

  return (
    <div>
      <section className="w-ful">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-darkBlurple">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                      <Image
                        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                        src={
                          `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}` ??
                          "https://eviebot.rocks/assets/EvieHead.svg/"
                        }
                        alt=""
                        width="512"
                        height="512"
                      />
                      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                          <div className="text-blurple">{user?.username}</div>
                          <div className="text-gray-500">
                            Account made {sD.toLocaleDateString()} ago
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                    <br />
                    <div className="relative">
                      <label className="font-medium text-white">
                        You must verify your a human to continue.
                      </label>
                    </div>
                    <div className="flex flex-col items-center mt-12 text-center">
                      <span className="transition duration-500 ease-in-out  hover: transform hover:-translate-y-1 hover:scale-550... relative inline-flex w-full md:w-auto">
                        <a
                          href="#_"
                          type="button"
                          className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          Verify!
                        </a>
                      </span>
                    </div>
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

export default Verify;
