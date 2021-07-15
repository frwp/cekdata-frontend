import React from 'react'

export default function Result(props) {

  const renderTableBody = () => {
    const data = props.location.state.data;
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
            <td>{new Date(item.tanggal_lahir.toString()).toString()}</td>
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
    // console.log(props.location.state.data)
    // return JSON.stringify(props.location.state.data);
  }

  return (
    <div className='table'>
      <table>
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
  )
}
