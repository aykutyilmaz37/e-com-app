import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Wrapper } from 'components';

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

export default Loading;
