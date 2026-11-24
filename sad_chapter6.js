// sad_chapter6.js
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['sad'] = window.QUIZ_COURSES['sad'] || {
  title: "System Analysis and Design (MIS7104)",
  subtitle: "Systems, Roles, Methodologies & Requirements",
  lectures: {}
};

window.QUIZ_COURSES['sad'].lectures['chapter6'] = {
  title: "Chapter 6: Using Data Flow Diagrams",
  questions: [
    {
      topic: "Data Flow Approach",
      question: "What is a major advantage of using data flow diagrams (DFDs) during systems analysis?",
      options: [
        "They let analysts and users visually trace data movement and transformation across processes without locking into physical implementation details early.",
        "They replace the need to understand data inputs, outputs, or data stores.",
        "They automatically compile executable machine code without human review.",
        "They only show physical server cables and rack layouts."
      ],
      correct: "They let analysts and users visually trace data movement and transformation across processes without locking into physical implementation details early.",
      rationale: "DFDs provide a clear graphical picture of how data enters, transforms, is stored, and exits a system in a logical way."
    },
    {
      topic: "DFD Symbols",
      question: "In a data flow diagram, what does a data store symbol represent?",
      options: [
        "Data at rest—such as a file, table, or repository—that processes read from or update",
        "An external customer or vendor outside the system's boundary",
        "A person who draws arrows on a whiteboard",
        "A network router connecting two buildings"
      ],
      correct: "Data at rest—such as a file, table, or repository—that processes read from or update",
      rationale: "A data store holds data at rest that processes retrieve from or write to."
    },
    {
      topic: "DFD Rules",
      question: "Which data flow connection is considered invalid or improper on a standard data flow diagram?",
      options: [
        "A direct data flow arrow connecting one external entity directly to another external entity without passing through a process",
        "A data flow arrow from an external entity into a process",
        "A data flow arrow from a process to a data store",
        "A data flow arrow from a process to an external entity"
      ],
      correct: "A direct data flow arrow connecting one external entity directly to another external entity without passing through a process",
      rationale: "External entities sit outside the system and do not connect directly to other external entities or data stores; data flows through processes."
    },
    {
      topic: "DFD Rules",
      question: "How should data flows and processes be named on a data flow diagram?",
      options: [
        "Data flows are named with descriptive nouns/noun phrases, and processes are named with active verb + object phrases describing the transformation.",
        "Both data flows and processes should be left unlabeled so readers guess their meaning.",
        "Data flows are named with verbs like 'calculate', and processes are named with customer names.",
        "Processes must be named with SQL table names only."
      ],
      correct: "Data flows are named with descriptive nouns/noun phrases, and processes are named with active verb + object phrases describing the transformation.",
      rationale: "Clear noun labels on data flows and verb-noun action labels on processes make DFDs readable and unambiguous."
    },
    {
      topic: "Context Diagram vs. Level 0",
      question: "How does a Level 0 data flow diagram expand upon a context-level data flow diagram?",
      options: [
        "It explodes the single system process from the context diagram into key internal processes, data stores, and data flows while keeping the external boundary consistent.",
        "It removes all external entities and shows only raw CPU instructions.",
        "It compresses all processes into a single unnumbered circle.",
        "It replaces every data flow with a Gantt chart bar."
      ],
      correct: "It explodes the single system process from the context diagram into key internal processes, data stores, and data flows while keeping the external boundary consistent.",
      rationale: "Level 0 breaks the overall system process into major sub-processes and data stores while preserving the external interfaces."
    },
    {
      topic: "DFD Balancing",
      question: "What does 'balancing' a child DFD against its parent process mean?",
      options: [
        "The child diagram must preserve the exact same incoming and outgoing data flows that enter and leave the parent process.",
        "The child diagram must have the same number of data stores as the entire company.",
        "Every process on a DFD must have equal physical weight on paper.",
        "A child diagram can drop external data flows without explanation."
      ],
      correct: "The child diagram must preserve the exact same incoming and outgoing data flows that enter and leave the parent process.",
      rationale: "Balancing ensures consistency across DFD levels so no data flows mysteriously appear or vanish when exploding a process."
    },
    {
      topic: "DFD Numbering",
      question: "If Process 2 on a Level 0 DFD is exploded into a child diagram, how are its child processes typically numbered?",
      options: [
        "2.1, 2.2, 2.3, and so on",
        "100, 200, 300 randomly",
        "A, B, C without any link to Process 2",
        "0.1, 0.2, 0.3"
      ],
      correct: "2.1, 2.2, 2.3, and so on",
      rationale: "Hierarchical numbering (`2.1`, `2.2`, ...) shows clearly that those child processes decompose Process `2`."
    },
    {
      topic: "Logical vs. Physical DFDs",
      question: "How does a physical data flow diagram differ from a logical data flow diagram?",
      options: [
        "A physical DFD reflects implementation specifics—such as who performs a step, physical files/forms, or batch/online mechanics—whereas a logical DFD focuses on business data flows and transformations.",
        "A logical DFD lists hardware serial numbers, whereas a physical DFD omits data stores.",
        "Physical DFDs cannot show data flows or processes.",
        "Logical DFDs are only drawn after the system is retired."
      ],
      correct: "A physical DFD reflects implementation specifics—such as who performs a step, physical files/forms, or batch/online mechanics—whereas a logical DFD focuses on business data flows and transformations.",
      rationale: "Logical DFDs emphasize what happens business-wise with data, while physical DFDs show how it is implemented in practice."
    },
    {
      topic: "DFD Partitioning",
      question: "Why do analysts partition DFDs—including web and interactive systems—into smaller components or levels?",
      options: [
        "To manage complexity, keep individual diagrams easy to read, and separate distinct functional areas or interaction/processing layers.",
        "To hide important data flows from stakeholders.",
        "To force every system onto a single crowded diagram.",
        "To eliminate data stores from the model."
      ],
      correct: "To manage complexity, keep individual diagrams easy to read, and separate distinct functional areas or interaction/processing layers.",
      rationale: "Partitioning keeps diagrams clean, understandable, and modular as systems grow in scope."
    },
    {
      topic: "DFD Process Behavior",
      question: "What is a common modeling error when an analyst draws a process on a DFD that has inputs but no outputs, or outputs with no inputs?",
      options: [
        "A 'black hole' (inputs only) or 'miracle' (outputs only) process indicates missing logic, incomplete data flows, or a misidentified element.",
        "It proves the DFD is automatically balanced and complete.",
        "It means the process does not need a name or number.",
        "It converts the process into an external entity automatically."
      ],
      correct: "A 'black hole' (inputs only) or 'miracle' (outputs only) process indicates missing logic, incomplete data flows, or a misidentified element.",
      rationale: "Processes transform incoming data into outgoing data; missing inputs or outputs signal an incomplete or inaccurate diagram."
    }
  ]
};