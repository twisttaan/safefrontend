import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HC from "@hcaptcha/react-hcaptcha";
import Image from "next/image";
import { getTimestamp } from "../../utils/utils";

interface Guild {
  guild: {
    avatar_url: string;
    guild_id: string;
    name: string;
  };
}
interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

const Verify: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [guild, setGuild] = useState<Guild>();
  const [verified, setVerified] = useState(false);
  const [alreadyVerified, setalreadyVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fake, setFake] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  useEffect(() => {
    if (router.isReady) {
      async function handleRequests() {
        const user = await axios
          .get<User>("https://api.safecord.xyz/discord/user", {
            withCredentials: true,
          })
          .catch(() => {});

        if (!user)
          return router.push(
            `https://api.safecord.xyz/discord/auth?redirect=/verify/${router.query.gid}`
          );
        setUser(user.data);

        const guild = await axios
          .get<Guild>(
            `https://api.safecord.xyz/discord/guilds/${router.query.gid}`
          )
          .catch(() => {});

        if (!guild) {
          setFake(true);
          return setLoading(false);
        }

        setGuild(guild.data);

        const getVerified = await axios
          .post<{ verified: boolean }>(
            "https://api.safecord.xyz/discord/isverified",
            {
              guild_id: router.query.gid,
              user_id: user.data.id,
            }
          )
          .catch(() => {});

        if (getVerified?.data.verified) {
          setalreadyVerified(true);
        }

        setLoading(false);
      }

      handleRequests();
    }
  }, [router.isReady, router]);

  while (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blurple" />
      </div>
    );
  }

  while (fake) {
    return (
      <div className="flex justify-center items-center">
        Hey it seems like that server doesn&apos;t exist on Safecord.
      </div>
    );
  }

  async function onVerifyCaptcha(this: any, token: string) {
    const data = await axios
      .post(
        "https://api.safecord.xyz/verify/hcaptcha",
        {
          "h-captcha-response": token,
          guild_id: router.query.gid,
          user_id: user?.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(console.log);

    if (data) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }

  while (success === true) {
    return (
      <>
        <div className="text-center">verified!</div>
        <div className="flex justify-center">
          <br />
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <br />
        </div>
        <div className="text-center">you may close this tab now.</div>
      </>
    );
  }

  while (success === false) {
    return (
      <div className="flex justify-center items-center">
        Hey it seems like something went wrong. Please report this in our
        support server.
      </div>
    );
  }
  while (alreadyVerified === true) {
    return (
      <div className="flex justify-center items-center">
        Hey it seems like you have already verified for this server.
      </div>
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
                      {guild?.guild.name}
                    </h2>
                  </div>
                  <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <Image
                      className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                      src={`https://cdn.discordapp.com/avatars/${user?.id}/${
                        user?.avatar
                      }.${user?.avatar?.startsWith("_a") ? "gif" : "png"}`}
                      alt={`${user?.username}'s Profile Picture`}
                      width="512"
                      height="512"
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <figcaption className="font-medium">
                        <div className="text-blurple font-bold">
                          {user?.username}
                        </div>
                        <div className="text-gray-500">
                          Account made{" "}
                          {new Date(
                            getTimestamp(user?.id as string)
                          ).toDateString()}
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
                      src={`https://cdn.discordapp.com/avatars/${
                        guild?.guild.guild_id
                      }/${guild?.guild.avatar_url}.${
                        guild?.guild.avatar_url.startsWith("_a") ? "gif" : "png"
                      }`}
                      alt=""
                      width="384"
                      height="384"
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
