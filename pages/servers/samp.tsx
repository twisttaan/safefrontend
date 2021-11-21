import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
}

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

const baseURL =
  "https://discord.com/api/oauth2/authorize?client_id=908904270978494514&permissions=18448&scope=bot%20applications.commands";

const ServersPage: NextPage = () => {
  const router = useRouter();

  const [guilds, setGuilds] = useState<Guild[]>();
  const [rest, setRestGuilds] = useState<Guild[]>();

  useEffect(() => {
    if (router.isReady) {
      const runRequests = async () => {
        setGuilds([
          {
            id: "901426442242498650",
            name: "Beta Evie Testing",
            icon: "9dbbdc7bc792541b6ff5a70393143357",
            owner: true,
            permissions: "1099511627775",
          },
          {
            id: "908908168682299413",
            name: "Safecord 🔒",
            icon: "fad1ad14bb3abd06c31078934397db6f",
            owner: false,
            permissions: "1099511627775",
          },
        ]);
        setRestGuilds([
          {
            id: "574067956762411049",
            name: "Tristan Studios",
            icon: "d809bb118f07ed6786648fac0cded9aa",
            owner: true,
            permissions: "1099511627775",
          },

          {
            id: "800977362757091329",
            name: "Evie",
            icon: "a_5f1ad6d1f72046612b33758d3c0b7c83",
            owner: true,
            permissions: "1099511627775",
          },
          {
            id: "807927235478421534",
            name: "Old Evie Support Discord Server",
            icon: "ad2790e3ec96130579d20f47f562290b",
            owner: true,
            permissions: "1099511627775",
          },
        ]);
      };

      runRequests();
    }
  }, [router, router.isReady]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg shadow-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Protected Servers
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Manage</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {guilds?.map((g) => (
                    <tr key={g.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://cdn.discordapp.com/icons/${g?.id}/${
                                g?.icon
                              }.${g?.icon?.startsWith("_a") ? "gif" : "png"}`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {g.name}
                            </div>
                            <div className="text-sm text-gray-500">{g.id}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={`/servers/${g.id}`}
                          className="text-blurple hover:text-indigo-900"
                        >
                          Manage
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unprotected Servers
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Invite</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rest?.map((g) => (
                    <tr key={g.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://cdn.discordapp.com/icons/${g?.id}/${
                                g?.icon
                              }.${g?.icon?.startsWith("_a") ? "gif" : "png"}`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {g.name}
                            </div>
                            <div className="text-sm text-gray-500">{g.id}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={`${baseURL}&guild_id=${g.id}`}
                          className="text-blurple hover:text-indigo-900"
                        >
                          Invite Safecord
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServersPage;
