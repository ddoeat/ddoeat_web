import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import SectionTitle from '../SectionTitle';
import StoreDetailLog from '../StoreDetailLog';

import cn from '@utils/cn';
import Tag from '@components/common/Tag';
import {
  type GetReviewParams,
  useInfiniteReview,
} from '@hooks/api/useInfiniteReview';
import useObserver from '@hooks/useObserver';

// NOTE: 한 번에 불러오는 리뷰 갯수
const DEFAULT_REVIEW_COUNT = 10;

export default function Reviews() {
  const [activeTag, setActiveTag] = useState<'REVISITED' | 'PHOTO' | null>(
    null,
  );

  const searchParams = useSearchParams();

  const storeId = searchParams.get('storeId');

  const params: GetReviewParams = {
    storeId: storeId ?? '',
    size: DEFAULT_REVIEW_COUNT,
    type: activeTag,
  };

  const { data, fetchNextPage, refetch, isLoading, hasNextPage } =
    useInfiniteReview(params);

  const handleTagClick = (tag: 'REVISITED' | 'PHOTO' | null): void => {
    setActiveTag((prevTag) => (prevTag === tag ? null : tag));
    refetch();
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) fetchNextPage();
  };

  const { setTarget } = useObserver({
    onIntersect,
    threshold: 1,
  });

  const formatTagClassName = (tag: 'REVISITED' | 'PHOTO') => {
    return cn({
      'bg-gray-500 text-white': activeTag === tag,
      'bg-gray-100 text-gray-500': activeTag !== tag,
    });
  };

  return (
    <div>
      <div className="px-[16px]  pb-[8px]">
        <SectionTitle>방문기록</SectionTitle>
        <div className="flex gap-[8px]">
          <Tag
            size="large"
            className={formatTagClassName('REVISITED')}
            onClick={() => handleTagClick('REVISITED')}
          >
            재방문만
          </Tag>
          <Tag
            size="large"
            className={formatTagClassName('PHOTO')}
            onClick={() => handleTagClick('PHOTO')}
          >
            사진 리뷰만
          </Tag>
        </div>
      </div>

      <div className="mx-[16px]">
        {data && !data[0].data.empty ? (
          data?.map((page) => {
            return page.data.content.map((item) => {
              return (
                <StoreDetailLog
                  key={item.reviewId}
                  reviewId={item.reviewId}
                  date={item.visitedAt}
                  score={item.rating}
                  log={item.description}
                  storeImgUrl={item.imageUrl}
                  name={item.nickName}
                  visitNum={item.visitTimes}
                  hasDeleteOption={item.isMine}
                  isLast={true}
                />
              );
            });
          })
        ) : (
          <div className="w-full h-[160px] flex flex-col gap-[8px] items-center justify-center  bg-gray-100 text-gray-900 rounded-[24px] mb-[8px]">
            <p className="body-16-bold">아직 기록이 없어요!</p>
            <p className="body-14-regular">
              기록 작성 버튼을 눌러 첫 기록을 작성해주세요.
            </p>
          </div>
        )}
        {!isLoading && hasNextPage && <div ref={setTarget} />}
      </div>
    </div>
  );
}
