export default function Index () {
  return (
    <main className='center'>
      <div className='quote'>Write tests, not too many, mostly integration</div>
      <span className='author'> - Guillermo Rauch </span>

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}
      </style>
    </main>
  );
}

// import useSWR from 'swr';
//
// function fetcher (url) {
//   return fetch(url).then(r => r.json());
// }
//
// export default function Index () {
//   const { data, error } = useSWR('/api/randomQuote', fetcher);
//   // The following line has optional chaining, added in Next.js v9.1.5,
//   // is the same as `data && data.author`
//
//   if (!data) quote = 'Loading...';
//   if (error) quote = 'Failed to fetch the quote.';
//
//   return (
//     <main className="center">
//       <div className="quote">{quote}</div>
//       {data && <span className="data">- {data}</span>}
//       <style jsx>{`
//         main {
//           width: 90%;
//           max-width: 900px;
//           margin: 300px auto;
//           text-align: center;
//         }
//         .quote {
//           font-family: cursive;
//           color: #e243de;
//           font-size: 24px;
//           padding-bottom: 10px;
//         }
//         .data {
//           font-family: sans-serif;
//           color: #559834;
//           font-size: 20px;
//         }
//       `}</style>
//     </main>
//   );
// }
