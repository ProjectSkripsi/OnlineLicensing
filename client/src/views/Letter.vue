<template>
    <div>
        <div class="admin" v-show="user.role === 'admin'">
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
                    <ul class="navbar-nav navbar-nav-hover ml-lg-auto" >
                        <base-dropdown tag="li" class="nav-item">
                            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                                <i class="ni ni-collection d-lg-none"></i>
                                <span class="nav-link-inner--text">{{ user.name }}</span>
                            </a>
                            <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
                            <!-- <router-link to="/profile" class="dropdown-item">Profile</router-link> -->
                            <a href="#"  @click.prevent="doLogout"><router-link to="/" class="dropdown-item">  Logout </router-link></a>
                        </base-dropdown>
                    </ul>
                </base-nav>
            </header>
        </div>

    <!-- format surat -->
        <div class="container">
            <section class="panel">
                <div class="panel-body mt-5">
                    <div class="invoice" id="printMe">
                        <header class="clearfix">
                            <div class="row mt-5">
                                <div class="col-sm-2 mt-md">
                                    <div class="ib ml-5">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Coat_of_Arms_of_City_Makassar.png" height="150px" alt="pemkotMKS" />
                                    </div>
                                </div>
                                <div class="col-sm-9 mt-md text-center ml-5">
                                    <h5>PEMERINTAH KOTA MAKASSAR</h5>
                                    <h4> KANTOR DINAS PERINDUSTRIAN PERDAGANGAN DAN PENANAMAN MODAL</h4>
                                    
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
                                Nomor Seri : {{req.noSeri}}/2019
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h6>SURAT IZIN WALIKOTA MAKASSAR</h6>
                                <a>Nomor : {{req.noReg}}/SIUPM-P/13/KPAP</a>
                                <h6 class="pt-1">TENTANG</h6>
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
                                    <li>Surat Permohonan <b> {{req.nameApplication}} </b> Tanggal <b> {{ format_date(req.createdAt) }}</b>
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
                            <div class="col-md-8 ml-4">
                                : &nbsp;<b>{{req.nameApplication}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                ALAMAT 
                            </div>
                            <div class="col-md-8 ml-4">
                               :&nbsp;  <b> {{req.addressApplication}} </b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                UNTUK 
                            </div>
                            <div class="col-md-10 pl-4">
                                &nbsp;&nbsp;&nbsp;&nbsp;: Melakukan kegiatan Usaha dalam Kota Makassar dengan keterangan sebagai berikut:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                NAMA PERUSAHAAN  
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>{{req.companyName}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                STATUS PERUSAHAAN  
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>PUSAT</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                ALAMAT PERUSAHAAN/TELEPON
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b> {{req.companyAddress}} {{req.city}} {{req.companyContact}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                GOLONGAN USAHA 
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>PERUSAHAAN MENENGAH</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                KEGIATAN USAHA 
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>{{req.mainBusiness}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                KELEMBAGAAN 
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>{{req.institutional}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                BARANG / JASA DAGANGAN UTAMA 
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>{{req.mainService}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                MASA BERLAKU
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>Masa berlaku</b>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-11">
                                Surat Izin Usaha Perdagangan ini berlaku selama jangka waktu 5 (lima) tahun dan diperpanjang setelah masa berlakunya berakhir.
                            </div>
                        </div>
                        <div class="row mt-3">
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
                                Pada Tanggal <b>{{format_date(req.updatedAt)}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-4 pt-2">
                                <img v-bind:src="req.foto" height="170px" width="140px" alt="pasFoto" />
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
                                Pangkat &nbsp; :  &nbsp;  Pembina Tk.1 <br>
                                NIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp; 19651210 199112 2 001
                            </div>
                        </div>
                        <div class="row pt-2 mb-5">
                            <div class="col-md-12">
                                Tembusan : <br>
                                    <li> Kepala Dinas Perindustrian Perdagangan dan Penanaman Modal Kota Makassar</li>
                                    <li> Camat yang bersangkutan</li>
                            </div>
                        </div>
                        
                        <!-- situ -->
                       
                    <div class="container">
                        <div class="row mt-5">
                            <div class="col-md-12"></div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-12"></div>
                        </div>
                        
                        <header class="clearfix">
                            <div class="row mt-5">
                                <div class="col-sm-2 mt-md mt-5">
                                    <div class="ib ml-5">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Coat_of_Arms_of_City_Makassar.png" height="150px" alt="pemkotMKS" />
                                    </div>
                                </div>
                                <div class="col-sm-9 mt-md text-center ml-5 mt-5">
                                    <h5>PEMERINTAH KOTA MAKASSAR</h5>
                                    <h4> KANTOR DINAS PERINDUSTRIAN PERDAGANGAN DAN PENANAMAN MODAL</h4>
                                    
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
                                Nomor Seri : {{req.noSeri}}/2019
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h6>SURAT IZIN WALIKOTA MAKASSAR</h6>
                                <a>Nomor : {{req.noReg}}/SITUM-P/13/KPAP</a>
                                <h6 class="pt-1">TENTANG</h6>
                                <h6>SURAT IZIN TEMPAT USAHA(SITU)<br>
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
                                    <li>Rekomendasi dari Dinas Perindustrian Perdagangan dan Penanaman Modal Nomor <b> 0420/Peridagdal/SITU/V/2013</b>
                                        Tanggal <b>21-04-2013</b>
                                    </li>
                                    <li>Surat Permohonan <b> {{req.nameApplication}} </b> Tanggal <b> {{ format_date(req.createdAt) }}</b>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h6>MEMEBERIKAN IZIN TEMPAT USAHA</h6>
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
                            <div class="col-md-8 ml-4">
                                : &nbsp;<b>{{req.nameApplication}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                ALAMAT 
                            </div>
                            <div class="col-md-8 ml-4">
                               :&nbsp;  <b> {{req.addressApplication}} </b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                UNTUK 
                            </div>
                            <div class="col-md-10 pl-4">
                                &nbsp;&nbsp;&nbsp;&nbsp;: Melakukan kegiatan Usaha dalam Kota Makassar dengan keterangan sebagai berikut:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                NAMA PERUSAHAAN  
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>{{req.companyName}}</b>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                ALAMAT PERUSAHAAN/TELEPON
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b> {{req.companyAddress}} {{req.city}} {{req.companyContact}}</b>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                KEGIATAN USAHA 
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>{{req.mainBusiness}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3 pt-2">
                                MASA BERLAKU
                            </div>
                            <div class="col-md-5 pt-2">
                                : <b>Masa berlaku</b>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-11">
                                Surat Izin Tempat Usaha  ini berlaku selama jangka waktu 5 (lima) tahun dan diperpanjang setelah masa berlakunya berakhir.
                            </div>
                        </div>
                        <div class="row mt-3">
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
                                Pada Tanggal <b>{{format_date(req.updatedAt)}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-4 pt-2">
                                <img v-bind:src="req.foto" height="170px" width="140px" alt="pasFoto" />
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
                                Pangkat &nbsp; :  &nbsp;  Pembina Tk.1 <br>
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
                </div>
            </section>
            <div class="row mt-5">
                <div class="col-md-12 text-center">
                    <base-button tag="a"
                        href="#"
                        @click.prevent="print"
                        class="mb-3 mb-sm-0"
                        type="warning"
                        >
                        <i class="fa fa-print" aria-hidden="true"></i> &nbsp;Print
                    </base-button>
                </div>
            </div>
        </div>


    <!-- footer -->
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
import axios from 'axios';
import moment from 'moment'
// const baseUrl = `http://localhost:3000`
const baseUrl = `http://35.185.183.4`

export default {
    name: 'letter',
    props: ['id'],
    data() {
        return {
            idRequest: this.$route.params.id,
            req: ''
        }
    },
    components: {
        BaseNav, CloseButton, BaseDropdown
    },
    computed: {
        ...mapState(['user']),
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        },
    },
    methods: {
        getRequest(){
            axios({
                url: baseUrl + `/api/request/${this.$route.params.id}`,
                method: `GET`,
            })
            .then(response =>{
                console.log(response.data);
                this.req = response.data
                console.log(`iniyg asli`,this.req);
            })
            .catch(err =>{
                console.log(err);
            })
        },
        print() {
        // Pass the element id here
            this.$htmlToPaper('printMe');
        },

        format_date(value){
            if (value) {
                return moment(String(value)).format('DD-MM-YYYY')
            }
        },
        doLogout: function(){
            localStorage.removeItem('token')
            this.$store.dispatch('logout')
            .then(()=>{
                this.$router.push('/')
            })
        },
    },
    created() {
        this.getRequest()
    },
}
</script>

<style>
.panel-body {
    padding: 15px;
}
.panel-body {
    background: #fdfdfd;
    /* -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); */
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
}
div {
    display: block;
    
    font-size: 13px;
}
.invoice {
    padding: 0 20px 20px;
    text-align: justify;
}
div.ui-menu li {
    list-style:none;
    background-image:none;
    background-repeat:none;
    background-position:0; 
}
a{
    font-size: 14px;
}

</style>
