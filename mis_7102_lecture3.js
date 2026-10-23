window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['lecture3'] = {
  title: "Lecture 3: System Dynamics, CLDs & Stock-Flow Networks",
  questions: [
    {
      topic: "System Dynamics Fundamentals",
      question: "What is the core focus of System Dynamics as a modelling methodology?",
      answer: "Understanding how complex systems change over time through the interaction of feedback loops, stocks, flows, and time delays.",
      rationale: "System dynamics focuses on non-linear behavior, internal feedback structures, and time-dependent system trajectories."
    },
    {
      topic: "Feedback Loops",
      question: "What defines a Reinforcing (Positive / R) feedback loop in a system?",
      answer: "A loop where an initial change in a variable triggers changes that amplify or compound the original change in the same direction.",
      rationale: "Reinforcing loops drive exponential growth or runaway collapse (e.g., compounding interest, word-of-mouth adoption)."
    },
    {
      topic: "Feedback Loops",
      question: "What defines a Balancing (Negative / B) feedback loop in a system?",
      answer: "A loop that acts to counteract change, seeking to bring a system toward a goal, equilibrium, or desired state.",
      rationale: "Balancing loops provide stability, goal-seeking behavior, and self-correction (e.g., thermostatic temperature control)."
    },
    {
      topic: "Causal Loop Diagrams (CLDs)",
      question: "In a Causal Loop Diagram (CLD), what does a positive (+) link polarity signify?",
      answer: "That the dependent variable changes in the same direction as the independent variable (if cause increases, effect increases).",
      rationale: "A '+' polarity indicates direct proportionality or positive correlation between two connected variables."
    },
    {
      topic: "Causal Loop Diagrams (CLDs)",
      question: "In a Causal Loop Diagram (CLD), what does a negative (-) link polarity signify?",
      answer: "That the dependent variable changes in the opposite direction to the independent variable (if cause increases, effect decreases).",
      rationale: "A '-' polarity indicates inverse proportionality or negative correlation (e.g., price increase leads to demand decrease)."
    },
    {
      topic: "Loop Polarity Determination",
      question: "How is the overall polarity of a closed feedback loop determined in a CLD?",
      answer: "By multiplying all individual link signs (+ and -) in the loop: an even number of negative links yields a Reinforcing loop, and an odd number yields a Balancing loop.",
      rationale: "This rule accurately determines whether the closed loop amplifies or counteracts initial perturbations."
    },
    {
      topic: "Delays in Systems",
      question: "What is the systemic impact of time delays in feedback loops?",
      answer: "Time delays create inertia and sluggish response times, frequently leading to oscillations, overshoot, and overcorrection.",
      rationale: "Delays between action and response cause decision-makers to overreact because they don't see immediate results."
    },
    {
      topic: "Stocks (Levels)",
      question: "What is a 'Stock' (or Level) in system dynamics, and how is it represented graphically?",
      answer: "A stock represents the accumulated state of a system over time (like water in a bathtub), represented graphically as a rectangle.",
      rationale: "Stocks integrate flows and provide the system with memory, inertia, and historical context."
    },
    {
      topic: "Flows (Rates)",
      question: "What is a 'Flow' (or Rate) in system dynamics, and how is it represented graphically?",
      answer: "A flow represents the rate of change of a stock (inflows increase stocks, outflows decrease stocks), represented as a valve controlling pipe flow.",
      rationale: "Flows are mathematical derivatives that continuously alter stock levels over time."
    },
    {
      topic: "Stock-Flow Relationships",
      question: "Mathematically, what is the exact relationship between a stock and its inflows/outflows over time?",
      answer: "The stock is equal to the integral of (Inflows minus Outflows) over time, starting from an initial value.",
      rationale: "Stock(t) = Stock(t0) + Integral [Inflow(t) - Outflow(t)] dt."
    },
    {
      topic: "Behavior Modes",
      question: "What system behavior mode is produced by a dominant reinforcing loop without resource constraints?",
      answer: "Exponential growth (or exponential decay).",
      rationale: "Unchecked compounding leads to explosive upward or downward trajectories."
    },
    {
      topic: "Behavior Modes",
      question: "What system behavior mode is produced by a dominant balancing loop with a clear target goal?",
      answer: "Goal-seeking behavior (asymptotic approach toward equilibrium).",
      rationale: "The system progressively closes the gap between its current state and the goal over time."
    },
    {
      topic: "Behavior Modes",
      question: "What system behavior mode occurs when a balancing loop has a significant time delay in recognizing the gap?",
      answer: "Oscillation (ringing or fluctuating around the equilibrium point).",
      rationale: "Delays cause the system to overcorrect past the goal, reverse direction, and overshoot again."
    },
    {
      topic: "Behavior Modes",
      question: "What is 'Overshoot and Collapse' in system dynamics?",
      answer: "A behavior mode where a system grows rapidly past its carrying capacity due to delays, depleting essential resources and crashing.",
      rationale: "Classic example: population growth exceeding environmental carrying capacity leading to severe resource depletion."
    },
    {
      topic: "System Boundaries",
      question: "Why is defining the 'system boundary' critical when building a causal loop diagram?",
      answer: "It determines which variables are endogenously generated within the system versus exogenously treated as fixed external inputs.",
      rationale: "Endogenous loops explain internal behavior dynamics, whereas exogenous variables are treated as given external forces."
    },
    {
      topic: "Endogenous vs Exogenous",
      question: "What is the difference between endogenous and exogenous variables in system dynamics?",
      answer: "Endogenous variables are caused from within the system feedback structure, while exogenous variables come from outside the system.",
      rationale: "System dynamics models aim to explain dynamic behavior endogenously rather than relying on external shocks."
    },
    {
      topic: "Mental Models",
      question: "What role do 'mental models' play in system dynamics modeling?",
      answer: "Mental models form the initial hypothesis about how variables interact, which are then formalized and tested using computer simulation models.",
      rationale: "Formal models make mental models explicit, transparent, and testable against reality."
    },
    {
      topic: "Limits to Growth",
      question: "Describe the 'Limits to Growth' system archetype structure.",
      answer: "A reinforcing loop of rapid growth encounters a balancing loop representing a growing constraint or resource limit, eventually slowing growth down.",
      rationale: "Every reinforcing growth engine eventually hits a carrying capacity or resource bottleneck."
    },
    {
      topic: "Shifting the Burden",
      question: "What characterizes the 'Shifting the Burden' system archetype?",
      answer: "A short-term symptomatic solution is applied to a problem, which relieves immediate symptoms but erodes the fundamental, long-term solution.",
      rationale: "This creates systemic dependency and worsens the underlying root problem over time."
    },
    {
      topic: "Tragedy of the Commons",
      question: "What occurs in the 'Tragedy of the Commons' system archetype?",
      answer: "Multiple individuals pursuing independent short-term self-interest deplete a shared finite resource, leading to collective ruin.",
      rationale: "Classic example: overfishing or environmental pollution where individual gains are private, but costs are shared."
    },
    {
      topic: "Stock-Flow Diagram Elements",
      question: "In a stock-flow diagram, what do cloud symbols represent at the end of pipes?",
      answer: "Sources or sinks (boundaries of the model where flows originate from or disappear into infinite reservoirs).",
      rationale: "Clouds represent the boundary beyond which we do not track mass or energy conservation."
    },
    {
      topic: "Group Model Building",
      question: "What is 'Group Model Building' (GMB) in system dynamics practice?",
      answer: "A participatory modeling approach where stakeholders and modelers collaborate to co-create causal loop diagrams and understand complex problems.",
      rationale: "Fosters shared mental models, mutual learning, and organizational consensus for policy design."
    },
    {
      topic: "Nonlinearity",
      question: "Why is nonlinearity prevalent and important in complex systems?",
      answer: "Because relationships between variables are rarely proportional; effects can be disproportionate and tipping points exist across operating ranges.",
      rationale: "Linear approximations fail during extreme crises or structural shifts."
    },
    {
      topic: "Policy Resistance",
      question: "What is 'Policy Resistance' in complex systems?",
      answer: "The tendency of complex systems to fight back against interventions, neutralizing the intended effects of policies.",
      rationale: "Well-intentioned policies often fail or backfire because they ignore counteracting feedback loops."
    },
    {
      topic: "Simulation Validation",
      question: "What is the purpose of structural validation tests in system dynamics modeling?",
      answer: "To test whether the model's equations and causal structures reflect real-world physical laws, rather than just curve-fitting historical data.",
      rationale: "Confidence in model structure precedes confidence in model behavioral predictions."
    },
    {
      topic: "Conservation Laws",
      question: "What fundamental physical law governs the accumulation of stocks in stock-flow networks?",
      answer: "The law of conservation of mass/matter/energy (stocks only change through net inflows and outflows).",
      rationale: "Stocks cannot appear or disappear magically; they are accumulated integrals of flows."
    },
    {
      topic: "Co-flows",
      question: "What is a 'co-flow' structure in advanced system dynamics models?",
      answer: "A secondary stock-flow chain that tracks attributes or characteristics (like age, quality, or skill level) accompanying a primary physical stock.",
      rationale: "Allows modeling of aging chains or quality degradation alongside material flows."
    },
    {
      topic: "Information Links in CLDs",
      question: "In causal loop diagrams, how do information links differ from material/physical flows?",
      answer: "Information links transmit perceptions, data, or decisions instantly or with cognitive delay without depleting a physical stock.",
      rationale: "Decisions are guided by information feedback, whereas materials move through physical pipes."
    },
    {
      topic: "Leverage Points",
      question: "According to Donella Meadows, what are 'Systems Leverage Points'?",
      answer: "Places within a complex system where a small shift in one thing can produce big changes in everything (e.g., feedback structures, paradigms).",
      rationale: "High leverage points address structural feedback rules rather than tweaking minor numerical parameters."
    },
    {
      topic: "System Dynamics Summary",
      question: "What is the ultimate objective of building a System Dynamics simulation model?",
      answer: "To design robust, sustainable policies and structures that improve system behavior by understanding underlying feedback loops and delays.",
      rationale: "Insight and policy design are valued higher than mere numerical forecasting accuracy in complex environments."
    }
  ]
};