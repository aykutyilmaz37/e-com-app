import React from 'react';
import Header from './header';
import { Grid, Container } from '@mui/material';

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} mt={'85px'}>
          <Container>{children}</Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
