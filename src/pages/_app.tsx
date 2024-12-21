import { Layout } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Snowfall from 'react-snowfall';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Layout>
          <Snowfall color="white" snowflakeCount={200} radius={[1, 4]} speed={[0.5, 3]} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
