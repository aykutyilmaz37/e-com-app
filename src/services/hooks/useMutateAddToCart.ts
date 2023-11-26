import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'services/constants/apiUrl';
import { AddToCartType } from 'types/cart';
import { sessionHeadersConfig } from 'services/constants/headersConfig';


export default function useMutateAddToCart() {
  return useMutation(
    ['add-to-cart'],
    (variables: AddToCartType) =>
      axios
        .post(`${API_URL}/add-to-cart`, variables, {
          params: {
            ...variables,
          },
          ...sessionHeadersConfig(),
        })
        .then((res) => res.data),
  );
}
