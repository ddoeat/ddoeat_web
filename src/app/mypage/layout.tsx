'use client';

import { useRouter } from 'next/navigation';

import Header from '@components/common/Header';
import SettingIcon from 'public/assets/icon24/setting_24.svg';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const handleSettingButtonClick = () => router.push('/setting');

  return (
    <main className='bg-[url("/assets/image/mypage/background.png")] bg-cover'>
      <Header className=" [&>*>*]:fill-white justify-between">
        <SettingIcon onClick={handleSettingButtonClick} />
      </Header>
      {children}
    </main>
  );
}
