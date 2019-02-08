<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { FadeTransition } from "vue2-transitions";

export default {
    components: {
        FadeTransition
    },
    computed: {
        ...mapState(['user', 'token']),
		isLoggedIn : function(){
			return this.$store.getters.isLoggedIn
		}
	},
	methods: {
		cekLogin() {
            let token = localStorage.getItem('token')
            if(!token) {
                this.$router.push('/')
            } 
        },
	},
	mounted() {
        this.cekLogin()
    },
    created: function () {
		this.$http.interceptors.response.use(undefined, function (err) {
			return new Promise(function (resolve, reject) {
			if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
				this.$store.dispatch(logout)
			}
			throw err;
			});
        });
        this.$store.dispatch('cekLogin')
    }
};
</script>
