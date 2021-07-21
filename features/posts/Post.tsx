import { FC, useState } from 'react';
import PostInterface from 'types/Post';
import Image from 'next/image';

interface Props extends PostInterface {
  Extra?: () => JSX.Element
}

const Post: FC<Props> = ({ url, description, Extra }: Props) => {
  const [descriptionOpacity, setDescriptionOpacity] = useState(0);

  const showDescription = () => setDescriptionOpacity(1);
  const hideDescription = () => setDescriptionOpacity(0);

  return (
    <div className="justify-self-center flex relative">
      <div
        className={
          `w-72 h-72 m-12 relative shadow-2xl overflow-hidden rounded-huge duration-300
          ${url ? 'hover:rounded-r-none' : ''} 
          ${descriptionOpacity && description ? 'rounded-r-none' : ''}`
        }
        onMouseOver={showDescription}
        onFocus={showDescription}
        onMouseOut={hideDescription}
        onBlur={hideDescription}
      >
        { url && (
          <Image
            src={url}
            alt={description}
            layout="fill"
            objectFit="cover"
          />
        )}

        { Extra && <Extra /> }
      </div>
      { description && (
        <div
          className={`flex items-center w-72 h-72 p-8 justify-center shadow-2xl opacity-${descriptionOpacity}
                    absolute top-12 ml-12 left-72 duration-300 rounded-l-none bg-gray-100 ${descriptionOpacity ? 'z-10' : 'z-0'} rounded-huge`}
          onMouseOver={showDescription}
          onFocus={showDescription}
          onMouseOut={hideDescription}
          onBlur={hideDescription}
        >
          <p className="text-gray-600 text-xl leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};

Post.defaultProps = {
  Extra: undefined,
};

export default Post;
