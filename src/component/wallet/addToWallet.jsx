import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddToWallet extends Component{
		constructor(props){
        super(props);
        this.state ={
            sum: '',
        }
        this.doAdd = this.doAdd.bind(this);
        this.gotoBack = this.gotoBack.bind(this)
	}

	doAdd = (e) => {
        e.preventDefault();
        let wallet = {userId: window.localStorage.getItem("userId"), walletId: window.localStorage.getItem("walletId"), sum: this.state.sum};
        ApiService.addToWallet(wallet)
            .then(res => {
                this.setState({message : 'money added successfully.'});
                this.gotoBack();
            });
    }
 
    gotoBack = (e) => {
		this.props.history.push('/wallets');
	}

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	
    render() {
        return(
            <div>
                <h2 className="text-center">Add sum to wallet with code {window.localStorage.getItem("currencyCode")} </h2>
                <form>
					<div className="form-group">
						<label>Sum:</label>
						<input type="text" placeholder="10" name="sum" className="form-control" value={this.state.sum} onChange={this.onChange}/>
					</div>
					<button className="btn btn-success" onClick={this.doAdd}>Save</button>
					<button className="btn btn-success" onClick={this.gotoBack}>Returm</button>
				</form>
			</div>
        );
    }
}

export default AddToWallet;
