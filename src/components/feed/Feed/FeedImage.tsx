import Image, { ImageProps } from 'next/image';

import RightArrowLogo from 'public/assets/icon24/right_arrow_24.svg';
import cn from '@utils/cn';

interface FeedImageProps extends ImageProps {
  storeName: string;
  storeCategory?: string;
  storeLocation?: string;
}

export default function FeedImage({
  src,
  alt,
  className,
  storeName,
  storeCategory,
  storeLocation,
  ...props
}: FeedImageProps) {
  // TODO: 음식점 클릭 시 음식점 상세 이동 로직 작성
  // TODO: 피드 클릭 시 피드 상세 이동 로직 작성
  return (
    <div
      className={cn(
        'relative w-full aspect-[3/2] my-[12px] rounded-[16px] overflow-hidden',
        className,
      )}
    >
      <div className="flex justify-between items-center absolute p-4 z-above top-0 left-0 right-0 bg-top-fade">
        <div className="flex flex-col gap-[4px]">
          <p className="text-gray-100 body-16-bold">{storeName}</p>
          <div className="flex items-center text-gray-300 caption-12-regular">
            <p className="after:inline-block after:w-[1px] after:h-[10px] after:align-middle after:bg-gray-300 after:mx-[4px]">
              {storeCategory}
            </p>
            <p>{storeLocation}</p>
          </div>
        </div>
        <button>
          <RightArrowLogo />
        </button>
      </div>
      <Image src={src} alt={alt} fill {...props} />
    </div>
  );
}
