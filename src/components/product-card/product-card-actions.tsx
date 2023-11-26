import React, { useState } from 'react';
import { Alert, AlertColor, Box, Button, ButtonGroup, Snackbar } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import useMutateAddToCart from 'services/hooks/useMutateAddToCart';

type Props = {
  productId: string;
  isActionsVisible: boolean;
  quantity: number;
};

type ResultMessageType = {
  message: string;
  severity: AlertColor | undefined;
}

const ProductCardActions: React.FC<Props> = ({
  productId,
  isActionsVisible,
  quantity,
}) => {
  const fetchCart = useSelector((state: RootState) => state.app.fetchCart);
  const [hasResultMessage, setHasResultMessage] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<ResultMessageType>({
    message: '',
    severity: 'success',
  });
  const { mutateAsync: addToCart } = useMutateAddToCart();

  const handleAddToCart = async () => {
    if (quantity === 0) {
      setHasResultMessage(true);
      setResultMessage({
        message: 'Please select quantity',
        severity: 'warning'
      })
      return false
    }
    return await addToCart(
      {
        id: productId,
        quantity,
      },
      {
        onSuccess: (data) => {
          setHasResultMessage(true);
          setResultMessage({
            message: data,
            severity: 'success'
          })
          fetchCart();
        },
      }
    );
  };
  const handleCloseResultMessage = () => setHasResultMessage(false);
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
      {hasResultMessage && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={hasResultMessage}
          autoHideDuration={3000}
          onClose={handleCloseResultMessage}
        >
          <Alert
            onClose={handleCloseResultMessage}
            severity={resultMessage.severity}
            sx={{ width: '100%' }}
          >
            {resultMessage.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default ProductCardActions;
