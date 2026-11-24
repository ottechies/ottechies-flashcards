// sad_chapter4.js
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['sad'] = window.QUIZ_COURSES['sad'] || {
  title: "System Analysis and Design (MIS7104)",
  subtitle: "Systems, Roles, Methodologies & Requirements",
  lectures: {}
};

window.QUIZ_COURSES['sad'].lectures['chapter4'] = {
  title: "Chapter 4: Information Gathering—Interactive Methods",
  questions: [
    {
      topic: "Interviewing Purposes",
      question: "Which type of information gathered during interviews is especially useful for understanding an organization's culture more fully?",
      options: [
        "Interviewees' feelings about the current state of the system and work environment",
        "Hardware serial numbers and network switch port counts",
        "Compiled binary machine code from legacy modules",
        "Annual tax depreciation tables from external auditors"
      ],
      correct: "Interviewees' feelings about the current state of the system and work environment",
      rationale: "Interviews reveal opinions, feelings, goals, and informal procedures, with feelings offering key insight into organizational culture."
    },
    {
      topic: "Interview Preparation",
      question: "Which step in preparing for an interview helps the interviewer build a vocabulary common to the interviewee before asking questions?",
      options: [
        "Reading background material on the organization, role, and current system",
        "Skipping preparation so questions are completely improvised on the spot",
        "Asking only closed yes/no questions without context",
        "Scheduling the interview immediately after system retirement"
      ],
      correct: "Reading background material on the organization, role, and current system",
      rationale: "Reading background material beforehand helps the analyst understand terminology and context so communication is smoother."
    },
    {
      topic: "Interview Preparation",
      question: "What is an effective way to prepare an interviewee ahead of a scheduled interview?",
      options: [
        "Share the topic, purpose, or questions in advance so the interviewee can think through relevant details",
        "Keep the interview topic secret until the interviewee sits down",
        "Ask the interviewee to write the final database schema beforehand",
        "Refuse to share what kind of information will be discussed"
      ],
      correct: "Share the topic, purpose, or questions in advance so the interviewee can think through relevant details",
      rationale: "Preparing interviewees in advance helps them gather thoughts and relevant facts for a productive session."
    },
    {
      topic: "Question Types",
      question: "What is a primary advantage of using open-ended interview questions?",
      options: [
        "They allow greater spontaneity and encourage rich, detailed responses from the interviewee",
        "They are the fastest format for tallying numerical statistics across hundreds of respondents",
        "They strictly limit the interviewee to choosing from fixed checkboxes",
        "They eliminate any need for follow-up or clarification"
      ],
      correct: "They allow greater spontaneity and encourage rich, detailed responses from the interviewee",
      rationale: "Open-ended questions invite broader, more spontaneous answers and reveal nuances that rigid choices might miss."
    },
    {
      topic: "Question Types",
      question: "What is a key advantage of closed interview questions compared with open-ended questions?",
      options: [
        "They keep the interviewer in control of the pace and are efficient and easier to analyze",
        "They are best for exploring deep emotional frustrations with open-ended stories",
        "They never require careful wording before the interview",
        "They provide more spontaneous tangents than open questions"
      ],
      correct: "They keep the interviewer in control of the pace and are efficient and easier to analyze",
      rationale: "Closed questions help control interview flow, save time, and yield structured responses that are straightforward to analyze."
    },
    {
      topic: "Question Types",
      question: "How does an analyst use probing questions during an interview?",
      options: [
        "To clarify, draw out, and expand on an interviewee's initial point",
        "To cross-examine or interrogate the interviewee aggressively",
        "To abruptly end the interview before key topics are covered",
        "To replace all preparation and background reading"
      ],
      correct: "To clarify, draw out, and expand on an interviewee's initial point",
      rationale: "Probing questions follow up constructively to clarify meaning and encourage fuller explanation."
    },
    {
      topic: "Interview Structure",
      question: "Which interview structure begins with specific, often closed questions and broadens into general, open-ended questions?",
      options: [
        "Pyramid structure",
        "Funnel structure",
        "Circle structure",
        "Linear checklist structure"
      ],
      correct: "Pyramid structure",
      rationale: "A pyramid structure starts narrow/specific and expands outward to general, open-ended questions."
    },
    {
      topic: "Interview Structure",
      question: "When is a pyramid interview structure particularly useful?",
      options: [
        "When interviewees need to be warmed up to a topic or seem initially reluctant to address it",
        "When an interviewee needs an immediate open-ended outlet to vent strong emotions first",
        "When no specific facts or operational details exist at all",
        "When the analyst wants to avoid asking any open-ended questions"
      ],
      correct: "When interviewees need to be warmed up to a topic or seem initially reluctant to address it",
      rationale: "Starting with straightforward, specific questions helps ease hesitant interviewees into broader discussions."
    },
    {
      topic: "Interview Structure",
      question: "Which interview structure begins with broad, open-ended questions and narrows down to specific, closed questions?",
      options: [
        "Funnel structure",
        "Pyramid structure",
        "Reverse-diamond structure",
        "Static form structure"
      ],
      correct: "Funnel structure",
      rationale: "A funnel structure opens broadly and narrows toward specific, targeted points."
    },
    {
      topic: "Interview Structure",
      question: "In which situation is a funnel interview structure especially helpful?",
      options: [
        "As a nonthreatening opening or when an interviewee feels strongly about a topic and needs room to express viewpoints first",
        "When trying to force every answer into a yes/no response from the very first second",
        "When there is zero need to narrow down specific requirements at the end",
        "When conducting an anonymous mail survey"
      ],
      correct: "As a nonthreatening opening or when an interviewee feels strongly about a topic and needs room to express viewpoints first",
      rationale: "Opening broadly gives interviewees space to share context and feelings before narrowing into specifics."
    },
    {
      topic: "Interview Structure",
      question: "How does a diamond-shaped interview structure organize questions?",
      options: [
        "It starts with specific questions, moves to general issues in the middle, and concludes with specific questions",
        "It asks only one question repeated ten times in identical wording",
        "It starts general and ends general with no specific details",
        "It alternates randomly between unrelated departments"
      ],
      correct: "It starts with specific questions, moves to general issues in the middle, and concludes with specific questions",
      rationale: "The diamond structure combines a pyramid opening with a funnel closing to maintain variety and engagement."
    },
    {
      topic: "Closing & Follow-Up",
      question: "Which closing question is good practice near the end of an interview?",
      options: [
        "\"Is there anything we haven't touched on that you think is important for me to know?\"",
        "\"Why did you give a different answer than your coworker did yesterday?\"",
        "\"Do you promise not to change your mind later?\"",
        "\"Can we skip writing a report since I took notes?\""
      ],
      correct: "\"Is there anything we haven't touched on that you think is important for me to know?\"",
      rationale: "Asking what else matters gives the interviewee a chance to surface overlooked issues or insights."
    },
    {
      topic: "Post-Interview Practices",
      question: "After completing an interview, what should the systems analyst do promptly?",
      options: [
        "Write the interview report as soon as possible while observations and details are fresh",
        "Wait several months before reviewing notes or summarizing findings",
        "Discard rough notes immediately without recording key takeaways",
        "Assume memory alone is sufficient for future design decisions"
      ],
      correct: "Write the interview report as soon as possible while observations and details are fresh",
      rationale: "Writing the interview report promptly preserves accuracy, context, and key findings."
    },
    {
      topic: "Joint Application Design (JAD)",
      question: "What is the primary purpose of Joint Application Design (JAD) as an interactive information-gathering technique?",
      options: [
        "To bring users, managers, and IS professionals together in structured sessions to analyze needs, share perspectives, and document requirements collaboratively",
        "To replace all user communication with silent solo programming",
        "To test network cables in a server closet without user input",
        "To eliminate documentation of user expectations"
      ],
      correct: "To bring users, managers, and IS professionals together in structured sessions to analyze needs, share perspectives, and document requirements collaboratively",
      rationale: "JAD engages stakeholders collaboratively to examine existing systems, clarify expectations, and document requirements."
    },
    {
      topic: "Stories in Requirements Gathering",
      question: "How do stories help an analyst during interactive information gathering?",
      options: [
        "They capture real-world workflows, user goals, and human-computer interaction needs in concrete, relatable terms",
        "They replace all structured analysis of inputs, outputs, and processes",
        "They are used only to write fictional marketing brochures",
        "They prevent users from explaining exceptions or edge cases"
      ],
      correct: "They capture real-world workflows, user goals, and human-computer interaction needs in concrete, relatable terms",
      rationale: "Stories help surface practical work context, user tasks, and interaction needs from the user's point of view."
    },
    {
      topic: "Questionnaire Planning",
      question: "When planning a questionnaire, what guideline should an analyst follow regarding respondents and reading level?",
      options: [
        "Tailor language to knowledgeable respondents and verify that the reading level fits the target audience",
        "Use dense technical jargon regardless of whether respondents understand it",
        "Send surveys to people who have no connection to the process",
        "Avoid checking readability or clarity before distribution"
      ],
      correct: "Tailor language to knowledgeable respondents and verify that the reading level fits the target audience",
      rationale: "Effective questionnaires use clear, appropriate language tailored to informed respondents and their reading level."
    },
    {
      topic: "Questionnaire Wording",
      question: "Which qualities should well-written questionnaire items exhibit?",
      options: [
        "Simplicity, specificity, freedom from bias, nonpatronizing tone, and technical accuracy",
        "Leading phrasing that nudges respondents toward a predetermined answer",
        "Vague double-barreled wording that combines multiple unrelated topics",
        "Condescending remarks about current user habits"
      ],
      correct: "Simplicity, specificity, freedom from bias, nonpatronizing tone, and technical accuracy",
      rationale: "Questions should be clear, specific, unbiased, respectful, and accurate so responses are valid and reliable."
    },
    {
      topic: "Questionnaire Layout & Scales",
      question: "Which layout practice improves questionnaire response quality and completion rates?",
      options: [
        "Numbering questions, keeping formatting consistent, avoiding controversial items first, and leaving adequate white space (such as multiple blank lines for open questions)",
        "Cramming dozens of questions onto a single cramped page with no space to write",
        "Placing the most sensitive or controversial question at the very top",
        "Using inconsistent rating scales and unnumbered items throughout"
      ],
      correct: "Numbering questions, keeping formatting consistent, avoiding controversial items first, and leaving adequate white space (such as multiple blank lines for open questions)",
      rationale: "Clean numbering, consistent formatting and scales, thoughtful ordering, and generous response space make questionnaires easier to answer accurately."
    }
  ]
};