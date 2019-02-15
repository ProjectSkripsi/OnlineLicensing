<template>
<section class="section section-components mt-5" id="admin">
    <div class="container">
        <div id="alert"></div>
        <h3 class="h4 text-success font-weight-bold mb-4 mt--90">Admin Dashboard</h3>
        <div class="row justify-content-center">
            <div class="col-lg">
                <!-- Tabs with icons -->
                <div class="mb">
                    <small class="text-uppercase font-weight-bold"></small>
                </div>
                <tabs fill class="flex-column flex-md-row">
                    <card shadow slot-scope="{activeTabIndex}">
                        <tab-pane key="tab1">
                            <template slot="title">
                                <i class="fa fa-home" aria-hidden="true"></i> Dashboard
                            </template>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-12">
                                            <div class="row row-grid">
                                                <div class="col-lg-4">
                                                    <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                        <img src="img/icons/icon-izin-baru.png" height="80px">
                                                        <h6>Izin Baru</h6>
                                                        <p class="description mt-3">{{ allNewReq.length }}</p>
                                                    </card>
                                                </div>
                                                <div class="col-lg-4">
                                                    <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                        <img src="img/icons/izin-dalam-proses.png" height="80px">
                                                        <h6>Izin dalam proses</h6>
                                                        <p class="description mt-3"> {{ allProcces.length }}</p>
                                                    </card>
                                                </div>
                                                <div class="col-lg-4">
                                                    <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                        <img src="img/icons/icon-izin-perbaikan.png" height="80px">
                                                        <h6>Izin Butuh Perbaikan</h6>
                                                        <p class="description mt-3"> {{ allIncorrects.length }} </p>
                                                    </card>
                                                </div>
                                                <div class="col-lg-4 mt-5">
                                                    <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                        <img src="img/icons/icon-izin-selesai.png" height="80px">
                                                        <h6>Izin Selesai</h6>
                                                        <p class="description mt-3">{{ allDoneRequest.length }} </p>
                                                    </card>
                                                </div>
                                                <div class="col-lg-4 mt-5">
                                                    <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                        <img src="img/icons/total-pengguna-icon.png" height="80px">
                                                        <h6>Total Pengguna</h6>
                                                        <p class="description mt-3">{{ allUser.length }} </p>
                                                    </card>
                                                </div>
                                                <div class="col-lg-4 mt-5">
                                                    <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                        <img src="img/icons/icon-izin-perusahaan.png" height="80px">
                                                        <h6>Total Perusahaan</h6>
                                                        <p class="description mt-3">{{ allRequest.length }} </p>
                                                    </card>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </tab-pane>
                        <tab-pane key="tab2">
                            <template slot="title">
                                <i class="fa fa-home" aria-hidden="true"></i> Daftar Permohonan Baru
                            </template>
                                <table border="1px">
                                    <thead>
                                        <tr>
                                            <th>
                                                Nama Perusahaan
                                            </th>
                                            <th>Pemohon</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="request in allRequest" :key="request._id">
                                            <td>{{request.companyName}}</td>
                                            <td>{{request.nameApplication}}</td>
                                            <td>{{request.statusApplication}}</td>
                                            <td>{{request.gender}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </tab-pane>
                    </card>
                </tabs>
            </div>
        </div>
    </div>
</section>
				
</template>

<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import {mapActions, mapState} from 'vuex'

export default {
    name: 'admin',
    components: {
        Tabs, TabPane
    },
    data() {
        return {
            currentPage: 1,
            elementsPerPage: 3,
            ascending: false,
            sortColumn: '',
            columns: ['Nama Perusahaan', 'Pemohon', 'Status', 'Tindakan']
        }
    },
    methods: {
        
    },


    computed: {
        ...mapState(['allUser', 'allProcces', 'allDoneRequest', 'allRequest', 'allNewReq', 'allIncorrects' ]),
        
    },

    mounted() {
        this.$store.dispatch('getAllUser')
        this.$store.dispatch('allOnProcces')
        this.$store.dispatch('getAllDone')
        this.$store.dispatch('getAllRequest')
        this.$store.dispatch('allNewRequest')
        this.$store.dispatch('allIncorrect')
    },
}
</script>

<style>



</style>



