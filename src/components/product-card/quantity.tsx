import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

type Props = {
  quantity: number;
  setQuantity: (params: any) => void;
};

const Quantity: React.FC<Props> = ({ quantity, setQuantity }) => {
  const handleQuantity = async (value: number) => {
    setQuantity((prevQuantity: number) => Math.max(0, prevQuantity + value));
  };

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <Stack direction='column' alignItems='center' spacing={0.5}>
        {quantity > 0 && (
          <Button
            variant='outlined'
            size='small'
            sx={{ maxWidth: 30, minWidth: 30, p: 0 }}
            onClick={() => handleQuantity(-1)}
          >
            <RemoveIcon />
          </Button>
        )}

        {quantity > 0 && (
          <Typography fontSize={16} component='span'>
            {quantity}
          </Typography>
        )}

        <Button
          variant='outlined'
          size='small'
          sx={{ maxWidth: 30, minWidth: 30, p: 0 }}
          onClick={() => handleQuantity(1)}
        >
          <AddIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Quantity;
