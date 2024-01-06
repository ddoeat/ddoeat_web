import BottomSheetContainer from './components/BottomSheetContainer';
import BottonSheetFullContent from './components/BottomSheetFullContent';
import BottonSheetShowContent from './components/BottomSheetShowContent';
import { BottomSheetProvider } from './contexts/BottomSheetContext';
import { BottomSheetProps } from './types/types';

function BottomSheet({ children, ...restProps }: BottomSheetProps) {
  const { isShowing, mode, defaultShowHeight } = restProps;

  return (
    <BottomSheetProvider
      isShowing={isShowing}
      mode={mode}
      defaultShowHeight={defaultShowHeight}
    >
      <BottomSheetContainer {...restProps}>{children}</BottomSheetContainer>
    </BottomSheetProvider>
  );
}

export default Object.assign(BottomSheet, {
  ShowContent: BottonSheetShowContent,
  FullContent: BottonSheetFullContent,
});
