export function safeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch { return null; }
}

export function parseDate(value) {
  const text = String(value || '').trim();
  if (/^\d{4}$/.test(text)) return new Date(Number(text), 11, 31);
  if (/^\d{4}-\d{2}$/.test(text)) return new Date(Number(text.slice(0, 4)), Number(text.slice(5)) - 1, 1);
  const usDate = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (usDate) return new Date(Number(usDate[3]), Number(usDate[1]) - 1, Number(usDate[2]));
  const isoDate = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDate) return new Date(Number(isoDate[1]), Number(isoDate[2]) - 1, Number(isoDate[3]));
  return null;
}

export function formatDate(value) {
  if (/^\d{4}$/.test(String(value))) return String(value);
  const date = parseDate(value);
  return date && !Number.isNaN(date.getTime()) ? date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
}

export function normalizeRows(values) {
  if (!Array.isArray(values) || values.length < 2 || !Array.isArray(values[0])) throw new Error('The portfolio feed is empty.');
  const headers = values[0].map(header => String(header).trim());
  if (!['Name', 'Link', 'Description'].every(key => headers.includes(key))) throw new Error('The portfolio feed is missing required columns.');
  const entries = values.slice(1).filter(Array.isArray).map(row => Object.fromEntries(headers.map((header, index) => [header, String(row[index] || '').trim()]))).filter(item => item.Name && safeUrl(item.Link));
  if (!entries.length) throw new Error('The portfolio feed has no usable entries.');
  return entries;
}

export function sortPortfolio(entries) {
  return [...entries].sort((a, b) => (parseDate(b.Date)?.getTime() || 0) - (parseDate(a.Date)?.getTime() || 0));
}
