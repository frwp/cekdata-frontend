const propTypes = require('prop-types');
import React from 'react'

const Header = (props) => {
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Cek Data</h1>
                <h3>Desa Jatijajar</h3>
            </div>
        </div>
        <nav>
        <ul>
            <li><button onClick={() => {props.openMenu('cek')}}>Cek Sekarang</button></li>
            <li><button onClick={() => {props.openMenu('why')}}>Kenapa Harus Cek Data?</button></li>
        </ul>
    </nav>
    </header>
}