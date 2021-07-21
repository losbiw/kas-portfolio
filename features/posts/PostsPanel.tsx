import { FC } from 'react';
import Alignment from '../../types/Alignment.d';
import PostInterface from '../../types/Post.d';
import Post from './Post';

interface Props {
  posts: PostInterface[]
}

const calculateAlignment = (index: number): Alignment => {

};

const PostsPanel: FC<Props> = ({ posts }: Props) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row mb-12 md:mb-24 h-auto sm:h-width-page-80 shadow-2xl rounded-semi overflow-x-hidden overflow-y-scroll bg-gray-600 bg-opacity-25">
    {
      posts.map(({ url, description }, i) => (
        <Post url={url} description={description} key={url} alignment={undefined} />
      ))
    }
    <Post
      url=""
      description=""
      alignment={undefined}
      Extra={
        () => (
          <a
            className="absolute top-0 bottom-0 right-0 left-0 flex leading-relaxed text-xs sm:text-md xl:text-lg p-8 items-center justify-center text-gray-600 bg-gray-100"
            href="https://www.instagram.com/nefarious.kas/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              To see more works, please open
              <div className="underline">my instagram</div>
            </div>
          </a>
        )
      }
      key="extra"
    />
  </div>
);

export default PostsPanel;
