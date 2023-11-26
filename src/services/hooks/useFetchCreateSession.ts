import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';

type TriggerQueryType = {
  onSuccess?: (data: any) => void;
};

export default function useFetchSearch() {
  const queryClient = useQueryClient();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/createsession`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

  const queryInfo = useQuery(['search'], fetchData, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const triggerQuery = async ({ onSuccess }: TriggerQueryType) => {
    try {
      const data = await queryClient.fetchQuery(['createsession'], () =>
        fetchData()
      );
      onSuccess && onSuccess(data);
    } catch (error) {
      console.error('Error triggering query:', error);
    }
  };

  return { ...queryInfo, triggerQuery };
}
