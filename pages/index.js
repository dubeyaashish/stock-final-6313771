import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Aashish Dubey</title>
      </Head>
      <h1>Suppliers</h1>
      <p>Supplier Page for final exam.</p>

      <Link href="/about">
        <button>About</button>
      </Link>
      <Link href="/Supplier">
        <button>Suppliers List</button>
      </Link>

      <style jsx>{`
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        h1 {
          font-size: 4rem;
          margin-bottom: 2rem;
          color: #333;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #666;
        }

        button {
          padding: 1rem 2rem;
          margin: 1rem;
          font-size: 1.5rem;
          color: #fff;
          background-color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        button:hover {
          background-color: #666;
        }
      `}</style>
    </div>
  );
}
