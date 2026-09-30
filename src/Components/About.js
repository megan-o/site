export default function About() {
  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
      <div className="section-label"><p className="eyebrow">02 / ABOUT</p><span className="section-number" aria-hidden="true">?</span></div>
      <div className="about-content">
        <h2 id="about-title">The most useful insight<br />starts with <em>a better question.</em></h2>
        <p className="about-lead">A background in psychology. A curiosity about people. A career connecting the two.</p>
        <p>I’m a consumer research and insights professional on the OM Intelligence team at Omnicom Media. I lead the design and execution of custom primary research supporting client strategy, new business, and agency thought leadership.</p>
        <p>My work spans consumer sentiment, generational marketing, media behavior, and cultural trends. From survey design and qualitative exploration to analysis and storytelling, I help teams understand what matters to people—and what that means for brands.</p>
        <p>Before Omnicom, I worked on the research vendor side at Leger and Numerator. Today, I bring that methodological foundation to strategic research, longitudinal trend analysis, and presentations for clients and internal teams.</p>
        <div className="expertise-tags" aria-label="Areas of expertise">{['Quantitative & qualitative research', 'Consumer & cultural trends', 'Segmentation & brand health', 'Media & audience behavior', 'Insight storytelling'].map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="credentials">
          <div><h3>Education</h3><p>M.S., Psychology of Mental Health<br /><span>University of Edinburgh</span></p><p>B.S., Biology & Psychology<br /><span>Stony Brook University</span></p></div>
          <div><h3>Beyond the day job</h3><p><a href="https://thearf.org/communities/young-pros/advisory-board/" target="_blank" rel="noopener noreferrer">ARF Young Pros Advisory Board ↗</a><br /><span>Member since November 2022</span></p><p>ARF WIDE Mentor<br /><span>Since November 2022</span></p><p><a href="https://thearf.org/nyu-arf-certificate-in-marketing-optimization-and-insights-graduates/" target="_blank" rel="noopener noreferrer">NYU/ARF Certificate ↗</a><br /><span>Marketing Optimization and Insights · 2024</span></p></div>
        </div>
      </div>
    </section>
  );
}
