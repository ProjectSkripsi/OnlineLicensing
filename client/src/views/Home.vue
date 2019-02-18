<template>
  <div>
      <header class="header-global mb-5">
        <base-nav class="navbar-main" transparent type="primary" effect="transparent" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="/">
                <img src="img/brand/white.png">
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <ul class="navbar-nav navbar-nav-hover ml-lg-auto" v-show="isLoggedIn">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">{{ user.name }}</span>
                    </a>
                    <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <a href="#"  @click.prevent="doLogout"><router-link to="/" class="dropdown-item">  Logout </router-link></a>
                </base-dropdown>
            </ul>
        </base-nav>
     </header>

    <router-view></router-view>

    <footer class="footer has-cards">
        <div class="container container-lg">
           
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h5 class="text-primary font-weight-light mb-2">Dinas Perindustrian Perdagangan dan Penanaman Modal</h5>
                    <a class="mb-0 font-weight-light">Jl. Rappocini Raya, Bua Kana<br/> Kec. Rappocini, Kota Makassar, <br/>Sulawesi Selatan 90222
                        <br/>(0411) 453325</a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2019
                        <a href="http://makassarkota.go.id/" target="_blank">Pemerintah Kota Makassar</a>.
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import BaseDropdown from "@/components/BaseDropdown";
export default {
    name: 'home',
    props: ['id'],
    components: {
        BaseNav, CloseButton, BaseDropdown
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
}
</script>