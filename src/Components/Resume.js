const jobs = [
  { company: 'Omnicom Media', dates: '2021 — Present', role: 'Associate Director, Primary Research', note: 'Associate Director since May 2026 · Previously Manager and Senior Analyst', description: 'Custom primary research, longitudinal consumer trends, enterprise thought leadership, and strategic insights for clients and agency teams.' },
  { company: 'Leger USA', dates: '2021', role: 'Senior Research Analyst', description: 'Custom consumer and market research, brand health tracking, copy testing, and B2B/B2C research communities.' },
  { company: 'Numerator', dates: '2019 — 2021', role: 'Research Associate', description: 'Research design, survey programming, fieldwork, and analysis across more than 100 projects.' },
  { company: 'University of Edinburgh & Stony Brook University', dates: '2015 — 2019', role: 'Academic research', description: 'Research spanning mental health, sampling methodology, leadership, and human behavior.' }
];

export default function Resume() {
  return (
    <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
      <div className="section-heading"><div><p className="eyebrow">03 / EXPERIENCE</p><h2 id="experience-title">Built on research.<br /><em>Driven by people.</em></h2></div><a className="button button-outline" href={process.env.PUBLIC_URL + '/Megan-OBrien-Resume.pdf'} target="_blank" rel="noopener noreferrer">View full resume <span aria-hidden="true">↗</span></a></div>
      <div className="career-list">{jobs.map(job => <article className="career-row" key={job.company}><p className="career-dates">{job.dates}</p><div><h3>{job.company}</h3><p className="career-role">{job.role}</p>{job.note && <p className="career-note">{job.note}</p>}</div><p className="career-description">{job.description}</p></article>)}</div>
      <p className="tools-line"><span>RESEARCH TOOLKIT</span> SPSS · Q Analytics · MarketSight · Qualtrics · Forsta · Alchemer · CMIX · SQL</p>
    </section>
  );
}
