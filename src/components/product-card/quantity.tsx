import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import useMutateAddToCart from 'services/hooks/useMutateAddToCart';
import useMutateSubtractFromCart from 'services/hooks/useMutateSubtractFromCart';
import { ResultMessageType } from 'types/result-message';
import { Button, Stack, Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { ResultMessage } from 'components';

type Props = {
  productId: string;
  quantity: number;
  setQuantity: (value: any) => void;
};

const Quantity: React.FC<Props> = ({ productId, quantity, setQuantity }) => {
  const fetchCart = useSelector((state: RootState) => state.app.fetchCart);
  const [hasResultMessage, setHasResultMessage] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<ResultMessageType>({
    message: '',
    severity: 'success',
  });
  const { mutateAsync: addToCart } = useMutateAddToCart();
  const { mutateAsync: subtractFromCart } = useMutateSubtractFromCart();
  const handleAddToCart = async () => {
    return await addToCart(
      {
        id: productId,
      },
      {
        onSuccess: (data) => {
          setHasResultMessage(true);
          setResultMessage({
            message: data,
            severity: 'success',
          });
          fetchCart();
        },
      }
    );
  };
  const handleSubtractFromCart = async () => {
    return await subtractFromCart(
      {
        id: productId,
      },
      {
        onSuccess: (data) => {
          setHasResultMessage(true);
          setResultMessage({
            message: data,
            severity: 'success',
          });
          fetchCart();
        },
      }
    );
  };
  const handleQuantity = async (value: number, type: string) => {
    setQuantity((prevQuantity: number) => Math.max(0, prevQuantity + value));
    if (type === 'INCREASE') {
      handleAddToCart();
    } else {
      handleSubtractFromCart();
    }
  };

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <Stack direction='column' alignItems='center' spacing={0.5}>
        {quantity > 0 && (
          <Button
            variant='outlined'
            size='small'
            sx={{ maxWidth: 30, minWidth: 30, p: 0 }}
            onClick={() => handleQuantity(-1, 'DECREASE')}
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
          onClick={() => handleQuantity(1, 'INCREASE')}
        >
          <AddIcon />
        </Button>
      </Stack>
      <ResultMessage
        hasResultMessage={hasResultMessage}
        setHasResultMessage={setHasResultMessage}
        message={resultMessage.message}
        severity={resultMessage.severity}
      />
    </Stack>
  );
};

export default Quantity;
