import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';

type Props = {
  onSuccess?: (data: string) => void;
};

export default function useFetchCreateSession({ onSuccess }: Props) {
  return useQuery(
    ['createsession'],
    () => axios.get(`${API_URL}/createsession`).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
