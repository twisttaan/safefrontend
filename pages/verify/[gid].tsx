import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HC from "@hcaptcha/react-hcaptcha";
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

  function onVerifyCaptcha(this: any, token: string) {
    console.log("Verified: " + token);
    this.setState({ isVerified: true });
  }

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
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-blurple">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <p className="mb-2 font-medium text-wite uppercase">
                      Verify Gateway
                    </p>
                    <h2 className="text-5xl font-bold text-white xl:text-6xl">
                      Tristan&apos;s Discord Server
                    </h2>
                  </div>
                  <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <Image
                      className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                      src={`https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png`}
                      alt={`${user?.username}'s Profile Picture`}
                      width="512"
                      height="512"
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <figcaption className="font-medium">
                        <div className="text-blurple font-bold">
                          Name: {user?.username}
                          ID: {user?.id}
                          Avatar: {user?.avatar}
                        </div>
                        <div className="text-gray-500">
                          Account made{" "}
                          {new Date(snowflake(user?.id)).toDateString()}
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
                    <Image
                      className="w-32 h-32 md:w-48 md:h-auto mx-auto"
                      src="/s.png"
                      alt=""
                      width="384"
                      height="512"
                    />
                    <br />
                    <br />
                    <HC
                      sitekey="f99abb01-7e75-49a8-85b6-7c14959ee8c2"
                      onVerify={onVerifyCaptcha}
                      theme="dark"
                    />
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
