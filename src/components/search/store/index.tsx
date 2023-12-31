import { HTMLAttributes } from 'react';
import Image from 'next/image';

import storeImg from 'public/assets/img/search/store.png';
import VisitNumberFlag from '@components/common/VisitNumberFlag';
import More from 'public/assets/icon/More.svg';
import cn from '@utils/cn';

interface StoreProps extends HTMLAttributes<HTMLLIElement> {
  storeImgUrl?: string;
  storeName: string;
  menuType: string;
  visitNum: number;
  hasMoreOption: boolean;
  isLast: boolean;
}

export default function Store({
  storeImgUrl,
  storeName,
  menuType,
  visitNum,
  hasMoreOption,
  isLast,
}: StoreProps) {
  return (
    <li className="w-full px-4 pt-2 flex justify-between items-center">
      <div
        className={`${cn('flex justify-between items-center pt-2 pb-4 w-full', {
          'border-b-gray-100 border-b-[1px]': isLast,
        })}`}
      >
        <div className="flex gap-2">
          <Image
            // TODO: 추후 맛집 이미지 없을 시, 제공하는 기본 이미지로 변경 (현재는 mock image)
            src={storeImgUrl ?? storeImg}
            alt={storeName}
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <p className="body-16-bold">{storeName}</p>
              {visitNum && <VisitNumberFlag visitNum={visitNum} />}
            </div>
            <div className="flex caption-12-bold">
              <p className="after:inline-block after:w-[0.5px] after:h-[10px] after:bg-gray-300 after:mx-2">
                {menuType}
              </p>
              {/* TODO: 예린님 별점 컴포넌트 삽입 */}
            </div>
          </div>
        </div>
        {hasMoreOption && (
          <button>
            <More />
          </button>
        )}
      </div>
    </li>
  );
}
