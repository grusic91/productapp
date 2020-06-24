import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { ProductTableRow} from '../ProductTableRow';
/*
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); */

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);   
  });

  it("renders productTableRow", () => {
    const wrapper = shallow(<App />);
    const productTableRow = wrapper.find(ProductTableRow);
    expect(productTableRow).toHaveLength(1); 
  });

 
})
