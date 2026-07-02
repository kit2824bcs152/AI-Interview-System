const questionsByRoleAndDifficulty = {
  'software-engineer': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as web development, AI, or cybersecurity?',
      'Can you explain a project you worked on in simple terms?',
      'How do you usually learn a new technology?',
      'Tell me about a time you solved a small problem creatively.',
      'How do you stay organized when handling multiple tasks?'
    ],
    mid: [
      'Can you walk me through a recent project and explain the role you played?',
      'How do you approach debugging a problem when the root cause is not obvious?',
      'Tell me about a time you had to balance speed and quality in a delivery.',
      'How do you handle a situation where requirements keep changing mid-project?',
      'What would you do if a teammate disagreed with your technical approach?'
    ],
    advanced: [
      'How would you design a resilient system for high traffic and failure recovery?',
      'Describe a time you had to optimize a bottleneck in a production application.',
      'How do you make tradeoffs between scalability, cost, and delivery speed?',
      'Explain how you would lead a technical decision with unclear requirements.',
      'What is your approach to mentoring junior developers and improving team quality?' 
    ]
  },
  'product-manager': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as product strategy, fintech, or healthcare?',
      'What makes a good product idea?',
      'How do you understand user needs?',
      'Tell me about a time you worked with a team to solve a problem.',
      'How do you stay clear and organized in communication?'
    ],
    mid: [
      'How would you decide whether a feature should be built now or deferred?',
      'Tell me about a time you had to influence a team without direct authority.',
      'How do you handle competing priorities from different stakeholders?',
      'How would you prioritize a roadmap when multiple teams request urgent support?',
      'Describe a time you had to make a decision with incomplete information.'
    ],
    advanced: [
      'How would you evaluate whether a product strategy is working after launch?',
      'Describe a situation where you had to balance user value, business goals, and technical constraints.',
      'How do you make tradeoffs when a strong stakeholder pushes for a feature you believe is low value?',
      'What framework would you use to prioritize initiatives across multiple teams?',
      'How do you handle a product failure and turn it into a learning opportunity?'
    ]
  },
  'data-analyst': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as business analytics, finance, or healthcare?',
      'How do you explain data in a simple way?',
      'What kind of analysis interests you the most?',
      'Tell me about a time you noticed a pattern in information.',
      'How do you make sure your findings are easy to understand?'
    ],
    mid: [
      'How do you validate whether a dataset is reliable before analyzing it?',
      'Tell me about a time your analysis led to a decision that changed a business outcome.',
      'How do you explain technical findings to a non-technical audience?',
      'How would you investigate a sudden drop in a key business metric?',
      'Describe how you would communicate an unpopular insight to leadership.'
    ],
    advanced: [
      'How would you design a robust analytics framework for a fast-growing product?',
      'Describe how you would detect and explain a subtle data quality issue.',
      'How do you evaluate whether an experiment result is statistically meaningful?',
      'What metrics would you track to understand product retention?',
      'How do you communicate uncertainty in data-driven recommendations?'
    ]
  },
  'frontend-developer': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as React, UI engineering, or web performance?',
      'What do you enjoy most about building user interfaces?',
      'How do you make a page easier for users to understand?',
      'Tell me about a simple UI problem you solved.',
      'What do you check first when a website looks broken?'
    ],
    mid: [
      'How do you make a web application both user-friendly and performant?',
      'Describe a time you improved accessibility or responsiveness in a product.',
      'How do you approach debugging UI issues across different browsers?',
      'What factors do you consider when choosing between component libraries and custom UI?',
      'How do you structure frontend code for long-term maintainability?'
    ],
    advanced: [
      'How would you optimize a large frontend application for performance under heavy load?',
      'Describe how you would architect a component system for multiple teams.',
      'How do you balance code reuse with simplicity in a complex UI?',
      'What strategies do you use to reduce rendering and loading bottlenecks?',
      'How do you approach frontend observability and debugging in production?'
    ]
  },
  'backend-developer': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as APIs, databases, or cloud systems?',
      'What is your favorite part of building backend systems?',
      'How do you make an application easier to maintain?',
      'Tell me about a time you fixed a problem in an application.',
      'How do you think about data security in simple terms?'
    ],
    mid: [
      'How do you design a scalable backend service for growing traffic?',
      'Tell me about a time you improved API performance or reliability.',
      'How do you handle data consistency and transactions in a distributed system?',
      'What steps do you take to secure an application from common backend threats?',
      'How do you approach debugging issues in production environments?'
    ],
    advanced: [
      'How would you design a distributed system that remains reliable during partial outages?',
      'Describe how you would optimize database access for a high-scale product.',
      'How do you approach idempotency and retries in critical APIs?',
      'What tradeoffs do you consider when choosing between synchronous and asynchronous architectures?',
      'How do you ensure observability and incident response for backend services?'
    ]
  },
  'ui-ux-designer': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as mobile apps, SaaS, or e-commerce?',
      'What kind of users do you enjoy designing for?',
      'How do you begin a design when you know very little about the problem?',
      'Tell me about a simple design improvement you made.',
      'How do you decide what matters most in a user interface?'
    ],
    mid: [
      'How do you approach user research before designing a new experience?',
      'Describe a design decision you made that improved user engagement.',
      'How do you balance business goals with usability in your design process?',
      'What is your approach to iterating on feedback from users and stakeholders?',
      'How do you create designs that remain consistent across a product?'
    ],
    advanced: [
      'How do you design a system that scales across multiple platforms without losing consistency?',
      'Describe how you would lead a redesign when stakeholders disagree on priorities.',
      'How do you measure the impact of a design change on user behavior?',
      'What process do you use to turn research insights into actionable design decisions?',
      'How do you balance innovation with usability in a mature product?'
    ]
  },
  'sales-executive': {
    starter: [
      'Could you please tell me your name and the domain you are interested in, such as B2B sales, retail, or SaaS?',
      'What makes you interested in sales?',
      'How do you introduce yourself to a new client?',
      'Tell me about a time you persuaded someone to try something new.',
      'How do you stay motivated when targets are high?'
    ],
    mid: [
      'How do you build rapport with a new client during the first meeting?',
      'Tell me about a time you handled a difficult customer objection.',
      'How do you prioritize leads when your pipeline is full?',
      'What methods do you use to maintain long-term client relationships?',
      'How do you recover when a deal is close to falling apart?'
    ],
    advanced: [
      'How would you build a strategy for entering a new market or segment?',
      'Describe a time you influenced a large account through a long sales cycle.',
      'How do you align sales goals with business growth and customer success?',
      'What methods do you use to forecast revenue accurately?',
      'How do you mentor a junior sales team while still hitting your own targets?'
    ]
  }
};


