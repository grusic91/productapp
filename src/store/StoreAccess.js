import React from 'react';
import { resetStore } from "./customReducerEnhencer";

export class StoreAccess extends React.Component {
    constructor(props){
        super(props);
        this.selectors = {
            product: (storeState) => storeState.modelData.products[0],
            state: (storeState) => storeState.stateData.stateData
        }
        this.state = this.selectData();
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        this.unsubscriber = this.props.store.subscribe(() => this.handleDataStoreChange());
    }

    componentWillUnmount() {
        this.unsubscriber();
    }

    selectData() {
        let storeState = this.props.store.getState();
        return Object.entries(this.selectors)
        .map(([k, v]) => {
            return [k, v(storeState)]
        })
        .reduce((result, [k, v]) => ({ ...result, [k]: v}), {});
    }

    handleDataStoreChange() {
        let newData = this.selectData();
        Object.keys(this.selectors)
        .filter(key => this.state[key] !== newData[key])
        .forEach(key => this.setState({[key]: newData[key]}));
    }

    dispatchAction = () => {
        this.buttonRef.current.disabled = true;

        this.props.store.dispatchAsync(resetStore())
            .then(data => this.buttonRef.current.disabled = false);
    }

    render() {
              
        return (
            <React.Fragment>
                <div className="text-center">
                    <button 
                        className="btn btn-primary m-1" 
                        ref={this.buttonRef}
                        onClick={this.dispatchAction}
                    >
                        Dispatch Action
                    </button>
                </div>
                <div className="bg-info">
                    <pre className="text-white">
                        {
                            JSON.stringify(this.state, null, 2)
                        }
                    </pre>
                </div>
            </React.Fragment>            
        )
    }
}