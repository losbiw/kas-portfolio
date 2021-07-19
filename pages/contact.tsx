import { FC } from 'react';
import LinkInterface from '../interfaces/Link.d';
import Page from '../features/Page';
import Link from '../features/Link';

import Instagram from '../public/icons/socials/instagram.svg';
import PayPal from '../public/icons/socials/paypal.svg';

const links: LinkInterface[] = [
  {
    href: 'https://www.instagram.com/nefarious.kas/',
    text: '@nefarious.kas',
    icon: Instagram,
  },
  {
    href: 'https://www.paypal.me/nefariouskas',
    text: 'nefariouskas',
    icon: PayPal,
  },
];

const Contact: FC = () => (
  <Page>
    <div>
      {
        links.map(({ href, text, icon }) => (
          <Link
            href={href}
            text={text}
            icon={icon}
            key={text}
          />
        ))
      }
    </div>
  </Page>
);

export default Contact;
