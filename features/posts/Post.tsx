import { FC, useState } from 'react';
import PostInterface from 'types/Post';
import Image from 'next/image';
import {
  borderNone, hoverBorderNone, opacity, margins, absolutePositioning,
} from './styles';
import Alignment from '../../types/Alignment.d';

interface Styling {
  hoverNone: string,
  descriptionMargin: string,
  alignment: string,
  descriptionRoundedNone: string
}

interface Props extends PostInterface {
  alignmentSide: Alignment | undefined,
  Extra?: () => JSX.Element
}

const sharedStyles = 'w-36 h-36 sm:w-56 sm:h-56 xl:w-72 xl:h-72';

const Post: FC<Props> = ({
  url, description, alignmentSide, Extra,
}: Props) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const showDescription = () => setIsDescriptionVisible(true);
  const hideDescription = () => setIsDescriptionVisible(false);

  const styling: Styling = alignmentSide === Alignment.Left
    ? {
      hoverNone: hoverBorderNone.left,
      descriptionMargin: margins.right,
      alignment: absolutePositioning.left,
      descriptionRoundedNone: borderNone.right,
    }
    : {
      hoverNone: hoverBorderNone.right,
      descriptionMargin: margins.left,
      alignment: absolutePositioning.right,
      descriptionRoundedNone: borderNone.left,
    };

  const descriptionOpacity = isDescriptionVisible ? opacity.visible : opacity.hidden;

  return (
    <div className="justify-self-center flex relative">
      <div
        className={
          `${sharedStyles} m-4 sm:m-8 xl:m-12 relative shadow-2xl overflow-hidden rounded-huge duration-300 z-10
          ${url ? styling.hoverNone : ''}`
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
          className={`${sharedStyles} flex no-children-events items-center p-3 sm:p-8 justify-center 
            shadow-2xl absolute top-4 sm:top-8 xl:top-12 ${descriptionOpacity} ${styling.descriptionMargin} ${styling.alignment}
            duration-300 ${styling.descriptionRoundedNone} bg-gray-100 ${descriptionOpacity ? 'z-20' : 'z-10'} rounded-huge`}
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
