import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState, Fragment, useRef } from "react";
import { useRouter } from "next/router";
import HC from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import Image from "next/image";
import { getTimestamp } from "../../utils/utils";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

interface Guild {
  avatar_url: string;
  guild_id: string;
  name: string;
}
interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

const Verify: NextPage = () => {
  const router = useRouter();
  const [guildImg, setGuildImg] = useState("/assets/clyde.png");
  const [user, setUser] = useState<User>();
  const [guild, setGuild] = useState<Guild>();
  const [verified, setVerified] = useState(false);
  const [alreadyVerified, setalreadyVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fake, setFake] = useState(false);
  const [success, setSuccess] = useState<boolean>();
  // Modal you already verified
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
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

        const getVerified = await axios
          .post<{ verified: boolean, guild: Guild }>(
            "https://api.safecord.xyz/discord/verification",
            {
              guild_id: router.query.gid,
              user_id: user.data.id,
            }
          )
          .catch(() => {});

          if (!getVerified?.data.guild) {
            setFake(true);
            return setLoading(false);
          } else {
            setGuild(getVerified.data.guild);

            if (getVerified.data.guild.avatar_url) {
              setGuildImg(getVerified.data.guild.avatar_url);
            }
          }

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
        Hey it seems like this server doesn&apos;t exist on Safecord.
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Already Verified
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          It seems like you already have the set verified role
                          in {guild?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setalreadyVerified(false)}
                  >
                    Ignore
                  </button>
                  <Link href="/" passHref>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Go Back!
                    </button>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
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
                      {guild?.name}
                    </h2>
                  </div>
                  <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <img
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
                          ).toLocaleTimeString("en-US", {
                            hour12: true,
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })}
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
                      className="w-32 h-32 md:w-48 md:h-auto mx-auto rounded-full"
                      src={guild?.avatar_url}
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
