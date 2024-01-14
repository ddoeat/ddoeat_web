export interface OnboardingContentProps {
  step: number;
  title: string;
  content: string;
}

export const ONBOARDING_CONTENT: OnboardingContentProps[] = [
  {
    step: 1,
    title: '재방문 맛집을 지도에 표시했어요',
    content: '많은 사람이 재방문한 곳일수록 그릇이 많아요!',
  },
  {
    step: 2,
    title: '내 맛집을 기록해보세요',
    content:
      '가고 싶은 곳을 북마크하고, 방문 후 기록을 남겨보세요.\n 나의 맛집 지도가 완성될 거예요!',
  },
  {
    step: 3,
    title: '기록을 많이 남길수록 또밥이가 성장해요!',
    content:
      '다녀온 맛집 기록을 남겨보세요.\n 5개 이상 남기면 레벨이 올라가요!',
  },
];
