import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

type Props = {
  children: React.ReactElement;
};

const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper: FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
