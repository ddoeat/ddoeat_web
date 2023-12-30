import { ButtonHTMLAttributes } from 'react';

import cn from '@utils/cn';

export default function CTAButton({
  children,
  type = 'button',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        'w-full p-[16px] h-[56px] rounded-[24px] flex flex-row items-center justify-center gap-[8px] text-white body-14-bold bg-primary-500 active:bg-primary-300 disabled:bg-gray-300',
        className,
      )}
    >
      {children}
    </button>
  );
}
