import React, { Component } from 'react'
import { Link } from "gatsby";
import '../styles/index.css';

export default class Index extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/check"><button className="index-button">Cek Sekarang</button></Link>
        <Link to="/why"><button className="index-button">Kenapa Harus Cek Data?</button></Link>
      </div>
    )
  }
}