const difficultyPrompts = {
  starter: 'Keep your answer concise and clearly structured.',
  mid: 'Use a specific example and explain your reasoning.',
  advanced: 'Provide a nuanced example with tradeoffs and measurable impact.'
};

const state = {
  role: 'software-engineer',
  difficulty: 'starter',
  currentIndex: 0,
  questions: [],
  answers: []
};

const roleSelect = document.getElementById('role');
const difficultySelect = document.getElementById('difficulty');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const prevBtn = document.getElementById('prevBtn');
const skipBtn = document.getElementById('skipBtn');
const answerInput = document.getElementById('answerInput');
const feedbackBox = document.getElementById('feedbackBox');
const questionText = document.getElementById('questionText');
const progressLabel = document.getElementById('progressLabel');
const progressFill = document.getElementById('progressFill');

function shuffleQuestions(questions) {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startInterview() {
  state.role = roleSelect.value;
  state.difficulty = difficultySelect.value;
  const roleQuestions = questionsByRoleAndDifficulty[state.role]?.[state.difficulty] || [];
  state.questions = shuffleQuestions(roleQuestions);
  state.currentIndex = 0;
  state.answers = [];
  answerInput.value = '';

  renderQuestion();
  feedbackBox.innerHTML = `<p><strong>Prompt:</strong> ${difficultyPrompts[state.difficulty]}</p>`;
}

function renderQuestion() {
  const total = state.questions.length;
  const current = state.questions[state.currentIndex];
  questionText.textContent = current;
  progressLabel.textContent = `Question ${state.currentIndex + 1} of ${total}`;
  progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
  answerInput.value = state.answers[state.currentIndex] || '';
  answerInput.focus();
}

function getSuggestedAnswer(question) {
  const lower = question.toLowerCase();

  if (lower.includes('name') && lower.includes('domain')) {
    return 'My name is [Your Name], and I am interested in [domain]. I am motivated by [reason], and I want to grow by building practical skills and real-world experience.';
  }

  if (lower.includes('project')) {
    return 'I worked on a project where I was responsible for [task]. I identified a challenge, took ownership of the solution, and the result was [improvement or outcome].';
  }

  if (lower.includes('debug') || lower.includes('problem')) {
    return 'I would first reproduce the issue, gather evidence, isolate the root cause, and then test a fix before rolling it out.';
  }

  if (lower.includes('team') || lower.includes('teammate') || lower.includes('stakeholder')) {
    return 'I would listen carefully, understand the concern, communicate my point clearly, and work toward a solution that supports the shared goal.';
  }

  if (lower.includes('design') || lower.includes('architecture')) {
    return 'I would start by defining the goal, identify the constraints, choose a practical design, and explain the tradeoffs clearly.';
  }

  if (lower.includes('client') || lower.includes('customer') || lower.includes('sales')) {
    return 'I would focus on understanding the customer’s needs, building trust, and offering a solution that clearly addresses their goals.';
  }

  if (lower.includes('data') || lower.includes('analysis')) {
    return 'I would validate the data, check assumptions, interpret the results carefully, and explain the findings in simple business terms.';
  }

  return 'A strong answer should be clear, specific, and include a real example, the action you took, and the result you achieved.';
}

function analyzeResponse(answer, question) {
  const text = answer.toLowerCase();
  const positiveWords = ['good', 'great', 'confident', 'strong', 'clear', 'effective', 'successful', 'improved', 'delivered', 'learned', 'valuable', 'focused'];
  const negativeWords = ['sorry', 'maybe', 'probably', 'i think', 'not sure', 'difficult', 'hard', 'struggled', 'confused', 'unclear', 'just'];
  const hedgingWords = ['maybe', 'perhaps', 'probably', 'i think', 'i guess', 'kind of', 'sort of', 'um'];
  const structureMarkers = ['because', 'for example', 'first', 'second', 'finally', 'in the end', 'as a result', 'when', 'then'];
  const contentMarkers = ['project', 'team', 'customer', 'user', 'issue', 'solution', 'result', 'goal', 'decision', 'data', 'problem', 'improved', 'learned'];

  const positiveHits = positiveWords.filter((word) => text.includes(word)).length;
  const negativeHits = negativeWords.filter((word) => text.includes(word)).length;
  const hedgingHits = hedgingWords.filter((word) => text.includes(word)).length;
  const structureHits = structureMarkers.filter((word) => text.includes(word)).length;
  const contentHits = contentMarkers.filter((word) => text.includes(word)).length;
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  const baseScore = 30 + Math.min(wordCount, 20) * 2;
  const structureScore = Math.min(20, structureHits * 6);
  const contentScore = Math.min(25, contentHits * 5);
  const toneScore = positiveHits > 0 ? 10 : 0;
  const penalty = Math.max(0, negativeHits * 6 + hedgingHits * 4);
  const accuracyScore = Math.max(0, Math.min(100, baseScore + structureScore + contentScore + toneScore - penalty));
  const isCorrect = accuracyScore >= 60;
  const emotionalTone = accuracyScore > 75
    ? 'confident and calm'
    : accuracyScore > 50
      ? 'steady with some hesitation'
      : 'anxious or uncertain';

  let tip = 'Keep your answer structured with a clear example and outcome.';
  if (hedgingHits > 0) {
    tip = 'Try replacing filler words with concrete actions and outcomes.';
  } else if (accuracyScore >= 75) {
    tip = 'You gave a strong answer. Add a brief reflection on what you learned.';
  } else if (accuracyScore < 60) {
    tip = 'Your answer needs more detail and a clearer example.';
  }

  return {
    accuracyScore,
    isCorrect,
    suggestedAnswer: isCorrect ? null : getSuggestedAnswer(question),
    emotionalTone,
    tip,
    wordCount
  };
}

function handleAnswer() {
  const answer = answerInput.value.trim();
  if (!answer) {
    feedbackBox.innerHTML = '<p>Please provide an answer before continuing.</p>';
    return;
  }

  const result = analyzeResponse(answer, state.questions[state.currentIndex]);
  state.answers[state.currentIndex] = answer;
  const nextQuestion = state.currentIndex + 1;

  const sessionResults = JSON.parse(sessionStorage.getItem('interviewResults') || '[]');
  sessionResults.push(result);
  sessionStorage.setItem('interviewResults', JSON.stringify(sessionResults));

  feedbackBox.innerHTML = `
    <p><strong>Delivery focus:</strong> ${result.emotionalTone}</p>
    <p><strong>Accuracy score:</strong> ${result.accuracyScore}/100</p>
    <p><strong>Result:</strong> ${result.isCorrect ? 'Good answer' : 'Needs improvement'}</p>
    <p><strong>Response length:</strong> ${result.wordCount} words</p>
    <p><strong>Coach note:</strong> ${result.tip}</p>
    ${result.suggestedAnswer ? `<p><strong>Suggested answer:</strong> ${result.suggestedAnswer}</p>` : ''}
  `;

  if (nextQuestion < state.questions.length) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    const overallAccuracy = Math.round(
      sessionResults.reduce((sum, item) => sum + item.accuracyScore, 0) / sessionResults.length
    );
    const averageScore = overallAccuracy;
    const eligibility = averageScore >= 70 ? 'Eligible' : 'Not Eligible';
    const summaryText = averageScore >= 75
      ? 'Strong overall performance. Your delivery sounded composed and clear.'
      : averageScore >= 50
        ? 'Solid effort. You showed good structure with some room to improve confidence.'
        : 'You can improve your delivery by speaking with more clarity and less hesitation.';

    questionText.textContent = 'Interview complete. Review your feedback and start again to improve.';
    progressLabel.textContent = 'Session complete';
    progressFill.style.width = '100%';
    feedbackBox.innerHTML = `
      <p><strong>Final result:</strong> ${averageScore}% overall accuracy</p>
      <p><strong>Eligibility:</strong> ${eligibility}</p>
      <p><strong>Average accuracy:</strong> ${overallAccuracy}/100</p>
      <p><strong>Summary:</strong> ${summaryText}</p>
    `;
    answerInput.value = '';
    state.answers = [];
    answerInput.disabled = true;
    submitBtn.disabled = true;
    skipBtn.disabled = true;
    sessionStorage.removeItem('interviewResults');
  }
}

function goToPreviousQuestion() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    answerInput.value = state.answers[state.currentIndex] || '';
    renderQuestion();
    feedbackBox.innerHTML = '<p>Moved to the previous question. You can review and improve your answer.</p>';
  } else {
    feedbackBox.innerHTML = '<p>You are already at the first question.</p>';
  }
}

function skipQuestion() {
  if (state.currentIndex + 1 < state.questions.length) {
    state.currentIndex += 1;
    renderQuestion();
    feedbackBox.innerHTML = '<p>Skipped. Move on and keep practicing.</p>';
  } else {
    feedbackBox.innerHTML = '<p>Session complete. Restart to practice again.</p>';
  }
}

startBtn.addEventListener('click', startInterview);
submitBtn.addEventListener('click', handleAnswer);
prevBtn.addEventListener('click', goToPreviousQuestion);
skipBtn.addEventListener('click', skipQuestion);

startInterview();
