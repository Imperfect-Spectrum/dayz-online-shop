import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { getAuthOptions } from '../api/auth/[...nextauth]';

export interface IProps {
  // next.js is not passing the session for some reason if property called `session`
  userSession: Session | null;
}

export default function Login({ userSession }: IProps) {
  if (!userSession?.user) {
    return (
      <div>
        <div>Youre not authenticated</div>
        <button onClick={() => signIn()}>login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>next-auth-steam</h1>
      <pre>{JSON.stringify(userSession, null, 2)}</pre>
      <button onClick={() => signOut()}>zzzzzzzzzzzzzzzzzzzzzzzzz</button>
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IProps>> {
  // @ts-expect-error
  const userSession = await getServerSession(context.req, context.res, getAuthOptions(context.req));

  return {
    props: {
      userSession,
    },
  };
}
