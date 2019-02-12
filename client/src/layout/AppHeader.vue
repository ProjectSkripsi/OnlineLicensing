<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="/">
                <img src="img/brand/white.png">
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                
                <li class="nav-item" v-show="!isLoggedIn">
                    <router-link to="/login"><base-button tag="a"
                                href="#"
                                class="mb-3 mb-sm-0"
                                type="info"
                                icon="fa fa-sign-in">
                        Login
                    </base-button></router-link>
                </li>
                <li class="nav-item" v-show="!isLoggedIn">
                    <router-link to="/register"><base-button tag="a"
                                href="#"
                                class="mb-3 mb-sm-0"
                                type="info"
                                icon="fa fa-user-plus">
                        Register
                    </base-button></router-link>
                </li>
            </ul>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center" v-show="isLoggedIn">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">{{ user.name }}</span>
                    </a>
                    <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link @click="doLogout" to="/"  class="dropdown-item">Logout</router-link>
                    <router-link to="/"><base-button tag="a"
                                href="#"
                                @click="doLogout"
                                class="mb-3 mb-sm-0"
                                type="info"
                               >
                        logout
                    </base-button></router-link>
                </base-dropdown>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import {mapActions, mapState} from 'vuex'
export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown
    },
    methods: {
        doLogout: function(){
            localStorage.removeItem('token')
            this.$store.dispatch('logout')
            .then(()=>{
                this.$router.push('/')
            })
        },
    },

    computed: {
        ...mapState(['user', 'token']),
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        }
    }


};
</script>
<style>
</style>
