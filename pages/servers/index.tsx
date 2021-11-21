import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Guild {
  id: string;
  name: string;
  owner: boolean;
  permissions: string;
}

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

const baseURL = "https://discord.com/api/oauth2/authorize?client_id=908904270978494514&permissions=18448&scope=bot%20applications.commands"

const ServersPage: NextPage = () => {
  const router = useRouter();

  const [guilds, setGuilds] = useState<Guild[]>();
  const [rest, setRestGuilds] = useState<Guild[]>();

  useEffect(() => {
    if (router.isReady) {
      const runRequests = async () => {
        const getGuilds = await axios.get<{ mutualGuilds: Guild[], rest: Guild[] }>("https://api.safecord.xyz/discord/guilds", { withCredentials: true})
          .catch(() => {});

        if (!getGuilds) return router.push(
          `https://api.safecord.xyz/discord/auth?redirect=/verify/${router.query.gid}`
        );

        setGuilds(getGuilds.data.mutualGuilds);
        setRestGuilds(getGuilds.data.rest);
      }

      runRequests();
    }
  }, [router, router.isReady])

  return (
    <div>
        <p>normal servers:</p>
        {guilds?.map(g => (
          <>
            <br /> <a href={`/servers/${g.id}`} key={g.id}>{g.name}</a>
          </>
        ))}
  
        <p>rest:</p>
        {rest?.map(g => (
          <a href={`${baseURL}&guild_id=${g.id}`} key={g.id}>{g.name}</a>
        ))}
    </div>
  )
}

export default ServersPage;