import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"

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
  
  useEffect(() => {
    if (router.isReady) {
      axios.get<User>('https://api.safecord.xyz/discord/user', {withCredentials: true})
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        }).catch(console.warn);
    }
  }, [router.isReady, router])


  // TODO: Loading animation

  while (loading) { 
    return <p>Loading....</p>
  }

  return (
    <p>Hello {user?.username}{user?.discriminator}!</p>
  )
}

export default Verify;