<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign In </small>
                            </div>
                        </template>
                        <template>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            v-model="email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" @click.prevent="doLogin" class="my-4">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <!-- <small>Forgot password?</small> -->
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/register">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: `Login`,
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        ...mapActions(['login']),
        doLogin(){
            if(this.email === ''){
                swal({
                    title: "Notice",
                    text: "Please Input email Incorrect",
                    icon: "error",
                });
            }
            let data = {
                email: this.email,
                password: this.password
            }
            this.login(data)
        }
        
    },
};
</script>
<style>
</style>
