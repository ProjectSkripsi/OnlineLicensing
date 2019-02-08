<template>
<div class="dashboard">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="img/brand/white.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-default">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a href="index.html">
                                <img src="assets/img/brand/blue.png">
                            </a>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav navbar-nav-hover ml-lg-auto">
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
                <ul class="navbar-nav navbar-nav-hover align-items-lg-auto" v-show="isLoggedIn">
                    
                </ul>
            </div>
        </div>
    </nav>
    <section class="section section-components" id="dashboard">
        <div class="container">
            <h3 class="h4 text-success font-weight-bold mb-4 mt--90">Dashboard</h3>
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
                                <section class="section section-lg pt-lg-0">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-12">
                                                <div class="row row-grid">
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/icon-izin-baru.png" height="100px">
                                                            <h6>Izin Baru</h6>
                                                            <p class="description mt-3"> 0 </p>
                                                            
                                                        </card>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/izin-dalam-proses.png" height="100px">
                                                            <h6>Izin dalam proses</h6>
                                                            <p class="description mt-3">0</p>
                                                        </card>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/icon-izin-selesai.png" height="100px">
                                                            <h6>Izin Selesai</h6>
                                                            <p class="description mt-3">0</p>
                                                        </card>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="section section-lg pt-lg-0">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-12">
                                                <div class="row row-grid">
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/icon-izin-perbaikan.png" height="100px">
                                                            <h6>Izin Butuh Perbaikan</h6>
                                                            <p class="description mt-3"><b> 0</b></p>
                                                            
                                                        </card>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/icon-izin-ditolak.png" height="100px">
                                                            <h6>Izin Ditolak</h6>
                                                            <p class="description mt-3">0</p>
                                                        </card>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/icon-izin-perusahaan.png" height="100px">
                                                            <h6>Total Perusahaan</h6>
                                                            <p class="description mt-3">0</p>
                                                        </card>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </tab-pane>
                            <tab-pane key="tab2">
                                <template slot="title">
                                    <i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp; Buat Permohonan Baru
                                </template>
                                    <div class="container mb-5">
                                        <h3 class="h4 text-success font-weight-bold mb-4">Form Permohonan</h3>
                                        <!-- Inputs -->
                                        <div class="mb-3">
                                            <small class="text-uppercase font-weight-bold">I. Identitas Pemilik/Pemohon/Penanggung Jawab</small>
                                        </div><hr>
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Nama Lengkap:</p><input type="text" class="form-control" placeholder="Nama Lengkap">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Alamat Lengkap:</p><input type="text" placeholder="Alamat Lengkap" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tempat Lahir:</p><input type="text" class="form-control" placeholder="Tempat Lahir">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Lahir:</p><input type="date" placeholder="Tanggal Lahir" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No.KTP/Passport:</p><input type="number" class="form-control" placeholder="No.KTP/Passport">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No.Telepon/HP:</p><input type="number" placeholder="No.Telepon/HP" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="container mb-5">
                                        <!-- Inputs -->
                                        <div class="mb-3">
                                            <small class="text-uppercase font-weight-bold">II. Identitas Perusahaan</small>
                                        </div><hr>
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Nama Perusahaan:</p><input type="text" class="form-control" placeholder="Nama Perusahaan">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Alamat Perusahaan:</p><input type="text" placeholder="Alamat Perusahaan" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No.Telp/Fax:</p><input type="number" class="form-control" placeholder="No.Telp/Fax">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Provinsi:</p><input type="text" placeholder="Provinsi" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kabupaten/Kota/Kotamadya:</p><input type="text" class="form-control" placeholder="Kabupaten / Kota / Kotamadya">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kecamatan:</p><input type="text" placeholder="Kecamatan" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kelurahan/Desa:</p><input type="text" class="form-control" placeholder="Kelurahan/Desa">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kode Pos:</p><input type="number" placeholder="Kode Pos" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="container mb-5">
                                        <!-- Inputs -->
                                        <div class="mb-3">
                                            <small class="text-uppercase font-weight-bold">III. Legalitas Perusahaan</small>
                                        </div><hr>
                                        <form>
                                            <small class="text-uppercase font-weight"> 1. Akte Pendirian</small><br>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No. Akte:</p><input type="number" class="form-control" placeholder="No. Akte">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Akte:</p><input type="date" placeholder="Tanggal Akte" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Pengesahan:</p><input type="date" class="form-control" placeholder="Tanggal Pengesahan">
                                                    </div>
                                                </div>
                                            </div><hr/>
                                            <small class="text-uppercase font-weight"> 2. Akte Perubahan</small><br>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No. Akte:</p><input type="number" class="form-control" placeholder="No. Akte">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Akte:</p><input type="date" placeholder="Tanggal Akte" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Pengesahan:</p><input type="date" class="form-control" placeholder="Tanggal Pengesahan">
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div class="container mb-5">
                                        <!-- Inputs -->
                                        <div class="mb-3">
                                            <small class="text-uppercase font-weight-bold">IV. Kegiatan Usaha</small>
                                        </div><hr>
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kelembagaan:</p><input type="text" class="form-control" placeholder="Kelembagaan">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kegiatan Usaha:</p><input type="text" placeholder="Kegiatan Usaha" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Barang / Jasa Dagangan Utama:</p><input type="text" class="form-control" placeholder="Barang / Jasa Dagangan Utama">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="text-center">
                                        <base-button tag="a"
                                                    href="#"
                                                    
                                                    class="mb-3 mb-sm-0"
                                                    type="success"
                                                >
                                            Ajukan Permohonan
                                        </base-button>
                                    </div>
                            </tab-pane>

                            <tab-pane key="tab3">
                                <template slot="title">
                                    <i class="fa fa-files-o" aria-hidden="true"></i> Izin Saya
                                </template>
                                <table class="table table-hover description">
                                    <thead>
                                        <tr>
                                            <th>ID. Permohonan</th>
                                            <th>Tanggal Pengajuan</th>
                                            <th>Nama Perusahaan</th>
                                            <th>Kegiatan Usaha</th>
                                            <th>Status Perizinan</th>
                                            <th>Tindakan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>tdornton</td>
                                            <td>@fat</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </tab-pane>

                            <tab-pane key="tab4">
                                <template slot="title">
                                    <i class="fa fa-paperclip" aria-hidden="true"></i> Persyaratan
                                </template>
                                <h6>1. Surat Izin Usaha Perdagangan</h6>
                                <p class="description">
                                    1.  Surat Pernyataan Kedudukan Usaha/Badan Usaha<br>
                                    2.	Scan KTP Pemohon, dan Scan KTP penerima kuasa (jika proses permohonan dikuasakan)	<br>
                                    3.	Scan NPWP Pemohon	<br>
                                    4.	Isi Formulir Permohonan, dilengkapi dengan Surat Kuasa Pengurusan (jika proses permohonan dikuasakan)	<br>
                                    5.	Surat Pernyataan (belum memiliki SIUP, bukan mini market, dan peruntukan kantor)	<br>
                                    6.	Softcopy Pas Foto Penanggung Jawab Perusahaan/Pemohon (berwarna, ukuran 3 x 4)
                                </p>
                            </tab-pane>
                        </card>
                    </tabs>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import BaseDropdown from "@/components/BaseDropdown";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
    components: {
        BaseDropdown,
        Tabs,
        TabPane
    },
    methods: {
        doLogout: function(){
            localStorage.removeItem('token')
            this.$store.dispatch('logout')
            .then(()=>{
                this.$router.push('/')
            })
        },

        save(){

        }
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
