import React, { FC } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';

type Props = {
  message: string;
  severity: AlertColor | undefined;
  hasResultMessage: boolean;
  setHasResultMessage: (value: boolean) => void;
};

const ResultMessage: FC<Props> = ({
  message,
  severity,
  hasResultMessage,
  setHasResultMessage,
}) => {
  const handleCloseResultMessage = () => setHasResultMessage(false);
  if (!hasResultMessage) return null;
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={hasResultMessage}
      autoHideDuration={3000}
      onClose={handleCloseResultMessage}
    >
      <Alert
        onClose={handleCloseResultMessage}
        severity={severity}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ResultMessage;
