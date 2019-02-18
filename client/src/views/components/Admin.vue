<template>
<section class="section section-components mt-5" id="admin">
    <div class="container">
        <div id="alert"></div>
        <router-view></router-view>
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
                                <i class="fa fa-list-alt" aria-hidden="true"></i> Daftar Permohonan Baru
                            </template>
                            <div id="tabel" v-cloak>
                                <v-client-table :columns="columns" :data="allRequest" :options="options">
                                    <template slot="Tindakan" slot-scope="props">
                                        <a @click.prevent="view(props.row)" href="" class="fa fa-eye"></a> &nbsp; 
                                        <router-link :to="{ name: 'letter', params: { id: props.row._id }}"> <i class="fa fa-file-pdf-o"></i> </router-link>&nbsp;
                                        <a @click.prevent="print(props.row)" href="" class="fa fa-envelope-open-o"></a>
                                    </template>
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
                                                        <small class="text-uppercase"><i class="fa fa-id-card-o" aria-hidden="true"></i>&nbsp; KTP</small>
                                                    </template>
                                                        <img :src="props.row.ktp" class="img-fluid center" alt="KTP">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab8">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>&nbsp; NPWP</small>
                                                    </template>
                                                        <img :src="props.row.npwp" class="img-fluid center" alt="NPWP">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab7">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-gavel" aria-hidden="true"></i> &nbsp;Akta</small>
                                                    </template>
                                                        <img :src="props.row.akta" class="img-fluid center">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab6">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-file" aria-hidden="true"></i>&nbsp;SPKBU</small>
                                                    </template>
                                                        <img :src="props.row.spkbu" class="img-fluid center">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab5">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-file-text" aria-hidden="true"></i> &nbsp;Penyataan SIUP</small>
                                                    </template>
                                                        <img :src="props.row.siup" class="img-fluid center">
                                                        
                                                </tab-pane>
                                                <tab-pane key="tab4">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-file-image-o" aria-hidden="true"></i> &nbsp;Pas Foto</small>
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
        <modal :show.sync="modals.modal2">
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
                                    <li>Surat Permohonan <b> {{ printData.nameApplication }} </b> Tanggal <b> TANGGAL DI AJUKAN</b>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h6>M E N G I Z I N K A N</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                KEPADA 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                NAMA 
                            </div>
                            <div class="col-md-10">
                                : <b>{{ printData.nameApplication }}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                ALAMAT 
                            </div>
                            <div class="col-md-10">
                                : <b>{{ printData.addressApplication }}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                UNTUK 
                            </div>
                            <div class="col-md-10">
                                : Melakukan kegiatan Usaha Perdagangan dalam Kota Makassar dengan keterangan sebagai berikut:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                NAMA PERUSAHAAN  
                            </div>
                            <div class="col-md-6 pt-2">
                                : <b>{{ printData.companyName }}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                STATUS PERUSAHAAN  
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>PUSAT</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                ALAMAT PERUSAHAAN  
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b> {{ printData.companyAddress }} {{printData.city}} </b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                NPWP 
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>NPWP</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                GOLONGAN USAHA 
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>PERUSAHAAN MENENGAH</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                KEGIATAN USAHA 
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>{{ printData.mainBusiness }}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                KELEMBAGAAN 
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>{{ printData.institutional }}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                BARANG/JASA DAGANGAN UTAMA 
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>{{ printData.mainService }}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3 pt-2">
                                MASA BERLAKU
                            </div>
                            <div class="col-md-7 pt-2">
                                : <b>Masa berlaku</b>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-11">
                                Surat Izin Usaha Perdagangan ini berlaku selama jangka waktu 5 (lima) tahun dan diperpanjang setelah masa berlakunya berakhir.
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-4 pt-2">
                            </div>
                            <div class="col-md-6 pt-2">
                                Dikeluarkan di Makassar
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-4 pt-2">
                            </div>
                            <div class="col-md-6">
                                Pada Tanggal <b>tanggal submit</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-5 pt-2">
                                <img v-bind:src="printData.foto" height="120px" width="80px" alt="pasFoto" />
                            </div>
                            <div class="col-md-6 pt-2">
                                <b>WALIKOTA MAKASSAR</b><br>
                                <b>KANTOR DINAS PERINDUSTRIAN PERDAGANGAN DAN PENANAMAN MODAL</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-5 pt-2">
                            </div>
                            <div class="col-md-6 pt-2">
                                <b><u>NIELMA PALAMBA, SH,M.AP</u></b>
                            </div>
                        </div>
                        <div class="row mt-0">
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-5 pt-2">
                            </div>
                            <div class="col-md-6">
                                Pangkat &nbsp; :  &nbsp;  Pembinasa Tk.1 <br>
                                NIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp; 19651210 199112 2 001
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col-md-12">
                                Tembusan : <br>
                                    <li> Kepala Dinas Perindustrian Perdagangan dan Penanaman Modal Kota Makassar</li>
                                    <li> Camat yang bersangkutan</li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </modal>
        <!-- Modal View -->
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
                        <tr>
                            <th>Nama Perusahaan</th>
                            <td> {{ this.viewData.companyName }} </td>
                        </tr>
                        <tr>
                            <th>Alamat Perusahaan</th>
                            <td> {{ this.viewData.companyAddress }} </td>
                        </tr>
                        <tr>
                            <th>No.Telp/Fax</th>
                            <td> {{ this.viewData.companyContact }} </td>
                        </tr>
                        <tr>
                            <th>Provinsi</th>
                            <td> {{ this.viewData.province }} </td>
                        </tr>
                        <tr>
                            <th>Kabupaten/Kota/Kotamadya</th>
                            <td> {{ this.viewData.city }} </td>
                        </tr>
                        <tr>
                            <th>Kecamatan</th>
                            <td> {{ this.viewData.district }} </td>
                        </tr>
                        <tr>
                            <th>Kelurahan/Desa</th>
                            <td> {{ this.viewData.village }} </td>
                        </tr>
                        <tr>
                            <th>Kode Pos</th>
                            <td> {{ this.viewData.postalCode }} </td>
                        </tr>
                        <tr>
                            <th>No. Akta Pendirian</th>
                            <td> {{ this.viewData.noAktaPendirian }} </td>
                        </tr>
                        <tr>
                            <th>Tanggal Akta Pendirian</th>
                            <td> {{ this.viewData.dateAktaPendirian }} </td>
                        </tr>
                        <tr>
                            <th>Tanggal Akta Pengesahan Pendirian</th>
                            <td> {{ this.viewData.dateAktaPengesahan }} </td>
                        </tr>
                        <tr>
                            <th>No. Akta Perubahan</th>
                            <td> {{ this.viewData.noAktaPerubahan }} </td>
                        </tr>
                        <tr>
                            <th>Tanggal Akta Perubahan</th>
                            <td> {{ this.viewData.dateAktaPendirian }} </td>
                        </tr>
                        <tr>
                            <th>Tanggal Akta Pengesahan Perubahan</th>
                            <td> {{ this.viewData.dateAktaPengesahanR }} </td>
                        </tr>
                        <tr>
                            <th>Kelembagaan</th>
                            <td> {{ this.viewData.institutional }} </td>
                        </tr>
                        <tr>
                            <th>Kegiatan Usaha</th>
                            <td> {{ this.viewData.mainBusiness }} </td>
                        </tr>
                        <tr>
                            <th>Barang / Jasa Dagangan Utama:</th>
                            <td> {{ this.viewData.mainService }} </td>
                        </tr>
                    </tbody>
                </table>
            <template slot="footer">
                <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close</base-button>
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
import Letter from "@/components/Letter.vue"

