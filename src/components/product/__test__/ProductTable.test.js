import React from 'react';
import { shallow } from 'enzyme';
import { ProductTable } from '../ProductTable';
import { ProductTableRow } from '../ProductTableRow';

describe('<ProductTable />', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow(<ProductTable 
        products={[]}
        editCallback={jest.fn()}
        deleteCallback={jest.fn()}
    />));

    it("renders Components properly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("renders one table element", () => {        
        expect(wrapper.find('table').length).toEqual(1);
    });

    it("find th element where text is Products", () => {
        expect(wrapper.find('th').first().text()).toEqual("Products");
    });

    it("renders all matching headers of columns", () => {
        expect(wrapper.containsMatchingElement(
            <tr>
                <th>ID</th><th>Name</th><th>Category</th><th>Price</th>
            </tr>
        )).toEqual(true);
    });

    it("renders tbody element", () => {
        expect(wrapper.find('tbody')).toHaveLength(1);
    });

    it("in case there is no products, ProductTableRow is not rendered", () => {
        expect(wrapper.containsMatchingElement(<ProductTableRow />)).toEqual(false);
    });

    it("in case we have two products ProductTable rneders two ProductTableRow components", () => {
        // populate products props on ProductTable
        wrapper.setProps({
            products: [
                {
                    id: 1,
                    name: "Kayak1",
                    category: "Watersports",
                    price: "275"
                },
                {
                    id: 2,
                    name: "Lifejacket",
                    category: "Watersports",
                    price: "48.95"
                }
            ]
        });
        expect(wrapper.find(ProductTableRow)).toHaveLength(2);
    });
});
