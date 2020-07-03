import React from 'react';
import { shallow } from 'enzyme';
import { SupplierTableRow } from '../SupplierTableRow';

describe("<SupplierTableRow />", () => {
    let wrapper;

    beforeAll(() => wrapper = shallow(<SupplierTableRow supplier={
    {           id: 1,
                name: "Surf Dudes",
                city: "San Jose",
                products: [1, 2]
              }
    }/>));

    it("renders two button elements", () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });
});
