import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUsersComponent from "./component/user/ListUsersComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import ListWallets from "./component/wallet/ListWallets";
import AddWallet from "./component/wallet/AddWallet";
import AddToWallet from "./component/wallet/addToWallet";
import RemoveFromWallet from "./component/wallet/removeFromWallet";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>UserWallet simplified interface</h1>
                  <Switch>
                      <Route path="/" exact component={ListUsersComponent} />
                      <Route path="/users" component={ListUsersComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/wallets" component={ListWallets} />
                      <Route path="/add-wallet" component={AddWallet} />
                      <Route path="/add-sum" component={AddToWallet} />
                      <Route path="/remove-sum" component={RemoveFromWallet} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'green',
    margin: '10px'
}

export default App;
