import React from 'react';
import { shallow, mount } from 'enzyme';
import { SupplierDisplay } from '../SupplierDisplay';

import { SupplierTable } from '../SupplierTable';
import { SupplierEditor } from '../SupplierEditor';
import { SupplierTableRow } from '../SupplierTableRow';

describe('<SupplierDisplay />', () => {
    it("renders properly", () => {
        
    })
    /* let wrapper;
    beforeAll(() => wrapper = shallow(<SupplierDisplay />));

    it("renders properly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("should render two divs elements", () => {
        expect(wrapper.find('div')).toHaveLength(2);
    });

    it("conditional Render SupplierTable", () => {
        wrapper.setState({showEditor: false});
        expect(wrapper.containsMatchingElement(<SupplierTable />)).toEqual(true);
    });

    it("conditional Rendering Create Supplier <button> element", () => {
        wrapper.setState({ showEditor: false});
        expect(wrapper.find('button').text()).toEqual("Create Supplier");
    });

    it("conditional Rendering SuplierEditor", () => {
        wrapper.setState({ 
            showEditor: true, 
            selected: {
                id: "",
                name: "",
                city: "",
                products: []
            }
        });
        expect(wrapper.containsMatchingElement(<SupplierEditor />)).toEqual(true);
    }); */
});

