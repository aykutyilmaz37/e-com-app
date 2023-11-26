import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_CART, GET_CART } from 'store/app/types';
import useFetchViewCart from 'services/hooks/useFetchViewCart';
import { Badge } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const { data: cartData, refetch: fetchCart } = useFetchViewCart({
    onSuccess: (data) => {
      dispatch({
        type: GET_CART,
        payload: data,
      });
    },
  });
  const totalQuantity = typeof cartData !== 'string' ? cartData?.reduce(
    (acc:any, item:any) => acc + (item.quantity || 0),
    0
  ): 0;

  useEffect(() => {
    dispatch({
      type: FETCH_CART,
      payload: fetchCart,
    });
  }, []);
  return (
    <Badge badgeContent={totalQuantity} color='primary'>
      <ShoppingCartIcon color='action' />
    </Badge>
  );
};

export default Cart;
