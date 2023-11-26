import React from 'react';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import AppContainer from 'AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={null}>
          <ThemeProvider theme={theme}>
            <AppContainer />
          </ThemeProvider>
        </React.Suspense>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