export default {
    name: 'admin',
    components: {
        Tabs, TabPane, Modal, Letter
    },
    methods: {
        // formatDate(date) {
        //     return moment(date).format('DD-MM-YYYY HH:mm:ss');
        // },
        view(data){
            this.viewData = data
            this.modals.modal1 = true
        },
        print(data){
            this.printData = data
            this.modals.modal2 = true
            console.log(this.printData);
            
        },
        formatDate(tgl) {
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            var year = tgl.substring(0, 4)
            var monthIndex = tgl.substring(5, 6)
            var day = tgl.substring(8, 10)
            return day + '-' + monthNames[monthIndex] + '-' + year;
        },

    },
    data() {
        return {
            viewData: [],
            modals: {
                modal1: false,
                modal2: false
            },
            printData: [],
            currentPage: 1,
            elementsPerPage: 3,
            ascending: false,
            sortColumn: '',
            columns: ['companyName', 'nameApplication', 'createdAt','statusApplication', 'note' , 'Tindakan'],
            options: {
                headings: {
                    companyName: 'Nama Perusahaan',
                    nameApplication: 'Pemohon',
                    statusApplication: 'Status',
                    createdAt: 'Tanggal Pengajuan',
                    note: 'Note',
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
/* .form-control {
    font-size: 12px;
} */

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

.modal-body {
    font-size: 12px;
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

.panel-body {
    padding: 15px;
}











</style>



