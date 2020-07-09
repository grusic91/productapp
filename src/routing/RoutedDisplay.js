import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { EditorConnector } from '../store/EditorConnector';
import { PRODUCTS } from '../store/dataTypes';
import { ProductEditor } from '../components/product/ProductEditor';
import { SupplierEditor } from '../components/supplier/SupplierEditor';
import { TableConnector } from '../store/TableConnector';
import { ProductTable } from '../components/product/ProductTable';
import { SupplierTable } from '../components/supplier/SupplierTable';


export const RoutedDisplay = (dataType) => {
    const ConnectedEditor = EditorConnector(dataType, dataType === PRODUCTS ? ProductEditor: SupplierEditor);
    const ConnectedTable =  TableConnector(dataType, dataType === PRODUCTS ? ProductTable : SupplierTable);

    return class extends Component {
        render() {
            const modeParam = this.props.match.params.mode;
            if(modeParam === "edit" || modeParam === "create") {
                return <ConnectedEditor key={this.props.match.params.id ||-1} />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <Link to={`/${dataType}/create`} className="btn btn-primary m-1">Create</Link>
                    </div>
                </div>
            }
        }
    }
}