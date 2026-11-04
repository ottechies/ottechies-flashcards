window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['lecture1'] = {
  title: "Lecture 1: Introduction to Modelling & Simulation",
  questions: [
    {
      topic: "System Definition",
      question: "What is the formal definition of a 'system' in the context of modelling and simulation?",
      answer: "A collection of entities, components, or variables that interact with each other over time to accomplish a specific goal or function.",
      rationale: "Systems are bounded entities composed of interacting parts forming a unified whole within an environment."
    },
    {
      topic: "Model Definition",
      question: "What is a model in systems engineering and simulation?",
      answer: "A simplified representation or abstraction of a real-world system, process, or phenomenon designed to understand, analyze, or predict its behavior.",
      rationale: "Models strip away unnecessary detail to focus on the essential mechanisms driving system behavior."
    },
    {
      topic: "Purpose of Modelling",
      question: "What is the primary purpose of building a mathematical or computational model?",
      answer: "To gain insights into system dynamics, test hypotheses, and evaluate decisions without risking real-world costs or safety.",
      rationale: "Models allow experimentation and forecasting safely and efficiently."
    },
    {
      topic: "Simulation Definition",
      question: "How is 'simulation' defined as an analytical technique?",
      answer: "The imitation of the operation of a real-world process or system over time using a computer model.",
      rationale: "Simulation captures time-dependent trajectories and operational mechanics dynamically."
    },
    {
      topic: "Why Simulate?",
      question: "Under what conditions is simulation preferred over direct analytical mathematical solutions?",
      answer: "When systems are too complex, non-linear, stochastic, or analytically intractable to solve with closed-form equations.",
      rationale: "Complex interactions with feedback loops and random variables defy simple algebraic solutions."
    },
    {
      topic: "Deterministic vs. Stochastic Models",
      question: "What is the key difference between deterministic and stochastic models?",
      answer: "Deterministic models contain no random components and produce the exact same output for a given set of inputs, whereas stochastic models incorporate probabilistic randomness.",
      rationale: "Stochastic models reflect real-world uncertainty using random variables and probability distributions."
    },
    {
      topic: "Static vs. Dynamic Models",
      question: "What distinguishes a static simulation model from a dynamic model?",
      answer: "Static models represent a system at a specific point in time (time-independent), whereas dynamic models represent changes over time.",
      rationale: "Dynamic models explicitly track how state variables evolve across time steps."
    },
    {
      topic: "Continuous vs. Discrete Models",
      question: "What is the difference between continuous and discrete system models?",
      answer: "Continuous models track state variables changing smoothly and continuously over time, while discrete models change state at distinct, separated points in time.",
      rationale: "Differential equations typically govern continuous models, whereas event queues govern discrete event systems."
    },
    {
      topic: "Physical vs. Mathematical Models",
      question: "What is the difference between physical (iconic) models and mathematical models?",
      answer: "Physical models are tangible, scaled-down replicas of systems, whereas mathematical models use abstract symbols, equations, and logic.",
      rationale: "Computational simulation relies on mathematical and algorithmic abstractions."
    },
    {
      topic: "Mental Models",
      question: "What is a mental model, and what are its primary limitations?",
      answer: "An internal, intuitive cognitive representation of how something works; its limitations include cognitive biases, limited memory capacity, and inability to handle complex multi-variable interactions.",
      rationale: "Mental models fail in complex systems with time delays and non-linear feedback loops."
    },
    {
      topic: "Advantages of Simulation",
      question: "What are three major operational advantages of using simulation studies?",
      answer: "1) Safe exploration of extreme scenarios, 2) Time compression/expansion, and 3) Lower cost compared to physical trial-and-error.",
      rationale: "Simulation lets analysts experiment without disrupting live operations or incurring massive capital expenses."
    },
    {
      topic: "Disadvantages of Simulation",
      question: "What are two key challenges or limitations associated with simulation modeling?",
      answer: "1) Model development can be costly and time-consuming, and 2) Interpreting results requires specialized statistical expertise to avoid misinterpretation.",
      rationale: "Garbage-in, garbage-out applies heavily if underlying assumptions or input data are flawed."
    },
    {
      topic: "Problem Formulation",
      question: "What is the crucial first step in undertaking any simulation study?",
      answer: "Problem formulation and defining clear project objectives and performance measures.",
      rationale: "Without a precisely defined problem, building a model wastes resources and answers the wrong questions."
    },
    {
      topic: "Conceptualization",
      question: "What does the conceptual model phase involve in a simulation study?",
      answer: "Translating the real-world system scope, boundaries, assumptions, and variable interactions into a structured flow diagram or conceptual design.",
      rationale: "Conceptualization bridges raw problem statements and formal computer code."
    },
    {
      topic: "Data Collection",
      question: "Why is data collection critical during a simulation study?",
      answer: "To parameterize the model accurately, fit appropriate probability distributions, and establish baseline performance metrics.",
      rationale: "Input data quality directly dictates the validity of simulation output."
    },
    {
      topic: "Model Translation",
      question: "What does 'model translation' (or coding) mean in simulation engineering?",
      answer: "Converting the conceptual flowchart and mathematical logic into executable computer code (such as MATLAB, Python, or specialized simulation software).",
      rationale: "Translation makes the model executable by a computer processor."
    },
    {
      topic: "Verification vs. Validation",
      question: "What is the fundamental difference between model verification and model validation?",
      answer: "Verification ensures the computer program is built correctly ('Are we building the product right?'), while validation ensures the model accurately represents the real-world system ('Are we building the right product?').",
      rationale: "Verification checks for bugs and logic errors; validation checks real-world fidelity."
    },
    {
      topic: "Verification Techniques",
      question: "What are common techniques used to verify a simulation model?",
      answer: "Tracing variables step-by-step, unit testing subroutines, checking boundary conditions, and structured walkthroughs of source code.",
      rationale: "Verification ensures the code matches the conceptual design specifications."
    },
    {
      topic: "Validation Techniques",
      question: "How is a simulation model typically validated against reality?",
      answer: "By comparing simulation output data against historical real-world data, expert intuition, and conducting sensitivity analysis.",
      rationale: "Validation confirms that system behavior mirrors empirical observations."
    },
    {
      topic: "Experimental Design",
      question: "What is the purpose of experimental design in simulation?",
      answer: "To systematically plan what input parameter combinations (such as x and y vectors) to test and how many simulation runs (n) to execute.",
      rationale: "Design of experiments (DOE) maximizes statistical information while minimizing computational runs."
    },
    {
      topic: "Simulation Execution",
      question: "What occurs during the execution (run) phase of a simulation study?",
      answer: "Running the coded model across designated parameter values and recording performance metrics over simulated time.",
      rationale: "Execution generates raw simulation output logs and expected value matrices."
    },
    {
      topic: "Output Analysis",
      question: "Why is statistical output analysis necessary after running simulations?",
      answer: "To account for stochastic variability, calculate confidence intervals, and estimate true expected values using methods like the mean.",
      rationale: "Single simulation runs contain random noise; output analysis extracts statistically robust conclusions."
    },
    {
      topic: "Implementation & Documentation",
      question: "Why are documentation and implementation crucial at the end of a simulation project?",
      answer: "To ensure that decision-makers understand model recommendations, trust the results, and can maintain or update the model in the future.",
      rationale: "A brilliant model fails if stakeholders cannot comprehend or apply its insights."
    },
    {
      topic: "Randomness & Stochasticity",
      question: "How do computers simulate genuine randomness in stochastic models?",
      answer: "Using Pseudo-Random Number Generators (PRNGs) that generate deterministic sequences of numbers satisfying statistical randomness tests.",
      rationale: "Computers are deterministic, so they use algorithms to produce repeatable pseudo-random streams."
    },
    {
      topic: "System Boundaries",
      question: "Why must an analyst define clear system boundaries when modelling?",
      answer: "To determine which variables and components are included inside the model versus treated as exogenous external factors.",
      rationale: "Defining boundaries prevents scope creep and keeps the model manageable and focused."
    },
    {
      topic: "State Variables",
      question: "What is a 'state variable' in a simulation model?",
      answer: "A variable that defines the condition or status of the system at any given point in time.",
      rationale: "System behavior is tracked by how state variables evolve across simulation time steps."
    },
    {
      topic: "Entities and Attributes",
      question: "What are 'entities' and 'attributes' in discrete-event simulation terminology?",
      answer: "Entities are dynamic objects that move through the system (e.g., customers, parts), and attributes are characteristics belonging to those entities (e.g., priority, arrival time).",
      rationale: "Entities and attributes form the building blocks of transactional and queueing simulations."
    },
    {
      topic: "Role of Computers",
      question: "Why has computer technology revolutionized modern systems modelling and simulation?",
      answer: "By enabling rapid execution of millions of Monte Carlo iterations and complex differential equation integrations in seconds.",
      rationale: "High-speed computing turned theoretical simulation into an indispensable practical decision-making tool."
    },
    {
      topic: "Model Credibility",
      question: "What is 'model credibility', and why is it essential for decision-making?",
      answer: "Credibility is the degree to which managers and stakeholders trust the model's outputs enough to base real-world capital and operational decisions on them.",
      rationale: "A technically sound model with zero stakeholder credibility will never be implemented."
    },
    {
      topic: "Iterative Nature of Modelling",
      question: "Why is the modelling and simulation process described as iterative rather than strictly linear?",
      answer: "Because insights gained during validation, experimentation, or data analysis frequently require revisiting and refining earlier stages like conceptualization or coding.",
      rationale: "Problem-solving in modelling requires continuous refinement as understanding deepens."
    }
  ]
};