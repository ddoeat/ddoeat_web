'use client';

import React, { useState, useCallback, ChangeEvent } from 'react';

import { usePostLog } from '@hooks/api/usePostLog';
import ImageUploader from '@components/review/ImageUploader';
import StarRating from '@components/review/StarRating';
import TextArea from '@components/review/TextArea';
import NavigationButton from '@components/terms/NavigationButton';
import VisitDate from '@components/review/VisitDate';

export default function Page({ params }: { params: { slug: string } }) {
  const { mutate: postLog } = usePostLog();
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const storeId = params.slug;

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleRating = useCallback(
    (index: number) => () => {
      setRating(index + 1);
    },
    [],
  );

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleClickSubmitButton = () => {
    // TODO: 이미지 기능 구현
    postLog({ storeId, rating, storeImgUrl: '', description });
  };

  return (
    <div className="h-[100dvh] pt-[56px] pb-[104px] overflow-y-scroll">
      <h1 className="header-22 py-[16px]">
        가게 이름에 <br />
        <strong className="text-primary-500">NN번째</strong> 방문이에요!
      </h1>
      <div className="flex flex-col py-[8px] gap-[16px]">
        <VisitDate onChange={handleChangeDate} />
        <StarRating rating={rating} onClick={handleRating} />
        <ImageUploader />
        <TextArea value={description} onChange={handleChangeDescription} />
      </div>
      <NavigationButton
        className="bg-transparent fixed bottom-0 left-[50%] -translate-x-[50%]"
        // TODO: 추후 storeImgUrl 조건 추가
        disabled={!rating || !description}
        onClick={handleClickSubmitButton}
      >
        작성완료
      </NavigationButton>
    </div>
  );
}
