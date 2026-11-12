function PortfolioSubmission({ url }) {
  return (
    <article className="prelim-activity" aria-labelledby="written-work-1-title">
      <div className="prelim-activity-heading">
        <span>Written Work 1</span>
        <strong>Submitted</strong>
      </div>
      <h2 id="written-work-1-title">E-Portfolio Submission</h2>

      <div className="portfolio-submission-card">
        <div>
          <p>Submitted output</p>
          <h3>Predictive Analytics E-Portfolio</h3>
          <p className="portfolio-submission-url">{url}</p>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          View Submitted E-Portfolio <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default PortfolioSubmission
