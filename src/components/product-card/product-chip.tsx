import React, { FC } from 'react';
import { Chip } from '@mui/material';

type Props = {
  discount: string;
};

const ProductChip: FC<Props> = ({ discount }) => {
  return (
    <Chip
      label={discount}
      color='primary'
      size='small'
      style={{ position: 'absolute', top: 8, left: 8 }}
    />
  );
};

export default ProductChip;
