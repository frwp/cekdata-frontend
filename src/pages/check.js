import React from 'react';
import { navigate } from 'gatsby';
import { useFormik } from 'formik';
import axios from 'axios';
import '../styles/check.css';

export default function Check(props) {
  const formik = useFormik({
    initialValues: {
      kodeKK: '',
      kodeNIK: '',
    },
    onSubmit: (values) => {
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
        timeout: 10000,
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
          if (err.message.includes('404')) {
            alert('Data tidak ditemukan!')
          } else {
            alert('Terjadi error di server, mohon tunggu kurang lebih 5 menit.')
          }
          // console.warn(err);
          console.log(`err: ${err}`)
      })
    }
  });

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div className="row">
          <div className="col-35">
            <label htmlFor="kodeKK">Nomor Kartu Keluarga</label>
          </div>
          <div className="col-65">
            <input type="text" id="kodeKK" name="kodeKK" onChange={formik.handleChange} value={formik.values.kodeKK} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-35">
            <label htmlFor="kodeNIK">NIK Kepala Keluarga</label>
          </div>
          <br />
          <div className="col-65">
            <input type="text" name="kodeNIK" id="kodeNIK" onChange={formik.handleChange} value={formik.values.kodeNIK} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-50">
            <button className="index-button" type="submit">Cek Sekarang</button>
          </div>
          <div className="col-50">
            <button className="index-button reset" type="reset">Reset</button>
          </div>
        </div>
      </form>
    </div>
  )
}
