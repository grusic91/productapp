import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProductDisplay } from '../ProductDisplay';
import { ProductTable } from '../ProductTable';
import { ProductEditor } from '../ProductEditor';
import { ProductTableRow } from '../ProductTableRow';


describe('<ProductDisplay />', () => {
    let wrapper;

    beforeAll(() => wrapper = shallow(<ProductDisplay 
        name={""}
        products={[]}
        saveCallback={jest.fn()}
        deleteCallback={jest.fn()}
    />));

    it("should render properly", () => {
        expect(wrapper).toMatchSnapshot();
    });

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

    it("conditional Rendering ProductEditor", () => {
        wrapper.setState({ 
            showEditor: true, 
            selectedProduct: {
                id: "",
                name: "",
                category: "",
                price: ""
            }
        });
        expect(wrapper.containsMatchingElement(<ProductEditor />)).toEqual(true);
    });
});

describe('<ProductDisplay /> functionality', () => {
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

    beforeAll(() => wrapper = mount(<ProductDisplay 
        name={"Products"}
        products={[
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
        ]}
        saveCallback={saveData}
        deleteCallback={deleteData}
    />));
    
    it("click 'Edit' button in product table, ProductEditor component should be rendered", () => {
        const productTableComponent = wrapper.find(ProductTable);
        const editButton = productTableComponent.find(ProductTableRow).at(0).find('button').at(0);
        editButton.simulate('click');

        expect(wrapper.containsMatchingElement(ProductEditor)).toEqual(true);
    });
});

