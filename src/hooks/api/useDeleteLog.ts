import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosRequest } from '../../api/api-config';

const deleteLog = (storeId: number): Promise<void> => {
  return axiosRequest('delete', `endpoint/${storeId}`);
};

export const useDeleteLog = (): UseMutationResult<void, AxiosError, number> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete-log'],
    mutationFn: (storeId) => deleteLog(storeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['temp-log-list'] });
    },
  });
};
