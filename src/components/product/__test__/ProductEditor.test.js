import React from 'react';
import {mount} from 'enzyme';

import {ProductEditor} from '../ProductEditor';

describe("<ProductEditor />", () => {
    let wrapper;
    beforeAll(() => wrapper = mount(<ProductEditor 
        product={{
            id: 1,
            name: "Kayak1",
            category: "Watersports",
            price: "275"
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
       .simulate('change', {target: {name: 'Kayak1'}});
    });   
})