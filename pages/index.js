import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  const { data, error } = useSWR('/api/randomQuote', fetcher);
  console.log('*** data: ', data);
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {data && <span className="author">{data[2].latestWeight}</span>}
    </main>
  );
}
