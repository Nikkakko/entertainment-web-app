import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/myTheme';

// eslint-disable-next-line
import 'swiper/css/bundle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
