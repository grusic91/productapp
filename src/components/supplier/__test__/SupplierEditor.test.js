import React from 'react';
import {mount} from 'enzyme';

import {SupplierEditor} from '../SupplierEditor';

describe("<SupplierEditor />", () => {
    let wrapper;
    beforeAll(() => wrapper = mount(<SupplierEditor 
        supplier={ {
                    id: 1,
                    name: "Surf Dudes",
                    city: "San Jose",
                    products: [1, 2]
                  }}
    />))
    
    it("simulate id input functionality", () => {
       let input = wrapper.find('input.id');
       input
       .simulate('change', {target: {id: 1}});
    });

    it("simulate name input functionality", () => {
       let input = wrapper.find('input.name');
       input
       .simulate('change', {target: {name: 'Kayak'}});
    });   
})