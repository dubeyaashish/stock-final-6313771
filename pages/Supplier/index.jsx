import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ suppliers }) {


  function deleteSupplier(id) {
    fetch(`/api/supplier/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Suppliers</title>
      </Head>
      <h1>Suppliers</h1>
      <p style={{ margin: '0.4rem' }}>
        <Link href="/Supplier/add">+Add Supplier</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th style={{width: '20rem'}}>Name</th>
            <th style={{width: '10rem'}}>Address</th>
            <th style={{width: '10rem'}}>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers.map(supplier => {
              return (
                <tr key={supplier._id}>
                  <td>
                    <Link href={`/Supplier/${supplier._id}`}>
                      {supplier.name}
                    </Link>
                  </td>
                  <td style={{textAlign:'center'}}>{supplier.name}</td>
                  <td style={{textAlign:'center'}}>{supplier.address}</td>
                  <td style={{textAlign:'center'}}>{supplier.phonenumber}</td>

                  <td>
                      <>
                        <Link href={`/Supplier/update/${supplier._id}`}>Update</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteSupplier(supplier._id)}>Delete</button>
                      </>
                
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr/>
      <Link href="/">Home</Link>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/supplier/`)
  const suppliers = await res.json()
  // console.debug('blog 1', blogs)
  return { props: { suppliers } }
}