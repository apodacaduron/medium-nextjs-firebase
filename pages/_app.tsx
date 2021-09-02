import '../styles/globals.css';

import GlobalLayout from '../components/GlobalLayout';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  const { user, username } = useUserData();

  return (
    <UserContext.Provider value={{ user, username }}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </UserContext.Provider>
  );
}
export default MyApp;
