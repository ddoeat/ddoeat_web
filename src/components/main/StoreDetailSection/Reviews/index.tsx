import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import SectionTitle from '../SectionTitle';
import StoreDetailLog from '../StoreDetailLog';

import cn from '@utils/cn';
import Tag from '@components/common/Tag';
import useObserver from '@hooks/useObserver';
import { useDeleteLog } from '@hooks/api/useDeleteLog';
import { useGetStoreFeedList } from '@hooks/api/useGetFeedList';

export default function Reviews() {
  const [activeTag, setActiveTag] = useState<'REVISITED' | 'PHOTO' | null>(
    null,
  );

  const searchParams = useSearchParams();

  const storeId = searchParams.get('storeId');

  const params = {
    storeId: storeId ?? '',
  };

  const { data, fetchNextPage, isLoading, hasNextPage } =
    useGetStoreFeedList(params);
  const { mutate: deleteLog } = useDeleteLog();

  const handleTagClick = (tag: 'REVISITED' | 'PHOTO' | null) => () => {
    setActiveTag((prevTag) => (prevTag === tag ? null : tag));
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting) fetchNextPage();
  };

  const { setTarget } = useObserver({
    onIntersect,
    threshold: 0.5,
  });

  const handleDeleteLog = (id: number) => {
    deleteLog(id);
  };

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
            onClick={handleTagClick('REVISITED')}
          >
            재방문만
          </Tag>
          <Tag
            size="large"
            className={formatTagClassName('PHOTO')}
            onClick={handleTagClick('PHOTO')}
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
                  key={item.feedId}
                  date={item.createdAt}
                  score={item.rating}
                  log={item.description}
                  storeImgUrl={item.feedImg}
                  name={item.nickname}
                  visitNum={0}
                  hasDeleteOption={item.isMine}
                  hasReportOption={!item.isMine}
                  isLast={true}
                  onClick={() => handleDeleteLog(item.feedId)}
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
        {!isLoading && hasNextPage && <div ref={setTarget} className="h-1" />}
      </div>
    </div>
  );
}
