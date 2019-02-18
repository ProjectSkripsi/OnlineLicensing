<template>
    <div class="container">
        <!-- <div class="admin" v-show="user.role === 'admin'">
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
                            <router-link to="/profile" class="dropdown-item">Profile</router-link>
                            <a href="#"  @click.prevent="doLogout"><router-link to="/" class="dropdown-item">  Logout </router-link></a>
                        </base-dropdown>
                    </ul>
                </base-nav>
            </header>
        </div> -->

    <!-- format surat -->
        <section class="panel">
            <div class="panel-body">
                <div class="invoice">
                    <header class="clearfix">
                        <div class="row">
                            <div class="col-sm-2 mt-md">
                                <div class="ib ml-5">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Coat_of_Arms_of_City_Makassar.png" height="150px" alt="pemkotMKS" />
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
                                <li>Surat Permohonan <b> NAMA PEMOHON </b> Tanggal <b> TANGGAL DI AJUKAN</b>
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
                            : <b>Nama</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            ALAMAT 
                        </div>
                        <div class="col-md-10">
                            : <b>ALAMAT PEMOHON</b>
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
                            : <b>COMPANY NAME</b>
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
                            : <b>COMPANY ADDRESS</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-3 pt-2">
                            NPWP 
                        </div>
                        <div class="col-md-7 pt-2">
                            : <b>12241526271</b>
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
                            : <b>Main Bussines</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-3 pt-2">
                            KELEMBAGAAN 
                        </div>
                        <div class="col-md-7 pt-2">
                            : <b>Institutional</b>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-3 pt-2">
                            BARANG/JASA DAGANGAN UTAMA 
                        </div>
                        <div class="col-md-7 pt-2">
                            : <b>main service</b>
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
                            <img src="img/brand/pemkot.png" height="150px" alt="pemkotMKS" />
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
                <!-- <div class="text-right mr-lg">
                    <a href="#" class="btn btn-default">Submit Invoice</a>
                    <a href="pages-invoice-print.html" target="_blank" class="btn btn-primary ml-sm"><i class="fa fa-print"></i> Print</a>
                </div> -->
            </div>
        </section>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import BaseDropdown from "@/components/BaseDropdown";
export default {
    name: 'letter',
    props: ['id'],
    components: {
        BaseNav, CloseButton, BaseDropdown
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>

<style>

</style>
