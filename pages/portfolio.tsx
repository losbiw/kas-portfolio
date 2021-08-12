import { GetStaticProps, GetStaticPropsResult } from 'next';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';
import { FC } from 'react';
import axios from 'axios';
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
  const fetchUrl = `https://instagram.com/graphql/query/?query_hash=8c2a529969ee035a5063f2fc8602a0fd&variables=%7B%0A%20%20%22id%22%3A%20%22${instagramId}%22%2C%0A%20%20%22first%22%3A%2050%2C%0A%20%20%22after%22%3A%20null%0A%7D`;

  // eslint-disable-next-line max-len
  const { data: json } = await axios.get(fetchUrl, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36',
      cookie: process.env.cookie,
    },
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
    revalidate: 60,
  };
};

export default Contact;
