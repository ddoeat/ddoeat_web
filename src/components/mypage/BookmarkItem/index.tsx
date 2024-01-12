import ListItem from '@components/common/ListItem';
import type { BasicListItem } from '@components/common/ListItem';
import Tag from '@components/common/Tag';

interface BookmarkListProps extends Omit<BasicListItem, 'hasDeleteOption'> {
  storeName: string;
  revisitNum: number;
  menuType: string;
  location: string;
}

export default function BookmarkItem({
  listId,
  isLast,
  storeName,
  revisitNum,
  menuType,
  location,
}: BookmarkListProps) {
  return (
    <ListItem listId={listId} isLast={isLast} hasDeleteOption={true}>
      <div className="flex items-center gap-[4px]">
        <p className="body-16-bold">{storeName}</p>
        {revisitNum > 0 && (
          <Tag size={'small'} className="bg-primary-100 text-primary-500">
            {revisitNum}명 재방문
          </Tag>
        )}
      </div>
      <div className="flex caption-12-bold">
        <p className="after:inline-block after:w-[0.5px] after:h-[10px] after:bg-gray-300 after:mx-2">
          {menuType}
        </p>
        <p>{location}</p>
      </div>
    </ListItem>
  );
}
