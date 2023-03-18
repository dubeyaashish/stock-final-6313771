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

      <div className="button-container">
        <Link href="/about">
          <button>About</button>
        </Link>
        <Link href="/Supplier">
          <button className="lavender">Suppliers List</button>
        </Link>
      </div>

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
          font-family: Avantgarde;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #666;
        }

        .button-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
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
        button.lavender {
          background-color: lavender;
          color: #333;
        }
        
        button.lavender:hover {
          background-color: #b6a2de;
        }
      `}</style>
    </div>
  );
}
