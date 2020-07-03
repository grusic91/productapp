import React from 'react';
import { shallow } from 'enzyme';
import { ProductTableRow } from '../ProductTableRow';

describe("<ProductTableRow />", () => {
    let wrapper;

    beforeAll(() => wrapper = shallow(<ProductTableRow />));

   
    it("no product prop, renders one h1 element with text", () => {        
        expect(wrapper.find('h1').text()).toEqual("Loading...");
    });

    it("with defined product prop", () => {
        wrapper.setProps({product: {
            id: 3,
            name: "Soccer Ball",
            category: "Soccer",
            price: "19.50"
          }});
        
        expect(wrapper.find('tr')).toHaveLength(1);
    });

    it("renders all 5 td elements", () => {
        expect(wrapper.find('td')).toHaveLength(5);
    });
    
    it("renders two button elements", () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });
});
