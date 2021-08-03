import useWindowWidth from 'hooks/useWindowWidth';
import { FC } from 'react';
import Alignment from '../../types/Alignment.d';
import PostInterface from '../../types/Post.d';
import Post from './Post';

interface Props {
  posts: PostInterface[]
}

const calculateAlignment = (index: number, width: number | undefined): Alignment | undefined => {
  if (typeof width === 'undefined') return undefined;
  if (index === 0) return Alignment.Right;

  if (width >= 1536 && index % 4 === 0) {
    return Alignment.Left;
  } if (width >= 1024 && width < 1536 && index % 3 === 0) {
    return Alignment.Left;
  } if (width < 1024 && index % 2 === 0) {
    return Alignment.Left;
  }

  return Alignment.Right;
};

const PostsPanel: FC<Props> = ({ posts }: Props) => {
  const width = useWindowWidth();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row mb-12
      md:mb-24 h-auto shadow-2xl rounded-semi overflow-x-hidden bg-gray-600 bg-opacity-25"
    >
      {
      posts.map(({ url, description }, i) => {
        const alignment = calculateAlignment(i + 1, width);

        return (
          <Post
            url={url}
            description={description}
            key={url}
            alignmentSide={alignment}
          />
        );
      })
    }
      <Post
        url=""
        description=""
        alignmentSide={undefined}
        Extra={
        () => (
          <a
            className="absolute top-0 bottom-0 right-0 left-0 flex leading-relaxed text-xs
            sm:text-md xl:text-lg p-8 items-center justify-center text-gray-600 bg-gray-100"
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
};

export default PostsPanel;
