import React from 'react';

export class SupplierTableRow extends React.Component {
    render(){
        let s = this.props.supplier;
        return <tr>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.city}</td>
            <td>{s.products.join(", ")}</td>
            <td>
                <button 
                    className="btn btn-sm btn-warning m-1" 
                    onClick={() => this.props.editCallback(s)}
                >
                    Edit
                </button>
                <button 
                    className="btn btn-sm btn-danger m-1" 
                    onClick={() => this.props.deleteCallback(s)}
                >
                    Delete
                </button>
            </td>
        </tr>
    }
}