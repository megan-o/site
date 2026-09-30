import { useEffect, useState } from 'react';
import MyCard from './MyCard';
import fallback from '../data/portfolio.json';
import { normalizeRows, sortPortfolio } from '../portfolioUtils';

export default function Portfolio() {
  const [entries, setEntries] = useState(fallback);
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(false);
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
  const filtered = sortPortfolio(entries).filter(entry => filter === 'All' || entry.Category === filter);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Research. Conversation.<br /><em>A little perspective.</em></h2></div><p>A selection of published research, industry conversations, and recognition.</p></div>
      <div className="work-filters" role="group" aria-label="Filter selected work">{['All', 'Research', 'Speaking', 'Recognition'].map(label => <button key={label} className={filter === label ? 'filter-button active' : 'filter-button'} aria-pressed={filter === label} onClick={() => { setFilter(label); setExpanded(false); }}>{label}</button>)}</div>
      <div className="work-grid">{visible.map(entry => <MyCard key={entry.Link} items={entry} />)}</div>
      <p className="sr-only" role="status">Showing {visible.length} of {filtered.length} {filter === 'All' ? 'portfolio' : filter.toLowerCase()} entries.</p>
      {filtered.length > 6 && <div className="show-more-wrap"><button className="button button-outline" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show featured work' : 'Explore all ' + filtered.length + ' entries'} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button></div>}
      {filtered.length === 0 && <p>No entries in this category yet. Explore the other categories above.</p>}
    </section>
  );
}
