import Link from 'next/link';
import { NextApiRequest, NextApiResponse } from 'next';
import { SteamProfile } from '@/lib/passport';
import router, { NextSteamAuthApiRequest } from '@/lib/router';
import { steamStore } from '@/stores/steamStore';

export default function Login({ user }: { user: SteamProfile }) {
  console.log(user); // Shows the SteamProfile object in console.
  return (
    <div className="text-center text-yellow-500 text-3xl">
      {user ? (
        <div>
          SteamID {user.id}.
          <button className="h-16 w-36 bg-cyan-600">
            <Link href="/api/auth/logout">Logout</Link>
          </button>
        </div>
      ) : (
        <div>
          Welcome!
          <br />
          <button className="h-16 w-36 bg-cyan-600">
            <Link href="/api/auth/login">Login</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ req, res }: { req: NextSteamAuthApiRequest; res: NextApiResponse }) {
  await router.run(req, res);
  const user = req.user || null;

  if (user) {
    steamStore.setSteamID(user.id);
  }

  return { props: { user } };
}
