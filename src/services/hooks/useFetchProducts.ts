import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { ProductType } from 'types/product';

type Props = {
  onSuccess?: (data: ProductType[]) => void;
};

export default function useFetchProducts({ onSuccess }: Props) {
  return useQuery(
    ['products'],
    () =>
      axios
        .get(`${API_URL}/products`)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        onSuccess && onSuccess(data);
      },
    }
  );
}
