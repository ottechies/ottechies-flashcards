window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['ism'] = window.QUIZ_COURSES['ism'] || { 
  title: "Info Systems Mgmt", 
  lectures: {} 
};

window.QUIZ_COURSES['ism'].lectures['lecture1'] = {
  title: "Lecture 1: Intro, Systems & Strategy",
  questions: [
    {
      topic: "Core Concepts",
      question: "What best defines an Information System (IS) beyond just software?",
      answer: "An organized set of people, data, processes, hardware, software, and networks that supports enterprise decision-making.",
      rationale: "Slide 4 emphasizes that an IS is socio-technical, combining people, processes, data, technology, and controls."
    },
    {
      topic: "Core Concepts",
      question: "What is the primary difference between raw data and information?",
      answer: "Data consists of raw facts and figures, whereas information is processed data with meaning and context.",
      rationale: "Slide 5 distinguishes raw figures (e.g., '2,500 students registered') from contextualized information ('Registration rose by 12%')."
    },
    {
      topic: "Data-to-Decision",
      question: "What is the correct chronological sequence of the data-to-decision process?",
      answer: "1. Capture -> 2. Validate -> 3. Process -> 4. Analyze -> 5. Present -> 6. Act.",
      rationale: "Slide 6 outlines the 6-step disciplined workflow: Capture (forms/sensors), Validate, Process, Analyze, Present, and Act."
    },
    {
      topic: "Information Quality",
      question: "Which characteristic of good information ensures it is available right when needed and free from major errors?",
      answer: "Accurate (free from major errors) and Timely (available right when needed) information.",
      rationale: "Slide 7 notes that accurate and timely information reduces uncertainty."
    },
    {
      topic: "System Types",
      question: "Which information system is specifically designed to handle routine daily operations such as sales, payroll, and inventory?",
      answer: "Transaction Processing Systems (TPS).",
      rationale: "Slide 8 lists TPS as the foundational operational system handling routine transactions."
    },
    {
      topic: "System Types",
      question: "Middle managers rely on which type of system to generate routine summary reports and monitor weekly KPIs?",
      answer: "Management Information Systems (MIS).",
      rationale: "Slide 8 specifies that MIS provides routine reports for middle managers to support planning and control."
    },
    {
      topic: "System Types",
      question: "Senior executives utilize which type of system to view high-level strategic dashboards and long-term trends?",
      answer: "Executive Support Systems (ESS / EIS).",
      rationale: "Slide 8 and 9 highlight ESS/EIS as the strategic tool providing executive insight into long-term direction."
    },
    {
      topic: "System Types",
      question: "What is the core function of an Enterprise Resource Planning (ERP) system in an organization?",
      answer: "To integrate core business functions like finance, HR, procurement, and operations into a unified platform.",
      rationale: "Slide 8 defines ERP systems as integrated enterprise platforms managing core enterprise functions."
    },
    {
      topic: "System Types",
      question: "Which systems are primarily used to manage organizational learning, institutional memory, and expertise?",
      answer: "Business Intelligence (BI) and Knowledge Management Systems (KMS).",
      rationale: "Slide 8 categorizes BI and KMS as systems providing insights, learning, lessons, and institutional memory."
    },
    {
      topic: "Management Levels",
      question: "According to the management pyramid in Lecture 1, operational levels deal primarily with what type of data?",
      answer: "Routine transactions and granular operational detail.",
      rationale: "Slide 9 shows that operational levels handle routine transactions (TPS) and granular operational detail."
    },
    {
      topic: "Global Business",
      question: "In many African markets, what type of digital services have become central to business growth and financial inclusion?",
      answer: "Mobile-first digital services, particularly focused on mobile payments, agriculture platforms, and regional logistics.",
      rationale: "Slide 10 highlights that mobile-first services are central in many African markets, particularly in payments, agriculture, and logistics."
    },
    {
      topic: "E-Business",
      question: "Digital sourcing and purchasing conducted across organizational digital networks is known as:",
      answer: "Electronic procurement (E-procurement).",
      rationale: "Slide 11 defines e-procurement as digital sourcing and purchasing, separate from online buying/selling (e-commerce)."
    },
    {
      topic: "Strategy & Alignment",
      question: "What is meant by 'strategic alignment' in information systems management?",
      answer: "Ensuring information technology investments tightly support the organization's mission, capabilities, and stakeholder value.",
      rationale: "Slide 12 emphasizes that IT must align tightly with organizational structure, culture, and competitive goals."
    },
    {
      topic: "IS Failures",
      question: "Why do technically sound information systems often fail in real-world organizations?",
      answer: "They completely ignore internal organizational politics, human user incentives, and prevailing corporate culture.",
      rationale: "Slide 12 discussion points out that technical excellence cannot overcome ignored human politics, incentives, and culture."
    },
    {
      topic: "Porter Model",
      question: "In Porter's competitive forces model, what does the 'threat of new entrants' measure?",
      answer: "The ease with which new competing firms can enter the industry and disrupt existing market share.",
      rationale: "Slide 13 and 14 explain that new entrants (such as fintech apps and agent networks) test industry barriers."
    },
    {
      topic: "Porter Model",
      question: "How can Information Systems alter buyer power in an industry?",
      answer: "By raising customer switching costs, improving service quality, or increasing market pricing transparency.",
      rationale: "Slide 13 notes IS can change forces by lowering costs, raising switching costs, or enabling differentiation."
    },
    {
      topic: "Porter Application",
      question: "When applying Porter's model to mobile money services, what do cash, bank transfers, and cards represent?",
      answer: "The primary threat of product and service substitutes competing within the financial sector.",
      rationale: "Slide 14 explicitly categorizes cash, bank transfers, cards, and informal credit as substitutes competing with mobile money."
    },
    {
      topic: "IT Infrastructure",
      question: "Which of the following represents the core layers of IT infrastructure outlined in Lecture 1?",
      answer: "Facilities and power, networks, hardware, software, data management, and security & services layers.",
      rationale: "Slide 15 breaks down the shared technology foundation into these six distinct infrastructure layers."
    },
    {
      topic: "IT Infrastructure",
      question: "When evaluating IT infrastructure trade-offs, what key factors must managers balance?",
      answer: "Cost, reliability, scalability, security, vendor dependence, and local technical capacity constraints.",
      rationale: "Slide 15 notes managers must weigh these precise operational trade-offs when building infrastructure."
    },
    {
      topic: "Emerging Tech",
      question: "What is the primary advantage of cloud computing over traditional on-premise infrastructure?",
      answer: "Renting scalable computing services on-demand instead of owning and maintaining all physical hardware infrastructure.",
      rationale: "Slide 16 defines cloud computing as renting scalable services rather than owning all underlying infrastructure."
    },
    {
      topic: "Emerging Tech",
      question: "What is the golden management rule regarding the adoption of emerging technologies like AI or Blockchain?",
      answer: "Adopt them because they solve a real strategic or operational problem, not just because they are fashionable.",
      rationale: "Slide 16 explicitly warns managers not to adopt technology simply because it is fashionable."
    },
    {
      topic: "IS Challenges",
      question: "Which challenges are encountered when implementing enterprise information systems?",
      answer: "Requirements uncertainty, user resistance, data quality problems, security risks, integration hurdles, and skills gaps.",
      rationale: "Slide 17 outlines requirements uncertainty, user resistance, data quality, security, integration, and governance as key IS challenges."
    },
    {
      topic: "Data Governance",
      question: "In the context of data governance and ownership, who is typically considered the data owner?",
      answer: "The organizational office accountable for its accuracy and governance (e.g., the Academic Registrar).",
      rationale: "Lecture context and governance principles clarify that data owners are accountable business units, while IT staff act as custodians."
    },
    {
      topic: "Information Quality",
      question: "Why must information be cost-effective for an organization?",
      answer: "Because the business value derived from information must exceed the cost of collecting and processing it.",
      rationale: "Slide 7 lists cost-effectiveness as a key quality pillar, meaning collection costs shouldn't outweigh its utility."
    },
    {
      topic: "Emerging Tech",
      question: "Low-code and no-code platforms are reshaping IS management primarily by:",
      answer: "Enabling faster system application development and rapid prototyping executed directly by business users.",
      rationale: "Slide 16 notes that low-code/no-code tools accelerate system development by empowering business users."
    },
    {
      topic: "System Types",
      question: "Decision Support Systems (DSS) are primarily built to assist managers with:",
      answer: "Semi-structured managerial decision-making utilizing analytical models, quantitative data, and business simulations.",
      rationale: "Slide 8 defines DSS as systems using models and analytics specifically for semi-structured managerial decisions."
    },
    {
      topic: "Collaboration",
      question: "Which tools are commonly utilized in modern global e-business to support team collaboration and workflows?",
      answer: "Cloud storage repositories, video meetings, learning management systems, shared dashboards, and groupware tools.",
      rationale: "Slide 11 lists collaborative tools like cloud storage, video conferencing, LMS, and groupware supporting e-business."
    },
    {
      topic: "IT Infrastructure",
      question: "What role do firewalls, identity access management, and monitoring tools play in IT infrastructure?",
      answer: "Security and services protecting corporate data continuity, system availability, and structural integrity.",
      rationale: "Slide 15 categorizes identity, monitoring, support, and continuity under the security & services infrastructure layer."
    },
    {
      topic: "Summary & Takeaways",
      question: "What best summarizes the core theme of Lecture 1 in Information Systems Management?",
      answer: "Information systems are socio-technical systems linking technology decisions to organizational performance and competitive strategy.",
      rationale: "Slide 18 key takeaways reiterate that IS is socio-technical, infrastructure enables strategy, and strategy provides direction."
    }
  ]
};