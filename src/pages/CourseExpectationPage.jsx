function CourseExpectationPage() {
  return (
    <div className="page-container course-page">
      <div className="terminal-path" aria-label="Current location: portfolio course expectation">
        <span aria-hidden="true">➜</span> ~/portfolio/course-expectation
      </div>

      <section className="course-expectation-card" aria-labelledby="course-expectation-title">
        <span className="content-label" aria-hidden="true">[00]</span>
        <h1 id="course-expectation-title">Course Expectation</h1>
        <p>
          In the last semester, we tackled different types of algorithms used for predictive analytics.
          This semester, I am looking forward to learning about deep learning and natural language
          processing (NLP), especially how these technologies can solve more complex problems. I hope
          to gain practical knowledge of the tools and techniques used in these fields. I believe that
          learning these topics will strengthen my AI and data analytics skills, support my capstone
          project, and prepare me for future opportunities in the IT industry.
        </p>
      </section>

      <section className="course-assignment-card" aria-labelledby="assignment-title">
        <p className="assignment-command">$ cat adviser-questions.md</p>
        <h2 id="assignment-title">E-Portfolio Activity</h2>
        <p className="assignment-intro">
          We are tasked with creating an E-portfolio where our activities and assignments will be
          posted for our adviser to review. We were also asked to answer the following questions:
        </p>

        <article className="question-block" aria-labelledby="question-a-title">
          <p className="question-label">Question A</p>
          <h3 id="question-a-title">
            Identify and describe a specific business problem that can be addressed using deep
            learning-based predictive models. First, explain the nature and impact of the business
            problem. Then, discuss how deep learning can be applied to solve it, including strategies
            for addressing the &quot;black box&quot; challenge to improve the transparency,
            interpretability, and trustworthiness of the model&apos;s predictions.
          </h3>
          <div className="answer-copy">
            <p>
              In the business industry, one common problem is the increasing rate of customer churn,
              especially in e-commerce businesses. Customer churn happens when customers stop buying
              from a company and choose to purchase from a competitor instead. This is a major problem
              because losing customers also means losing revenue. At the same time, finding new
              customers can be difficult because of the strong competition in the industry.
            </p>
            <p>
              Deep learning can help solve this problem by analyzing large amounts of customer data,
              such as purchase history, browsing behavior, and customer interactions. By learning
              patterns from this data, a deep learning model can predict which customers are more
              likely to stop buying from the business. Once these customers are identified, the
              company can take action early to reduce customer churn. For example, it can offer
              personalized discounts, coupons, loyalty rewards, or better customer support to
              encourage customers to stay with the business.
            </p>
            <p>
              One challenge of using deep learning is the <strong>&quot;black box&quot;</strong> problem.
              This means that while the model can make accurate predictions, it is often difficult to
              understand how it came up with its decisions. To make the predictions more transparent
              and trustworthy, businesses can use AI tools that show which factors influenced the
              prediction the most. They can also have experts review the model&apos;s results, regularly
              test the model for fairness and accuracy, and clearly explain how customer data is being
              used. These practices help businesses build trust in the model while making better
              decisions.
            </p>
          </div>
        </article>

        <article className="question-block" aria-labelledby="question-b-title">
          <p className="question-label">Question B</p>
          <h3 id="question-b-title">
            Discuss how modern organizations are using advanced Natural Language Processing (NLP)
            models to develop intelligent, context-aware conversational systems that can dynamically
            adapt to diverse user characteristics, communication styles, and learning needs in real
            time.
          </h3>
          <div className="answer-copy">
            <p>
              Many organizations are using advanced Natural Language Processing (NLP) models to build
              intelligent chatbots and virtual assistants that can communicate with users more
              naturally. Unlike traditional chatbots that only respond to specific keywords, modern
              NLP models can understand the context of a conversation and provide more accurate and
              relevant responses. They can also adapt to different users by changing the way they
              communicate based on a person&apos;s needs, language, or previous interactions.
            </p>
            <p>
              These conversational systems are used in many businesses to improve customer service
              and make work more efficient. For example, Amazon uses AI chatbots to answer customer
              questions and recommend products based on shopping history. Duolingo also uses AI
              conversations that adjust to each learner&apos;s progress and learning style.
            </p>
            <p>
              Using these advanced NLP models, businesses can provide faster responses, personalized
              recommendations, and better customer experiences.
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default CourseExpectationPage
