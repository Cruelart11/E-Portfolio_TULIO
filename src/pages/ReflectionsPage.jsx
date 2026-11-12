const periodReflections = [
  {
    period: 'Prelim',
    number: '01',
    reflection: "The Prelim period helped me build a stronger foundation in deep learning, neural networks, and Natural Language Processing. Through the exercises, I learned how data preparation, training, testing, and hyperparameter selection affect a model's performance. Comparing different configurations also helped me understand how overfitting and underfitting can happen and why a model should not be judged by accuracy alone. The written work and combined assessment expanded this foundation by introducing text preprocessing, TF-IDF, word embeddings, cosine similarity, artificial neurons, and the difference between parameters and hyperparameters. At first, these topics seemed like separate concepts, but working through the activities helped me see how they connect. Text must first be prepared and represented numerically before a model can learn from it, and the model's training process must then be evaluated carefully. Overall, the Prelim period strengthened my patience when comparing results and helped me become more thoughtful about the data, settings, and decisions involved in building a machine learning model.",
  },
  {
    period: 'Midterm',
    number: '02',
    reflection: "The Midterm period shifted my focus from individual machine learning concepts toward systems that use Large Language Models and Retrieval-Augmented Generation. Building and evaluating a RAG chatbot helped me understand how chunk size, overlap, embeddings, top-k retrieval, and fallback instructions influence the context given to a language model. Troubleshooting package compatibility and replacing a deprecated model also reminded me that changes in one part of the environment can affect the entire system. The project proposal taught me why a technical solution needs a focused problem, trustworthy sources, realistic questions, and clear evaluation measures. The combined assessment also clarified how LLMs differ from traditional machine learning models and why careful chunking helps preserve useful context. Overall, the Midterm period showed me that a capable language model is only one part of a reliable system. Source preparation, retrieval settings, testing, and human review are equally important. These activities strengthened my troubleshooting, research, planning, and collaboration skills.",
  },
  {
    period: 'Finals',
    number: '03',
    reflection: "The Finals period gave me the opportunity to examine RAG systems more systematically and apply what I learned in a complete group project. The exercises showed me how chunk size and overlap influence retrieval, and comparing multiple configurations taught me to use evidence instead of assumptions when selecting settings. I learned how Precision, Recall, and MRR describe different parts of retrieval performance and why one metric is not enough to identify the best configuration. The CPU and GPU experiments also showed me that faster processing does not automatically produce more accurate or well-supported answers. In the final project, I contributed by conducting the CPU and T4 GPU experiments, organizing the results, calculating speedups, comparing answer quality, helping recommend Configuration C, and assessing the final chatbot responses. Reviewing incorrect and partially correct answers taught me to examine citations, retrieved passages, OCR quality, and unsupported statements carefully. Overall, the Finals period strengthened my skills in experimentation, performance analysis, technical documentation, teamwork, and responsible AI evaluation. It also made me more confident in explaining limitations and making recommendations based on actual evidence.",
  },
]

function ReflectionsPage() {
  return (
    <div className="page-container reflections-page">
      <div className="terminal-path" aria-label="Current location: portfolio reflections">
        <span aria-hidden="true">➜</span> ~/portfolio/reflections
      </div>

      <section className="reflections-intro" aria-labelledby="reflections-title">
        <p className="section-label">Learning journey</p>
        <h1 id="reflections-title">Reflections</h1>
        <p>
          An overall reflection on what I learned, practiced, and improved during
          each grading period.
        </p>
      </section>

      <p className="folder-prompt reflections-command">
        <span>$</span> cat <strong>./reflections/*.md</strong>
      </p>

      <div className="reflection-card-list">
        {periodReflections.map((item) => {
          const titleId = `${item.period.toLowerCase()}-reflection-title`

          return (
            <article className="overall-reflection-card" key={item.period} aria-labelledby={titleId}>
              <div className="overall-reflection-heading">
                <span>{item.number}</span>
                <p>Overall learning reflection</p>
              </div>
              <h2 id={titleId}>{item.period}</h2>
              <p className="overall-reflection-copy">{item.reflection}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default ReflectionsPage
