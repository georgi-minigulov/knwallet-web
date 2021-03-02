import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            login: '',
            name: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.gotoBack = this.gotoBack.bind(this)
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {login: this.state.login, name: this.state.name};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }
	
    gotoBack = (e) => {
		this.props.history.push('/users');
	}

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
					<div className="form-group">
						<label>Login:</label>
						<input type="text" placeholder="" name="login" className="form-control" value={this.state.login} onChange={this.onChange}/>
					</div>

					<div className="form-group">
						<label>Name:</label>
						<input type="text" placeholder="" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
					</div>

					<button className="btn btn-success" onClick={this.saveUser}>Save</button>
					<button className="btn btn-success" onClick={this.gotoBack}>Returm</button>
				</form>
			</div>
        );
    }
}

export default AddUserComponent;