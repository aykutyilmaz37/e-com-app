import React from 'react';
import { Stack, Typography } from '@mui/material';

type Props = {
  originalPrice: number;
  price: number;
};

const Price: React.FC<Props> = ({ originalPrice, price }) => {
  return (
    <Stack direction='row' spacing={1}>
      <Typography color='primary' fontSize={14} component='span'>
        $ {originalPrice}
      </Typography>
      <Typography
        color='grey'
        fontSize={14}
        component='span'
        sx={{ textDecoration: 'line-through' }}
      >
        $ {price}
      </Typography>
    </Stack>
  );
};

export default Price;
