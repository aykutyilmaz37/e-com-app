import React, { FC, useState } from 'react';
import {
  Box,
  Grid,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import { Search, Cart } from 'components';
import LOGO from 'assets/logo.png';
import { Search as SearchIcon } from '@mui/icons-material';

const Header: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box
      bgcolor={'#fff'}
      width={1}
      height={85}
      p={2}
      boxSizing='border-box'
      position='fixed'
      zIndex={100}
    >
      <Grid
        container
        spacing={0}
        height={50}
        justifyContent={['space-between', 'center']}
        alignItems='center'
      >
        <Grid item xs={6} md={3}>
          <img src={LOGO} style={{ maxWidth: '100%', height: 50 }} alt='Logo' />
        </Grid>

        {!isMobile && (
          <Grid
            item
            xs={6}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Search />
          </Grid>
        )}

        <Grid
          item
          xs={6}
          md={3}
          display='flex'
          justifyContent='flex-end'
          pr={1}
        >
          {isMobile ? (
            <Stack direction='row' alignItems='center' spacing={2}>
              <IconButton onClick={handleDrawerOpen}>
                <SearchIcon />
              </IconButton>
              <Cart />
            </Stack>
          ) : (
            <Cart />
          )}
        </Grid>
      </Grid>

      {isMobile && (
        <Drawer anchor='top' open={isDrawerOpen} onClose={handleDrawerClose}>
          <Box p={2}>
            <Search handleDrawerClose={handleDrawerClose} />
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Header;
