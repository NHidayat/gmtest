<template>
  <div class="home">
    <Sidebar />
    <Navbar />
    <section class="main-content">
      <div class="card-list">
        <div class="card-1 card-item">
          <div class="card-header">Nama (Usia)</div>
          <div class="card-body">
            <h3><i class="fa fa-mars"></i>John Doe (20)</h3>
          </div>
        </div>
        <div class="card-2 card-item">
          <div class="card-header">Tanggal Lahir</div>
          <div class="card-body">
            <h3>22 Desember 13 Januari 1997</h3>
          </div>
        </div>
        <div class="card-3 card-item">
          <div class="card-header">Nomor Rekam Medis</div>
          <div class="card-body">
            <h3>001234567</h3>
          </div>
        </div>
        <div class="card-4 card-item">
          <div class="card-header">DPJP</div>
          <div class="card-body">
            <h3>dr. Febri Bahari, SpPD, KGEH</h3>
          </div>
        </div>
        <div class="card-5 card-item bg-success">
          <div class="card-header">Anda Masuk Sebagai</div>
          <div class="card-body">
            <h3><i class="fa fa-user"></i> dr. Dany Petra, spPD</h3>
          </div>
        </div>
        <div class="card-6 card-item">
          <div class="card-header">Keluhan Utama</div>
          <div class="card-body">
            <h3>Muntah berdarah sejak 1 hari yang lalu</h3>
          </div>
        </div>
        <div class="card-7 card-item">
          <div class="card-header">Diagnosis Primer dan Sekunder</div>
          <div class="card-body">
            <h3>Esophagel varices with bleeding ...</h3>
          </div>
        </div>
        <div class="card-8 card-item">
          <div class="card-header-flex">
            <div>TANDA-TANDA VITAL</div>
            <div class="box-secondary">H+3</div>
            <div>
              <small>Last Update: SELASA, 27 OKTOBER 2020, 06.30 WIB</small>
            </div>
          </div>
          <div class="card-body-flex">
            <div class="box-item">
              <small class="title">Kesadaran</small>
              <strong>Compos Mentis</strong>
            </div>
            <div class="box-item">
              <small class="title">Kesadaran</small>
              <strong>Compos Mentis</strong>
            </div>
            <div class="box-item">
              <small class="title">Kesadaran</small>
              <strong>Compos Mentis</strong>
            </div>
            <div class="box-item">
              <small class="title">Kesadaran</small>
              <strong>Compos Mentis</strong>
            </div>
            <div class="box-item">
              <small class="title">Kesadaran</small>
              <strong>Compos Mentis</strong>
            </div>
            <div class="box-item">
              <small class="title">Kesadaran</small>
              <strong>Compos Mentis</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-bar">
        <a href="#" class="tab-item">Pengkajian Awal</a>
        <a href="#" class="tab-item"
          >Lab/Radiologi <span class="badge badge-danger">2</span></a
        >
        <a href="#" class="tab-item">CPPT Ranao</a>
        <a href="#" class="tab-item"
          >Informed Concent <span class="badge badge-warning">!</span></a
        >
        <a href="#" class="tab-item"
          >Skrining <span class="badge badge-danger">1</span></a
        >
        <a href="#" class="tab-item">Rekonsialiasi Obar</a>
        <a href="#" class="tab-item">Resume Medis</a>
        <a href="#" class="tab-item"><i class="fa fa-bars"></i></a>
      </div>
      <div class="row">
        <div class="history-wrapper">
          <span>Riwayat Berobat</span>
          <ul class="history-list">
            <li class="active">25 Oktober 2020 IGD-RANAP</li>
            <li>25 Oktober 2020 IGD-RANAP</li>
            <li>25 Oktober 2020 IGD-RANAP</li>
            <li>25 Oktober 2020 IGD-RANAP</li>
            <li>25 Oktober 2020 IGD-RANAP</li>
          </ul>
        </div>
        <div class="frame-wrapper">
          <div class="frame-content-list">
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Riw. Aleri</a>
            <a href="#" class="item">Statis Nyeri</a>
            <a href="#" class="item">Fungsional</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
            <a href="#" class="item">Anamnesis</a>
          </div>
          <div class="frame-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            tempora ex aut dolor nisi veniam officia reiciendis quisquam
            repellendus inventore rem, amet necessitatibus voluptates in quam
            quos voluptas laborum. Rem debitis accusamus magni laboriosam quis
            beatae deleniti rerum commodi assumenda sint adipisci obcaecati hic
            laudantium illum a consequuntur possimus ut, recusandae voluptas
            deserunt aliquam nihil quidem excepturi molestiae! Qui ex nemo nulla
            alias, nihil provident accusantium esse accusamus ab ipsa. Eos,
            error dolor deleniti ipsa ducimus rem odio iste perferendis beatae
            provident quasi itaque illo, inventore accusantium quas id velit
            soluta. Praesentium sint dolorum aspernatur velit maiores incidunt
            repudiandae. Dolor!
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style src="../assets/styles/home.css"></style>
