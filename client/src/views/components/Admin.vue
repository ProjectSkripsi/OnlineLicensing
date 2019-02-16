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
                            <div id="tabel" v-cloak>
                                <v-client-table :columns="columns" :data="allRequest" :options="options">
                                    <!-- <router-link  slot="Tindakan" slot-scope="props" target="_blank" :to="{ name: 'letter', params: { id: props.row._id }}"> <i class="fa fa-eye" aria-hidden="true"></i></router-link> -->
                                    <a slot="Tindakan" slot-scope="props" @click.prevent="view(props.row)"  data-toggle="modal" data-target=".bd-example-modal-lg" href="" class="fa fa-eye"></a>
                                    <div slot="child_row" slot-scope="props">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <h5>Kelengkapan Aplikasi {{ props.row.companyName }}</h5>
                                            </div>
                                            <div class="col-md-5 text-right">
                                               <base-button tag="a"
                                                    href="#"
                                                    @click.prevent=""
                                                    class="mb-3 mb-sm-0"
                                                    type="success"
                                                >
                                                Proses
                                                </base-button>
                                                <base-button tag="a"
                                                    href="#"
                                                    @click.prevent=""
                                                    class="mb-3 mb-sm-0"
                                                    type="warning"
                                                >
                                                Perbaikan
                                                </base-button>
                                                <base-button tag="a"
                                                    href="#"
                                                    @click.prevent=""
                                                    class="mb-3 mb-sm-0"
                                                    type="danger"
                                                >
                                                Tolak
                                                </base-button>
                                            </div>
                                        </div>
                                        <tabs fill class="flex-column flex-md-row">
                                            <card shadow slot-scope="{activeTabIndex}">
                                                <tab-pane key="tab9">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-home" aria-hidden="true"></i>  KTP</small>
                                                    </template>
                                                        <img :src="props.row.ktp" class="img-fluid center" alt="KTP">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab8">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-home" aria-hidden="true"></i> NPWP</small>
                                                    </template>
                                                        <img :src="props.row.npwp" class="img-fluid center" alt="NPWP">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab7">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-home" aria-hidden="true"></i> Akta</small>
                                                    </template>
                                                        <img :src="props.row.akta" class="img-fluid center">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab6">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-home" aria-hidden="true"></i> SPKBU</small>
                                                    </template>
                                                        <img :src="props.row.spkbu" class="img-fluid center">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab5">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-home" aria-hidden="true"></i> Penyataan SIUP</small>
                                                    </template>
                                                        <img :src="props.row.siup" class="img-fluid center">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab4">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-home" aria-hidden="true"></i> Pas Foto</small>
                                                    </template>
                                                        <img :src="props.row.foto" class="img-fluid center">
                                                        
                                                </tab-pane>
                                            </card>
                                        </tabs>
                                    </div>
                                </v-client-table>
                                
                            </div>
                        </tab-pane>
                    </card>
                </tabs>
            </div>
        </div>

        <!-- format surat -->
        <section class="panel">
            <div class="panel-body">
                <div class="invoice">
                    <header class="clearfix">
                        <div class="row">
                            <div class="col-sm-2 mt-md">
                                <div class="ib ml-5">
                                    <img src="img/brand/pemkot.png" height="150px" alt="pemkotMKS" />
                                </div>
                            </div>
                            <div class="col-sm-9 mt-md text-center ml-3">
                                <h5>PEMERINTAH KOTA MAKASSAR</h5>
                                <h3> KANTOR DINAS PERINDUSTRIAN PERDAGANGAN DAN PENANAMAN MODAL</h3>
                                
                                <h6> Jalan Rappocini Raya Nomor 219 Telepon 0411 - 453325</h6>
                
                                <h5>MAKASSAR</h5>                                
                            </div>
                        </div>
                    </header>
                    <div class="bill-info">
                        <div class="row">
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <div class="bill-data text-right">
                                    <p class="mb-none">
                                        <span class="text-dark">Kode Pos 90222</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr size="20" class="mt-0">
                    <div class="row">
                        <div class="col-md-10">
                            Nomor Seri : 08 / 00476 / 2019
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h6>SURAT IZIN WALIKOTA MAKASSAR</h6>
                            Nomor : 503/0345/SIUPM-P/13/KPAP
                            <h6>TENTANG</h6>
                            <h6>SURAT IZIN USAHA PERDAGANGAN MENEGAH<br>
                                WALIKOTA MAKASSAR
                            </h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            Dasar :
                        </div>
                        <div class="col-md-10">
                            <ol>
                                <li>Peraturan Daerah Kota Makassar Nomor 11 Tahun 2014 tentang Pengaturan dan Pemungutan Retribusi Usaha
                                    di bidang Perindustrian dan Perdangangan Kota Makassar (Lembaran Daerah Kota Makassar Nomor 25 Tahun 2004, 
                                    Seri C Nomor 8)
                                </li>
                                <li>Rekomendasi dari Dinas Perindustrian Perdagangan dan Penanaman Modal Nomor <b> 0420/Peridagdal/SIUP/V/2013</b>
                                    Tanggal <b>21-04-2013</b>
                                </li>
                                <li>Surat Permohonan <b> NG SWI PIU </b> Tanggal <b>20-05-2013</b>
                                </li>
                            </ol>

                        </div>
                    </div>
                
                    
                </div>

                <!-- <div class="text-right mr-lg">
                    <a href="#" class="btn btn-default">Submit Invoice</a>
                    <a href="pages-invoice-print.html" target="_blank" class="btn btn-primary ml-sm"><i class="fa fa-print"></i> Print</a>
                </div> -->
            </div>
        </section>

        <!-- Modal View -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> -->

        <modal :show.sync="modals.modal1">
            <h6 slot="header" class="modal-title" id="modal-title-default">Data Permohonan {{ this.viewData.companyName }}</h6>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th>Nama Pemohon</th>
                            <td> {{ this.viewData.nameApplication }}</td>
                        </tr>
                        <tr>
                            <th>Alamat Lengkap</th>
                            <td>{{ this.viewData.addressApplication }} </td>
                        </tr>
                        <tr>
                            <th>Tempat Lahir</th>
                            <td> {{ this.viewData.birthPlace }} </td>
                        </tr>
                        <tr>
                            <th>Tanggal Lahir</th>
                            <td> {{ (this.viewData.birthDate) }} </td>
                        </tr>
                        <tr>
                            <th>No.KTP/Passport</th>
                            <td> {{ this.viewData.identityNumber }} </td>
                        </tr>
                    </tbody>
                </table>
            

            <template slot="footer">
                <base-button type="primary">Save changes</base-button>
                <!-- <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close -->
                <!-- </base-button> -->
            </template>
        </modal>

    </div>
