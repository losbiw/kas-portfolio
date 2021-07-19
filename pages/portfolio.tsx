import { FC } from 'react';
import Page from '../features/Page';

interface Props {
  instagramData: any
}

const Contact: FC<Props> = ({ instagramData }: Props) => {
  console.log(instagramData);
  return (
    <Page>
      <p>Portfolio</p>
    </Page>
  );
};

export const getServerSideProps = async () => {
  const instagramRes = await fetch('https://www.instagram.com/nefarious.kas/?__a=1');
  const json = await instagramRes.json();

  const parsedData = json.graphql.user.edge_owner_to_timeline_media.edges.map(({ node }: any) => {
    // eslint-disable-next-line camelcase
    const { display_url: url, edge_media_to_caption } = node;
    const desc = edge_media_to_caption.edges[0].node.text;

    const parsedDesc = desc.match(/[^\n]*/)[0];

    return {
      url,
      desc: parsedDesc,
    };
  });

  return {
    props: {
      instagramData: parsedData,
    },
  };
};

export default Contact;
