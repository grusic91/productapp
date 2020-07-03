import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductsAndSuppliers from './ProductsAndSuppliers';
import { ProductDisplay } from './product/ProductDisplay';
import { SupplierDisplay } from './supplier/SupplierDisplay';
import { ProductEditor } from './product/ProductEditor';

describe("<ProductsAndSuppliers />", () => {
  let wrapper;

  beforeAll(() => wrapper = shallow(<ProductsAndSuppliers />));

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot()
  });

  it("should render one Selector", () => {
    expect(wrapper.find('Selector')).toHaveLength(1);
  });

  it("should render the ProductDisplay and SupplierDisplay Components with required props", () => {
    const productDisplayProps = wrapper.find(ProductDisplay).props();
    const supplierDisplayProps = wrapper.find(SupplierDisplay).props();
    
    expect(wrapper.containsAllMatchingElements([
      <ProductDisplay {...productDisplayProps}/>,
      <SupplierDisplay {...supplierDisplayProps} />
    ])).toEqual(true);    
  });
});

