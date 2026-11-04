window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['lecture4'] = {
  title: "Lecture 4: Differential Equations & Unconstrained Growth",
  questions: [
    {
      topic: "Differential Equations Introduction",
      question: "What are the primary learning outcomes covered in Lecture 4 regarding differential equations?",
      answer: "To understand differential equations, solve them analytically and numerically, and describe their applications in real-world systems[cite: 4].",
      rationale: "Slide 2 outlines these core learning goals for differential equation modeling."
    },
    {
      topic: "Unconstrained Growth and Decay",
      question: "What characterizes unconstrained growth or decay models in dynamical systems?",
      answer: "The rate at which an amount changes is directly proportional to the amount present[cite: 4].",
      rationale: "Slide 3 states that populations, radioactive elements, and chemical pollutants change at rates proportional to their current magnitude."
    },
    {
      topic: "Average Rate of Change / Velocity",
      question: "How is average velocity or the average rate of change of position s with respect to time t calculated?",
      answer: "As the change in position ($\Delta s$) divided by the change in time ($\Delta t$), i.e., $\Delta s / \Delta t = \frac{s(b) - s(a)}{b - a}$[cite: 4].",
      rationale: "Slides 4-6 define average velocity over a time interval $[a, b]$."
    },
    {
      topic: "Instantaneous Rate of Change / Derivative",
      question: "What mathematical concept represents the instantaneous rate of change or instantaneous velocity of position s with respect to time t?",
      answer: "The derivative of s with respect to t, written as $s'(t)$, $\frac{dy}{dt}$, or $dy/dt$[cite: 4].",
      rationale: "Slides 7-9 define instantaneous rates as the limit of average velocity as $\Delta t$ approaches 0."
    },
    {
      topic: "Generalizing Instantaneous Rates",
      question: "Can functions representing instantaneous rates apply to quantities other than physical position?",
      answer: "Yes, such as $Q(t)$ representing radioactive carbon-14 mass decay ($Q'(t) = dQ/dt$) or $P(t)$ representing population growth ($P'(t) = dP/dt$)[cite: 4].",
      rationale: "Slide 10 notes that derivatives apply universally across scientific and social variables."
    },
    {
      topic: "Malthusian Population Model",
      question: "What is the Malthusian model for unconstrained population growth?",
      answer: "A model where population changes are driven solely by births and deaths with no limiting constraints (like food competition or predators), such that the rate of change is proportional to population size[cite: 4].",
      rationale: "Slide 11 introduces the Malthusian unconstrained growth framework."
    },
    {
      topic: "Malthusian Proportion Equation",
      question: "How is the proportionality statement for unconstrained growth ($\frac{dP}{dt} \propto P$) written as an algebraic differential equation?",
      answer: "$\frac{dP}{dt} = rP$, where $r$ is the continuous/instantaneous growth rate[cite: 1, 2, 4].",
      rationale: "Slide 12 expresses population proportionality using growth rate constant $r$."
    },
    {
      topic: "Differential Equation Definition",
      question: "What is the formal definition of a differential equation and an initial condition?",
      answer: "A differential equation contains one or more derivatives, and an initial condition specifies the value of the dependent variable when the independent variable is zero[cite: 4].",
      rationale: "Slide 15 defines differential equations, initial conditions, and solutions."
    },
    {
      topic: "Stock-Flow Diagram Components",
      question: "In a system dynamics stock-flow diagram for population growth, what do the stock, flow, and converter represent?",
      answer: "The stock represents accumulated population ($P$), the flow represents growth (derivative $\frac{dP}{dt}$), and the converter represents the growth rate constant ($r$)[cite: 1, 4].",
      rationale: "Slides 16-19 map system dynamics diagram elements to differential equation variables."
    },
    {
      topic: "Role of Converters in Stock-Flow",
      question: "What is the function of a 'converter' in a system dynamics diagram compared to a stock?",
      answer: "A converter does not accumulate matter but stores equations or constants (like growth rate), whereas a stock accumulates items over time[cite: 1, 4].",
      rationale: "Slide 17 defines converters and stock accumulation mechanics."
    },
    {
      topic: "Connectors in Stock-Flow Diagrams",
      question: "Why are connectors (arcs) drawn from population and growth rate into the growth flow indicator?",
      answer: "Because both the population stock level and growth rate converter are necessary inputs to calculate the growth flow[cite: 1, 4].",
      rationale: "Slide 18 explains connector routing in simulation diagrams."
    },
    {
      topic: "Discrete Time Steps in Simulation",
      question: "How do simulation tools or numerical programs handle time progression when approximating continuous differential equations?",
      answer: "By advancing time in small, incremental steps ($\Delta t$ or $DT$), where the previous time is $t - \Delta t$[cite: 2, 4].",
      rationale: "Slide 20 explains discrete time steps in computational simulations."
    },
    {
      topic: "Finite Difference Equation Formulation",
      question: "What is a finite difference equation used in system dynamics simulations?",
      answer: "An equation stating that the new population equals the old population plus the change in population: $\text{population}(t) = \text{population}(t - \Delta t) + \Delta \text{population}$[cite: 2, 4].",
      rationale: "Slides 21-22 introduce finite difference formulas for simulation."
    },
    {
      topic: "Simulating Growth via Finite Differences",
      question: "How is the growth flow approximated over one time step $\Delta t$ in finite difference equations?",
      answer: "As $\text{growth} = \frac{\Delta \text{population}}{\Delta t} = \frac{\text{population}(t) - \text{population}(t - \Delta t)}{\Delta t}$[cite: 2, 4].",
      rationale: "Slide 23 defines the finite difference approximation of derivatives."
    },
    {
      topic: "Analytical Solution of Malthusian Model",
      question: "What is the analytical particular solution to the differential equation $\frac{dP}{dt} = 0.10P$ with initial population $P_0 = 100$?",
      answer: "$P = 100e^{0.10t}$[cite: 2, 4].",
      rationale: "Slide 25 presents the solved exponential growth function."
    },
    {
      topic: "Separation of Variables Technique",
      question: "What algebraic technique is used to solve the differential equation $\frac{dP}{dt} = rP$ analytically?",
      answer: "Separation of variables, moving all terms involving $P$ to one side and $t$ to the other before integrating[cite: 2, 4].",
      rationale: "Slide 26 outlines the separation of variables method."
    },
    {
      topic: "Integrating Separated Variables",
      question: "When separating variables for $\frac{dP}{dt} = 0.10P$, what integration step yields $\ln|P| = 0.10t + C$?",
      answer: "Integrating both sides: $\int \frac{1}{P} dP = \int 0.10 dt$[cite: 2, 4].",
      rationale: "Slide 27 shows the integration step introducing arbitrary constant $C$."
    },
    {
      topic: "Exponentiating Logarithmic Solutions",
      question: "How does $\ln|P| = 0.10t + C$ transform into $|P| = Ae^{0.10t}$ where $A = e^C$?",
      answer: "By applying logarithmic rules and exponentiating both sides: $|P| = e^{0.10t + C} = e^{0.10t} \cdot e^C = Ae^{0.10t}$[cite: 2, 4].",
      rationale: "Slides 28-29 detail the exponentiation of logarithmic constants."
    },
    {
      topic: "General Solution for Unconstrained Growth",
      question: "What is the general solution form for the differential equation $\frac{dP}{dt} = rP$ before applying initial conditions?",
      answer: "$P = ke^{rt}$ (or $P = Ae^{rt}$) where $k$ is an arbitrary constant[cite: 2, 4].",
      rationale: "Slide 30 gives the general exponential growth solution."
    },
    {
      topic: "Determining Constant k via Initial Conditions",
      question: "How is the constant $k$ evaluated using the initial condition $P_0 = 100$ at $t = 0$?",
      answer: "Substituting $t = 0$ and $P = 100$ gives $100 = ke^{0.10(0)} = k(1)$, so $k = 100$[cite: 2, 4].",
      rationale: "Slide 30 shows the particular solution derivation."
    },
    {
      topic: "General Formula for Unconstrained Growth Solution",
      question: "What is the general formula for the solution of $\frac{dP}{dt} = rP$ with initial population $P_0$?",
      answer: "$P = P_0 e^{rt}$[cite: 2, 4].",
      rationale: "Slide 32 summarizes the universal solution formula for unconstrained growth."
    },
    {
      topic: "Radioactive Decay Modeling",
      question: "How does the differential equation for radioactive decay differ from unconstrained growth in its parameter sign?",
      answer: "Decay uses a negative proportionality constant (e.g., $\frac{dQ}{dt} = -kQ$ or $\frac{dQ}{dt} = -0.0004Q$), reflecting a decreasing quantity over time[cite: 2, 4].",
      rationale: "Slide 24 exercise introduces negative decay rates."
    },
    {
      topic: "Finite Difference Time Step Interpretation",
      question: "If current time $t = 9.0$ s and time step $\Delta t = 0.5$ s, what was the time at the previous time step?",
      answer: "$t - \Delta t = 9.0 - 0.5 = 8.5$ s[cite: 2, 4].",
      rationale: "Slide 24 exercise item (b)."
    },
    {
      topic: "Calculating Delta Q from Stock Values",
      question: "If $Q(t - \Delta t) = 199.32$ and $Q(t) = 199.28$, what is the change in quantity $\Delta Q$?",
      answer: "$\Delta Q = Q(t) - Q(t - \Delta t) = 199.28 - 199.32 = -0.04$[cite: 2, 4].",
      rationale: "Slide 24 exercise item (c)."
    },
    {
      topic: "Solving Quick Review Question 4",
      question: "What is the analytical solution for the differential equation $\frac{dP}{dt} = 0.03P$ with initial population $P_0 = 57$?",
      answer: "$P = 57e^{0.03t}$[cite: 2, 4].",
      rationale: "Slides 33-34 (Quick Review Question 4)."
    },
    {
      topic: "Limitations of Unconstrained Growth",
      question: "Why is the Malthusian unconstrained growth model unrealistic for long-term population forecasting?",
      answer: "Because real environments impose finite carrying capacities, food shortages, disease, and competition that eventually halt exponential expansion[cite: 3, 4].",
      rationale: "Connects Lecture 4 Malthusian model with Lecture 6 S-shaped growth and environmental limits."
    },
    {
      topic: "Units of Average Velocity",
      question: "When position $s$ is measured in miles and time $t$ in hours, what are the units of average velocity $\frac{\Delta s}{\Delta t}$?",
      answer: "Miles per hour (mi/h)[cite: 4].",
      rationale: "Slides 4-6 demonstrate unit tracking in velocity calculations."
    },
    {
      topic: "Initial Conditions Meaning",
      question: "What does an initial condition $P_0$ represent physically in a dynamical system simulation?",
      answer: "The baseline state or magnitude of the system stock at the starting time zero ($t = 0$)[cite: 2, 4].",
      rationale: "Slide 15 defines initial conditions."
    },
    {
      topic: "Exponential Growth Doubling Time Concept",
      question: "In exponential growth models governed by $\frac{dP}{dt} = rP$, what factor determines how rapidly the quantity doubles?",
      answer: "The growth rate constant $r$; a higher $r$ results in faster compounding and shorter doubling times[cite: 2, 4].",
      rationale: "Properties of exponential solutions $P = P_0 e^{rt}$."
    },
    {
      topic: "Role of Differential Equations in Simulation",
      question: "Why are differential equations fundamental to computer simulation and modeling?",
      answer: "They mathematically formalize continuous rates of change, allowing computers to simulate dynamic trajectories, system behaviors, and future states over time[cite: 1, 2, 4].",
      rationale: "Summarizes overall themes of Lectures 1-4."
    }
  ]
};