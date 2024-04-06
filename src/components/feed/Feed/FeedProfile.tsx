'use client';

import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/navigation';

interface FeedProfileProps extends Omit<ImageProps, 'id'> {
  nickName: string;
  isFollowed: boolean;
  isMyFeed: boolean;
  userId: number;
}

export default function FeedProfile({
  userId,
  src,
  alt,
  nickName,
  isFollowed,
  isMyFeed,
  ...props
}: FeedProfileProps) {
  const { push } = useRouter();

  const handleClickProfile = () => {
    push(`/profile/${userId}`);
  };

  const handleClickFollowButton = () => {
    if (isFollowed) {
      console.log('팔로우');
    } else {
      console.log('팔로우 취소');
    }
  };

  return (
    <div className="flex justify-between items-center w-full body-14-bold">
      <div className="flex gap-[8px] items-center">
        <div
          className="relative w-[36px] h-[36px] rounded-[50%] overflow-hidden"
          onClick={handleClickProfile}
        >
          <Image alt={alt} src={src} fill {...props} />
        </div>
        <p>{nickName}</p>
      </div>
      {!isMyFeed && (
        <button onClick={handleClickFollowButton}>
          {isFollowed ? '팔로우 취소' : '팔로우'}
        </button>
      )}
    </div>
  );
}
