import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { BottomSheetProps, BottomSheetStatus } from '../types/types';

import AnimatePortal from '@components/common/AnimatePortal';

interface State {
  isShowing: boolean;
  deviceHeight: number;
  status: BottomSheetStatus;
  setStatus: Dispatch<SetStateAction<BottomSheetStatus>>;

  showStatusChildrenHeight: number;
  fullStatusChildrenHeight: number;
  setShowStatusChildrenHeight: Dispatch<SetStateAction<number>>;
  setFullStatusChildrenHeight: Dispatch<SetStateAction<number>>;
}

const BottomSheetContext = createContext<State | null>(null);

export function BottomSheetProvider({
  isShowing,
  mode,
  defaultShowHeight = 390,
  children,
}: Pick<
  BottomSheetProps,
  'isShowing' | 'mode' | 'defaultShowHeight' | 'children'
>) {
  const [status, setStatus] = useState<BottomSheetStatus>('show');
  const [showStatusChildrenHeight, setShowStatusChildrenHeight] = useState(0);
  const [fullStatusChildrenHeight, setFullStatusChildrenHeight] = useState(0);

  const [deviceHeight, setDeviceHeight] = useState(0);
  const [bottomSheetContainer, setBottomSheetContainer] =
    useState<Element | null>(null);

  useEffect(() => {
    isShowing && setDeviceHeight(document.documentElement.clientHeight);
    setBottomSheetContainer(document.querySelector('#bottomSheetContainer'));
  }, [isShowing]);

  return (
    <AnimatePortal
      isShowing={isShowing}
      mode={mode}
      customContainer={bottomSheetContainer}
    >
      <BottomSheetContext.Provider
        value={{
          isShowing,
          deviceHeight,
          status,
          setStatus,
          showStatusChildrenHeight: Math.min(
            showStatusChildrenHeight,
            deviceHeight,
            defaultShowHeight,
          ),
          fullStatusChildrenHeight: Math.max(
            fullStatusChildrenHeight,
            deviceHeight,
          ),
          setShowStatusChildrenHeight,
          setFullStatusChildrenHeight,
        }}
      >
        {children}
      </BottomSheetContext.Provider>
    </AnimatePortal>
  );
}

export function useBottomSheet() {
  const bottomSheet = useContext(BottomSheetContext);

  if (!bottomSheet) throw new Error('context내에서 사용해야 합니다.');

  return bottomSheet;
}
