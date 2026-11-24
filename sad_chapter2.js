// sad_chapter2.js
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['sad'] = window.QUIZ_COURSES['sad'] || {
  title: "System Analysis and Design (MIS7104)",
  subtitle: "Systems, Roles, Methodologies & Requirements",
  lectures: {}
};

window.QUIZ_COURSES['sad'].lectures['chapter2'] = {
  title: "Chapter 2: Understanding and Modeling Organizational Systems",
  questions: [
    {
      topic: "Organizations as Systems",
      question: "Why is conceptualizing an organization as a system of interrelated and interdependent subsystems important for a systems analyst?",
      options: [
        "Changing or eliminating one subsystem or element affects the rest of the system, so analysts must see how parts fit together before designing information systems.",
        "It allows analysts to design each department's software in complete isolation without considering other units.",
        "It eliminates the need to study organizational boundaries, feedback, or management levels.",
        "It guarantees that subsystems will never conflict over resources or information sharing."
      ],
      correct: "Changing or eliminating one subsystem or element affects the rest of the system, so analysts must see how parts fit together before designing information systems.",
      rationale: "Because subsystems are interrelated and interdependent, changes in one area ripple across others—such as when marketing outputs become production inputs or when administrative roles shift."
    },
    {
      topic: "Systems Concepts",
      question: "In systems theory, what do processes do to system inputs?",
      options: [
        "They change or transform inputs into outputs (for example, by verifying, updating, or printing).",
        "They permanently seal organizational boundaries so no external data can enter.",
        "They store raw data without altering its form or producing any output.",
        "They replace human decision makers at the strategic management level."
      ],
      correct: "They change or transform inputs into outputs (for example, by verifying, updating, or printing).",
      rationale: "By definition, processes transform inputs from the environment into outputs; if nothing is changed or processed, you may not be identifying a true process."
    },
    {
      topic: "Boundaries & Environments",
      question: "Which of the following is considered part of an organization's external environment?",
      options: [
        "Community demographics, economic competition, political rules, and legal regulations outside organizational boundaries",
        "Internal accounting ledgers and departmental payroll files",
        "Subsystems such as marketing and production inside the firm",
        "Employee job titles and internal office seating charts"
      ],
      correct: "Community demographics, economic competition, political rules, and legal regulations outside organizational boundaries",
      rationale: "Anything external to an organization's boundaries—including community, economic, political, and legal environments—makes up its external environment and often cannot be directly controlled by the firm."
    },
    {
      topic: "Feedback & Self-Regulation",
      question: "How does feedback function as a form of system control in an organization?",
      options: [
        "System outputs compare actual performance against goals so managers can plan, control, and refine inputs or future goals.",
        "Feedback prevents any external information from crossing the organization's boundary.",
        "Feedback eliminates the need to track sales trends, inventory, or customer responses.",
        "Feedback only occurs after a system is permanently retired."
      ],
      correct: "System outputs compare actual performance against goals so managers can plan, control, and refine inputs or future goals.",
      rationale: "Feedback uses output information to compare performance with goals, supporting planning and control; self-regulating systems can even adjust routine actions automatically."
    },
    {
      topic: "Openness & Closedness",
      question: "How do internal openness and closedness typically differ across organizational units?",
      options: [
        "They exist on a continuum: creative units may favor open information flow, while sensitive units (such as top-secret defense planning) restrict access on a 'need-to-know' basis.",
        "All organizations are either 100% open or 100% closed across every department.",
        "Closed units share all project drafts freely with everyone from day one.",
        "Open units have no boundaries and cannot define system scope."
      ],
      correct: "They exist on a continuum: creative units may favor open information flow, while sensitive units (such as top-secret defense planning) restrict access on a 'need-to-know' basis.",
      rationale: "Internal openness and closedness sit along a continuum rather than extremes, varying by department, task sensitivity, and project stage."
    },
    {
      topic: "Virtual Organizations & Teams",
      question: "What is a key characteristic of a virtual organization or virtual team, along with a potential challenge highlighted in Chapter 2?",
      options: [
        "Members collaborate across locations via computer and communications networks to cut facility costs or respond faster, though remote workers may miss tangible cultural artifacts or social connection.",
        "Members must work in the same physical building and cannot coordinate electronically.",
        "Virtual teams never use information technology to share tasks or technical support.",
        "Virtual organizations have no need for organizational culture or shared identity."
      ],
      correct: "Members collaborate across locations via computer and communications networks to cut facility costs or respond faster, though remote workers may miss tangible cultural artifacts or social connection.",
      rationale: "Virtual teams and enterprises connect remote members electronically to reduce physical facility costs and adapt quickly, while questions remain about social needs and cultural artifacts."
    },
    {
      topic: "Systems Perspective",
      question: "What problem can arise when a manager promoted to strategic management retains 'tunnel vision' from a prior functional role (such as production or engineering)?",
      options: [
        "They may overemphasize narrow functional metrics or desires over broader organizational forecasting, policy making, and true enterprise information requirements.",
        "They automatically gain complete visibility into every department's needs without consulting users.",
        "They eliminate all conflict between functional subsystems.",
        "They no longer need external market or competitive information."
      ],
      correct: "They may overemphasize narrow functional metrics or desires over broader organizational forecasting, policy making, and true enterprise information requirements.",
      rationale: "Managers often view the organization with their own functional area at the center; rising to strategic roles while holding that narrow view can blur true information requirements."
    },
    {
      topic: "Enterprise Systems (ERP)",
      question: "Why can implementing an Enterprise Resource Planning (ERP) system (such as SAP or Oracle) prove challenging for organizations?",
      options: [
        "Fitting existing business processes to an ERP model—or rushing business process design before implementation—can cause extra customization, delays, higher costs, and lost user confidence.",
        "ERP systems only handle word processing and never touch procurement, inventory, or accounting.",
        "ERP packages require zero training, customization, or organizational commitment.",
        "ERP systems are built exclusively for single-person home offices."
      ],
      correct: "Fitting existing business processes to an ERP model—or rushing business process design before implementation—can cause extra customization, delays, higher costs, and lost user confidence.",
      rationale: "ERP integrates cross-functional information flows, but mismatches between business processes and ERP functionality often lead to heavy customization, longer timelines, higher costs, and frustration."
    },
    {
      topic: "Context-Level Data Flow Diagram",
      question: "Which three symbols are used on a context-level data flow diagram (environmental model)?",
      options: [
        "A rounded rectangle (single process representing the whole system), a square with shaded edges (external entity), and arrows (data flows)",
        "Stick figures (actors), ovals (use cases), and dashed <<include>> arrows",
        "Crow's foot lines, diamond overlays, and rounded-corner entity boxes",
        "Swimlanes, decision diamonds, and sequence lifelines"
      ],
      correct: "A rounded rectangle (single process representing the whole system), a square with shaded edges (external entity), and arrows (data flows)",
      rationale: "A context-level DFD uses one process symbol for the entire system, external entity symbols for outside sources/recipients, and data flow arrows showing data movement."
    },
    {
      topic: "Context-Level Data Flow Diagram",
      question: "How does a context-level data flow diagram help define the scope of a system?",
      options: [
        "It shows the single system process and its boundaries with external entities, which lie outside the system's scope and control.",
        "It details every low-level database table, primary key, and SQL query in the system.",
        "It replaces the need for use cases, data dictionaries, and process specifications.",
        "It places internal database tables inside external entity squares."
      ],
      correct: "It shows the single system process and its boundaries with external entities, which lie outside the system's scope and control.",
      rationale: "A context-level DFD establishes system boundaries by showing what is inside the central system process versus external entities outside the system's control."
    },
    {
      topic: "Entity-Relationship (E-R) Modeling",
      question: "In crow's foot E-R notation, what do the symbols `||`, a crow's foot, and a circle (`O`) represent?",
      options: [
        "`||` indicates one, a crow's foot indicates many (one or more), and `O` indicates zero (optionality/none is possible).",
        "`||` indicates zero, a crow's foot indicates exactly two, and `O` indicates a mandatory many.",
        "`||` indicates an external entity, a crow's foot indicates a data flow, and `O` indicates a process.",
        "`||` indicates a dashed line, a crow's foot indicates inheritance, and `O` indicates a time trigger."
      ],
      correct: "`||` indicates one, a crow's foot indicates many (one or more), and `O` indicates zero (optionality/none is possible).",
      rationale: "In crow's foot notation, the short bar denotes one, the crow's foot denotes many, and the circle (`O`) denotes zero (an optional condition)."
    },
    {
      topic: "Entity-Relationship (E-R) Modeling",
      question: "In Figure 2.8, how is the relationship between Systems Analyst (`||`) and Project (`O` with crow's foot) read from left to right?",
      options: [
        "A Systems Analyst may be assigned to zero, one, or many Projects (may be assigned to many projects).",
        "Every Project must have exactly one Systems Analyst and no other projects exist.",
        "A Systems Analyst can never work on more than one Project at a time.",
        "A Project is an external entity outside the organization."
      ],
      correct: "A Systems Analyst may be assigned to zero, one, or many Projects (may be assigned to many projects).",
      rationale: "The circle (`O`) plus crow's foot at the Project end means zero, one, or many projects may be associated with a systems analyst."
    },
    {
      topic: "Entity-Relationship (E-R) Modeling",
      question: "What is an associative entity (also called a gerund, junction, or intersection entity) in an E-R diagram?",
      options: [
        "An entity created to join two other entities and that can exist only when connected to at least two entities (such as Reservation linking Patron and Concert/Show).",
        "A physical hardware device such as a printer or keyboard.",
        "An external customer or vendor who is outside the organization's scope.",
        "A high-level strategic goal set by top executives."
      ],
      correct: "An entity created to join two other entities and that can exist only when connected to at least two entities (such as Reservation linking Patron and Concert/Show).",
      rationale: "An associative entity joins two entities and depends on its connection to them—for example, a Reservation relates a Patron to a Concert/Show."
    },
    {
      topic: "Entity-Relationship (E-R) Modeling",
      question: "When is an attributive entity used in an E-R model?",
      options: [
        "To represent data completely dependent on the existence of a fundamental entity, especially repeating groups (such as Performance for a Concert/Show).",
        "To represent an external government agency that sends regulations to the firm.",
        "To show the sequence of steps in a user login screen.",
        "To replace all fundamental entities in a database."
      ],
      correct: "To represent data completely dependent on the existence of a fundamental entity, especially repeating groups (such as Performance for a Concert/Show).",
      rationale: "An attributive entity models attributes dependent on a fundamental entity—such as multiple Performances belonging to a Concert/Show."
    },
    {
      topic: "Entity-Relationship (E-R) Modeling",
      question: "Why should a systems analyst begin sketching E-R diagrams early upon entering an organization rather than waiting until database design?",
      options: [
        "Early E-R diagrams help clarify what business the organization is in, narrow problem scope around key entities, and verify whether the right problem is being addressed.",
        "Because E-R diagrams automatically generate finished executable code without interviewing users.",
        "Because entities on an E-R diagram never change during data gathering.",
        "Because E-R diagrams eliminate the need to confirm findings through interviews or observation."
      ],
      correct: "Early E-R diagrams help clarify what business the organization is in, narrow problem scope around key entities, and verify whether the right problem is being addressed.",
      rationale: "Sketching E-R diagrams early helps analysts list entities, choose key entities, define scope, and refine their understanding alongside data-gathering methods."
    },
    {
      topic: "Use Case Modeling",
      question: "What does a use case model represent in systems analysis?",
      options: [
        "A logical view of what a system does from an external user's perspective, without specifying technical or implementation details.",
        "A physical network wiring diagram showing routers, cables, and server racks.",
        "A financial balance sheet showing annual depreciation expenses.",
        "A low-level source code listing for a single programming module."
      ],
      correct: "A logical view of what a system does from an external user's perspective, without specifying technical or implementation details.",
      rationale: "Use case modeling is a logical model focusing on behaviors, services, and responses of value to external users without getting bogged down in implementation details."
    },
    {
      topic: "Use Case Symbols",
      question: "How does Chapter 2 distinguish between primary actors and supporting (secondary) actors?",
      options: [
        "Primary actors supply/receive data or hold business stakes in the use case, whereas supporting actors help keep the system running or provide services (such as help desk or maintenance).",
        "Primary actors are always computers, whereas supporting actors are always external customers.",
        "Primary actors are inside the system boundary, whereas supporting actors are outside.",
        "There is no difference; all actors must initiate every use case."
      ],
      correct: "Primary actors supply/receive data or hold business stakes in the use case, whereas supporting actors help keep the system running or provide services (such as help desk or maintenance).",
      rationale: "Primary actors interact with or have a stake in what the use case achieves, while supporting/secondary actors assist or maintain system operations."
    },
    {
      topic: "Use Case Symbols",
      question: "If the same person interacts with a system both as an employee and as a customer of the company store, how are they represented on a use case diagram?",
      options: [
        "As two different actor symbols, because an actor represents a specific role played in interacting with the system.",
        "As a single actor symbol connected to every use case in the entire enterprise.",
        "As a data store inside the system oval.",
        "They are omitted because internal staff cannot also be customers."
      ],
      correct: "As two different actor symbols, because an actor represents a specific role played in interacting with the system.",
      rationale: "In use case modeling, an actor denotes a particular role rather than a physical individual, so distinct roles appear as separate actors."
    },
    {
      topic: "Use Case Relationships",
      question: "In a use case diagram, what does a dashed arrow labeled `<<include>>` pointing from 'Enroll in Course' to 'Pay Student Fees' indicate?",
      options: [
        "'Pay Student Fees' contains behavior common to multiple use cases and is included as part of 'Enroll in Course.'",
        "'Enroll in Course' is an optional exception that extends 'Pay Student Fees.'",
        "'Pay Student Fees' is a specialized role that generalizes 'Enroll in Course.'",
        "A student is outside the scope of the university."
      ],
      correct: "'Pay Student Fees' contains behavior common to multiple use cases and is included as part of 'Enroll in Course.'",
      rationale: "An `<<include>>` (or uses) relationship points to a shared behavior used by more than one use case, such as paying student fees during course enrollment or housing arrangement."
    },
    {
      topic: "Use Case Relationships",
      question: "In a use case diagram, how does an `<<extend>>` relationship work?",
      options: [
        "A dashed arrow points from the extending use case (handling a variation or exception) to the basic use case.",
        "A solid line with no arrowheads connects a human actor to a primary use case.",
        "An arrow points from a general actor to a more specific actor.",
        "It indicates a mandatory step that executes in every single transaction without exception."
      ],
      correct: "A dashed arrow points from the extending use case (handling a variation or exception) to the basic use case.",
      rationale: "The `<<extend>>` arrow points from the extending use case (such as arranging language translation or student health insurance) to the basic use case it modifies or extends."
    },
    {
      topic: "Use Case Relationships",
      question: "In a `generalizes` relationship between 'Part-time Student' and 'Student' (or 'Keynote Speaker' and 'Speaker'), which way does the generalization arrow point?",
      options: [
        "It points from the more specific/typical thing ('Part-time Student' or 'Keynote Speaker') toward the more general thing ('Student' or 'Speaker').",
        "It points from the more general thing toward the more specific thing.",
        "It uses a dashed line labeled `<<include>>`.",
        "It connects a use case to a database table."
      ],
      correct: "It points from the more specific/typical thing ('Part-time Student' or 'Keynote Speaker') toward the more general thing ('Student' or 'Speaker').",
      rationale: "In use case generalization, the arrow points to the more general actor or use case—for instance, Part-time Student generalizes Student, and Keynote Speaker generalizes Speaker."
    },
    {
      topic: "Use Case Levels",
      question: "Using Alistair Cockburn's altitude metaphors in Chapter 2, which use case level corresponds to 'sea level'—representing a specific user goal or business activity typically taking 2 to 20 minutes?",
      options: [
        "Blue level",
        "White level (cloud)",
        "Kite level",
        "Black or clam level"
      ],
      correct: "Blue level",
      rationale: "Blue (sea level) captures user-goal business activities (such as placing an item in a shopping cart or registering a continuing student), usually taking 2 to 20 minutes."
    },
    {
      topic: "Use Case Levels",
      question: "Which altitude level in Chapter 2 represents the highest, enterprise-wide level (often only four or five for an entire organization, such as managing inventory or advertising goods)?",
      options: [
        "White level",
        "Blue level",
        "Indigo or fish level",
        "Black or clam level"
      ],
      correct: "White level",
      rationale: "White (like clouds) is the enterprise-wide level, above Kite (business unit/department summary), Blue (user goal), Indigo/fish (detailed/subfunctional), and Black/clam (lowest subfunction detail)."
    },
    {
      topic: "Use Case Scenarios",
      question: "What are the three main sections of a use case scenario as described in Chapter 2?",
      options: [
        "Header (identifiers, actors, stakeholders, level, description, triggering event/type), Steps Performed (main path & extensions/information needed), and Footer (preconditions, postconditions, assumptions, guarantees, issues, priority/risk).",
        "Input screen layout, SQL create statements, and network topology map.",
        "Project charter, Gantt chart, and break-even cash-flow table.",
        "Executive summary, vendor contract, and user training schedule."
      ],
      correct: "Header (identifiers, actors, stakeholders, level, description, triggering event/type), Steps Performed (main path & extensions/information needed), and Footer (preconditions, postconditions, assumptions, guarantees, issues, priority/risk).",
      rationale: "Chapter 2 organizes a use case scenario into header identification/triggering details, numbered steps with supporting information and extensions, and footer conditions, guarantees, and metadata."
    },
    {
      topic: "Use Case Scenarios",
      question: "What is the difference between an external triggering event and a temporal triggering event in a use case scenario?",
      options: [
        "An external event is initiated by an actor (person or system), whereas a temporal event is triggered by a specific time or schedule (such as sending weekly emails or quarterly reports).",
        "An external event occurs inside a database, whereas a temporal event occurs on a user's keyboard.",
        "An external event only happens once per year, whereas a temporal event never repeats.",
        "There is no difference between external and temporal triggers."
      ],
      correct: "An external event is initiated by an actor (person or system), whereas a temporal event is triggered by a specific time or schedule (such as sending weekly emails or quarterly reports).",
      rationale: "External triggers come from an actor initiating an action, while temporal triggers are time-driven events occurring at scheduled intervals or dates."
    },
    {
      topic: "Use Case Scenarios",
      question: "In the footer of a use case scenario, what is the distinction between a 'Minimum Guarantee' and a 'Success Guarantee'?",
      options: [
        "The Minimum Guarantee states the least outcome promised if things do not go completely as planned, whereas the Success Guarantee states what satisfies the user when the use case goal is achieved.",
        "The Minimum Guarantee is the software license price, whereas the Success Guarantee is the hardware warranty period.",
        "The Minimum Guarantee lists preconditions before logon, whereas the Success Guarantee lists network speeds.",
        "They mean the exact same thing in every use case."
      ],
      correct: "The Minimum Guarantee states the least outcome promised if things do not go completely as planned, whereas the Success Guarantee states what satisfies the user when the use case goal is achieved.",
      rationale: "A Minimum Guarantee defines the fallback floor (even if minimal), while a Success Guarantee specifies the full goal achieved for the user."
    },
    {
      topic: "Levels of Management",
      question: "How do the decision-making characteristics of Operational Control managers compare with those of Strategic Management?",
      options: [
        "Operational managers make routine, repetitive decisions with clear problems and enumerable alternatives, whereas strategic managers face semistructured/one-time decisions with harder-to-define problems and long-term horizons.",
        "Operational managers set long-term mergers and divestitures, whereas strategic managers schedule daily shift work.",
        "Operational managers rely heavily on external market forecasts, whereas strategic managers ignore external trends.",
        "Strategic managers deal only with routine, rule-based transactions."
      ],
      correct: "Operational managers make routine, repetitive decisions with clear problems and enumerable alternatives, whereas strategic managers face semistructured/one-time decisions with harder-to-define problems and long-term horizons.",
      rationale: "Chapter 2 contrasts operational control (repetitive, rule-based, clear alternatives) with strategic management (uncertain, outward-looking, semistructured, long-term policy and direction)."
    },
    {
      topic: "Information Needs by Management Level",
      question: "Which information profile best matches Middle Managers (Managerial Planning and Control)?",
      options: [
        "High need for real-time and historical internal information to measure performance against standards, troubleshoot, allocate short-term resources, and simulate/predict future events.",
        "Exclusive reliance on external competitor news with zero need for internal performance data.",
        "Only periodic annual summaries with no need for real-time troubleshooting information.",
        "No involvement in short-term planning or resource allocation."
      ],
      correct: "High need for real-time and historical internal information to measure performance against standards, troubleshoot, allocate short-term resources, and simulate/predict future events.",
      rationale: "Middle managers bridge operational and strategic levels, needing real-time internal data for troubleshooting alongside historical data, standards comparisons, and predictive/what-if modeling."
    },
    {
      topic: "Organizational Culture",
      question: "In Chapter 2's discussion of organizational subcultures, what is the difference between verbal symbolism and nonverbal symbolism?",
      options: [
        "Verbal symbolism includes shared language, myths, metaphors, visions, and humor, whereas nonverbal symbolism includes shared artifacts, rites, ceremonies, dress, and office layout/decor.",
        "Verbal symbolism applies only to executives, whereas nonverbal symbolism applies only to IT staff.",
        "Verbal symbolism is written in code, whereas nonverbal symbolism is spoken in meetings.",
        "Verbal symbolism is permanent, whereas nonverbal symbolism never influences system use."
      ],
      correct: "Verbal symbolism includes shared language, myths, metaphors, visions, and humor, whereas nonverbal symbolism includes shared artifacts, rites, ceremonies, dress, and office layout/decor.",
      rationale: "Chapter 2 identifies shared verbal symbolism (language, myths, metaphors, humor) and nonverbal symbolism (artifacts, rites, ceremonies, dress, office placement/decoration) as researchable determinants of subcultures."
    },
    {
      topic: "Organizational Culture & Systems",
      question: "How can understanding organizational subcultures help a systems analyst when designing or introducing a new information system?",
      options: [
        "It helps anticipate resistance to change, tailor training to specific subcultural concerns, and design systems that fit how different groups actually work and share information.",
        "It allows the analyst to ignore user norms and force identical workflows on every group.",
        "It proves that subcultures have no effect on whether users adopt or reject a system.",
        "It replaces the need to model system scope or user requirements."
      ],
      correct: "It helps anticipate resistance to change, tailor training to specific subcultural concerns, and design systems that fit how different groups actually work and share information.",
      rationale: "Subcultures can sanction or resist IS use and shape information sharing; recognizing them helps analysts reduce resistance, customize training, and align system design with user realities."
    }
  ]
};