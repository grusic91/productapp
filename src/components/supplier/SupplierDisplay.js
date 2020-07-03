import React from 'react';
import PropTypes from 'prop-types';
import { SupplierEditor } from './SupplierEditor';
import { SupplierTable } from './SupplierTable';

export class SupplierDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showEditor: false,
            selected: null
        }
    }

    startEditing = supplier => {
        this.setState({
            showEditor: true,
            selected: supplier
        })
    }

    createSupplier = () => {
        this.setState({
            showEditor: true,
            selected: {}
        })
    }

    cancelEditing = () => {
        this.setState({
            showEditor: false,
            selected: null
        })
    }

    saveSupplier = supplier => {
        this.props.saveCallback(supplier);
        this.setState({
            showEditor: false,
            selected: null
        });
    }

    render() {
        const { showEditor, selected } = this.state;

        return (
            <div className="m-2">
            { showEditor ? 
                <div>
                    <SupplierEditor
                        key={selected.id || -1 }
                        supplier={selected}
                        saveCallback={this.saveSupplier}
                        cancelEditing={this.cancelEditing}
                    />
                </div>
                    :
                <React.Fragment>
                    <SupplierTable
                        suppliers={this.props.suppliers}
                        editCallback={this.startEditing}
                        deleteCallback={this.props.deleteCallback}
                    />
                    <div className="text-center">
                        <button className="btn btn-primary m-1" onClick={this.createSupplier}>
                            Create Supplier
                        </button>
                    </div>
                </React.Fragment>
            }
            </div>
        )
    }
}


SupplierDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    suppliers: PropTypes.array.isRequired,
    saveCallback: PropTypes.func.isRequired,
    deleteCallback: PropTypes.func.isRequired,
}