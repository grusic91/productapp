import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProductDisplay } from '../ProductDisplay';
import { ProductTable } from '../ProductTable';
import { ProductEditor } from '../ProductEditor';
import { ProductTableRow } from '../ProductTableRow';


describe('<ProductDisplay />', () => {
    it("should render properly", () => {
        
    });
    
    /* let wrapper;

    beforeAll(() => wrapper = shallow(<ProductDisplay/>));

    

    it("should render two divs elements", () => {
        expect(wrapper.find('div')).toHaveLength(2);
    });

    it("conditional Rendering ProductTable", () => {
        const productTableProps = wrapper.find(ProductTable).props();
        wrapper.setState({ showEditor: false});
        expect(wrapper.containsMatchingElement(
            <ProductTable {...productTableProps}/>
        )).toEqual(true);
    });
    
    it("conditional Rendering Create Product <button> element", () => {
        wrapper.setState({ showEditor: false});
        expect(wrapper.find('button').text()).toEqual("Create Product");
    });

    it("conditional Rendering ConnectedTable", () => {
       
    });

    it("click 'Create Product' button in product table", () => {
       
    }); */
});


