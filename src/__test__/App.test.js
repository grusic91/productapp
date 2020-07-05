import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import {ProductDisplay} from '../components/product/ProductDisplay';
import {SupplierDisplay} from '../components/supplier/SupplierDisplay';

describe("<App />", () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  // snapshot test
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  
  it("renders ProductsAndSuppliers Component", () => {
    expect(wrapper.containsAllMatchingElements([
      <ProductDisplay />,
      <SupplierDisplay />
    ])).toEqual(true);    
  }); 
});
