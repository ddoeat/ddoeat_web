import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ApiResponse, axiosRequest } from '@api/api-config';

interface ReportData {
  storeId: number;
  storeMainImageUrl: string;
  mostVisitedCount: number;
  totalRevisitedCount: number;
}

const getReport = (
  storeId: number | null,
): Promise<ApiResponse<ReportData>> => {
  return axiosRequest('get', `/api/v1/stores/${storeId}/reports`);
};

export const useGetReport = (
  storeId: number | null,
): UseQueryResult<ReportData, AxiosError> => {
  return useQuery({
    queryKey: ['get-report', storeId],
    queryFn: () => getReport(storeId),
    enabled: !!storeId,
  });
};
