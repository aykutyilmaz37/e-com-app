import React, { useState } from 'react';
import { ProductType } from 'types/product';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import ProductImage from './product-image';
import Review from './review';
import Price from './price';
import Quantity from './quantity';
import ProductChip from './product-chip';
import ProductCardActions from './product-card-actions';

type Props = {
  product: ProductType;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isActionsVisible, setActionsVisible] = useState<boolean>(false);

  return (
    <Card
      variant='outlined'
      onMouseEnter={() => setActionsVisible(true)}
      onMouseLeave={() => setActionsVisible(false)}
    >
      <Box position='relative'>
        <ProductChip discount={product.discount} />
        <ProductImage name={product.name} image={product.image} height={400} />
        <ProductCardActions
          productId={product.id}
          isActionsVisible={isActionsVisible}
          setQuantity={setQuantity}
        />
      </Box>

      <CardContent sx={{ px: 2, pb: 0 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='flex-end'
          height={85}
        >
          <Box>
            <Typography
              variant='h5'
              fontSize={18}
              color='grey'
              gutterBottom
              component='div'
            >
              {product.name}
            </Typography>
            <Review rating={product.rating} />
            <Price
              price={product.price}
              originalPrice={product.originalPrice}
            />
          </Box>
          <Box>
            <Quantity productId={product.id} quantity={quantity} setQuantity={setQuantity} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
