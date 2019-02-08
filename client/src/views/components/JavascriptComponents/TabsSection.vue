<template>
    <div class="row justify-content-center">
        <div class="col-lg">
            <!-- Tabs with icons -->
            <div class="mb-3">
                <small class="text-uppercase font-weight-bold"></small>
            </div>
            <tabs fill class="flex-column flex-md-row">
                <card shadow slot-scope="{activeTabIndex}">
                    <tab-pane key="tab1">
                        <template slot="title">
                            <i class="fa fa-archive" aria-hidden="true"></i> Deskripsi
                        </template>
                        <h6>1. Surat Izin Usaha Perdagangan</h6>
                        <p class="description">Izin untuk dapat melaksanakan kegiatan usaha perdagangan.
                            SIUP meliputi: SIUP Kecil (kekayaan bersih lebih dari Rp. 50.000.001,- 
                            s/d paling banyak Rp. 500.000.000,-) ;  SIUP Menengah (kekayaan bersih lebih dari 
                            Rp. 500.000.001,- s/d paling banyak Rp. 10.000.000.000,-) ; dan SIUP Besar 
                            (kekayaan bersih lebih dari Rp. 10.000.000.001,-). </p>

                        <p class="description"><b> Output :</b> SK Kepala DPMPTSP dan Sertifikat</p>
                        <hr/>
                        <h6>2. Tanda Daftar Perusahaan</h6>
                        <p class="description">Surat tanda pengesahan yang diberikan oleh Kantor Pendaftaran 
                            Perusahaan kepada perusahaan yang telah melakukan pendaftaran perusahaan.
                            Setiap perusahaan yang berbentuk Perseroan Terbatas (PT), Koperasi, Persekutuan 
                            Komanditer (CV), Firma (Fa), Perorangan, dan Bentuk Usaha Lainnya (BUL), termasuk 
                            Perusahaan Asing dengan status Kantor Pusat, Kantor Tunggal, Kantor Cabang, Kantor Pembantu, 
                            Anak Perusahaan, Agen Perusahaan, dan Perwakilan Perusahaan yang berkedudukan dan menjalankan 
                            usahanya di wilayah Negara Kesatuan Republik Indonesia wajib didaftarkan dalam daftar perusahaan.</p>

                        <p class="description"><b> Output :</b> SK Kepala DPMPTSP Kota Makassar.</p>
                        <p class="description"><b> Output :</b> Masa berlaku :  5 tahun (test) </p>
                    </tab-pane>
                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="fa fa-gavel" aria-hidden="true"></i> Dasar Hukum
                        </template>
                        <h6>1. Surat Izin Usaha Perdagangan</h6>
                            <ol class="description">
                                <li>Undang - Undang Republik Indonesia Nomor 3 Tahun 1982 Tentang Wajib Daftar Perusahaan</li>
                                <li>Undang - Undang Republik Indonesia No. 11 Tahun 2008 Tentang Informasi dan Transaksi Elektronik</li>
                                <li>Peraturan Menteri Perdagangan No. 46 Tahun 2009 Tentang Perubahan Atas Peraturan Menteri Perdagangan No.36 Tahun 2007 Tentang Penerbitan Surat Izin Usaha Perdagangan</li>
                                <li>Peraturan Menteri Perdagangan Republik Indonesia No. 37 Tahun 2007 Tentang Penyelenggaraan Pendaftaran Perusahaan</li>
                                <li>Peraturan Daerah Kota Tangerang No. 3 Tahun 2010 Tentang Surat Izin Usaha Perdagangan</li>
                                <li>Peraturan Menteri Perdagangan Nomor 14 Tahun 2016 Tentang Perubahan Atas Peraturan Menteri Perdagangan Nomor 77 tahun 2013 Tentang Penerbitan Suran Izin Usaha Perdagangan dan Tanda Daftar Perusahaan Secara Simultan Bagi Perusahaan Perdagangan</li>
                                <li>Peraturan Menteri Perdagangan Nomor 7 tahun 2017 tentang Perubahan Ketiga atas Peraturan Menteri Perdagangan No.36 Tahun 2007 Tentang Penerbitan Surat Izin Usaha Perdagangan</li>
                                <li>Peraturan Menteri Perdagangan Nomor 8 tahun 2017 tentang Perubahan Kedua atas Peraturan Menteri Perdagangan No.37 Tahun 2007 Tentang Penyelenggaraan Pendaftaran Perusahaan</li>
                                <li>Peraturan Daerah Kota Tangerang Nomor 8 Tahun 2016 Tentang Pembentukan dan Susunan Perangkat Daerah</li>
                                <li>Peraturan Walikota Tangerang Nomor 74 Tahun 2016 Tentang Tugas dan Fungsi serta Tata Kerja Dinas Penanaman Modal dan Pelayanan terpadu Satu Pintu </li>
                            </ol>
                        <p class="description"><b> Output :</b> SK Kepala DPMPTSP dan Sertifikat</p>
                        <hr/>
                        <h6>2. Tanda Daftar Perusahaan</h6>
                        <p class="description">Peraturan Menteri Perdagangan Republik Indonesia Nomor 37/M-DAG/PER/9/2007</p>
                    </tab-pane>

                    <tab-pane key="tab3">
                        <template slot="title">
                            <i class="fa fa-road" aria-hidden="true"></i> Prosedur
                        </template>
                        <h6>1. Surat Izin Usaha Perdagangan</h6>
                        <p class="description">Jangka Waktu Pelayanan IZIN USAHA PERDAGANGAN ditetapkan paling lama 3 (Tiga) hari kerja terhitung sejak diterimanya kelengkapan/kesesuaian dokumen persyaratan secara Lengkap dan Benar</p>
                        <p class="description">1.  Pemohon melakukan pendaftaran secara online<br>
                        Pemohon membuat akun pendaftaran, mengisi form pendaftaran; dan mengunggah/mengirim dokumen persyaratan.</p>
                        <p class="description">2. Pemeriksaan berkas administrasi<br>
                        Pemohon mendapatkan email persetujuan dan dapat mencetak Tanda Bukti Pendaftaran (jika berkas sesuai) atau email penolakan (jika berkas tdk sesuai).</p>
                        <p class="description"> 3. Persiapan cetak SK Izin</p>
                        <p class="description"> 4.Pencetakan dan penyerahan SK Izin <br>Pemohon menerima SK Izin.</p>
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
                            4.	Isi Formulir Permohonan	<br>
                            5.	Surat Pernyataan (belum memiliki SIUP, bukan mini market, dan peruntukan kantor)	<br>
                            6.	Scan Pas Foto Penanggung Jawab Perusahaan/Pemohon (berwarna, ukuran 3 x 4)
                        </p>
                    </tab-pane>
                </card>
            </tabs>
        </div>
    </div>
</template>


<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style>

</style>
