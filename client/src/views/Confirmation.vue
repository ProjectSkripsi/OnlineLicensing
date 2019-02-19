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
                                <small>Confirmation For Activation Account </small>
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
                                            class="mb-3"
                                            v-model="token"
                                            placeholder="Confirmation Code"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" @click="doConfirm" class="my-4">Confirm</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import axios from 'axios'
// const baseUrl = `http://localhost:3000`
const baseUrl = `http://35.185.183.4`
export default {
    name: `Login`,
    data() {
        return {
            email: '',
            token: '',
        }
    },

    methods: {
        doConfirm(){
            if(this.email === '' || this.token === ''){
                swal({
                    title: "Notice",
                    text: "Please Input email Incorrect",
                    icon: "error",
                });
            } else {
                axios({
                    url: baseUrl+ `/api/users/confirmation`,
                    method: 'POST',
                    data: {
                        token: this.token,
                        email: this.email
                    }
                })
                .then(response =>{
                    swal("Good job!", "Your account is confirmed! Please Login", "success");
                    this.$router.push('/login')
                })
            } 
        }
        
    },
};
</script>
<style>
</style>
