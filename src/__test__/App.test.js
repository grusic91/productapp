import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ProductsAndSuppliers from '../components/ProductsAndSuppliers';

describe("<App />", () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  // snapshot test
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it("should renders 1 div element", () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div')).toHaveLength(1);
  })
  
  it("renders ProductsAndSuppliers Component", () => {
    expect(wrapper.containsMatchingElement(<ProductsAndSuppliers />)).toEqual(true); 
  }); 
});
