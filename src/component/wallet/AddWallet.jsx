import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ApiService from "../../service/ApiService";
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css'

class AddWallet extends Component{
	constructor(props){
        super(props);
        this.state ={
            currencyCode: '',
        }
        this.saveWallet = this.saveWallet.bind(this);
        this.gotoBack = this.gotoBack.bind(this)
	}
	
	saveWallet = (e) => {
        e.preventDefault();
        let wallet = {userId: window.localStorage.getItem("userId"), currencyCode: this.state.currencyCode};
        ApiService.addWallet(wallet)
            .then(res => {
                this.setState({message : 'Wallet added successfully.'});
                this.gotoBack();
            });
    }

    gotoBack = (e) => {
		this.props.history.push('/wallets');
	}
	
    onChange = (e) => this.setState({ [e.name]: e.value });

	render() {
		const currencies = ["USD", "EUR", "CNY", "RUB", "GBP"];
        return(
            <div>
                <h2 className="text-center">Add Wallet</h2>
                <form>
					<div className="form-group">
						<label>Currency:</label>
						<DropdownList
							defaultValue={currencies[0]} data={currencies} 
							valueField='currencyCode' textField='currencyCode'
							onChange={(value) => {this.setState({ currencyCode: value });}}
						/>
					</div>

					<button className="btn btn-success" onClick={this.saveWallet}>Save</button>
					<button className="btn btn-success" onClick={this.gotoBack}>Returm</button>
				</form>
			</div>
        );
    }
}
export default AddWallet;