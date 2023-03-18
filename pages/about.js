import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
    <center><Head>
      <title>About Page</title>
    </Head>
    <h1>It's me, Hi</h1>
    <p>
      Aashish Dubey.
    </p>
    <Link href="/">Home</Link></center>

    </>
  )
}