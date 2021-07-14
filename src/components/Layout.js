import '../styles/index.css';
import React from 'react'
import Header from './Header'
import { Link } from 'gatsby';
import ugmLogo from '../images/Logo Tengah Stack-Up 1.png';
import kknLogo from '../images/logo_bersamaayah.png'

export default function Layout({ children, location }) {
  return (
    <div className="container">
      <nav className="layout">
        {/* <Link style={{ margin: '1em' }} to="/test">Test</Link> */}
        <img src={kknLogo} style={{ height: '81px', marginInline: '0.5em' }} alt="Logo KKN Bersama Ayah" />
        <img src={ugmLogo} style={{ width: '80px', marginInline: '0.5em' }} alt="Logo UGM" />
        <Link style={{ margin: '1em', marginRight: 'auto' }} to="/">Home</Link>
      </nav>
      <div className={location.pathname === '/' ? 'header-right' : ''}>
        <Header />
      </div>
      <div className="body">
        {children}
      </div>
      <footer>
        <p>KKN PPM UGM 2021 @bersama.ayah, Kebumen</p>
      </footer>
    </div>
  )
}
