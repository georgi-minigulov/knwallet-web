import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListWallets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wallets: [],
            message: null
        }
        this.gotoBack = this.gotoBack.bind(this)
    }
	
	componentDidMount() {
        this.reloadWallets();
    }

    reloadWallets() {
        ApiService.fetchWallets(window.localStorage.getItem("userId"))
            .then((res) => {
                this.setState({wallets: res.data})
            });
    }
    addWallet() {
		window.localStorage.setItem("userId", window.localStorage.getItem("userId"));
        this.props.history.push('/add-wallet');
    }

    addToWallet(walletId, currencyCode) {
		window.localStorage.setItem("walletId", walletId);
		window.localStorage.setItem("currencyCode", currencyCode);
        this.props.history.push('/add-sum');
    }
	
    removeFromWallet(walletId, currencyCode) {
		window.localStorage.setItem("walletId", walletId);
		window.localStorage.setItem("currencyCode", currencyCode);
        this.props.history.push('/remove-sum');
    }
	
	gotoBack = (e) => {
		this.props.history.push('/users');
	}

    render() {
        return (
            <div>
                <h2 className="text-center">Wallets</h2>
                <button className="btn btn-danger" onClick={() => this.addWallet()}> Add Wallet</button>
                <button className="btn btn-danger" onClick={() => this.gotoBack()}> Return to users</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>balance</th>
                            <th>currency</th>
                            <th>created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.wallets.map( wallet =>
                                    <tr key={wallet.id}>
                                        <td>{wallet.balance}</td>
                                        <td>{wallet.currency}</td>
                                        <td>{wallet.created}</td>
										<td><button className="btn btn-success" onClick={() => this.addToWallet(wallet.id, wallet.currency)}>+</button></td>
										<td><button className="btn btn-success" onClick={() => this.removeFromWallet(wallet.id, wallet.currency)}>-</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListWallets;