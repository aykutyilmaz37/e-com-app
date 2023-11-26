import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Wrapper } from 'components';

const Loading: FC = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

export default Loading;
