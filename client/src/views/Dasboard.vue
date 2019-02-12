<template>
<div class="dashboard">
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
            <ul class="navbar-nav navbar-nav-hover ml-lg-auto" v-show="isLoggedIn">
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
        </base-nav>
     </header>

    <section class="section section-components mt-5" id="dashboard">
        <div class="container">
            <div id="alert"></div>
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
                                                            <p class="description mt-3"> {{ myNewRequest.length }} </p>
                                                            
                                                        </card>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/izin-dalam-proses.png" height="100px">
                                                            <h6>Izin dalam proses</h6>
                                                            <p class="description mt-3"> {{ myOnProcces.length }}</p>
                                                        </card>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <card class="border-0 text-center" hover shadow body-classes="py-5">
                                                            <img src="img/icons/icon-izin-selesai.png" height="100px">
                                                            <h6>Izin Selesai</h6>
                                                            <p class="description mt-3">{{myRequestDone.length}} </p>
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
                                                            <p class="description mt-3"> {{ myRequest.length }} </p>
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
                                                        <p class="description">Nama Lengkap:</p><input type="text" v-model="nameApplication" class="form-control" placeholder="Nama Lengkap">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Alamat Lengkap:</p><input type="text" v-model="addressApplication" placeholder="Alamat Lengkap" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tempat Lahir:</p><input type="text" v-model="birthPlace" class="form-control" placeholder="Tempat Lahir">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Lahir:</p><input type="date" v-model="birthDate" placeholder="Tanggal Lahir" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No.KTP/Passport:</p><input type="number" v-model="identityNumber" class="form-control" placeholder="No.KTP/Passport">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No.Telepon/HP:</p><input type="number" v-model="contactApplication" placeholder="No.Telepon/HP" class="form-control" />
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
                                                        <p class="description">Nama Perusahaan:</p><input type="text" v-model="companyName" class="form-control" placeholder="Nama Perusahaan">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Alamat Perusahaan:</p><input type="text" v-model="companyAddress" placeholder="Alamat Perusahaan" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No.Telp/Fax:</p><input type="number" v-model="companyContact" class="form-control" placeholder="No.Telp/Fax">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Provinsi:</p><input type="text" v-model="province" placeholder="Provinsi" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kabupaten/Kota/Kotamadya:</p><input v-model="city" type="text" class="form-control" placeholder="Kabupaten / Kota / Kotamadya">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kecamatan:</p><input type="text" v-model="district" placeholder="Kecamatan" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kelurahan/Desa:</p><input type="text" v-model="village" class="form-control" placeholder="Kelurahan/Desa">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kode Pos:</p><input type="number" v-model="postalCode" placeholder="Kode Pos" class="form-control" />
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
                                                        <p class="description">No. Akte:</p><input type="number" v-model="noAktaPendirian" class="form-control" placeholder="No. Akte">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Akte:</p><input type="date" v-model="dateAktaPendirian" placeholder="Tanggal Akte" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Pengesahan:</p><input type="date" v-model="dateAktaPengesahan" class="form-control" placeholder="Tanggal Pengesahan">
                                                    </div>
                                                </div>
                                            </div><hr/>
                                            <small class="text-uppercase font-weight"> 2. Akte Perubahan</small><br>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">No. Akte:</p><input type="number" v-model="noAktaPerubahan" class="form-control" placeholder="No. Akte">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Akte:</p><input type="date" v-model="dateAktaPerubahan" placeholder="Tanggal Akte" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Tanggal Pengesahan:</p><input type="date" v-model="dateAktaPengesahanR" class="form-control" placeholder="Tanggal Pengesahan">
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div class="container mb-5">
                                        <div class="mb-3">
                                            <small class="text-uppercase font-weight-bold">IV. Kegiatan Usaha</small>
                                        </div><hr>
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kelembagaan:</p><input type="text" v-model="institutional" class="form-control" placeholder="Kelembagaan">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Kegiatan Usaha:</p><input type="text" v-model="mainBusiness" placeholder="Kegiatan Usaha" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <p class="description">Barang / Jasa Dagangan Utama:</p><input type="text" v-model="mainService" class="form-control" placeholder="Barang / Jasa Dagangan Utama">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="text-center">
                                        <base-button tag="a"
                                                    href="#"
                                                    @click="addRequest"
                                                    class="mb-3 mb-sm-0"
                                                    type="success"
                                                >
                                            Ajukan Permohonan
                                        </base-button>
                                    </div>
                            </tab-pane>

                            <tab-pane key="tab4">
                                <template slot="title">
                                    <i class="fa fa-paperclip" aria-hidden="true"></i> Upload Persyaratan
                                </template>
                                <tabs fill class="flex-column flex-md-row">
                                    <card shadow slot-scope="{activeTabIndex}">
                                        <tab-pane key="tab1">
                                            <template slot="title">
                                                <i class="fa fa-id-card-o" aria-hidden="true"></i> <a data-toggle="tooltip" data-placement="top" title="KTP">KTP</a>
                                            </template>
                                            <div class="container">
                                                <div class="form-group">
                                                    <p class="description">Nama Perusahaan</p>
                                                    <select class="form-control" v-model="myCompany">
                                                        <option v-for="company in myRequest" :key="company._id" :value="company._id"> {{ company.companyName }}</option>
                                                    </select><br>
                                                    <p class="description">KTP Pemohon</p>
                                                    <input type="file" min="0" class="form-control" @change="getImage($event)">
                                                </div>
                                                <div class="text-center">
                                                    <!-- <div class="hidden display-inline align-center" v-show="ktp" v-bind:class="{ 'ktp': true }">
                                                        <img :src="ktp" alt="" class="preview" /><br>
                                                        <base-button tag="a"
                                                                href="#"
                                                                @click="removeFile"
                                                                class="mb-3 mb-sm-0"
                                                                type="danger">
                                                            remove
                                                        </base-button> -->
                                                        <base-button tag="a"
                                                                href="#"
                                                                @click="saveKTP"
                                                                class="mb-3 mb-sm-0"
                                                                type="success">
                                                            upload
                                                        </base-button>
                                                </div>
                                            </div>
                                        </tab-pane>
                                        <tab-pane key="tab2">
                                            <template slot="title">
                                                <i class="fa fa-credit-card" aria-hidden="true"></i><a data-toggle="tooltip" data-placement="top" title="NPWP"> NPWP </a>
                                            </template>
                                            <div class="container">
                                                <div class="form-group">
                                                    <p class="description">Nama Perusahaan</p>
                                                    <select class="form-control" v-model="myCompany">
                                                        <option v-for="company in myRequest" :key="company._id" :value="company._id"> {{ company.companyName }}</option>
                                                    </select><br>
                                                    <p class="description">NPWP Pemohon</p>
                                                    <input type="file" min="0" class="form-control" @change="getNPWP($event)">
                                                </div>
                                                <div class="text-center">
                                                    <base-button tag="a"
                                                            href="#"
                                                            @click="saveNPWP"
                                                            class="mb-3 mb-sm-0"
                                                            type="success">
                                                        upload
                                                    </base-button>
                                                </div>
                                            </div>
                                        </tab-pane>
                                        <tab-pane key="tab3">
                                            <template slot="title">
                                                <i class="fa fa-envelope"></i> <a data-toggle="tooltip" data-placement="top" title="Surat Pernyataan Kedudukan Badan Usaha"> Surat Pernyataan KBU </a>
                                            </template>
                                            <div class="container">
                                                <div class="form-group">
                                                    <p class="description">Nama Perusahaan</p>
                                                    <select class="form-control" v-model="myCompany">
                                                        <option v-for="company in myRequest" :key="company._id" :value="company._id"> {{ company.companyName }}</option>
                                                    </select><br>
                                                    <p class="description">Surat Pernyataan Kedudukan Badan Usaha:</p>
                                                    <input type="file" min="0" class="form-control" @change="getSpkbu($event)">
                                                </div>
                                                <div class="text-center">
                                                    <base-button tag="a"
                                                                href="#"
                                                                @click="saveSPKBU"
                                                                class="mb-3 mb-sm-0"
                                                                type="success"
                                                            >
                                                        upload
                                                    </base-button>
                                                </div>
                                            </div>
                                        </tab-pane>
                                        <tab-pane key="tab5">
                                            <template slot="title">
                                                <i class="fa fa-envelope-square" aria-hidden="true"></i> <a data-toggle="tooltip" data-placement="top" title="Surat Pernyataan belum memiliki SIUP"> 
                                                    Surat Pernyataan belum memiliki SIUP</a>
                                            </template>
                                            <div class="container">
                                                <div class="form-group">
                                                    <p class="description">Nama Perusahaan:</p>
                                                    <select class="form-control" v-model="myCompany">
                                                        <option v-for="company in myRequest" :key="company._id" :value="company._id"> {{ company.companyName }}</option>
                                                    </select><br>
                                                    <p class="description">Surat Pernyataan belum memiliki SIUP:</p>
                                                    <input type="file" min="0" class="form-control" @change="getSIUP($event)">
                                                </div>
                                                <div class="text-center">
                                                    <base-button tag="a"
                                                                href="#"
                                                                @click="saveSIUP"
                                                                class="mb-3 mb-sm-0"
                                                                type="success"
                                                            >
                                                        upload
                                                    </base-button>
                                                </div>
                                            </div>
                                        </tab-pane>
                                        <tab-pane key="tab4">
                                            <template slot="title">
                                                <i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;<a data-toggle="tooltip" data-placement="top" title="Pas Foto"> Pas Foto </a>
                                            </template>
                                            <div class="container">
                                                <div class="form-group">
                                                    <p class="description">Nama Perusahaan:</p>
                                                    <select class="form-control" v-model="myCompany">
                                                        <option v-for="company in myRequest" :key="company._id" :value="company._id"> {{ company.companyName }}</option>
                                                    </select><br>
                                                    <p class="description">Pas Foto:</p>
                                                    <input type="file" min="0" class="form-control" @change="getFoto($event)">
                                                </div>
                                                <div class="text-center">
                                                    <base-button tag="a"
                                                                href="#"
                                                                @click="saveFoto"
                                                                class="mb-3 mb-sm-0"
                                                                type="success"
                                                            >
                                                        upload
                                                    </base-button>
                                                </div>
                                            </div>
                                        </tab-pane>
                                    </card>
                                </tabs>
                            </tab-pane>
                            <tab-pane key="tab3">
                                <template slot="title">
                                    <i class="fa fa-list" aria-hidden="true"></i> Kelengkapan Permohonan
                                </template>
                                <table class="table table-hover description">
                                    <thead>
                                        <tr>
                                            <th>Nama Perusahaan</th>
                                            <th>KTP</th>
                                            <th>NPWP</th>
                                            <th>Surat Pernyataan KBU</th>
                                            <th>Surat Pernyataan belum memiliki SIUP</th>
                                            <th>Pas Foto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="myRequest.length === 0">
                                            <td class="text-center" colspan="6">No data avaible</td>
                                        </tr>
                                        <tr v-else v-for="data in myRequest" :key="data._id">
                                            <td>{{ data.companyName }}</td>
                                            <td class="text-center"><i class="fa fa-check" aria-hidden="true" v-if="data.ktp"></i> <i class="fa fa-times" v-else aria-hidden="true"></i> </td>
                                            <td class="text-center"><i class="fa fa-check" aria-hidden="true" v-if="data.npwp"></i> <i class="fa fa-times" v-else aria-hidden="true"></i> </td>
                                            <td class="text-center"><i class="fa fa-check" aria-hidden="true" v-if="data.spkbu"></i> <i class="fa fa-times" v-else aria-hidden="true"></i> </td>
                                            <td class="text-center"><i class="fa fa-check" aria-hidden="true" v-if="data.siup"></i> <i class="fa fa-times" v-else aria-hidden="true"></i> </td>
                                            <td class="text-center"><i class="fa fa-check" aria-hidden="true" v-if="data.foto"></i> <i class="fa fa-times" v-else aria-hidden="true"></i> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </tab-pane>
                            <tab-pane key="tab5">
                                <template slot="title">
                                    <i class="fa fa-files-o" aria-hidden="true"></i> Izin Saya
                                </template>
                                <table class="table table-hover description">
                                    <thead>
                                        <tr>
                                            <th>ID. Permohonan</th>
                                            <th>Pemohon</th>
                                            <th>Nama Perusahaan</th>
                                            <th>Tanggal</th>
                                            <th>Status</th>
                                            <th>Tindakan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="myRequest.length === 0">
                                            <td class="text-center" colspan="6">No data avaible</td>
                                        </tr>
                                        <tr v-else v-for="data in myRequest" :key="data._id">
                                            <td>{{ data._id}} </td>
                                            <td>{{ data.nameApplication }} </td>
                                            <td>{{ data.companyName }}</td>
                                            <td>{{ formatDate(data.createdAt) }}</td>
                                            <td>{{ data.statusApplication }}</td>
                                            <td class="text-center"> 
                                                <a href="" @click.prevent="editRequest(data)"> <i class="fa fa-pencil-square-o"></i></a>
                                                &nbsp; <a href="" @click.prevent="deleteRequest(data._id)"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                            </td>
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
    <!-- Edit Form -->
    <section class="section section-lg pt-0" v-show="toEdit">
        <div class="container">
            <card gradient="warning"
                    no-body
                    shadow-size="lg"
                    class="border-0">
                <div class="p-5">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <h6 class="text-white">Update Data Permohonan</h6>
                            <div class="container">
                                <div class="mb-3">
                                    <small class="text-uppercase font-weight-bold">I. Identitas Pemilik/Pemohon/Penanggung Jawab</small>
                                </div><hr>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Nama Lengkap:</p><input type="text" v-model="updateRequest.nameApplication" class="form-control" placeholder="Nama Lengkap">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Alamat Lengkap:</p><input type="text" v-model="updateRequest.addressApplication" placeholder="Alamat Lengkap" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Tempat Lahir:</p><input type="text" v-model="updateRequest.birthPlace" class="form-control" placeholder="Tempat Lahir">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Tanggal Lahir:</p><input type="date" v-model="fromDB[updateRequest.birthDate]" min="${new Date()}" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"  placeholder="Tanggal Lahir" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">No.KTP/Passport:</p><input type="number" v-model="updateRequest.identityNumber" class="form-control" placeholder="No.KTP/Passport">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">No.Telepon/HP:</p><input type="number" v-model="updateRequest.contactApplication" placeholder="No.Telepon/HP" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </form><br>
                                <div class="mb-3">
                                    <small class="text-uppercase font-weight-bold">II. Identitas Perusahaan</small>
                                </div><hr>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Nama Perusahaan:</p><input type="text" v-model="updateRequest.companyName" class="form-control" placeholder="Nama Perusahaan">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Alamat Perusahaan:</p><input type="text" v-model="updateRequest.companyAddress" placeholder="Alamat Perusahaan" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">No.Telp/Fax:</p><input type="number" v-model="updateRequest.companyContact" class="form-control" placeholder="No.Telp/Fax">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Provinsi:</p><input type="text" v-model="updateRequest.province" placeholder="Provinsi" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Kabupaten/Kota/Kotamadya:</p><input v-model="updateRequest.city" type="text" class="form-control" placeholder="Kabupaten / Kota / Kotamadya">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Kecamatan:</p><input type="text" v-model="updateRequest.district" placeholder="Kecamatan" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Kelurahan/Desa:</p><input type="text" v-model="updateRequest.village" class="form-control" placeholder="Kelurahan/Desa">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Kode Pos:</p><input type="number" v-model="updateRequest.postalCode" placeholder="Kode Pos" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </form><br>
                                <div class="mb-3">
                                    <small class="text-uppercase font-weight-bold">III. Legalitas Perusahaan</small>
                                </div><hr>
                                <form>
                                    <small class="text-uppercase font-weight"> 1. Akte Pendirian</small><br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">No. Akte:</p><input type="number" v-model="updateRequest.noAktaPendirian" class="form-control" placeholder="No. Akte">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Tanggal Akte:</p><input type="date" v-model="updateRequest.dateAktaPendirian" placeholder="Tanggal Akte" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Tanggal Pengesahan:</p><input type="date" v-model="updateRequest.dateAktaPengesahan" class="form-control" placeholder="Tanggal Pengesahan">
                                            </div>
                                        </div>
                                    </div><hr/>
                                    <small class="text-uppercase font-weight"> 2. Akte Perubahan</small><br>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">No. Akte:</p><input type="number" v-model="updateRequest.noAktaPerubahan" class="form-control" placeholder="No. Akte">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Tanggal Akte:</p><input type="date" v-model="updateRequest.dateAktaPerubahan" placeholder="Tanggal Akte" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Tanggal Pengesahan:</p><input type="date" v-model="updateRequest.dateAktaPengesahanR" class="form-control" placeholder="Tanggal Pengesahan">
                                            </div>
                                        </div>
                                    </div>
                                </form><br>
                                <div class="mb-3">
                                    <small class="text-uppercase font-weight-bold">IV. Kegiatan Usaha</small>
                                </div><hr>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Kelembagaan:</p><input type="text" v-model="updateRequest.institutional" class="form-control" placeholder="Kelembagaan">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Kegiatan Usaha:</p><input type="text" v-model="updateRequest.mainBusiness" placeholder="Kegiatan Usaha" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <p class="description">Barang / Jasa Dagangan Utama:</p><input type="text" v-model="updateRequest.mainService" class="form-control" placeholder="Barang / Jasa Dagangan Utama">
                                            </div>
                                        </div>
                                    </div>
                                </form><hr>
                                <div class="text-center">
                                    <base-button tag="a"
                                                href="#"
                                                @click="saveUpdate(updateRequest._id)"
                                                class="mb-3 mb-sm-0"
                                                type="primary"
                                            >
                                        Save Update
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </section>

    
</div>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import {mapActions, mapState} from 'vuex'
import BaseDropdown from "@/components/BaseDropdown";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import axios from 'axios'
import swal from 'sweetalert'
const baseUrl = `http://localhost:3000`

