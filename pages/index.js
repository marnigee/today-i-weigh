import { useEffect, useState } from 'react';
import Head from 'next/head';
import TableRow from '../components/TableRow';
import '../styles/index.css';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData () {
      const res = await fetch('/api');
      const newData = await res.json();
      setData(newData);
    }
    getData();
  }, []);
  return (
    <main>
      <Head>
        <title>Next.js, FaunaDB and Node.js</title>
      </Head>
      <h1>Next.js, FaunaDB and Node.js</h1>
      <hr />
      <div className='container-scroll'>
        <div className='container'>
          <h2>Customer Data</h2>
          <div className='table'>
            <h4>name</h4>
            <h4 className='telephone'>telephone</h4>
            <h4 className='credit-card'>credit card</h4>
          </div>
          {data.length > 0 ? (
            data.map(d => (
              <TableRow
                key={d.data.telephone}
                creditCard={d.data.creditCard.number}
                firstName={d.data.firstName}
                lastName={d.data.lastName}
                telephone={d.data.telephone}
              />
            ))
          ) : (
            <>
              <TableRow loading />
              <TableRow loading />
              <TableRow loading />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

// import useSWR from 'swr';
//
// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }
//
// export default function Index() {
//   const { data, error } = useSWR('/api/randomQuote', fetcher);
//   console.log('*** data: ', data);
//   let quote = data?.quote;
//
//   if (!data) quote = 'Loading...';
//   if (error) quote = 'Failed to fetch the quote.';
//
//   return (
//     <main className="center">
//       <div className="quote">{quote}</div>
//       {data && <span className="author">{data[2].latestWeight}</span>}
//     </main>
//   );
// }
