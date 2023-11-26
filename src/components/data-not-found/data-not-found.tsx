import React, { FC } from 'react';
import { Box, Stack, Typography, styled } from '@mui/material';
import { BrowserNotSupported as BrowserNotSupportedIcon } from '@mui/icons-material';

const StyledDataNotFound = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper: FC = () => {
  return (
    <StyledDataNotFound>
      <Stack direction='column' alignItems='center'>
        <BrowserNotSupportedIcon sx={{ fontSize: 50 }} />
        <Typography variant='h6' component='div'>
          Data not found
        </Typography>
      </Stack>
    </StyledDataNotFound>
  );
};

export default Wrapper;