function success(msg) {
    $("#alert").append(`
        <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <p>Successfully, ${msg} 👍🏻 </p>
        </div>
    `)
    setTimeout(() => {
        $("#alert").text("")
    }, 3000);
}
function error(msg) {
    $("#alert").append(`
        <div class="alert alert-danger" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <p>Sorry! ${msg} 👎🏻</p>
        </div>
    `)
    setTimeout(() => {
        $("#alert").text("")
    }, 3000);
}

export default {
    components: {
        BaseDropdown,
        Tabs,
        TabPane,
        BaseNav,
        CloseButton
    },
    data() {
        return {
            toEdit: false,
            ktp: '',
            npwp: '',
            spkbu: '',
            siup:'',
            name:'',
            foto:'',
            nameApplication: '',
            addressApplication: '',
            birthPlace: '',
            birthDate: '',
            contactApplication: '',
            identityNumber: '',
            companyName: '',
            companyAddress: '',
            companyContact: '',
            province: '',
            city: '',
            district: '',
            village: '',
            postalCode: '',
            noAktaPendirian: '',
            dateAktaPendirian: '',
            dateAktaPengesahan: '',
            noAktaPerubahan: '',
            dateAktaPerubahan: '',
            dateAktaPengesahanR: '',
            institutional: '',
            mainBusiness: '',
            mainService: '',
            myCompany: '',
            updateRequest: {}
        }
    },
    methods: {
        ...mapActions(['saveRequest']),
        addRequest(){
            axios({
                url: baseUrl + `/api/request/`,
                method: `POST`,
                headers:{
                    token: localStorage.getItem('token')
                },
                data: {
                    nameApplication: this.nameApplication ,
                    addressApplication: this.addressApplication ,
                    birthPlace: this.birthPlace ,
                    birthDate: this.birthDate ,
                    contactApplication: this.contactApplication ,
                    identityNumber: this.identityNumber ,
                    companyName: this.companyName ,
                    companyAddress: this.companyAddress ,
                    companyContact: this.companyContact ,
                    province: this.province ,
                    city: this.city ,
                    district: this.district ,
                    village: this.village ,
                    postalCode: this.postalCode ,
                    noAktaPendirian: this.noAktaPendirian ,
                    dateAktaPendirian: this.dateAktaPendirian ,
                    dateAktaPengesahan: this.dateAktaPengesahan ,
                    noAktaPerubahan: this.noAktaPerubahan ,
                    dateAktaPerubahan: this.dateAktaPerubahan ,
                    dateAktaPengesahanR: this.dateAktaPengesahanR ,
                    institutional: this.institutional ,
                    mainBusiness: this.mainBusiness ,
                    mainService: this.mainService
                }
            })
            .then(response =>{
                this.$store.dispatch('myRequest')
                success(`Add data`)
                this.nameApplication = ''
                this.addressApplication = ''
                this.birthPlace = ''
                this.birthDate = ''
                this.contactApplication = ''
                this.identityNumber = ''
                this.companyName = ''
                this.companyAddress = ''
                this.companyContact = ''
                this.province = ''
                this.city = ''
                this.district = ''
                this.village = ''
                this.postalCode = ''
                this.noAktaPendirian = ''
                this.dateAktaPendirian = ''
                this.dateAktaPengesahan = ''
                this.noAktaPerubahan = ''
                this.dateAktaPerubahan = ''
                this.dateAktaPengesahanR = ''
                this.institutional = ''
                this.mainBusiness = ''
                this.mainService = ''
                this.myCompany = ''
            })
            .catch(err =>{
                error(`failed`)
            })
        },

        saveUpdate(id){
            axios({
                url: baseUrl + `/api/request/${id}`,
                method: `PUT`,
                data: this.updateRequest,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response =>{
                success(`update data`)
                this.$store.dispatch('myRequest')
                this.toEdit = false
            })
            .catch(err =>{
                error(`error update`)
            })
            
        },
        removeFile() {
            this.ktp = '';
        },

        fromDB(tgl) {
            console.log(tgl);
            
            let yyyy = tgl.substring(0, 4)
            let MM = tgl.substring(5, 7)
            let dd = tgl.substring(8, 10)
            let hh = tgl.substring(11, 13)
            let mm = tgl.substring(14, 16)
            return yyyy+'-'+MM+'-'+dd+'T'+hh+':'+mm
            
        },

        editRequest(payload){
            this.updateRequest = payload
            this.toEdit = true
        },

        doLogout: function(){
            localStorage.removeItem('token')
            this.$store.dispatch('logout')
            .then(()=>{
                this.$router.push('/')
            })
        },

        deleteRequest(id){
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
                        url: baseUrl + `/api/request/${id}`,
                        method: `DELETE`
                    })
                    .then(response =>{
                        this.$store.dispatch('myRequest')
                        success(`delete aplikasi`)
                    })
                    .catch(err =>{
                        error(`failed delete`)
                    })
                } else {
                    success(`cancel delete`)
                }
            })
            .catch(err =>{
                error(err);
            }) 
        },

        saveKTP(){
            let formPicture = new FormData()
            formPicture.append('image', this.ktp)
            axios.post(baseUrl+`/api/request/upload`, formPicture,{})
            .then(response =>{
                axios({
                    url:  baseUrl + `/api/request/ktp/${this.myCompany}`,
                    method: 'PATCH',
                    data: {
                        ktp: response.data.link
                    },
                })
                .then(res =>{
                    this.$store.dispatch('myRequest')
                    success(`uploaded KTP`)
                })
            })
            .catch(err =>{
                error(`error upload! Please try again`);
            })
        },

        saveNPWP(){
            let formPicture = new FormData()
            formPicture.append('image', this.npwp)
            axios.post(baseUrl+`/api/request/upload`, formPicture,{})
            .then(response =>{
                axios({
                    url:  baseUrl + `/api/request/npwp/${this.myCompany}`,
                    method: 'PATCH',
                    data: {
                        npwp: response.data.link
                    },
                })
                .then(res =>{
                    this.$store.dispatch('myRequest')
                    success(`uploaded NPWP`)
                })
            })
            .catch(err =>{
                error(`error upload! Please try again`);
            })
        },

        saveSPKBU(){
            let formPicture = new FormData()
            formPicture.append('image', this.spkbu)
            axios.post(baseUrl+`/api/request/upload`, formPicture,{})
            .then(response =>{
                axios({
                    url:  baseUrl + `/api/request/spkbu/${this.myCompany}`,
                    method: 'PATCH',
                    data: {
                        spkbu: response.data.link
                    },
                })
                .then(res =>{
                    this.$store.dispatch('myRequest')
                    success(`uploaded Surat Pernyataan Kedudukan Badan Usaha`)
                })
            })
            .catch(err =>{
                error(`error upload! Please try again`);
            })
        },

        saveSIUP(){
            let formPicture = new FormData()
            formPicture.append('image', this.siup)
            axios.post(baseUrl+`/api/request/upload`, formPicture,{})
            .then(response =>{
                console.log(response);
                axios({
                    url:  baseUrl + `/api/request/siup/${this.myCompany}`,
                    method: 'PATCH',
                    data: {
                        siup: response.data.link
                    },
                })
                .then(res =>{
                    this.$store.dispatch('myRequest')
                    success(`uploaded Surat Pernyataan belum memiliki SIUP`)
                })
            })
            .catch(err =>{
                error(`error upload! Please try again`);
            })
        },

        saveFoto(){
            let formPicture = new FormData()
            formPicture.append('image', this.foto)
            axios.post(baseUrl+`/api/request/upload`, formPicture,{})
            .then(response =>{
                console.log(response);
                axios({
                    url:  baseUrl + `/api/request/foto/${this.myCompany}`,
                    method: 'PATCH',
                    data: {
                        foto: response.data.link
                    },
                })
                .then(res =>{
                    this.$store.dispatch('myRequest')
                    success(`uploaded Pas Foto`)
                })
            })
            .catch(err =>{
                error(`error upload! Please try again`);
            })
        },


        formatDate(tgl) {
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            var year = tgl.substring(0, 4)
            var monthIndex = tgl.substring(5, 7)
            var day = tgl.substring(8, 10)
            return day + '-' + monthIndex + '-' + year;
        },

        getNPWP(link) {
            this.npwp = link.target.files[0]
        },

        getSIUP(link) {
            this.siup = link.target.files[0]
        },

        getSpkbu(link) {
            this.spkbu = link.target.files[0]
        },

        getFoto(link) {
            this.foto = link.target.files[0]
        },

        getImage(link) {
            let input = link.target
            this.ktp = link.target.files[0]
        },
        
        
    },

    computed: {
        ...mapState(['user', 'token', 'myRequest', 'myNewRequest', 'myOnProcces', 'myRequestDone']),
        isLoggedIn : function(){
            return this.$store.getters.isLoggedIn
        },
    },
    mounted() {
        this.$store.dispatch('myRequest'),
        this.$store.dispatch('newRequest')
        this.$store.dispatch('onRequest')
        this.$store.dispatch('MyDoneRequest')
    },
};
</script>
<style>
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 300px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}


</style>
