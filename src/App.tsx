import React from 'react';
import { GlobalProvider } from './context';
import { HistoricalPage } from './components/HistoricalPage';
import { App as AppWrapper } from './style';

function App() {
  return (
    <GlobalProvider>
      <AppWrapper>
        <HistoricalPage />
      </AppWrapper>
    </GlobalProvider>
  );
}

export default App;
