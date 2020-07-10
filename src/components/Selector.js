import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect,
 } from 'react-router-dom';
import { ToggleLink } from '../routing/ToggleLink';
import { RoutedDisplay } from '../routing/RoutedDisplay';
import { IsolatedTable } from '../IsolatedTable';
import { IsolatedEditor } from '../IsolatedEditor';
import { RequestError } from '../webservice/RequestError';

//const RouteInfoHOC = withRouter(RouteInfo)

export class Selector extends React.Component {

  customGetUserConfirmation = (message, navCallback) => {
    this.setState({
      showPrompt: true,
      message: message,
      callback: (allow) => {
        navCallback(allow);
        this.setState({ showPrompt: false})}
    });
  }

  //renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>
  render() {
    const routes = React.Children.map(this.props.children, child => ({
      component: child,
      name: child.props.name,
      url: `/${child.props.name.toLowerCase()}`,
      datatype: child.props.datatype
    }));

  return (
    <Router getUserConfirmation={this.customGetUserConfirmation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <ToggleLink to="/isolated">Isolated Data</ToggleLink>
          {
            routes.map(r => <ToggleLink key={r.url} to={r.url}>{r.name}</ToggleLink>)
          }
          </div>
          <div className="col">    
            <Switch>
            <Route path="/isolated" component={IsolatedTable} exact={true} />
            <Route path="/isolated/:mode/:id?" component={IsolatedEditor} />
            <Route paht="/error/:message" component={ RequestError } /> 
            {
              routes.map( r => <Route 
                key={r.url} 
                path={`/:datatype(${r.datatype})/:model?/:id?`} 
                component={RoutedDisplay(r.datatype)} 
                />
              )
            }
             <Redirect to={routes[0].url} />
            </Switch>            
          </div>
        </div>
      </div>
    </Router>
  )}
}