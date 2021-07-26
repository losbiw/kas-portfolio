// the comments only exist for development purpose

import { GetStaticProps, GetStaticPropsResult } from 'next';
// import fs from 'fs/promises';
// import { join } from 'path';
import { FC } from 'react';
import ExamplesPanel from 'features/examples/ExamplePanel';
import Page from '../features/Page';
import Title from '../features/Title';
import pictures from '../features/examples/portfolio';
import PostsPanel from '../features/posts/PostsPanel';
import Post from '../types/Post.d';

const Instagram = require('instagram-web-api');

interface Props {
  instagramData: Post[]
}

const Contact: FC<Props> = ({ instagramData }: Props) => (
  <Page>
    <div className="mt-24">
      <ExamplesPanel pictures={pictures} />
    </div>
    <div className="mt-10 xl:mt-20 mb-8">
      <Title>Portfolio</Title>
    </div>
    <PostsPanel posts={instagramData} />
  </Page>
);

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const { username, password } = process.env;
  const client = new Instagram({ username, password });

  await client.login();
  const data = await client.getPhotosByUsername({ username: 'nefarious.kas' });

  const parsedData = data.user.edge_owner_to_timeline_media.edges.map(({ node }: any) => {
    // eslint-disable-next-line camelcase
    const { display_url: url, edge_media_to_caption } = node;
    const desc = edge_media_to_caption.edges[0].node.text;

    const parsedDesc = desc.match(/[^\n]*/)[0];

    return {
      url,
      description: parsedDesc,
    };
  });

  return {
    props: {
      instagramData: parsedData,
    },
    revalidate: 1000 * 60 * 60, // exactly one hour
  };
};

// export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
//   const data = await fs.readFile(join(__dirname, '../../../', 'dev/data.json'), 'utf8');
//   const parsedData = JSON.parse(data);

//   return {
//     props: {
//       instagramData: parsedData,
//     },
//   };
// };

export default Contact;
