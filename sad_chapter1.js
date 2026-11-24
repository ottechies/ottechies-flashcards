// sad_chapter1.js
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['sad'] = window.QUIZ_COURSES['sad'] || {
  title: "System Analysis and Design (MIS7104)",
  subtitle: "Systems, Roles, Methodologies & Requirements",
  lectures: {}
};

window.QUIZ_COURSES['sad'].lectures['chapter1'] = {
  title: "Chapter 1: Systems, Roles, and Development Methodologies",
  questions: [
    {
      topic: "Types of Systems",
      question: "Which type of information system functions at the operational level of an organization to process large amounts of data for routine business activities such as payroll and inventory?",
      options: [
        "Transaction Processing Systems (TPS)",
        "Executive Support Systems (ESS)",
        "Knowledge Work Systems (KWS)",
        "Decision Support Systems (DSS)"
      ],
      correct: "Transaction Processing Systems (TPS)",
      rationale: "TPS function at the operational level to eliminate the tedium of routine, day-to-day operational transactions and act as boundary-spanning systems."
    },
    {
      topic: "Types of Systems",
      question: "How do Knowledge Work Systems (KWS) differ primarily from Office Automation Systems (OAS) at the knowledge level of an organization?",
      options: [
        "KWS support professionals like scientists and engineers in creating new knowledge, whereas OAS support data workers who manipulate and share existing information.",
        "KWS automate routine payroll transactions, whereas OAS handle strategic executive forecasting.",
        "KWS are strictly used for group polling and brainstorming, whereas OAS replace databases.",
        "KWS rely exclusively on expert system shells, whereas OAS require custom programming."
      ],
      correct: "KWS support professionals like scientists and engineers in creating new knowledge, whereas OAS support data workers who manipulate and share existing information.",
      rationale: "OAS support data workers (using word processing, spreadsheets, scheduling) who transform/disseminate data, while KWS help specialists create new knowledge."
    },
    {
      topic: "Types of Systems",
      question: "What is a defining difference between a Decision Support System (DSS) and an Expert System (ES)?",
      options: [
        "A DSS supports all phases of decision making while leaving the final judgment to the human decision maker, whereas an Expert System selects the best solution to a specific problem.",
        "A DSS does not use a database, whereas an Expert System relies entirely on relational transaction databases.",
        "A DSS is designed exclusively for operational clerks, whereas an Expert System is used only for word processing.",
        "A DSS uses an inference engine and knowledge base, whereas an Expert System relies purely on group polling."
      ],
      correct: "A DSS supports all phases of decision making while leaving the final judgment to the human decision maker, whereas an Expert System selects the best solution to a specific problem.",
      rationale: "DSS emphasize decision support across all phases while keeping the actual decision as the exclusive province of the user; Expert Systems capture human expertise to select the best solution."
    },
    {
      topic: "Artificial Intelligence & Expert Systems",
      question: "What are the three basic components of an Expert System?",
      options: [
        "A knowledge base, an inference engine, and a user interface",
        "A transaction log, a CASE repository, and a Gantt chart",
        "An ERP module, a spreadsheet engine, and a Web server",
        "A context diagram, a data dictionary, and a prototype"
      ],
      correct: "A knowledge base, an inference engine, and a user interface",
      rationale: "Expert systems consist of a knowledge base built by knowledge engineers, an inference engine that processes queries/reasoning, and a user interface."
    },
    {
      topic: "Types of Systems",
      question: "Which system is specifically designed to bring a group together to solve semistructured or unstructured problems while minimizing negative group behaviors such as 'groupthink' and domination by vocal members?",
      options: [
        "Group Decision Support Systems (GDSS)",
        "Transaction Processing Systems (TPS)",
        "Office Automation Systems (OAS)",
        "Enterprise Resource Planning (ERP) Systems"
      ],
      correct: "Group Decision Support Systems (GDSS)",
      rationale: "GDSS (a subset of CSCWS) use specialized software, polling, brainstorming tools, and facilitators to reduce fear of reprisal, vocal domination, and groupthink."
    },
    {
      topic: "Types of Systems",
      question: "Executive Support Systems (ESS) operate at the strategic level of management primarily to:",
      options: [
        "Help executives organize interactions with the external environment and address unstructured, non-application-specific strategic problems.",
        "Replace Transaction Processing Systems and Management Information Systems entirely.",
        "Automate daily barcode scanning and inventory restocking at retail checkout counters.",
        "Generate source code directly from entity-relationship diagrams."
      ],
      correct: "Help executives organize interactions with the external environment and address unstructured, non-application-specific strategic problems.",
      rationale: "ESS rely on data generated by TPS and MIS to provide graphics and communications environments that help executives make sense of unstructured strategic problems."
    },
    {
      topic: "Integrating Technologies",
      question: "Which of the following is NOT listed as a primary benefit of migrating or mounting applications onto the World Wide Web?",
      options: [
        "Eliminating the need for systems analysis and user involvement",
        "Increasing user awareness of the availability of a service, product, or organization",
        "Providing the possibility of 24-hour global access across time zones",
        "Improving the usefulness and usability of the interface design"
      ],
      correct: "Eliminating the need for systems analysis and user involvement",
      rationale: "Mounting applications on the Web increases awareness, provides 24-hour global reach, and improves interface usability, but it actually increases the need for thorough systems analysis."
    },
    {
      topic: "Integrating Technologies",
      question: "In the context of wireless and mobile systems, what is an 'intelligent agent' using pull technology?",
      options: [
        "Software that learns a user's preferences over time by observing behavior patterns and automatically searches the Web for relevant information without continual prompting.",
        "A hardware router that connects Bluetooth devices to a corporate mainframe.",
        "A human knowledge engineer who interviews executives to build an expert system.",
        "A CASE repository tool that checks data flow diagrams for syntax errors."
      ],
      correct: "Software that learns a user's preferences over time by observing behavior patterns and automatically searches the Web for relevant information without continual prompting.",
      rationale: "Intelligent agents assist users by learning preferences over time and acting on them—for instance, pulling relevant stories from the Web automatically."
    },
    {
      topic: "Open Source Software",
      question: "Which statement best reflects the philosophy and rules of Open Source Software (OSS) development?",
      options: [
        "Source code can be studied, shared, and modified by users and programmers, and modifications must be shared with the project community.",
        "Source code is strictly hidden from users to protect proprietary vendor licensing.",
        "OSS is a single monolithic movement restricted exclusively to desktop operating systems.",
        "OSS eliminates the need for collaboration by restricting code access to a single lead architect."
      ],
      correct: "Source code can be studied, shared, and modified by users and programmers, and modifications must be shared with the project community.",
      rationale: "Unlike proprietary software where code is hidden, OSS allows studying, sharing, and modifying code, with community rules requiring modifications to be shared back."
    },
    {
      topic: "Need for Systems Analysis",
      question: "What is Ajax (Asynchronous JavaScript and XML) in the context of modern systems development?",
      options: [
        "A technique using existing languages to make Web pages function more like traditional desktop application programs.",
        "A proprietary enterprise resource planning (ERP) database package.",
        "A brand-new object-oriented programming language that replaces UML.",
        "A hardware virtualization tool used to run Windows on macOS."
      ],
      correct: "A technique using existing languages to make Web pages function more like traditional desktop application programs.",
      rationale: "Ajax is not a new programming language, but a technique combining existing technologies so Web pages respond dynamically like desktop applications."
    },
    {
      topic: "Roles of the Systems Analyst",
      question: "When an outside systems analyst is hired specifically to address information systems issues within a business, what is their primary advantage and primary disadvantage?",
      options: [
        "Advantage: Bringing a fresh perspective; Disadvantage: Never knowing the true organizational culture.",
        "Advantage: Deep familiarity with internal office politics; Disadvantage: Lack of technical modeling skills.",
        "Advantage: Authority to fire resistant employees; Disadvantage: Inability to use CASE tools.",
        "Advantage: Ownership of the company's legacy code; Disadvantage: Permanent assignment to one department."
      ],
      correct: "Advantage: Bringing a fresh perspective; Disadvantage: Never knowing the true organizational culture.",
      rationale: "As an outside consultant, the analyst brings an objective, fresh perspective, but must rely on users to understand the internal organizational culture."
    },
    {
      topic: "Roles of the Systems Analyst",
      question: "In which role does an internally employed analyst draw on professional hardware/software expertise to help with a small modification or decision affecting a single department without managing a full-blown project?",
      options: [
        "Supporting expert",
        "Outside consultant",
        "Knowledge engineer",
        "Project champion"
      ],
      correct: "Supporting expert",
      rationale: "As a supporting expert, the analyst serves as a technical resource for those managing a small departmental modification rather than leading a full SDLC project."
    },
    {
      topic: "Roles of the Systems Analyst",
      question: "Which role is considered the most comprehensive and responsible one a systems analyst takes on, serving as a catalyst and facilitator whenever interacting with users over an extended period to transform the business?",
      options: [
        "Agent of change",
        "Supporting expert",
        "Database administrator",
        "Software vendor"
      ],
      correct: "Agent of change",
      rationale: "An agent of change acts as a catalyst for change, develops a plan for change with users, and facilitates organizational transformation resulting from new information systems."
    },
    {
      topic: "Human-Computer Interaction (HCI)",
      question: "How does adopting a Human-Computer Interaction (HCI) lens change a systems analyst's approach to development?",
      options: [
        "It puts human ergonomic, cognitive, affective, and behavioral needs ahead of organizational structure or IT technology alone.",
        "It prioritizes hardware processing speed and database normalization over user satisfaction.",
        "It delays user involvement until Phase 7 (Implementation) to prevent scope creep.",
        "It focuses strictly on backend server security and automated code generation."
      ],
      correct: "It puts human ergonomic, cognitive, affective, and behavioral needs ahead of organizational structure or IT technology alone.",
      rationale: "HCI is a human-centered approach emphasizing people and their physical, cognitive, aesthetic, and behavioral interactions with technology across all SDLC phases."
    },
    {
      topic: "SDLC Phases",
      question: "What is the primary output of Phase 1 of the Systems Development Life Cycle (Identifying problems, opportunities, and objectives)?",
      options: [
        "A feasibility report containing a problem definition and summarizing objectives",
        "A complete set of program specification packets and source code",
        "A fully normalized relational database and user training manual",
        "A post-implementation maintenance and audit schedule"
      ],
      correct: "A feasibility report containing a problem definition and summarizing objectives",
      rationale: "In Phase 1, the analyst interviews management, estimates scope, and produces a feasibility report with a problem definition and objectives so management can decide whether to proceed."
    },
    {
      topic: "SDLC Phases",
      question: "During which phase of the SDLC does the analyst use interactive methods (interviews, questionnaires) and unobtrusive methods (observation, sampling) to learn the who, what, where, when, how, and why of current operations?",
      options: [
        "Phase 2: Determining human information requirements",
        "Phase 4: Designing the recommended system",
        "Phase 5: Developing and documenting software",
        "Phase 7: Implementing and evaluating the system"
      ],
      correct: "Phase 2: Determining human information requirements",
      rationale: "Phase 2 focuses on determining human information requirements by investigating how users interact with current systems in their work context."
    },
    {
      topic: "SDLC Phases",
      question: "In which phase of the SDLC does the analyst create Data Flow Diagrams (DFDs), build a data dictionary, analyze structured decisions (decision tables/trees), and prepare the systems proposal?",
      options: [
        "Phase 3: Analyzing system needs",
        "Phase 1: Identifying problems, opportunities, and objectives",
        "Phase 6: Testing and maintaining the system",
        "Phase 7: Implementing and evaluating the system"
      ],
      correct: "Phase 3: Analyzing system needs",
      rationale: "Phase 3 involves structured diagramming (DFDs, sequence/activity diagrams), data dictionaries, structured decision analysis, cost-benefit analysis, and preparing the systems proposal."
    },
    {
      topic: "SDLC Phases",
      question: "Which of the following activities takes place during Phase 4 (Designing the recommended system) of the SDLC?",
      options: [
        "Designing data entry procedures, user interfaces (HCI), databases, output reports, and program specification packets",
        "Conducting initial feasibility interviews to decide if a computer system is needed at all",
        "Converting legacy production files and training end users on the live system",
        "Running code walkthroughs and removing syntactical errors from newly written programs"
      ],
      correct: "Designing data entry procedures, user interfaces (HCI), databases, output reports, and program specification packets",
      rationale: "Phase 4 accomplishes the logical design of the system: input/output design, HCI interfaces, database design, controls/backups, and program specification packets."
    },
    {
      topic: "SDLC Phases",
      question: "During Phase 5 (Developing and documenting software), what technique do programmers use to explain complex portions of a program to a team of other programmers to ensure quality?",
      options: [
        "A design or code walkthrough",
        "A context-level data flow diagram",
        "A planning game with story cards",
        "A feasibility cost-benefit forecast"
      ],
      correct: "A design or code walkthrough",
      rationale: "In Phase 5, programmers code, debug syntax errors, and conduct structured design or code walkthroughs with peers to ensure software quality."
    },
    {
      topic: "System Maintenance",
      question: "According to industry estimates cited in Chapter 1, approximately what percentage of total systems effort at a typical MIS installation is spent on maintaining existing systems?",
      options: [
        "48 to 60 percent",
        "5 to 10 percent",
        "15 to 20 percent",
        "85 to 95 percent"
      ],
      correct: "48 to 60 percent",
      rationale: "Estimates of time spent on system maintenance range from 48 to 60 percent of total systems development time, leaving less time for new systems."
    },
    {
      topic: "System Maintenance",
      question: "Over the life of an information system, when does it become more feasible to conduct a new systems study rather than continue maintenance?",
      options: [
        "When the cumulative and rising cost of continued maintenance due to business and technology changes exceeds the cost of creating an entirely new system",
        "Immediately after postinstallation bugs are resolved during the steady-state period",
        "Before the system reaches Installation Day",
        "Whenever a single user requests a minor report formatting change"
      ],
      correct: "When the cumulative and rising cost of continued maintenance due to business and technology changes exceeds the cost of creating an entirely new system",
      rationale: "As business needs and technologies change rapidly over time, maintenance costs escalate sharply until building a new system is more cost-effective than continuing maintenance."
    },
    {
      topic: "CASE Tools",
      question: "What is the primary distinction between Upper CASE tools and Lower CASE tools?",
      options: [
        "Upper CASE tools help analysts create and modify system designs/diagrams in a repository, whereas Lower CASE tools generate computer source code.",
        "Upper CASE tools are used only by executive managers, whereas Lower CASE tools are used by operational data-entry clerks.",
        "Upper CASE tools handle hardware networking, whereas Lower CASE tools handle user training manuals.",
        "Upper CASE tools are exclusively open source, whereas Lower CASE tools are proprietary ERP suites."
      ],
      correct: "Upper CASE tools help analysts create and modify system designs/diagrams in a repository, whereas Lower CASE tools generate computer source code.",
      rationale: "Upper CASE supports visual modeling, requirements, and repository storage; Lower CASE automates source code generation from designs."
    },
    {
      topic: "CASE Tools",
      question: "In a CASE environment, what is the centralized encyclopedia that stores all project records, elements, diagrams, screen designs, and reports?",
      options: [
        "The CASE repository",
        "The inference engine",
        "The story card backlog",
        "The transaction log"
      ],
      correct: "The CASE repository",
      rationale: "The CASE repository is the central encyclopedia storing all project models, data dictionary elements, screen/report layouts, and requirements."
    },
    {
      topic: "The Agile Approach",
      question: "What are the four core values of the Agile approach recommended for systems analysts?",
      options: [
        "Communication, simplicity, feedback, and courage",
        "Documentation, hierarchy, standardization, and control",
        "Speed, secrecy, automation, and outsourcing",
        "Feasibility, normalization, walkthroughs, and auditing"
      ],
      correct: "Communication, simplicity, feedback, and courage",
      rationale: "The agile approach is built upon the four core values of communication, simplicity, feedback, and courage."
    },
    {
      topic: "The Agile Approach",
      question: "Which four variables are balanced and adjusted in Agile project management to ensure successful project completion?",
      options: [
        "Time, cost, quality, and scope",
        "Hardware, software, network, and database",
        "Input, process, output, and feedback",
        "Consultant, expert, agent, and user"
      ],
      correct: "Time, cost, quality, and scope",
      rationale: "Agile methods maintain a state of balance between resources and activities by adjusting the four control variables: time, cost, quality, and scope."
    },
    {
      topic: "The Agile Approach",
      question: "In the five-stage Agile developmental process (Exploration, Planning, Iterations to the First Release, Productionizing, Maintenance), what happens during the 'Productionizing' stage?",
      options: [
        "The product is released and the feedback cycle accelerates (e.g., turning around software revisions in one week instead of three) with daily briefings.",
        "The team first explores technologies and customers experiment with writing initial user stories.",
        "The team adopts a conservative 'keeper of the flame' attitude and rotates core developers off the project.",
        "The analyst draws complete UML statechart and sequence diagrams before writing any code."
      ],
      correct: "The product is released and the feedback cycle accelerates (e.g., turning around software revisions in one week instead of three) with daily briefings.",
      rationale: "During Productionizing, the product is released into production, daily briefings are instituted, and iteration turnaround speeds up from three weeks to one week."
    },
    {
      topic: "The Agile Approach",
      question: "In Beck's Agile 'Planning Game,' what is the primary strategy pursued by the development team to limit uncertainty and risk?",
      options: [
        "Design the simplest solution possible, put it into production quickly, get customer feedback, and adapt the design.",
        "Spend six months documenting every possible future requirement before building a prototype.",
        "Eliminate customer involvement during iterations so developers can work uninterrupted.",
        "Use Lower CASE generators to lock the database schema before exploring user stories."
      ],
      correct: "Design the simplest solution possible, put it into production quickly, get customer feedback, and adapt the design.",
      rationale: "The planning game limits uncertainty by delivering the simplest working solution for high-value story cards early, gathering customer feedback, and adapting iteratively."
    },
    {
      topic: "Object-Oriented Analysis & Design",
      question: "In the UML object-oriented development process, how does an analyst initially identify potential classes during the analysis phase?",
      options: [
        "By examining the nouns in the use cases, which represent objects that share attributes and behaviors",
        "By converting Gantt chart milestones directly into SQL tables",
        "By measuring network latency and CPU idle time",
        "By interviewing external vendors about COTS licensing fees"
      ],
      correct: "By examining the nouns in the use cases, which represent objects that share attributes and behaviors",
      rationale: "Nouns in use cases represent objects (such as customers, items, or orders) that can be grouped into classes sharing common attributes and methods."
    },
    {
      topic: "Object-Oriented Analysis & Design",
      question: "Which UML diagram is drawn using stick figures (actors) and ovals to represent the standard flow of events initiated by users outside the system?",
      options: [
        "Use case diagram",
        "Statechart diagram",
        "Class diagram",
        "Entity-relationship diagram"
      ],
      correct: "Use case diagram",
      rationale: "In Step 1 of the UML process, the analyst draws a use case diagram with stick figures representing actors and connecting lines showing the events they initiate."
    },
    {
      topic: "Choosing a Development Methodology",
      question: "Under which set of conditions is the traditional Systems Development Life Cycle (SDLC) approach generally the best choice over Agile or Object-Oriented methods?",
      options: [
        "When systems have historically been documented using SDLC, upper-level management feels safer with step-by-step documentation, and adequate time and resources exist.",
        "When an emergency system rescue is needed after a failure and there is no time to analyze what went wrong.",
        "When there is a strong Agile project champion and requirements change daily in a chaotic environment.",
        "When the problem lends itself naturally to reusable object classes and the organization wants to tackle the highest-risk technical components first via spiral iterations."
      ],
      correct: "When systems have historically been documented using SDLC, upper-level management feels safer with step-by-step documentation, and adequate time and resources exist.",
      rationale: "Per Figure 1.9, SDLC is ideal when step-by-step documentation and communication are valued, upper management prefers structured oversight, and adequate time/resources are available."
    }
  ]
};