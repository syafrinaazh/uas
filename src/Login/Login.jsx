import React from 'react';
import './Login.css';
// Jalurnya disesuaikan: naik 1 kali ke folder src, lalu masuk ke assets
import logoImg from '../assets/logo.jpeg'; 

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        
        {/* Sisi Kiri: Logo */}
        <div className="login-left">
          <img src={logoImg} alt="Kost Cook Logo" className="login-logo" />
        </div>

        {/* Sisi Kanan: Form */}
        <div className="login-right">
          <h2 className="login-welcome">
            selamat datang kembali <br />
            <span>silahkan login untuk memulai</span>
          </h2>

          <form className="login-form">
            <div className="input-group">
              <input type="text" placeholder="email / username" />
            </div>
            
            <div className="input-group">
              <input type="password" placeholder="password" />
              <a href="#" className="forgot-password">forgot password / create new account</a>
            </div>

            <button type="submit" className="btn-login">
              masuk
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}