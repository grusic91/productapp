import React from 'react';
import { shallow, mount } from 'enzyme';
import { SupplierDisplay } from '../SupplierDisplay';

import { SupplierTable } from '../SupplierTable';
import { SupplierEditor } from '../SupplierEditor';
import { SupplierTableRow } from '../SupplierTableRow';

describe('<SupplierDisplay />', () => {
    let wrapper;
    beforeAll(() => wrapper = shallow(<SupplierDisplay 
        name={""}
        suppliers={[]}
        saveCallback={jest.fn()}
        deleteCallback={jest.fn()}
    />));

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
    });
});

describe('<SupplierDisplay /> functionality', () => {
    let wrapper;

    const saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] = state[collection].concat(item))
        } else {
            this.setState(state => state[collection] = state[collection].map(
                stored => stored.id === item.id ? item: stored
            ))
        }
    }

    const deleteData = (collection, item) => {
        this.setState(state => state[collection] = state[collection].filter(
            stored => stored.id !== item.id
        ));
    }

    beforeAll(() => wrapper = mount(<SupplierDisplay 
        name={"Suppliers"}
        suppliers={[
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
        ]}
        saveCallback={saveData}
        deleteCallback={deleteData}
    />));
    
    it("click 'Edit' button in supplier table, ProductEditor component should be rendered", () => {
        const supplierTable = wrapper.find(SupplierTable);
        const editButton = supplierTable.find(SupplierTableRow).at(0).find('button').at(0);
        editButton.simulate('click');

        expect(wrapper.containsMatchingElement(SupplierEditor)).toEqual(true);
    });

});