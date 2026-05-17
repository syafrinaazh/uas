import React from 'react';
import './Dashboard.css';
import logoImg from '../assets/logo.jpeg'; 

export default function Dashboard() {
  // Fungsi pengetesan saat resep diklik
  const bukaResep = (namaResep) => {
    alert(`Menuju ke halaman detail resep: ${namaResep}`);
  };

  return (
    <div className="dash-wrapper">
      <div className="dash-outer-frame">
        <div className="dash-card">
          
          {/* 1. Bar Info Profil Atas */}
          <div className="profile-bar-top">
            <div className="profile-info-left">
              <span className="profile-pic">👩‍🍳</span>
              <span className="profile-name">Fina</span>
              <span className="profile-badge">Kategori 20</span>
              <span className="profile-points">✦ 100</span>
            </div>
            <div className="profile-icons-right">
              <span className="icon-item">❤️</span>
              <span className="icon-item">🔖</span>
              <span className="icon-item">🛒</span>
              <span className="icon-item">👤</span>
            </div>
          </div>

          {/* 2. Banner Putih Utama */}
          <div className="main-banner-box">
            <div className="banner-logo-container">
              <img src={logoImg} alt="Kost Cook Logo" className="banner-logo" />
            </div>
            <div className="banner-nav">
              <button className="nav-btn active">beranda</button>
              <button className="nav-btn">kategori</button>
              <button className="nav-btn">resep populer</button>
              <button className="nav-btn">mulai memasak</button>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="search-section">
            <div className="search-box-green">
              <input type="text" placeholder="Cari resep favoritmu..." className="search-field" />
              <button className="search-btn-icon">🔍</button>
            </div>
          </div>

          {/* 4. Kategori Pil */}
          <div className="categories-horizontal">
            <button className="cat-pill">Sarapan</button>
            <button className="cat-pill">Makan siang</button>
            <button className="cat-pill">Makan malam</button>
            <button className="cat-pill">Minuman</button>
          </div>

          {/* 5. Konten Utama */}
          <div className="main-content-flex">
            
            {/* Sisi Kiri: Resep Terbaru (LIST GAMBAR BISA DIPENCET) */}
            <div className="left-recipes">
              <h3 className="section-title-brown">Resep Terbaru</h3>
              
              {/* Resep 1: Spaghetti */}
              <button className="recipe-clickable-bar" onClick={() => bukaResep('Spaghetti Carbonara')}>
                <div className="recipe-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=150" 
                    alt="Spaghetti" 
                    className="recipe-real-img"
                  />
                </div>
                <div className="recipe-text-container">
                  <span className="recipe-name-text">Spaghetti Carbonara</span>
                </div>
              </button>

              {/* Resep 2: Ayam */}
              <button className="recipe-clickable-bar" onClick={() => bukaResep('Rotisserie Chicken')}>
                <div className="recipe-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=150" 
                    alt="Chicken" 
                    className="recipe-real-img"
                  />
                </div>
                <div className="recipe-text-container">
                  <span className="recipe-name-text">Rotisserie Chicken</span>
                </div>
              </button>

              {/* Resep 3: Sate */}
              <button className="recipe-clickable-bar" onClick={() => bukaResep('Sate Ayam')}>
                <div className="recipe-img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=150" 
                    alt="Sate" 
                    className="recipe-real-img"
                  />
                </div>
                <div className="recipe-text-container">
                  <span className="recipe-name-text">Sate Ayam</span>
                </div>
              </button>

              <button className="btn-load-more">Jelajahi Resep ➕</button>
            </div>

            {/* Sisi Kanan: Makanan Ringan */}
            <div className="right-sidebar">
              <div className="sidebar-box">
                <h4 className="sidebar-title">Makanan Ringan</h4>
                <div className="snack-item"><span className="snack-pic">🍓</span><p>Pie Strawberry</p></div>
                <div className="snack-item"><span className="snack-pic">🍞</span><p>Toast Bread</p></div>
                <div className="snack-item"><span className="snack-pic">🍰</span><p>Cake Strawberry</p></div>
                <button className="btn-lihat-semua">Lihat semua ➔</button>
              </div>
            </div>

          </div>

          {/* 6. Footer Promo */}
          <div className="footer-promo-banner">
            <div className="promo-text-side">
              <h4>Butuh inspirasi masakan enak anak kost?</h4>
              <button className="btn-promo-green">Lihat kategori resep ➔</button>
            </div>
            <div className="promo-image-side">🥐</div>
          </div>

        </div>
      </div>
    </div>
  );
}