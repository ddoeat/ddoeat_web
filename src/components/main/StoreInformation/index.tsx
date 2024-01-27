import StarScore from '@components/common/StarScore';
import Tag from '@components/common/Tag';

function StoreInformation() {
  return (
    <div className="flex flex-col p-[16px] gap-[8px]">
      <div className="flex flex-col gap-[4px] items-center">
        <span className="header-20">storename</span>
        <div className="flex gap-[4px]">
          <Tag size="small" className="bg-primary-100 text-primary-500">
            내방문 번
          </Tag>
          <Tag size="small" className=" bg-gray-50 text-gray-500">
            메뉴타입
          </Tag>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-center">
        <span className="caption-12-bold">location</span>
        <div className="flex gap-[8px] items-center">
          <StarScore rating={4} />
          <hr className="w-[1px] h-[10px] bg-gray-300" />
          <span className="body-14-bold">방문기록 00</span>
        </div>
      </div>
    </div>
  );
}

export default StoreInformation;
