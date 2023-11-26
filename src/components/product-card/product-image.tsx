import React, { FC } from 'react';
import { replaceImage } from 'utils/helper';
import { CardMedia } from '@mui/material';

type Props = {
  image: string;
  name: string;
  height: number;
};

const ProductImage: FC<Props> = ({ image, name, height }) => {
  return (
    <CardMedia
      component='img'
      alt={name}
      height={height}
      image={replaceImage(image, name)}
    />
  );
};

export default ProductImage;
