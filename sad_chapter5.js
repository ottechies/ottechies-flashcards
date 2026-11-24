// sad_chapter5.js
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['sad'] = window.QUIZ_COURSES['sad'] || {
  title: "System Analysis and Design (MIS7104)",
  subtitle: "Systems, Roles, Methodologies & Requirements",
  lectures: {}
};

window.QUIZ_COURSES['sad'].lectures['chapter5'] = {
  title: "Chapter 5: Information Gathering—Unobtrusive Methods",
  questions: [
    {
      topic: "Unobtrusive Methods",
      question: "Why do systems analysts pair unobtrusive information-gathering methods (such as sampling, document review, and observation) with interactive methods like interviews?",
      options: [
        "Unobtrusive methods provide objective physical, documentary, and behavioral evidence that complements or cross-checks what people say in interviews or surveys.",
        "Unobtrusive methods completely eliminate the need to ever talk with users or stakeholders.",
        "Interviews are only useful after the software is already compiled and deployed.",
        "Unobtrusive methods only apply to purchasing computer hardware."
      ],
      correct: "Unobtrusive methods provide objective physical, documentary, and behavioral evidence that complements or cross-checks what people say in interviews or surveys.",
      rationale: "Combining unobtrusive evidence with interactive methods helps verify actual practice against reported views and uncovers details users may overlook."
    },
    {
      topic: "Sampling Basics",
      question: "What is the primary goal of sampling when an analyst examines records, transactions, or forms during requirements determination?",
      options: [
        "To select a representative subset of items so the analyst can draw valid conclusions efficiently without inspecting every single record",
        "To inspect 100 percent of every historical document in the company archive",
        "To replace all requirements modeling with random guessing",
        "To delete outdated records from the production database"
      ],
      correct: "To select a representative subset of items so the analyst can draw valid conclusions efficiently without inspecting every single record",
      rationale: "Sampling saves time and cost while yielding representative insights into records, forms, or events."
    },
    {
      topic: "Sample Size",
      question: "Which factors influence how large a sample a systems analyst should select?",
      options: [
        "Population variability, desired accuracy/confidence, and practical time and cost constraints",
        "Only the analyst's favorite number between one and ten",
        "The screen size of the analyst's laptop",
        "Whether the organization uses a Gantt chart or PERT diagram"
      ],
      correct: "Population variability, desired accuracy/confidence, and practical time and cost constraints",
      rationale: "Appropriate sample size balances data variability and precision needs against realistic project time and budget limits."
    },
    {
      topic: "Sampling Types",
      question: "When a population is divided into distinct subgroups (such as departments or customer tiers) and samples are drawn from each subgroup, which approach is being used?",
      options: [
        "Stratified sampling",
        "Convenience-only guessing",
        "Exhaustive census of zero items",
        "Reverse chronological deletion"
      ],
      correct: "Stratified sampling",
      rationale: "Stratified sampling divides the population into relevant strata or subgroups so each important segment is represented."
    },
    {
      topic: "Sampling Types",
      question: "In systematic sampling, how does an analyst typically select items from a list or sequence of records?",
      options: [
        "By choosing a starting point and selecting every kth item across the sequence",
        "By keeping only documents signed by the CEO",
        "By asking employees to pick whichever forms look neatest",
        "By sampling only items created during lunch breaks"
      ],
      correct: "By choosing a starting point and selecting every kth item across the sequence",
      rationale: "Systematic sampling selects items at a fixed interval (every kth item) after an initial starting point."
    },
    {
      topic: "Qualitative Documents",
      question: "Which set of items represents qualitative documents an analyst might examine?",
      options: [
        "Policy manuals, internal memos, notices, and standard operating forms",
        "Monthly sales totals, error-rate logs, and transaction counts",
        "CPU utilization percentages and network packet latency tables",
        "Quarterly profit-and-loss balance sheets alone"
      ],
      correct: "Policy manuals, internal memos, notices, and standard operating forms",
      rationale: "Qualitative documents capture policies, rules, communication tone, and intended procedures rather than purely numeric metrics."
    },
    {
      topic: "Quantitative Documents",
      question: "How do quantitative documents assist a systems analyst during requirements analysis?",
      options: [
        "They provide measurable figures—such as transaction volumes, report frequencies, error counts, or processing times—that help size workloads and spot bottlenecks.",
        "They replace the need to read company policies or user instructions.",
        "They describe office paint colors and desk arrangements.",
        "They are only created after system maintenance ends."
      ],
      correct: "They provide measurable figures—such as transaction volumes, report frequencies, error counts, or processing times—that help size workloads and spot bottlenecks.",
      rationale: "Quantitative records supply concrete volume, frequency, and performance data useful for analysis and sizing."
    },
    {
      topic: "Document Analysis",
      question: "What discrepancy does reviewing actual hard-copy or electronic forms and records frequently uncover?",
      options: [
        "Differences between formal/stated procedures and informal workarounds or unused fields in actual day-to-day operations",
        "That every paper form ever created is filled out identically without errors",
        "That electronic records never contain legacy or redundant fields",
        "That informal workarounds never affect system inputs or outputs"
      ],
      correct: "Differences between formal/stated procedures and informal workarounds or unused fields in actual day-to-day operations",
      rationale: "Examining real documents often reveals unused fields, shadow workarounds, and gaps between official rules and actual practice."
    },
    {
      topic: "Observing Decision Makers",
      question: "What does observing decision makers directly in their work setting help an analyst see?",
      options: [
        "How they actually gather information, handle exceptions, and make decisions in real time rather than in abstract descriptions",
        "The internal source code of third-party operating systems",
        "Future stock market prices with certainty",
        "How to bypass operational and economic feasibility"
      ],
      correct: "How they actually gather information, handle exceptions, and make decisions in real time rather than in abstract descriptions",
      rationale: "Direct observation shows real-world decision behavior, information sources used, and how interruptions or exceptions are handled."
    },
    {
      topic: "Observing Office Environment",
      question: "Why can physical office environment details—such as workspace layout, proximity of staff, lighting, or noise—matter to a systems analyst?",
      options: [
        "They shape informal communication, ergonomics, workflow bottlenecks, and how comfortably users interact with new technology",
        "They determine the mathematical rules of relational database normalization",
        "They eliminate the need for user training or interface design",
        "They only matter when building outdoor wireless antennas"
      ],
      correct: "They shape informal communication, ergonomics, workflow bottlenecks, and how comfortably users interact with new technology",
      rationale: "Physical layout and workspace conditions affect collaboration, comfort, and day-to-day system usability."
    },
    {
      topic: "STRADEM Observation",
      question: "In Chapter 5, what is STRADEM primarily associated with?",
      options: [
        "A structured framework for observing a decision maker's activities, environment, and information behavior",
        "A relational database query language used to join tables",
        "A hardware firewall protocol for blocking external traffic",
        "A PERT diagram rule for calculating critical path slack"
      ],
      correct: "A structured framework for observing a decision maker's activities, environment, and information behavior",
      rationale: "STRADEM guides systematic observation of decision-making behavior and surrounding work conditions."
    },
    {
      topic: "Observation Pitfalls",
      question: "Which pitfall should an analyst guard against when observing employees at work?",
      options: [
        "Employees altering their behavior temporarily because they know they are being watched (reactivity/Hawthorne-style effect)",
        "Gathering too much concrete evidence about real workflows",
        "Noticing where bottlenecks actually occur",
        "Comparing observed steps against documented procedures"
      ],
      correct: "Employees altering their behavior temporarily because they know they are being watched (reactivity/Hawthorne-style effect)",
      rationale: "Being observed can cause people to act more formally or differently than usual, requiring thoughtful timing and cross-checking."
    },
    {
      topic: "Prototyping Purpose",
      question: "How does prototyping help clarify requirements when users find abstract descriptions hard to visualize?",
      options: [
        "It gives users a tangible screen, workflow, or working model they can react to early so requirements become clearer and more concrete.",
        "It locks in final production code before users see any screens or workflows.",
        "It eliminates all need for user feedback during requirements discovery.",
        "It replaces every form of data flow or process modeling."
      ],
      correct: "It gives users a tangible screen, workflow, or working model they can react to early so requirements become clearer and more concrete.",
      rationale: "Prototypes let users experience proposed screens or flows early and point out missing needs, awkward steps, or misunderstandings."
    },
    {
      topic: "Prototyping Risks & Expectations",
      question: "What is an important risk to manage when using prototyping during requirements gathering?",
      options: [
        "Users may assume an early or rough prototype is a finished, production-ready system—or expect rapid changes without appreciating underlying complexity.",
        "Prototypes never generate useful questions from end users.",
        "Showing a prototype always prevents users from discovering missing requirements.",
        "Prototypes require zero communication between analysts and users."
      ],
      correct: "Users may assume an early or rough prototype is a finished, production-ready system—or expect rapid changes without appreciating underlying complexity.",
      rationale: "Managing expectations is essential so stakeholders understand what a prototype covers (and does not cover) compared to a finished system."
    },
    {
      topic: "Choosing Information-Gathering Methods",
      question: "Which guideline best describes how an analyst should choose among interviews, JAD, questionnaires, sampling, document review, observation, and prototyping?",
      options: [
        "Match the method(s) to the type of information needed, the audience, time/cost constraints, and the stage of analysis—often combining multiple methods.",
        "Always use only one single method for every project regardless of context.",
        "Avoid unobtrusive methods whenever documents or records are available.",
        "Use questionnaires exclusively when deep, nuanced stories from one key expert are needed."
      ],
      correct: "Match the method(s) to the type of information needed, the audience, time/cost constraints, and the stage of analysis—often combining multiple methods.",
      rationale: "Effective analysts select and combine methods fit for the information goal, stakeholder group, and project constraints."
    }
  ]
};