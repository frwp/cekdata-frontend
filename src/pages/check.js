import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { useFormik } from 'formik';
import axios from 'axios';
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/check.css';
const isBrowser = typeof window !== "undefined";

export default function Check(props) {
  const [visible, setVisible] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [displayTopButton, setDisplayTopButton] = useState(false)
  const [loading, setLoading] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setDisplayTopButton(true)
    }
    else if (scrolled <= 300) {
      setDisplayTopButton(false)
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

  if (isBrowser) {
    window.addEventListener('scroll', toggleVisible);
  }

  const formik = useFormik({
    initialValues: {
      kodeKK: '',
      kodeNIK: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      const apiURL = 'https://cekdata-jatijajar.herokuapp.com/api/get'
      // alert(JSON.stringify(values, null, 2));
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          kode_kk: values.kodeKK,
          kode_nik: values.kodeNIK,
        },
        timeout: 15000,
      }
      axios({ url: apiURL, ...config }).then(result => {
        if (result.status !== 404) {
          console.log(result.status);
          navigate('/result', { state: { data: result.data.data } })
        } else {
          console.log('status:' + result.status);
          // window.alert('Data tidak ditemukan!');
        }
      }).catch(err => {
        setLoading(false);
        if (err.message.includes('404')) {
          // alert('Data tidak ditemukan!')
          setIsNotFound(true);
        } else {
          alert('Terjadi error di server, coba beberapa saat lagi.')
        }
        // console.warn(err);
        console.log(`err: ${err}`)
      })
    }
  });

  return (
    <>

      <div className="form">
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <div className="row">
            <div className="col-35">
              <label htmlFor="kodeKK">Nomor Kartu Keluarga</label>
            </div>
            <div className="col-65">
              <input type="text" id="kodeKK" name="kodeKK" onChange={formik.handleChange} value={formik.values.kodeKK} required />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-35">
              <label htmlFor="kodeNIK">NIK Kepala Keluarga</label>
            </div>
            <br />
            <div className="col-65">
              <input type="text" name="kodeNIK" id="kodeNIK" onChange={formik.handleChange} value={formik.values.kodeNIK} required />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-50">
              <button className="index-button" disabled={loading} type="submit">
                {loading &&
                  <FontAwesomeIcon icon={faSync} style={{ background: 'none' }} className="fa fa-refresh fa-spin" />
                }{' '}
                {!loading &&
                  <span style={{ background: 'none', fontWeight: 'bold' }}>
                    Cek Sekarang
                  </span>
                }
                {loading && <span style={{ background: 'none', fontWeight: 'bold' }}>Mohon tunggu</span>}
              </button>
            </div>
            <div className="col-50">
              <button className="index-button reset" type="reset">Reset</button>
            </div>
          </div>
          <div className="hidden-button">
            {isNotFound &&
              <>
                <p>Data tidak ditemukan. Ingin tambah data baru?</p>
                <button className="index-button" onClick={() => { setVisible(true); setIsNotFound(false); }} >Tambah data</button>
              </>
            }
            <span style={visible ? { width: '100%' } : { display: 'none' }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeVQBB6MzKErwVkC6pDmZg-0wX3bBMK-LwOFbyuyF266mwciQ/viewform?embedded=true"
                title="Form tambah data" width="100%" height="3750" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
            </span>
            <button onClick={scrollToTop} style={{ display: displayTopButton ? 'inline' : 'none' }} id="myBtn" title="Go to top">Top</button>
          </div>
        </form>
      </div>
    </>
  )
}
