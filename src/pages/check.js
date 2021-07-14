import React from 'react'
import { useFormik } from 'formik';
import '../styles/check.css';

export default function Check() {
  const formik = useFormik({
    initialValues: {
      kodeKK: '',
      kodeNIK: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
