import React from 'react';
import PropTypes from 'prop-types';
import { ProductEditor } from './ProductEditor';
import { ProductTable } from './ProductTable';

export class ProductDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showEditor: false,
            selectedProduct: null
        }
    }

    startEditing = product => {
        this.setState({
            showEditor: true,
            selectedProduct: product
        })
    }

    createProduct = () => {
        this.setState({
            showEditor: true,
            selectedProduct: {}
        })
    }

    cancelEditing = () => {
        this.setState({
            showEditor: false,
            selectedProduct: null
        })
    }

    saveProduct = product => {
        this.props.saveCallback(product);
        this.setState({
            showEditor: false,
            selectedProduct: null
        });
    }

    render() {
        const { showEditor, selectedProduct } = this.state;        

        return (
           <div className="m-2">            
            { showEditor ? 
                <div>
                    <ProductEditor
                        key={selectedProduct.id || -1 }
                        product={selectedProduct}
                        saveCallback={this.saveProduct}
                        cancelCallback={this.cancelEditing}
                />
                </div>
                    :
                <React.Fragment>
                    <ProductTable
                        products={this.props.products}
                        editCallback={this.startEditing}
                        deleteCallback={this.props.deleteCallback}
                    />
                    <div className="text-center">
                        <button className="btn btn-primary m-1" onClick={this.createProduct}>
                            Create Product
                        </button>
                    </div>
                </React.Fragment>                 
                }
            </div>      
        )
    }
}

ProductDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    saveCallback: PropTypes.func.isRequired,
    deleteCallback: PropTypes.func.isRequired,
}