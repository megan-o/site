import { useEffect, useState } from 'react';
import MyCard from './MyCard';
import fallback from '../data/portfolio.json';
import { normalizeRows, sortPortfolio } from '../portfolioUtils';

export default function Portfolio() {
  const [entries, setEntries] = useState(fallback);
  useEffect(() => {
    const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    if (!key) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    fetch('https://sheets.googleapis.com/v4/spreadsheets/10lIiQ8yqJFay3e6MR_6BkXJsb7Ix9W2LWKg-yuvQMQs/values/Sheet1!A1:H100?key=' + encodeURIComponent(key), { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Portfolio feed unavailable'); return response.json(); })
      .then(data => { if (!controller.signal.aborted) setEntries(normalizeRows(data.values)); })
      .catch(() => { /* Keep the verified snapshot visible when the live feed is unavailable. */ })
      .finally(() => clearTimeout(timeout));
    return () => { clearTimeout(timeout); controller.abort(); };
  }, []);
  return (
    <div className="data-list">
      <br />
      {sortPortfolio(entries).map(item => (
        <div key={item.Link}>
          <MyCard items={item} />
          <br />
        </div>
      ))}
    </div>
  );
}
