import Head from 'next/head';
import { FC } from 'react';
import capitalizeFirstLetter from '../helpers/capitalize';
import usePathname from '../hooks/usePathname';

const HeadComponent: FC = () => {
  const pathname = usePathname().slice(1);

  return (
    <Head>
      <title>{ pathname !== '' ? capitalizeFirstLetter(pathname) : 'Home'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="nefarious.kas" />
      <meta property="og:description" content="A personal portfolio website" />
      <meta property="og:image" content="http://tolist.herokuapp.com/favicons/kas_og.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default HeadComponent;
