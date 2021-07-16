import React, { useEffect, useState } from 'react';
import '../styles/result.css';

export default function Result(props) {
  const [data, setData] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [displayButton, setDisplayButton] = useState(true);
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    function getData() {
      const data = props.location.state ? props.location.state.data : [];
      setData(data);
    }
    getData();
  });

  const renderTableBody = () => {
    console.table(data);
    return (
      data.map(item => {
        return (
          <tr key={item.id}>
            <td>{item.rt}</td>
            <td>{item.rw}</td>
            <td>{item.dusun}</td>
            <td>{item.alamat}</td>
            <td>{item.kode_kk}</td>
            <td>{item.kepala_keluarga}</td>
            <td>{item.kode_nik}</td>
            <td>{item.nama_anggota}</td>
            <td>{item.jenis_kelamin}</td>
            <td>{item.hubungan_dalam_keluarga}</td>
            <td>{item.tempat_lahir}</td>
            <td>{new Date(item.tanggal_lahir).toDateString()}</td>
            <td>{item.status_perkawinan}</td>
            <td>{item.agama}</td>
            <td>{item.golongan_darah}</td>
            <td>{item.kewarganegaraan}</td>
            <td>{item.etnis_suku}</td>
            <td>{item.pendidikan}</td>
            <td>{item.pekerjaan}</td>
          </tr>
        )
      })
    )
  }

  const handleOpenForm = () => {
    setOpenForm(true);
  }

  return (
    <>
      <div style={{ overflowX: 'auto' }}>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>RT</th>
              <th>RW</th>
              <th>Dusun</th>
              <th>Alamat</th>
              <th>Nomor KK</th>
              <th>Kepala Keluarga</th>
              <th>NIK</th>
              <th>Nama Anggota</th>
              <th>Jenis Kelamin</th>
              <th>Hubungan dalam Keluarga</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Status</th>
              <th>Agama</th>
              <th>Golongan Darah</th>
              <th>Kewarganegaraan</th>
              <th>Etnis/Suku</th>
              <th>Pendidikan Terakhir</th>
              <th>Pekerjaan</th>
            </tr>
          </thead>
          <tbody>
            {renderTableBody()}
          </tbody>
        </table>
        {/* <p>
        {renderTableBody()}
      </p> */}
      </div>
      <div className='google-form'>
        <div style={displayButton ? {} : { display: 'none' }}>
          <p>Apakah data di atas sudah benar?</p>
          <button className='index-button' onClick={() => { setDisplayButton(false) }} >Ya sudah benar</button>
          <button className='index-button' onClick={() => { setDisplayButton(false); handleOpenForm(); }}>Ajukan perbaikan</button>
        </div>
        {openForm &&
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdNJn4SeJ4oErUDPcyRD_6GaC4oXIOftXb2qdllZFePVCyxKQ/viewform?embedded=true"
            width="100%" height="3750"
            title='Form ubah data' frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
        }
        <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} id="myBtn" title="Go to top">Top</button>
      </div>
    </>
  )
}
