import { FC, useState } from 'react';
import PostInterface from 'types/Post';
import Image from 'next/image';

interface Props extends PostInterface {
  Extra?: () => JSX.Element
}

const sharedStyles = 'w-36 h-36 sm:w-56 sm:h-56 xl:w-72 xl:h-72';

const Post: FC<Props> = ({ url, description, Extra }: Props) => {
  const [descriptionOpacity, setDescriptionOpacity] = useState(0);

  const showDescription = () => setDescriptionOpacity(1);
  const hideDescription = () => setDescriptionOpacity(0);

  return (
    <div className="justify-self-center flex relative">
      <div
        className={
          `${sharedStyles} m-4 sm:m-8 xl:m-12 relative shadow-2xl overflow-hidden rounded-huge duration-300
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
          className={`${sharedStyles} flex items-center p-3 sm:p-8 justify-center shadow-2xl opacity-${descriptionOpacity} absolute 
            top-4 ml-4 left-36 sm:top-8 sm:ml-8 sm:left-56 xl:top-12 xl:ml-12 xl:left-72 duration-300 rounded-l-none bg-gray-100 ${descriptionOpacity ? 'z-10' : 'z-0'} rounded-huge`}
          onMouseOver={showDescription}
          onFocus={showDescription}
          onMouseOut={hideDescription}
          onBlur={hideDescription}
        >
          <p className="text-gray-600 text-xs sm:text-md xl:text-lg leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};

Post.defaultProps = {
  Extra: undefined,
};

export default Post;
