import '../styles/global.css';
import React from 'react'
import Header from './Header'
import { Link } from 'gatsby';
// import ugmLogo from '../images/Logo Tengah Stack-Up 1.png';
// import kknLogo from '../images/logo_bersamaayah.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet'

export default function Layout({ children, location }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css" />
      </Helmet>
      <div className="container">
        <nav className="layout">
          <StaticImage style={{ marginInline: '0.5em' }} src='../images/logo_bersamaayah.png' height={81} alt="Logo KKN PPM UGM Bersama Ayah" placeholder="blurred" />
          <StaticImage style={{ marginInline: '0.5em' }} src='../images/Logo Tengah Stack-Up 1.png' width={80} alt="Logo UGM" placeholder="blurred" />
          {location.pathname !== '/' && <Link style={{ margin: '1em', marginRight: 'auto' }} to="/"><FontAwesomeIcon icon={faAngleDoubleLeft} size="3x" color="#5B4434" /></Link>}
        </nav>
        <div className={location.pathname === '/' ? 'header-right' : ''}>
          <Header />
        </div>
        <div className="body">
          {children}
        </div>
        <footer style={{ marginBottom: '70px' }}>
          <p>KKN PPM UGM 2021 @bersama.ayah, Kebumen</p>
        </footer>
      </div>
    </>
  )
}
