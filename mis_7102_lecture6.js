window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['lecture6'] = {
  title: "Lecture 6: Basic System Behaviors & Dynamic Modes",
  questions: [
    {
      topic: "System Behavior Fundamentals",
      question: "What are the fundamental modes of dynamic behavior studied in system dynamics and stock-flow networks?",
      answer: "Exponential growth, goal seeking, oscillation, S-shaped growth, S-shaped growth with overshoot, and overshoot and collapse.",
      rationale: "Slide 1 outlines these core behavior patterns as the foundational modes of dynamic systems."
    },
    {
      topic: "Exponential Growth Definition",
      question: "What is exponential growth in system dynamics, and what feedback loop drives it?",
      answer: "Exponential growth arises from positive (self-reinforcing) feedback, where ever-faster growth occurs as the quantity increases[cite: 3].",
      rationale: "Slide 2 states that exponential growth is driven by reinforcing feedback loops compounding over time."
    },
    {
      topic: "Exponential Growth Mechanism",
      question: "How does the magnitude of a quantity affect its rate of change during exponential growth?",
      answer: "The larger the quantity, the greater its net increase, further augmenting the quantity leading to ever-faster growth[cite: 3].",
      rationale: "Slide 2 explains that greater base quantities produce larger net increases in self-reinforcing loops."
    },
    {
      topic: "Exponential Growth Example",
      question: "What is a classic example of exponential growth involving population or finance?",
      answer: "Population growth where a larger population results in a bigger net birth rate, adding more people and leading to still more births[cite: 3].",
      rationale: "Slide 2 provides the population/birth rate example alongside compound interest models."
    },
    {
      topic: "Goal Seeking Definition",
      question: "What is goal-seeking behavior in system dynamics, and what feedback loop drives it?",
      answer: "Goal seeking is driven by negative feedback loops that act to bring the state of the system in line with a desired state or goal[cite: 3].",
      rationale: "Slide 4 defines goal seeking through balancing negative feedback loops."
    },
    {
      topic: "Goal Seeking Mechanism",
      question: "How do negative feedback loops respond to disturbances in goal-seeking systems?",
      answer: "They counteract any disturbances that move the state of the system away from the goal, seeking balance and equilibrium[cite: 3].",
      rationale: "Slide 4 emphasizes that negative feedback loops counteract discrepancies to establish equilibrium."
    },
    {
      topic: "Goal Seeking Example",
      question: "What is an operational example of goal-seeking behavior in corporate inventory management?",
      answer: "When a firm's inventory drops below the stock required for good service, production increases until inventory is once again sufficient[cite: 3].",
      rationale: "Slide 4 illustrates goal seeking using inventory replenishment and production control."
    },
    {
      topic: "Oscillation Definition",
      question: "What is oscillation in system dynamics, and what causes it?",
      answer: "Oscillation is continuous fluctuation around a goal state caused by negative feedback loops containing significant time delays[cite: 3].",
      rationale: "Slide 5 explains that time delays prevent immediate correction, causing systems to swing past equilibrium."
    },
    {
      topic: "Role of Time Delays in Oscillation",
      question: "How do time delays lead to oscillatory behavior in a negative feedback system?",
      answer: "Corrective actions take time to register, causing the system state to constantly overshoot its goal, reverse, undershoot, and repeat[cite: 3].",
      rationale: "Slide 5 details how delays cause overshooting and undershooting cycles around the equilibrium point."
    },
    {
      topic: "S-Shaped Growth Definition",
      question: "What is S-shaped growth, and how does its trajectory evolve over time?",
      answer: "S-shaped growth is growth that is exponential at first, but then gradually slows down until it reaches an equilibrium or limit[cite: 3].",
      rationale: "Slide 6 defines S-shaped curves as transitioning from exponential expansion to steady-state equilibrium."
    },
    {
      topic: "Constraints in S-Shaped Growth",
      question: "Why does S-shaped growth eventually slow down and halt infinite expansion?",
      answer: "Because no real quantity can grow forever; eventually, one or more environmental or resource constraints halt the growth[cite: 3].",
      rationale: "Slide 6 notes that physical and environmental limits prevent unbounded exponential expansion."
    },
    {
      topic: "Carrying Capacity",
      question: "What is carrying capacity in the context of S-shaped growth and population dynamics?",
      answer: "The upper limit or maximum sustainable size that an environment can support without degrading[cite: 3].",
      rationale: "Slide 6 and 7 reference carrying capacity as the critical limit determining population stabilization or overshoot."
    },
    {
      topic: "S-Shaped Growth Example",
      question: "What happens when population growth exceeds carrying capacity in a standard S-shaped model?",
      answer: "Once growth exceeds the carrying capacity (limit to size), growth slows down and the population level begins to drop or stabilize[cite: 3].",
      rationale: "Slide 6 gives the carrying capacity ceiling example for biological and social populations."
    },
    {
      topic: "S-Shaped Growth with Overshoot",
      question: "What causes a system to exhibit S-shaped growth with overshoot rather than smooth asymptotic stabilization?",
      answer: "Time delays in the system lead to the possibility that the state will temporarily overshoot the carrying capacity before adjusting[cite: 3].",
      rationale: "Slide 7 links time delays to the phenomenon of overshooting the carrying capacity limit."
    },
    {
      topic: "Overshoot and Collapse Definition",
      question: "What is 'overshoot and collapse' in dynamic systems behavior?",
      answer: "A severe dynamic pattern where rapid growth causes the population to exceed carrying capacity so drastically that it erodes its own support base, leading to a precipitous decline[cite: 3].",
      rationale: "Slide 8 defines collapse as resulting from the destruction of environmental support capacity."
    },
    {
      topic: "Mechanism of Collapse",
      question: "How does the environment's support capacity change during an overshoot and collapse scenario?",
      answer: "The ability of the environment to support a growing population is eroded, consumed, or permanently damaged by the population itself[cite: 3].",
      rationale: "Slide 8 explains that resource destruction lowers the carrying capacity below population levels."
    },
    {
      topic: "Overshoot and Collapse Example",
      question: "What classic ecological example illustrates overshoot and collapse?",
      answer: "A deer population in a forest growing so large that they overgraze vegetation, leading to widespread starvation and a precipitous drop in population[cite: 3].",
      rationale: "Slide 8 provides the overgrazing deer population example."
    },
    {
      topic: "Positive Feedback Identification",
      question: "How is a positive (reinforcing) feedback loop visually identified in causal loop diagrams?",
      answer: "By an even number of negative links (or all positive links) around a closed loop, amplifying changes exponentially[cite: 1, 3].",
      rationale: "Slide 2 notes reinforcing loops drive runaway compounding growth."
    },
    {
      topic: "Negative Feedback Identification",
      question: "How does a negative feedback loop function to maintain system stability?",
      answer: "It operates via goal-seeking mechanisms where corrective action opposes the direction of the discrepancy (gap)[cite: 3].",
      rationale: "Slide 4 outlines the negative feedback loop structure connecting desired state, gap, action, and current state."
    },
    {
      topic: "Gap Variable in Goal Seeking",
      question: "What role does the 'gap' variable play in a negative feedback goal-seeking loop?",
      answer: "It measures the discrepancy between the desired state and the current state, driving corrective action to eliminate the difference[cite: 3].",
      rationale: "Slide 4 shows the gap as the central driver connecting goals and current state actions."
    },
    {
      topic: "Stock-Flow Connection to Behavior",
      question: "Why are stocks and flows essential for generating these fundamental dynamic behaviors?",
      answer: "Stocks accumulate inflows and outflows over time, creating the inertia, delays, and nonlinear interactions necessary for exponential, goal-seeking, and oscillatory modes[cite: 1, 3].",
      rationale: "Slide 1 introduces dynamic behaviors directly within the context of Stock and Flow modeling."
    },
    {
      topic: "Interactions of Dynamic Modes",
      question: "Can complex real-world simulation models exhibit combinations of these fundamental behaviors?",
      answer: "Yes, complex systems frequently combine reinforcing and balancing loops with time delays, resulting in mixed behaviors like growth followed by oscillation or collapse[cite: 1, 3].",
      rationale: "Slide 1 highlights the interactions of fundamental modes of dynamic behavior."
    },
    {
      topic: "Distinction Between Growth Modes",
      question: "What is the key difference between pure exponential growth and S-shaped growth trajectories?",
      answer: "Pure exponential growth has no constraints and accelerates indefinitely, whereas S-shaped growth encounters limits that flatten the curve toward equilibrium[cite: 3].",
      rationale: "Slide 2 vs Slide 6 contrast unconstrained exponential expansion with capacity-constrained S-curves."
    },
    {
      topic: "Equilibrium Dynamics",
      question: "When does a system achieve true dynamic equilibrium in goal-seeking or S-shaped models?",
      answer: "When inflows equal outflows and the net rate of change becomes zero, aligning the current state with the target or carrying capacity[cite: 1, 3].",
      rationale: "Slide 4 and 6 describe equilibrium as balance where discrepancies are eliminated."
    },
    {
      topic: "Impact of Severe Delays",
      question: "How do long time delays affect the severity of oscillations or overshoot in feedback loops?",
      answer: "Longer time delays increase the magnitude of overshooting, making oscillations more volatile or triggering catastrophic collapse[cite: 3].",
      rationale: "Slide 5 and 7 tie time delays directly to overshooting and instability."
    },
    {
      topic: "Self-Eroding Resource Base",
      question: "In resource-constrained models, what distinguishes sustainable S-shaped growth from collapse?",
      answer: "Sustainable S-shaped growth respects renewable carrying capacities, whereas collapse occurs when consumption permanently damages or destroys the underlying resource base[cite: 3].",
      rationale: "Slide 6 vs Slide 8 contrast stabilizing limits with resource erosion."
    },
    {
      topic: "Mathematical Simulation Parameters",
      question: "In simulation software setups (like Stella/Vensim), what parameters govern exponential growth runs?",
      answer: "Parameters such as FINAL TIME, TIME STEP, and initial stock values combined with constant growth rates (e.g., INTEREST RATE = 0.05)[cite: 3].",
      rationale: "Slide 3 lists specific simulation configuration variables for exponential models."
    },
    {
      topic: "Feedback Loop Polarity in Goal Seeking",
      question: "What net polarity do negative feedback loops exhibit when counting links around the loop?",
      answer: "An odd number of negative (-) links, which reverses polarity to counteract changes and stabilize the system[cite: 1, 3].",
      rationale: "Slide 4 diagrams negative feedback links reducing the gap."
    },
    {
      topic: "Behavioral Curve Recognition",
      question: "If a simulation output plot shows a J-shaped upward curve accelerating indefinitely, what system behavior is present?",
      answer: "Exponential growth driven by unconstrained positive (self-reinforcing) feedback[cite: 3].",
      rationale: "Slide 2 graph inset illustrates the characteristic J-curve of exponential expansion."
    },
    {
      topic: "System Dynamics Modeling Objective",
      question: "Why do modelers analyze these 6 fundamental system behavior modes?",
      answer: "To diagnose the underlying feedback structure and time delays causing real-world organizational or ecological crises[cite: 1, 3].",
      rationale: "Slides 1-8 demonstrate that understanding structural feedback modes enables policy design and intervention."
    }
  ]
};