import React from 'react';

import settings from './store/';

import './App.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Counter from './components/Counter';
import ShowCounter from './components/ShowCounter';

const App = () => {
  return (
    <div className="App">
      <div className="increment">
        <Provider store={settings.store}>
          <PersistGate persistor={settings.persistor}>
            <ShowCounter title="Counter"/>
            <div className="action-button">
              <Counter />
            </div>
          </PersistGate>
        </Provider>
      </div>
    </div>
  )
}

export default App;