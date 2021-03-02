import axios from 'axios';

const USER_USERS_URL = 'http://localhost:8080/users';
const USER_GET_USER_URL = 'http://localhost:8080/user';
const USER_ADD_USER_URL = 'http://localhost:8080/user/add';
const USER_WALLETS_URL = 'http://localhost:8080/wallets';
const USER_ADD_WALLET_URL = 'http://localhost:8080/wallet/add';
const USER_ADD_TO_WALLET_URL = 'http://localhost:8080/money/add';
const USER_REMOVE_FROM_WALLET_URL = 'http://localhost:8080/money/remove';

class ApiService {
	fetchUsers() {
        return axios.get(USER_USERS_URL);
    }
	
    fetchUserById(userId) {
        return axios.get(USER_USERS_URL + '?user_id=' + userId);
    }
	
	addUser(user) {
        return axios.post(USER_ADD_USER_URL, user);
    }
	
	fetchWallets(userId){
        return axios.get(USER_WALLETS_URL + '?user_id=' + userId);
	}

	addWallet(wallet) {
        return axios.post(USER_ADD_WALLET_URL, wallet);
    }

	addToWallet(wallet) {
        return axios.post(USER_ADD_TO_WALLET_URL, wallet);
    }

	removeFromWallet(wallet) {
        return axios.post(USER_REMOVE_FROM_WALLET_URL, wallet);
    }
}

export default new ApiService();