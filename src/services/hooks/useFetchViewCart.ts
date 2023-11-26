import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { ProductType } from 'types/product';
import { sessionHeadersConfig } from 'services/constants/headersConfig';

type Props = {
  onSuccess?: (data: ProductType[]) => void;
};

export default function useFetchViewCart({ onSuccess }: Props) {
  return useQuery(
    ['view-cart'],
    () =>
      axios
        .get(`${API_URL}/view-cart`, { ...sessionHeadersConfig() })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
