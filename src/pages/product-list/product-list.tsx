import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS } from 'store/app/types';
import { RootState } from 'store/rootReducer';
import useFetchProducts from 'services/hooks/useFetchProducts';
import { ProductType } from 'types/product';
import { Grid } from '@mui/material';
import { DataNotFound, Loading, ProductCard } from 'components';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.app.products);
  const dispatch = useDispatch();
  const { isLoading } = useFetchProducts({
    onSuccess: (data) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    },
  });

  if (isLoading) return <Loading />;
  if (products.length <= 0) return <DataNotFound />;
  return (
    <Grid container py={4} spacing={4}>
      {products.map((product: ProductType, index: number) => {
        return (
          <Grid item key={index} xs={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
