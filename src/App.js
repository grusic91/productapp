import React from 'react';
import { Provider } from 'react-redux';
import dataStore from './store';
import { Selector } from './components/Selector';
import { ProductDisplay } from './components/product/ProductDisplay';
import { SupplierDisplay } from './components/supplier/SupplierDisplay';

const App = () => <Provider store={dataStore}>
    <Selector>
      <ProductDisplay name="Products"/>
      <SupplierDisplay name="Suppliers" />
    </Selector>
  </Provider>;

export default App;
