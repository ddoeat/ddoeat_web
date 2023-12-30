'use client';

import { InputHTMLAttributes } from 'react';

import SearchIcon from '/public/SearchIcon.svg';
import DeleteIcon from '/public/DeleteIcon.svg';

import Input from '../Input';

import useInput from '@hooks/useInput';

interface SearchTopBarProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function SearchTopBar({ icon }: SearchTopBarProps) {
  const [text, onTextChange, resetText] = useInput('');

  return (
    <div>
      <div className="flex items-center px-4 py-2">
        <div className="w-[40px] h-[40px]">{icon}</div>
        <Input
          rightItem={
            text ? (
              <button onClick={resetText}>
                <DeleteIcon />
              </button>
            ) : (
              <SearchIcon />
            )
          }
          value={text}
          onChange={onTextChange}
        />
      </div>
    </div>
  );
}
