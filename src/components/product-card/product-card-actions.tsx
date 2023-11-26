import React, { FC, useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import useMutateAddToCart from 'services/hooks/useMutateAddToCart';
import { ResultMessage } from 'components/result-message';
import { ResultMessageType } from 'types/result-message';

type Props = {
  productId: string;
  isActionsVisible: boolean;
  setQuantity: (value: any) => void;
};

const ProductCardActions: FC<Props> = ({
  productId,
  isActionsVisible,
  setQuantity,
}) => {
  const fetchCart = useSelector((state: RootState) => state.app.fetchCart);
  const [hasResultMessage, setHasResultMessage] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<ResultMessageType>({
    message: '',
    severity: 'success',
  });
  const { mutateAsync: addToCart } = useMutateAddToCart();

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
          setQuantity((prevQuantity: number) => Math.max(0, prevQuantity + 1));
          fetchCart();
        },
      }
    );
  };
  return (
    <Box>
      <Box
        position='absolute'
        left={0}
        right={0}
        display='flex'
        justifyContent='center'
        bottom={isActionsVisible ? '10px' : '-10px'}
        zIndex={isActionsVisible ? '0' : '-1'}
        width='100%'
        sx={{ transition: 'all 0.3s' }}
      >
        <ButtonGroup
          variant='outlined'
          color='secondary'
          size='small'
          sx={{ bgcolor: '#fff' }}
        >
          <Button>
            <VisibilityIcon />
          </Button>
          <Button>
            <FavoriteIcon />
          </Button>
          <Button onClick={handleAddToCart}>
            <ShoppingCartIcon />
          </Button>
        </ButtonGroup>
      </Box>
      <ResultMessage
        hasResultMessage={hasResultMessage}
        setHasResultMessage={setHasResultMessage}
        message={resultMessage.message}
        severity={resultMessage.severity}
      />
    </Box>
  );
};

export default ProductCardActions;