</section>
				
</template>

<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import {mapActions, mapState} from 'vuex'
import moment from 'moment'
import Modal from "@/components/Modal.vue";

export default {
    name: 'admin',
    components: {
        Tabs, TabPane, Modal
    },
    methods: {
        formatDate(date) {
            return moment(date).format('DD-MM-YYYY HH:mm:ss');
        },
        view(data){
            this.viewData = data
            this.modals.modal1 = true
            console.log(`iniii`,this.viewData);
            
        },
        // fromDB(tgl) {
        //     let yyyy = tgl.substring(0, 4)
        //     let MM = tgl.substring(5, 7)
        //     let dd = tgl.substring(8, 10)
        //     let hh = tgl.substring(11, 13)
        //     let mm = tgl.substring(14, 16)
        //     return yyyy+'-'+MM+'-'+dd+'T'+hh+':'+mm
        // }

    },
    data() {
        return {
            viewData: [],
            modals: {
                modal1: false
            },
            currentPage: 1,
            elementsPerPage: 3,
            ascending: false,
            sortColumn: '',
            columns: ['companyName', 'nameApplication', 'createdAt','statusApplication', 'Tindakan'],
            options: {
                headings: {
                    companyName: 'Nama Perusahaan',
                    nameApplication: 'Pemohon',
                    statusApplication: 'Status',
                    createdAt: 'Tanggal Pengajuan',
                    _id: '_id',
                },
                requestAdapter(data) {
                    return {
                        sort: data.orderBy ? data.orderBy : 'companyName',
                        direction: data.ascending ? 'asc' : 'desc'
                    }
                },
                templates: {
                    // createdAt: function(row) {
                    //     return moment(row.createdAt).format('DD-MM-YYYY');
                    // },
                },
                uniqueKey: '_id',
                perPage:5,
                perPageValues:[5],
                sortable: ['companyName', 'statusApplication', 'createdAt', 'nameApplication'],
                filterable: ['nameApplication', 'companyName', 'statusApplication',]
            }
        }
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

.VuePagination {
  text-align: center;
  font-size: 12px;
}

.vue-pagination-ad {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.card-body {
    font-size: 12px;
}
.form-control {
    font-size: 12px;
}

.col-md-12 {
    font-size: 12px;
}


th:nth-child(5) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
.img-fluid{
    max-width: 100%; 
    height: auto;
}



.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

[v-cloak] {
  display:none;
}











</style>



