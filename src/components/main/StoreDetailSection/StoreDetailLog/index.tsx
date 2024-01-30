import Image from 'next/image';

import LogItem from '@components/main/LogItem';

interface StoreDetailLogProps {
  date: string;
  score: number;
  storeImgUrl?: string;
  name: string;
  visitNum: number;
  log: string;
  hasDeleteOption: boolean;
  isLast: boolean;
  onClick: () => void;
}

export default function StoreDetailLog({
  date,
  score,
  log,
  storeImgUrl,
  name,
  visitNum,
  hasDeleteOption,
  isLast,
  onClick,
}: StoreDetailLogProps) {
  return (
    <div className="flex flex-col">
      <LogItem
        userName={name}
        visitNum={visitNum}
        score={score}
        isLast={isLast}
        hasDeleteOption={hasDeleteOption}
        date={date}
        onClick={onClick}
      />
      <div className="flex flex-col justify-center ">
        {storeImgUrl && (
          <div className="max-h-[200px] rounded-[20px] overflow-hidden">
            <Image
              priority
              src={storeImgUrl}
              alt={name}
              width={343}
              height={150}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        )}
        <span className="px-[16px] py-[8px] break-all body-14-regular text-gray-700">
          {log}
        </span>
      </div>
    </div>
  );
}
