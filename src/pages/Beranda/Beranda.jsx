import React from 'react';
import './Beranda.css';

// KITA IMPORT GAMBARNYA DARI FOLDER ASSETS
import logoImg from '../../assets/logo.jpeg'; 

export default function Beranda() {
  return (
    <div className="app-container">
      
      {/* Header & Navbar Box */}
      <div className="header-card">
        <div className="logo-container">
          {/* TAG IMAGES SEKARANG MEMANGGIL VARIABEL logoImg */}
          <img src={logoImg} alt="Logo Kost Cook Studio" className="logo-img" />
        </div>
        <div className="navbar">
          <a href="#beranda" className="active">beranda</a>
          <a href="#kategori">kategori</a>
          <a href="#resep">resep populer</a>
          <a href="#memasak">mulai memasak</a>
        </div>
      </div>

      {/* Hero / Teks Utama */}
      <div className="hero-text">
        <h2 className="hero-title">Masak simpel hidup lebih hemat</h2>
        <div className="hero-desc">
          <p>Temukan resep praktis, murah</p>
          <p>dan cepat khusus anak kost!</p>
          <br />
          <p>Kost Cook Studio adalah solusi buat kamu yang ingin</p>
          <p>tetap makan enak tanpa ribet.</p>
        </div>
      </div>

      {/* Section Fitur Utama */}
      <div className="section">
        <h3 className="section-title">Fitur Utama</h3>
        <div className="grid-3">
          <div className="card btn-praktis">Praktis</div>
          <div className="card btn-hemat">Hemat</div>
          <div className="card btn-cepat">Cepat</div>
        </div>
      </div>

      {/* Section Kategori Resep */}
      <div className="section">
        <h3 className="section-title">Kategori Resep</h3>
        <div className="grid-4">
          <div className="card btn-sarapan">Sarapan</div>
          <div className="card btn-siang">Makan<br />Siang</div>
          <div className="card btn-malam">Makan<br />Malam</div>
          <div className="card btn-minuman">Minuman</div>
        </div>
      </div>

      {/* Section Resep Populer */}
      <div className="section">
        <h3 className="section-title">Resep Populer</h3>
        <div className="grid-4">
          <div className="card btn-mie">Mie</div>
          <div className="card btn-nasgor">Nasgor</div>
          <div className="card btn-ayam">Ayam<br />kecap</div>
          <div className="card btn-telur">Telur<br />dadar</div>
        </div>
      </div>

      {/* Tombol CTA */}
      <button className="cta-button">
        Jelajahi Resep <span style={{ fontSize: '12px' }}>✦</span>
      </button>

      {/* Footer */}
      <div className="footer-note">
        Mulai masak sekarang dan hemat pengeluaran mu!
      </div>

    </div>
  );
}