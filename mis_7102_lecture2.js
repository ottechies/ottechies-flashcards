window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['lecture2'] = {
  title: "Lecture 2: Discrete-Event Simulation, Random Variables & Statistical Models",
  questions: [
    {
      topic: "Discrete-Event Simulation Model",
      question: "What defines a Discrete-Event Simulation (DES) model in terms of time and system behavior?",
      answer: "It is stochastic (some state variables are random), dynamic (time evolution is important), and discrete-event (significant changes occur at discrete time instances).",
      rationale: "Slide 2 characterizes DES models as dynamic, stochastic systems where state changes occur at discrete moments."
    },
    {
      topic: "Monte Carlo Simulation Model",
      question: "How does a Monte Carlo Simulation model differ from a Discrete-Event Simulation model regarding time evolution?",
      answer: "A Monte Carlo model is stochastic and static, meaning time evolution is not important.",
      rationale: "Slide 2 highlights that Monte Carlo simulations do not track time-dependent state trajectories like DES does."
    },
    {
      topic: "Continuous vs. Discrete Systems",
      question: "How is the state of a system viewed in a discrete simulation versus a continuous simulation?",
      answer: "In discrete systems, the state changes at discrete points in time with associated events and timestamps; in continuous systems, the state changes continuously across time and is described by differential equations.",
      rationale: "Slide 3 contrasts discrete event timestamps with continuous systems governed by differential equations."
    },
    {
      topic: "Statistical Models",
      question: "What defines a statistical or stochastic model in probability experiments?",
      answer: "An experiment where events randomly occur and probabilities are assigned to each possible outcome.",
      rationale: "Slide 4 defines probabilistic models through assigned outcome probabilities."
    },
    {
      topic: "Event Space & Outcomes",
      question: "What is an event space, and what is an event (E)?",
      answer: "The event space is the set of all possible events that can occur (e.g., {1,2,3,4,5,6}), while an event (E) is any single occurrence or subset (e.g., E = {4,5}).",
      rationale: "Slides 5 and 6 define the universal set of outcomes and specific subsets."
    },
    {
      topic: "Complement of an Event",
      question: "What is the complement of an event E?",
      answer: "The set of all events in the event space except those in E.",
      rationale: "Slide 6 defines the complement as all outcomes excluding E (e.g., {1,2,3,6} when E = {4,5})."
    },
    {
      topic: "Union of Events",
      question: "How is the union (A U B) of two event sets defined?",
      answer: "The combination of all unique elements across both event sets A and B.",
      rationale: "Slide 7 illustrates union as combining sets (e.g., {1,2,3} U {3,4} = {1,2,3,4})."
    },
    {
      topic: "Intersection of Events",
      question: "What does the intersection ($\cap$) of two event sets represent?",
      answer: "The overlap or common occurrences shared between two event sets.",
      rationale: "Slide 8 shows intersection as common elements (e.g., {1,2,3} $\cap$ {3,4} = {3})."
    },
    {
      topic: "Mutually Exclusive Events",
      question: "What defines two mutually exclusive event sets?",
      answer: "Two event sets that have no events in common (their intersection is an empty set $\emptyset$).",
      rationale: "Slide 8 defines mutually exclusive sets as having zero shared elements."
    },
    {
      topic: "Random Variable Definition",
      question: "What is the practical definition of a random variable?",
      answer: "A quantity whose value is determined by the outcome of a random experiment.",
      rationale: "Slide 9 defines a random variable mapping experimental outcomes to quantitative values."
    },
    {
      topic: "Random Variable Examples",
      question: "Give three practical examples of random variables in operations or queueing systems.",
      answer: "1) Number of 4's in 10 rolls, 2) Number of customers arriving in 1 hour, 3) Number of services completed in 5 minutes.",
      rationale: "Slide 10 lists these standard stochastic variables."
    },
    {
      topic: "Discrete vs Continuous Random Variables",
      question: "How do you classify a random variable as discrete versus continuous?",
      answer: "If a random variable assumes a discrete (finite or countably infinite) number of values, it is discrete; otherwise, it is continuous.",
      rationale: "Slide 15 defines discrete vs continuous classification based on support cardinality."
    },
    {
      topic: "Discrete Probability Function Conditions",
      question: "What two core conditions must a discrete probability function P(x) satisfy for possible values x1, x2, ..., xn?",
      answer: "1) P(xi) >= 0 for all i, and 2) The sum of all probabilities equals 1 ($\sum P(x_i) = 1$).",
      rationale: "Slide 13 outlines the axiomatic properties of a discrete probability mass function."
    },
    {
      topic: "Probability Function Example (Fair Die)",
      question: "What is the probability function P(x) for rolling a fair 6-sided die?",
      answer: "P(x) = 1/6 for x = 1, 2, 3, 4, 5, 6, and 0 for all other x.",
      rationale: "Slide 14 demonstrates the uniform pmf of a fair die."
    },
    {
      topic: "Probability Mass Function (pmf) Definition",
      question: "What is the definition of a Probability Mass Function (pmf)?",
      answer: "The function P(x) = P{X = x} representing the collection of all probabilities related to a discrete random variable X.",
      rationale: "Slide 17 (Definition 3.2) defines the pmf."
    },
    {
      topic: "Cumulative Distribution Function (CDF) Definition",
      question: "How is the cumulative distribution function (cdf) F(x) defined for a random variable X?",
      answer: "F(x) = P{X <= x} = sum_{y <= x} P(y).",
      rationale: "Slide 17 defines CDF as the accumulated sum of probabilities up to value x."
    },
    {
      topic: "Support of a Distribution",
      question: "What is the 'support' of a distribution F?",
      answer: "The set of all possible values that the random variable X can assume.",
      rationale: "Slide 17 states that the set of possible values of X is the support of distribution F."
    },
    {
      topic: "Properties of pmf and CDF",
      question: "What is the sum of all pmf probabilities across all possible values of x?",
      answer: "$\sum_x P(x) = \sum_x P\{X = x\} = 1$.",
      rationale: "Slide 18 confirms that total probability sums to 1."
    },
    {
      topic: "Probability of an Event Set A",
      question: "How do you compute the probability that a random variable X falls within set A, i.e., P{X in A}?",
      answer: "By summing the pmf probabilities of all individual values x contained within set A: $P\{X \in A\} = \sum_{x \in A} P(x)$.",
      rationale: "Slide 18 shows event probability calculation via set summation."
    },
    {
      topic: "Interval Probability from CDF",
      question: "How can you compute the probability of an interval $P\{a < X \le b\}$ directly from the CDF F(x)?",
      answer: "$P\{a < X \le b\} = F(b) - F(a)$.",
      rationale: "Slide 18 provides the interval subtraction formula using CDF values."
    },
    {
      topic: "Expectation (Expected Value)",
      question: "What is the expected value (expectation) E(X) of a discrete random variable?",
      answer: "Its mean or average value, calculated as $\mu = E(X) = \sum_x x P(x)$.",
      rationale: "Slide 22 defines expectation for discrete cases."
    },
    {
      topic: "Variance Definition",
      question: "How is the variance of a random variable defined in terms of expected squared deviations?",
      answer: "$\sigma^2 = \text{Var}(X) = E(X - EX)^2 = \sum_x (x - \mu)^2 P(x)$.",
      rationale: "Slide 24 defines variance as expected squared deviation from the mean."
    },
    {
      topic: "Alternative Variance Formula",
      question: "What is the alternative computational formula for variance using the second moment?",
      answer: "$\text{Var}(X) = E(X^2) - \mu^2$.",
      rationale: "Slide 24 presents the shortcut formula for variance."
    },
    {
      topic: "Standard Deviation Definition",
      question: "What is standard deviation, and how is it related to variance?",
      answer: "Standard deviation is the square root of variance, denoted as $\sigma = \text{Std}(X) = \sqrt{\text{Var}(X)}$.",
      rationale: "Slide 25 defines standard deviation as the square root of variance."
    },
    {
      topic: "Monte Carlo Methods",
      question: "What is the core mechanism of a Monte Carlo simulation method?",
      answer: "It creates samples from a known probability distribution to estimate system behavior or probabilities.",
      rationale: "Slide 26 explains Monte Carlo sampling from known distributions (e.g., weighted coin)."
    },
    {
      topic: "Independent Modules Error Sum",
      question: "When combining independent discrete random variables $Y = X_1 + X_2$, how are joint probabilities like $P\{Y = 0\}$ computed?",
      answer: "By multiplying their independent pmfs: $P\{Y = 0\} = P\{X_1 = 0, X_2 = 0\} = P_1(0)P_2(0)$.",
      rationale: "Slides 19-21 (Example 3.3) demonstrate convolution of independent pmfs."
    },
    {
      topic: "Computing Mean from pmf Exercise",
      question: "If a discrete random variable has pmf p(x) = i/15 for i = 1, 2, 3, 4, 5, how do you set up its expected value E(X)?",
      answer: "$\sum_{i=1}^{5} i \cdot \frac{i}{15} = \frac{1}{15}(1(1) + 2(2) + 3(3) + 4(4) + 5(5))$.",
      rationale: "Slide 27 exercise applies the expectation definition $\sum x P(x)$."
    },
    {
      topic: "Solving Expectation Arithmetic",
      question: "Continuing the exercise where p(x) = i/15 for i = 1..5, what is the numerical value of E(X)?",
      answer: "$(1 + 4 + 9 + 16 + 25) / 15 = 55 / 15 = 11 / 3 \approx 3.67$.",
      rationale: "Slide 27 exercise summation calculation."
    },
    {
      topic: "Computing E(X^2) for Variance",
      question: "To find the variance of the distribution where p(x) = i/15 for i = 1..5, what intermediate value must you calculate?",
      answer: "$E(X^2) = \sum_{i=1}^{5} i^2 \cdot \frac{i}{15} = \frac{1}{15}\sum i^3 = \frac{1}{15}(1 + 8 + 27 + 64 + 125) = \frac{225}{15} = 15$.",
      rationale: "Slide 27 exercise uses $\text{Var}(X) = E(X^2) - \mu^2$."
    },
    {
      topic: "Final Variance Calculation Exercise",
      question: "Using E(X) = 11/3 and E(X^2) = 15, what is the variance $\text{Var}(X)$ for the exercise distribution?",
      answer: "$\text{Var}(X) = 15 - (11/3)^2 = 15 - 121/9 = (135 - 121) / 9 = 14 / 9 \approx 1.556$.",
      rationale: "Slide 27 exercise final variance computation."
    }
  ]
};