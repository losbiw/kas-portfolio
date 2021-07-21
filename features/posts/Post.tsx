import { FC, useState } from 'react';
import PostInterface from 'types/Post';
import Image from 'next/image';
import Alignment from '../../types/Alignment.d';

interface Props extends PostInterface {
  alignmentSide: Alignment | undefined,
  Extra?: () => JSX.Element
}

const sharedStyles = 'w-36 h-36 sm:w-56 sm:h-56 xl:w-72 xl:h-72';

const Post: FC<Props> = ({
  url, description, alignmentSide, Extra,
}: Props) => {
  const [descriptionOpacity, setDescriptionOpacity] = useState(0);

  const showDescription = () => setDescriptionOpacity(1);
  const hideDescription = () => setDescriptionOpacity(0);

  const alignment = alignmentSide === Alignment.Left ? 'right' : 'left';

  const roundedCorner = alignment === Alignment.Left ? 'r' : 'l';
  const descriptionRoundedCorner = alignment === Alignment.Left ? 'l' : 'r';

  return (
    <div className="justify-self-center flex relative">
      <div
        className={
          `${sharedStyles} m-4 sm:m-8 xl:m-12 relative shadow-2xl overflow-hidden rounded-huge duration-300 z-10
          ${url ? `hover:rounded-${roundedCorner}-none` : ''} 
          ${descriptionOpacity && description ? `rounded-${roundedCorner}-none` : ''}`
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
          className={`${sharedStyles} flex no-children-events items-center p-3 sm:p-8 justify-center shadow-2xl opacity-${descriptionOpacity} absolute 
            m${descriptionRoundedCorner}-4 sm:m${descriptionRoundedCorner}-8 xl:m${descriptionRoundedCorner}-12 
            ${alignment}-36 sm:${alignment}-56 xl:${alignment}-72 top-4 sm:top-8 xl:top-12
            duration-300 rounded-${descriptionRoundedCorner}-none bg-gray-100 ${descriptionOpacity ? 'z-20' : 'z-10'} rounded-huge`}
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
