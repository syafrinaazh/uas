import React from 'react';
import './Kategori.css';
import logoImg from '../assets/logo.jpeg'; 

export default function Kategori() {
  const handleResepClick = (nama) => {
    alert(`Membuka resep: ${nama}`);
  };

  return (
    <div className="kat-wrapper">
      <div className="kat-outer-frame">
        <div className="kat-card">
          
          {/* 1. Profile Bar Atas */}
          <div className="profile-bar-top">
            <div className="profile-info-left">
              <span className="profile-pic">👩‍🍳</span>
              <span className="profile-name">Fina</span>
              <span className="profile-badge">Kategori 20</span>
              <span className="profile-points">✦ 100</span>
            </div>
            <div className="profile-icons-right">
              <span>❤️</span> <span>🔖</span> <span>👤</span>
            </div>
          </div>

          {/* 2. Banner Logo & Navigasi */}
          <div className="main-banner-box">
            <img src={logoImg} alt="Logo" className="banner-logo" />
            <div className="banner-nav">
              <button className="nav-btn">beranda</button>
              <button className="nav-btn active">kategori</button>
              <button className="nav-btn">resep populer</button>
              <button className="nav-btn">mulai memasak</button>
            </div>
          </div>

          {/* 3. Section Kategori Resep (Pilihan Atas) */}
          <div className="section-container">
            <h3 className="section-title">Kategori resep</h3>
            <div className="category-tiles-grid">
              <div className="cat-tile">
                <span className="cat-icon">🍳</span>
                <p>Sarapan</p>
                <button className="btn-pilih">Pilih resep</button>
              </div>
              <div className="cat-tile active-tile">
                <span className="cat-icon">🍱</span>
                <p>Makan siang</p>
                <button className="btn-pilih">Pilih resep</button>
              </div>
              <div className="cat-tile">
                <span className="cat-icon">🍲</span>
                <p>Makan malam</p>
                <button className="btn-pilih">Pilih resep</button>
              </div>
              <div className="cat-tile">
                <span className="cat-icon">🥤</span>
                <p>Minuman</p>
                <button className="btn-pilih">Pilih resep</button>
              </div>
            </div>
          </div>

          {/* 4. List Resep (Yang Bisa Dipencet) */}
          <div className="section-container">
            <h3 className="section-title">Makan siang</h3>
            <div className="recipe-list-vertical">
              
              <button className="recipe-bar-item" onClick={() => handleResepClick('Spaghetti Carbonara')}>
                <div className="recipe-avatar-circle">
                  <img src="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=100" alt="spaghetti" />
                </div>
                <div className="recipe-label-box">Spaghetti Carbonara</div>
              </button>

              <button className="recipe-bar-item" onClick={() => handleResepClick('Rotisserie Chicken')}>
                <div className="recipe-avatar-circle">
                  <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=100" alt="chicken" />
                </div>
                <div className="recipe-label-box">Rotisserie Chicken</div>
              </button>

              <button className="recipe-bar-item" onClick={() => handleResepClick('Sate Ayam')}>
                <div className="recipe-avatar-circle">
                  <img src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=100" alt="sate" />
                </div>
                <div className="recipe-label-box">Sate Ayam</div>
              </button>

            </div>
            <button className="btn-jelajahi">Jelajahi Resep ➕</button>
          </div>

          {/* 5. Footer Promo */}
          <div className="footer-promo">
            <div className="promo-text">
              <p>Butuh inspirasi masakan enak anak kost?</p>
              <button className="btn-promo-green">Lihat kategori resep ➔</button>
            </div>
            <span className="promo-img">🥐</span>
          </div>

        </div>
      </div>
    </div>
  );
}