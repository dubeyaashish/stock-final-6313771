/*
Update page
It populates the blog data into the form.
*/
import Head from "next/head"
import Link from "next/link"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    reset(supplier)
  }, [])

  const updateBlog = async (data) => {
    const response = await fetch(`/api/supplier/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();   // deserialise
    if (result.error) {
      alert("Error: " + result.error)
    } else {
      alert("Supplier updated")
      window.location.href = "/Supplier"
    }
    console.log(result)
    setData(JSON.stringify(data))
  }

  console.log('blog 2', supplier)
  if (!supplier) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/Supplier">Back</Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Update {supplier.name}</title>
      </Head>

<p>{JSON.stringify(supplier)}</p>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <form onSubmit={handleSubmit(updateBlog)} style={{ width: '30rem', padding: '2rem', border: '1px solid #ccc', borderRadius: '4px' }}>
    <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Update Supplier</h1>
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name</label>
      <input id="name" {...register("name", { required: true })} placeholder="Supplier Name" style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
    </div>

    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="address" style={{ display: 'block', marginBottom: '.5rem' }}>Address</label>
      <input id="address" {...register("address", { required: true })} placeholder="Address" style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
    </div>

    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="phonenumber" style={{ display: 'block', marginBottom: '.5rem' }}>Phone number</label>
      <input id="phonenumber" {...register("phonenumber")} placeholder="Phone number" style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
    </div>

    <div style={{ textAlign: 'center' }}>
      <input type="submit" style={{ padding: '.5rem 2rem', borderRadius: '4px', border: 'none', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' }} />
    </div>

    <p style={{ textAlign: 'center', marginTop: '1rem' }}>{data}</p>
  </form>
</div>

<Link href="/Supplier">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://stock-final-6313771.vercel.app/api/supplier/${params.id}`)
  const supplier = await res.json()
  console.debug('blog 1', supplier)
  return { props: { supplier } }
}