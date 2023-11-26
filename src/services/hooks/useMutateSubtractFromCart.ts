import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { SubtractFromCart } from 'types/cart';
import { sessionHeadersConfig } from 'services/constants/headersConfig';


export default function useMutateAddToCart() {
  return useMutation(
    ['add-to-cart'],
    (variables: SubtractFromCart) =>
      axios
        .post(`${API_URL}/subtract-from-cart`, variables, {
          params: {
            ...variables,
          },
          ...sessionHeadersConfig(),
        })
        .then((res) => res.data),
  );
}
