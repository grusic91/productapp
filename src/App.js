import React from 'react';
import { Provider } from 'react-redux';
import dataStore from './store';
import { Selector } from './components/Selector';
import { PRODUCTS, SUPPLIERS } from './store/dataTypes';


const App = () =>( 
      <Provider store={dataStore}>
        <Selector>
          <data name="Products" datatype={PRODUCTS} />
          <data name="Suppliers" datatype={SUPPLIERS} />
        </Selector>
      </Provider>
  )

export default App;
