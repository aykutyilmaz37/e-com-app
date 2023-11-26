import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { SearchType } from 'types/search';

type TriggerQueryType = {
  onSuccess?: (data: any) => void;
  variables: SearchType;
};

export default function useFetchSearch() {
  const queryClient = useQueryClient();

  const fetchData = async (variables: any) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { ...variables },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

  const queryInfo = useQuery(['search'], fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const triggerQuery = async ({ variables, onSuccess }: TriggerQueryType) => {
    try {
      const data = await queryClient.fetchQuery(['search', variables], () =>
        fetchData(variables)
      );
      onSuccess && onSuccess(data);
    } catch (error) {
      console.error('Error triggering query:', error);
    }
  };

  return { ...queryInfo, triggerQuery };
}
