// the comments only exist for development purpose

// import fs from 'fs/promises';
// import { join } from 'path';

// export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
//   const data = await fs.readFile(join(__dirname, '../../../', 'dev/data.json'), 'utf8');
//   const parsedData = JSON.parse(data);

//   return {
//     props: {
//       instagramData: parsedData,
//     },
//   };
// };

import { GetStaticProps, GetStaticPropsResult } from 'next';
import { FC } from 'react';
import { curly } from 'node-libcurl';
import ExamplesPanel from 'features/examples/ExamplePanel';
import Page from '../features/Page';
import Title from '../features/Title';
import pictures from '../features/examples/portfolio';
import PostsPanel from '../features/posts/PostsPanel';
import Post from '../types/Post.d';

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
  const instagramId = 9188954448;
  const { data: json } = await curly(`https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${instagramId}","first":50,"after":null}`, {
    followLocation: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
    sslVerifyHost: false,
    sslVerifyPeer: false,
    httpHeader: [
      'accept: */*',
      'origin: https://www.instagram.com/',
      'referer: https://www.instagram.com/',
      'X-Requested-With: XMLHttpRequest',
    ],
  });

  const parsedData = json.data.user.edge_owner_to_timeline_media.edges.map(({ node }: any) => {
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
    revalidate: 3600,
  };
};

export default Contact;
