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
                                <small>Sign Up</small>
                            </div>
                            
                        </template>
                        <template>
                            
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            v-model="name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            v-model="email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <!-- <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" @click="doSignUp" class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small></small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/confirmation">
                            <a href="#" class="text-light">
                                <small>Confirmation</small>
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
import swal from 'sweetalert';
import axios from 'axios'
const baseUrl = `http://localhost:3000`
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

    methods: {
        // ...mapActions(['signup']),
        doSignUp(){
            if(this.password === ''){
                swal({
                    title: "Notice",
                    text: "Please input data incorrect",
                    icon: "error",
                });
            }else {
                axios({
                    url: baseUrl+ `/api/users/signup`,
                    method: 'POST',
                    data:{
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                })
                .then(response =>{
                    swal("Good job!",response.data, "success");
                    this.$router.push('/confirmation')
                })
                .catch( err  => { 
                    // let error = err.response.data.message
                    if(err.response.status === 400){
                        swal({
                            title: "Notice",
                            text: 'email already registered!',
                            icon: "error",
                        });
                    } else if (err.response.status === 500) {
                        swal({
                            title: "Notice",
                            text: `Please input name & password incorrect`,
                            icon: "error",
                        });
                    }
                })
                
            }
        }

        
    },
};
</script>
<style>
</style>
