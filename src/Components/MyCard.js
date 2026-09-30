import { formatDate, safeUrl } from '../portfolioUtils';

export default function MyCard({ items }) {
  const link = safeUrl(items.Link);
  if (!link) return null;
  const category = items.Category || 'Research';
  return (
    <article className={'work-card category-' + category.toLowerCase()}>
      <div className="card-meta"><span className="category-label">{category}</span><span>{formatDate(items.Date)}</span></div>
      <p className="card-partner">{items.Partner || 'Selected work'}</p>
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{items.Name}</a></h3>
      <p className="card-description">{items.Description}</p>
      <a className="card-link" href={link} target="_blank" rel="noopener noreferrer" aria-label={'Read ' + items.Name}>{category === 'Speaking' ? 'View event' : category === 'Recognition' ? 'View recognition' : 'Read the research'} <span aria-hidden="true">↗</span></a>
    </article>
  );
}
