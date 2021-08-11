import Page from 'features/Page';
import items from 'features/prices/items';
import PricesList from 'features/prices/PricesList';
import { FC } from 'react';

const Prices: FC = () => (
  <Page>
    <PricesList prices={items} />
  </Page>
);

export default Prices;
