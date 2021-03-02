import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUsersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.addUser = this.addUser.bind(this);
        this.reloadUsers = this.reloadUsers.bind(this);
    }
	
    componentDidMount() {
        this.reloadUsers();
    }

    reloadUsers() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }
	
	gotoWallets(userId) {
		window.localStorage.setItem("userId", userId);
        this.props.history.push('/wallets');
	}		
	
    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" onClick={() => this.addUser()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>login</th>
                            <th>name</th>
                            <th>created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map( user =>
                                    <tr key={user.id}>
                                        <td>{user.login}</td>
                                        <td>{user.name}</td>
                                        <td>{user.created}</td>
										<td><button className="btn btn-success" onClick={() => this.gotoWallets(user.id)}>Wallets</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListUsersComponent;