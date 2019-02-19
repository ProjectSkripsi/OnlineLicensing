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
                                    <template slot="Tindakan" slot-scope="props" class="text-center">
                                        <a @click.prevent="view(props.row)" href="" class="fa fa-eye"></a> &nbsp;
                                        <a @click.prevent="del(props.row._id)" href="" class="fa fa-trash-o"></a>&nbsp;
                                        <router-link v-show="props.row.statusApplication !== 'Di Tolak'" :to="{ name: 'letter', params: { id: props.row._id }}"> <i class="fa fa-file-pdf-o"></i> </router-link>&nbsp;
                                    </template>
                                    <div slot="child_row" slot-scope="props">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <h5>Kelengkapan Aplikasi {{ props.row.companyName }}</h5>
                                            </div>
                                            <div class="col-md-5 text-right" v-show="props.row.statusApplication !== 'Di Tolak'">
                                               <base-button tag="a"
                                                    href="#"
                                                    @click.prevent="toProcces(props.row)"
                                                    class="mb-3 mb-sm-0"
                                                    type="success" 
                                                    v-show="props.row.statusApplication !== 'Proses' && props.row.statusApplication !== 'Selesai'"
                                                >
                                                Proses
                                                </base-button>
                                                <base-button tag="a"
                                                    href="#"
                                                    @click.prevent="toRepair(props.row)"
                                                    class="mb-3 mb-sm-0"
                                                    type="warning"
                                                    v-show="props.row.statusApplication !== 'Proses' && props.row.statusApplication !== 'Selesai'"
                                                >
                                                Perbaikan
                                                </base-button>
                                                <base-button tag="a"
                                                    href="#"
                                                    @click.prevent="toDone(props.row)"
                                                    class="mb-3 mb-sm-0"
                                                    type="primary"
                                                    v-show="props.row.statusApplication === 'Proses'"
                                                >
                                                Selesai
                                                </base-button>
                                                <base-button tag="a"
                                                    href="#"
                                                    @click.prevent="toReject(props.row)"
                                                    class="mb-3 mb-sm-0"
                                                    type="danger"
                                                    v-show="props.row.statusApplication !== 'Proses' && props.row.statusApplication !== 'Selesai'"
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
                                                        <img :src="props.row.ktp" class="img-fluid center">
                                                        <img v-show="!props.row.ktp" src="/img/brand/noimage.png" class="center"> 
                                                </tab-pane>
                                                <tab-pane key="tab8">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>&nbsp; NPWP</small>
                                                    </template>
                                                        <img v-show="!props.row.npwp" src="/img/brand/noimage.png" class="center">
                                                        <img :src="props.row.npwp" class="img-fluid center">   
                                                </tab-pane>
                                                <tab-pane key="tab7">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-gavel" aria-hidden="true"></i> &nbsp;Akta</small>
                                                    </template>
                                                        <img :src="props.row.akta" class="img-fluid center">
                                                        <img v-show="!props.row.akta" src="/img/brand/noimage.png" class="center">
                                                </tab-pane>
                                                <tab-pane key="tab6">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-file" aria-hidden="true"></i>&nbsp;SPKBU</small>
                                                    </template>
                                                        <img :src="props.row.spkbu" class="img-fluid center">
                                                        <img v-show="!props.row.spkbu" src="/img/brand/noimage.png" class="center">
                                                </tab-pane>
                                                <tab-pane key="tab5">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-file-text" aria-hidden="true"></i> &nbsp;Penyataan SIUP</small>
                                                    </template>
                                                        <img :src="props.row.siup" class="img-fluid center">
                                                        <img v-show="!props.row.siup" src="/img/brand/noimage.png" class="center">
                                                </tab-pane>
                                                <tab-pane key="tab4">
                                                    <template slot="title">
                                                        <small class="text-uppercase"><i class="fa fa-file-image-o" aria-hidden="true"></i> &nbsp;Pas Foto</small>
                                                    </template>
                                                        <img :src="props.row.foto" class="img-fluid center">
                                                        <img v-show="!props.row.foto" src="/img/brand/noimage.png" class="center">
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

        <!-- Modal Done -->
        <modal :show.sync="modals.modal2"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm">
                <h6 slot="header" class="modal-title" id="modal-title-default">Data Permohonan {{ doneId.companyName }}</h6>
            <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                <template>
                    <div class="text-center text-muted mb-4">
                        <p class="ff">Silahkan masukkan No.Serial & No.Registrasi </p>
                    </div>
                    <form class="was-validated" role="form">
                        <base-input alternative
                                    class="mb-0"
                                    v-model="noSeri"
                                    placeholder="No.Serial"
                                    >
                        </base-input>
                        <div class="text-muted mb-3">
                            <small>Contoh: 08/0476 </small>
                        </div>
                        <base-input alternative
                                    class="mb-0"
                                    v-model="noReg"
                                    placeholder="No.Registrasi"
                                    >
                        </base-input>
                        <div class="text-muted mb-3">
                            <small>Contoh: 503/0345 </small>
                        </div>
                        <div class="mb-3">
                            <p class="ff">Note:</p>
                            <textarea class="form-control" v-model="note" placeholder="Silahkan masukkan note untuk memudahkan user memantau status permohonannya" rows="5"></textarea>
                        </div>
                    </form>
                        <div class="text-center">
                            <base-button type="primary" @click.prevent="doDone(doneId._id)" class="my-4">Proses</base-button>
                        </div>
                </template>
            </card>
        </modal>

        <!-- Modal Reject -->
        <modal :show.sync="modals.modal3"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm">
                <h6 slot="header" class="modal-title" id="modal-title-default">Data Permohonan {{ rejectId.companyName }}</h6>
            <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                <template>
                    <div class="text-center text-muted mb-4">
                        <p>Apakah anda yakin menolak pengajuan permohonan {{ rejectId.companyName }}</p>
                    </div>
                    <form class="was-validated" role="form">
                        <div class="mb-3 text-center">
                            <label for="validationTextarea">Note:</label>
                            <textarea class="form-control" v-model="note" placeholder="Silahkan masukkan alasan penolakan permohonan" rows="5"></textarea>
                        </div>
                    </form>
                        <div class="text-center">
                            <base-button type="primary" @click.prevent="reject(rejectId._id)" class="my-4">Tolak</base-button>
                        </div>
                </template>
            </card>
        </modal>

        <!-- Modal Procces -->
        <modal :show.sync="modals.modal4"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm">
                <h6 slot="header" class="modal-title" id="modal-title-default">Data Permohonan {{ proccesId.companyName }}</h6>
            <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                <template>
                    <div class="text-center text-muted mb-4">
                        <p class="ff">Apakah anda yakin melakukan proses dan verifikasi? </p>
                    </div>
                    <form class="was-validated" role="form">
                        <div class="mb-3">
                            <p class="ff">Note:</p>
                            <textarea class="form-control" v-model="note" placeholder="Silahkan masukkan note untuk memudahkan user memantau status permohonannya" rows="5"></textarea>
                        </div>
                    </form>
                        <div class="text-center">
                            <base-button type="primary" @click.prevent="doProcces(proccesId._id)" class="my-4">Proses</base-button>
                        </div>
                </template>
            </card>
        </modal>

        <!-- modal repair -->
        <modal :show.sync="modals.modal5"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm">
                <h6 slot="header" class="modal-title" id="modal-title-default">Data Permohonan {{ repairId.companyName }}</h6>
            <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                <template>
                    <div class="text-center text-muted mb-4">
                        <p class="ff">Silahkan masukkan data yang perlu diperbaiki atau diperbaharui</p>
                    </div>
                    <form class="was-validated" role="form">
                        <div class="mb-3">
                            <p class="ff">Note:</p>
                            <textarea class="form-control" v-model="note" placeholder="Data yang perlu diperbaiki/diperbaharui" rows="5"></textarea>
                        </div>
                    </form>
                        <div class="text-center">
                            <base-button type="primary" @click.prevent="doRepair(repairId._id)" class="my-4">teruskan</base-button>
                        </div>
                </template>
            </card>
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
import axios from 'axios'
// const baseUrl = `http://localhost:3000`
const baseUrl = `http://35.185.183.4`

export default {
    name: 'admin',
    components: {
        Tabs, TabPane, Modal, Letter
    },
    methods: {
        toReject(id){
            this.rejectId = id
            this.modals.modal3 = true
        },

        toDone(row){
            this.doneId = row
            this.modals.modal2 = true
        },

        toProcces(row){
            this.proccesId = row
            this.modals.modal4 = true
        },

        toRepair(row){
            this.repairId = row
            this.modals.modal5 = true
        },

        doRepair(id){
            axios({
                url: baseUrl +`/api/request/repairRequest/${id}`,
                method: `PATCH`,
                data: {
                    note: this.note
                }
            })
            .then(response =>{
                this.modals.modal5= false
                this.$store.dispatch('getAllRequest')
                this.noSeri = ''
                this.noReg = ''
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'success',
                    text: 'Sukses meneruskan note perbaikan ke user',
                    duration: 3000,
                });
            })
            .catch(err =>{
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Gagal Proses!',
                    duration: 3000,
                });
            })
        },

        doProcces(id){
            axios({
                url: baseUrl +`/api/request/proccesRequest/${id}`,
                method: `PATCH`,
                data: {
                    note: this.note
                }
            })
            .then(response =>{
                this.modals.modal4= false
                this.$store.dispatch('getAllRequest')
                this.noSeri = ''
                this.noReg = ''
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'success',
                    text: 'Sukses melakukan proses permohonan',
                    duration: 3000,
                });
            })
            .catch(err =>{
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Gagal Proses!',
                    duration: 3000,
                });
            })
        },



        doDone(id){
            axios({
                url: baseUrl +`/api/request/doneRequest/${id}`,
                method: `PATCH`,
                data: {
                    noSeri: this.noSeri,
                    noReg: this.noReg,
                    note: this.note
                }
            })
            .then(response =>{
                this.modals.modal2 = false
                this.$store.dispatch('getAllRequest')
                this.noSeri = ''
                this.noReg = ''
                this.$notify({
                    group: 'foo',
                    title: 'Permohonan Selesai!',
                    type: 'success',
                    text: 'Silahkan di Cetak',
                    duration: 3000,
                });
            })
            .catch(err =>{
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Gagal Proses!',
                    duration: 3000,
                });
            })
        },

        reject(id){
            axios({
                url: baseUrl + `/api/request/rejectRequest/${id}`,
                method: `PATCH`,
                data: {
                    note: this.note
                }
            })
            .then(response=>{
                this.modals.modal3 = false
                this.$store.dispatch('getAllRequest')
                this.note = ''
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'success',
                    text: 'Sukses reject',
                    duration: 3000,
                });
            })
            .catch(err =>{
                this.$notify({
                    group: 'foo',
                    title: 'Pemberitahuan!',
                    type: 'warn',
                    text: 'Gagal!',
                    duration: 3000,
                });
            })
        },

        view(data){
            this.viewData = data
            this.modals.modal1 = true
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

        del(id){
            swal({
                title: "Apakah anda yakin?",
                text: "Hapus permohonan ini?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(willDelete =>{
                if(willDelete){
                    axios({
                        url: baseUrl +`/api/request/${id}`,
                        method: `DELETE`,
                    })
                    .then(response =>{
                        this.$store.dispatch('getAllRequest')
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'error',
                            text: 'Sukses menghapus data',
                            duration: 3000,
                        });
                    })
                    .catch(err =>{
                        this.$notify({
                            group: 'foo',
                            title: 'Pemberitahuan!',
                            type: 'error',
                            text: 'Gagal menghapus permohonan, Silahkan coba beberapa saat lagi',
                            duration: 3000,
                        });
                    })
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'Pemberitahuan!',
                        type: 'warn',
                        text: 'Batal menghapus data',
                        duration: 3000,
                    });
                }
            })
            .catch(err =>{
                console.log(err);
            })  
        }
    },

    data() {
        return {
            viewData: [],
            noSeri: '',
            noReg: '',
            note: '',
            doneId:'',
            proccesId: '',
            repairId: '',
            modals: {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
            },
            printData: [],
            rejectId : '',
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

.ff{
    font-size: 13px;
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



