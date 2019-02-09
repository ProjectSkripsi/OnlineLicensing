import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
import Notify from 'vue-notify-me'
import router from 'vue-router'
const baseUrl = `http://localhost:3000`


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
		status: '',
		token: localStorage.getItem('token') || '',
		myRequest: [],
		myNewRequest: [],
		myOnProcces: [],

    },

    mutations: {
		auth_request(state){
			state.status = 'loading'
		},
        auth_success(state, token){
			state.status = 'success'
			state.token = token
		},
		auth_error(state){
	    	state.status = 'error'
		},
		logout(state){
	    	state.status = ''
	    	state.token = ''
		},
		auth_user(state, user){
			state.user = user
		},
		auth_request(state, request){
			state.myRequest = request
		},
		new_request(state, newrequest){
			state.myNewRequest = newrequest
		},
		on_procces(state, onProc){
			state.myOnProcces = onProc
		}
    },

    actions: {
        login({commit}, user){
            console.log(`masuk`, user);
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
	            axios({
					url: baseUrl+ `/api/users/signin`, 
					method: 'POST',
					data: user
				})
	            .then(resp => {
					const token = resp.data.token
					const user = resp.data
					commit('auth_user', user)
					commit('auth_success', token)
	                localStorage.setItem('token', token)
	                axios.defaults.headers.common['Authorization'] = token
					resolve(resp)
					window.location = '/dashboard'
	            })
	            .catch(err => {
					if(err.response.status === 400){
						commit('auth_error')
						localStorage.removeItem('token')
						reject(err)
						swal({
							title: "Wrong Password",
							text: "Please Input password incorrect",
							icon: "error",
						});
					} else if (err.response.status === 500) {
						swal({
							title: "Notice",
							text: `Email Not Registered`,
							icon: "error",
						});
					} else if (err.response.status === 401) {
						swal({
							title: "Notice",
							text: `Your account has not been verified, Please check your email for activation`,
							icon: "error",
						});
					}
				
	            })
	        })
		},
		
		cekLogin({commit}){
			axios({
				url: baseUrl + `/api/users/getOne`,
				method: 'GET',
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response => {
				const user = response.data
				commit('auth_user', user)
			})
			.catch(err =>{
				commit('auth_user', '')
			})
		},

		logout({commit}){
			return new Promise((resolve, reject) => {
				commit('logout')
				localStorage.removeItem('token')
				delete axios.defaults.headers.common['Authorization']

				resolve()
		  	})
		},

		confirm({commit}, payload){
			console.log(payload);
			axios({
				url: baseUrl+ `/api/users/confirmation`,
				method: 'POST',
				data: {
					token: payload.token,
					email: payload.email
				}
			})
			.then(response =>{
				console.log(response);
				swal("Good job!", "Your account is confirmed", "success");
				this.$router.push('/login')
				
			})
		},

		myRequest({commit}, payload){
			axios({
				url: baseUrl + `/api/request/myRequest`,
				method: 'GET',
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response =>{
				let request = response.data
				commit('auth_request', request)
			})
			.catch(err =>{
				console.log(err);
			})
		},

		newRequest({commit}, payload){
			axios({
				url: baseUrl+ `/api/request/newRequest`,
				method: `GET`,
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response =>{
				let data = response.data
				commit('new_request', data)
			})
			.catch(err =>{
				console.log(err);
			})
		},

		onRequest({commit}, payload){
			axios({
				url: baseUrl + `/api/request/onRequest`,
				method: `GET`,
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response =>{
				let onProc = response.data
				commit(`on_procces`, onProc)
			})
			.catch(err =>{
				console.log(err);
			})
		}
	},
	getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}
})