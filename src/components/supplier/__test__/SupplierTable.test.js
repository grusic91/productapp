import React from 'react';
import { shallow } from 'enzyme';
import { SupplierTable } from '../SupplierTable';
import { SupplierTableRow } from '../SupplierTableRow';

describe('<SupplierTable />', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow(<SupplierTable 
        suppliers={[]}
        editCallback={jest.fn()}
        deleteCallback={jest.fn()}
    />));

    it("renders Components properly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("renders table element ", () => {
        expect(wrapper.find('table').length).toEqual(1);
    });

    it("find th element where text is Suppliers", () => {
        expect(wrapper.find('th').first().text()).toEqual("Suppliers");
    });

    it("renders all matching headers of columns", () => {
        expect(wrapper.containsMatchingElement(
            <tr>
                <th>ID</th><th>Name</th><th>City</th><th>Products</th>
            </tr>
        )).toEqual(true);
    });

    it("renders tbody element", () => {
        expect(wrapper.find('tbody')).toHaveLength(1);
    });

    it("in case there are no suppliers, SupplierTableRow is not rendered", () => {
        expect(wrapper.containsMatchingElement(<SupplierTableRow />)).toEqual(false);
    });

    it("in case we have two suppliers SupplierTable rneders two SupplierTableRow components", () => {
        // populate products props on ProductTable
        wrapper.setProps({
            suppliers: [
                {
                    id: 1,
                    name: "Surf Dudes",
                    city: "San Jose",
                    products: [1, 2]
                  },
                  {
                    id: 2,
                    name: "Field Supplies",
                    city: "New York",
                    products: [3]
                  }
            ]
        });
        expect(wrapper.find(SupplierTableRow)).toHaveLength(2);
    });
})
