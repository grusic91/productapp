import React, {Component } from 'react';
import { RestDataSource } from './webservice/RestDatatSource';
import { ProductEditor } from './components/product/ProductEditor';

export class IsolatedEditor extends Component {
    constructor(props){
        super(props);
        this.state= {
            dataItem: {}
        }
        this.dataSource = this.props.dataSource ||
        new RestDataSource("htpp://localhost:3500/api/products");
    }

    save = data => {
        const callback = () => {
            return this.props.history.push("/isolated");
        }

        if(data.id === "") {
            this.dataSource.Store(data, callback);
        } else {
            this.dataSource.Update(data, callback);
        }
    }

    cancel = () => {
        return this.props.history.push("/isolated");
    }

    render() {
        return <ProductEditor 
            key={this.state.dataItem.id} 
            product={this.state.dataItem}
            saveCallback={this.save}
            cancelCallback={this.cancel} />
    }

    componentDidMount() {
        if(this.props.match.params.mode === "edit") {
            this.dataSource.GetOne(
                this.props.match.params.id, 
                data => this.setState({dataItem: data}));
        }
    }
}