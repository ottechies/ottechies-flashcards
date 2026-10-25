window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['rouletteGame'] = {
  title: "Monte Carlo Simulation: Roulette Game Optimization",
  questions: [
    {
      topic: "Function Purpose & Signature",
      question: "What is the main purpose and function signature of the MATLAB script provided for the roulette game?",
      answer: "[results, optimal_x] = roulette(x, y, n, file_name) to simulate a European roulette game and optimize strategy.",
      rationale: "It runs a Monte Carlo simulation across spin counts and colour risk limits to find optimal playing strategies."
    },
    {
      topic: "Wheel Setup & Pockets",
      question: "What type of roulette wheel is modeled in the script, and what are its pockets?",
      answer: "A European wheel with pockets numbered 0 to 36, each equally likely on every spin.",
      rationale: "The European layout has 37 total pockets (one zero and numbers 1 to 36)."
    },
    {
      topic: "Colour Coding Definition",
      question: "How are the three roulette colours represented numerically in the script?",
      answer: "1 = green (pocket 0), 2 = red, 3 = black.",
      rationale: "It establishes the integer encoding scheme for the wheel's pocket colours."
    },
    {
      topic: "Red Pockets Definition",
      question: "Which pocket numbers are designated as red on the European wheel in the script?",
      answer: "red = [1 3 5 7 9 12 14 16 18 19 21 23 25 27 30 32 34 36].",
      rationale: "This vector lists all 18 red pocket numbers on a standard European wheel."
    },
    {
      topic: "Default Colour Initialization",
      question: "What does colour = 3 * ones(1, 37); do initially?",
      answer: "It creates a 1x37 vector setting every pocket's default colour to black (3).",
      rationale: "Since most pockets are black or red, starting with all black simplifies subsequent assignments."
    },
    {
      topic: "Pocket 0 Colour Assignment",
      question: "How is pocket 0 assigned its green colour in the colour vector?",
      answer: "colour(1) = 1; assigns green (1) to the first index of the vector.",
      rationale: "Pocket 0 corresponds to index 1 in MATLAB due to 1-based indexing."
    },
    {
      topic: "MATLAB Indexing Shift for Red",
      question: "Why does the assignment for red pockets use colour(red + 1) = 2;?",
      answer: "To shift pocket numbers by +1 so they correctly map to MATLAB's 1-based indexing array layout.",
      rationale: "Pocket numbers start at 0, but MATLAB indices start at 1, requiring a +1 offset."
    },
    {
      topic: "Results Matrix Pre-allocation",
      question: "What does results = zeros(length(x), length(y)); accomplish?",
      answer: "Pre-allocates a 2D matrix of zeros with rows for each x option and columns for each y risk limit.",
      rationale: "Pre-allocation improves execution speed and memory efficiency in MATLAB before running loops."
    },
    {
      topic: "Nested Loops Structure",
      question: "Why does the script use nested for loops over i (for x) and j (for y)?",
      answer: "To iterate through and test every unique combination of spin counts (x) and colour risk limits (y).",
      rationale: "It builds a complete 2D parameter sweep of the roulette game space."
    },
    {
      topic: "Spin Simulation Formula",
      question: "What does the expression spins = ceil(37 * rand(n, x(i))) - 1; generate?",
      answer: "An n-row by x(i)-column matrix of random pocket numbers from 0 to 36.",
      rationale: "rand creates uniform decimals, multiplied by 37 and rounded up via ceil to 1–37, then shifted down by -1 to reach 0–36."
    },
    {
      topic: "Independence of Roulette Spins",
      question: "How do roulette spins differ mathematically from card or lottery draws?",
      answer: "Roulette spins are independent trials with replacement (each spin has an equal 1/37 chance of landing on any pocket), whereas cards and balls are drawn without replacement.",
      rationale: "Previous spins do not affect the probabilities of subsequent spins."
    },
    {
      topic: "Vectorised Colour Lookup",
      question: "What does colours = reshape(colour(spins + 1), size(spins)); achieve?",
      answer: "It looks up the colour code (1, 2, or 3) for every simulated spin simultaneously and reshapes it to match the size of spins.",
      rationale: "It translates raw pocket numbers into their respective colour categories using vectorized indexing."
    },
    {
      topic: "Tracking Biggest Colour Initialization",
      question: "What is the purpose of biggest_colour = zeros(n, 1);?",
      answer: "It initializes a column vector of zeros to track the maximum number of spins of any single colour for each game play.",
      rationale: "It serves as the tracking baseline before iterating through the 3 colour categories."
    },
    {
      topic: "Colour Counting Loop",
      question: "What does the loop for c = 1:3 accomplish in the simulation?",
      answer: "It loops through each of the 3 colour categories (green, red, black) to count how many spins of that colour occurred in each play.",
      rationale: "It evaluates colour frequency distribution across all spins in every row."
    },
    {
      topic: "Calculating Maximum Colour Count",
      question: "How does biggest_colour = max(biggest_colour, sum(colours == c, 2)); work?",
      answer: "It compares the current max colour count with the new colour frequency row-by-row and retains the larger value.",
      rationale: "It ensures biggest_colour captures the dominant colour group frequency for each simulation row."
    },
    {
      topic: "Calculating Raw Scores",
      question: "What does scores = sum(spins, 2); calculate?",
      answer: "It computes the numerical sum of all pocket numbers landed on in each individual game play.",
      rationale: "Summing across columns gives the base unpenalized score before risk rules are applied."
    },
    {
      topic: "Applying Risk Penalty Rule",
      question: "What does scores(biggest_colour > y(j)) = 0; implement in the roulette game?",
      answer: "It resets the score of any play to zero if the largest number of spins of any single colour exceeds the safety limit y(j).",
      rationale: "This enforces the core risk penalty, punishing hands that are overly concentrated in a single colour."
    },
    {
      topic: "Estimating Expected Score",
      question: "How is results(i, j) computed using scores?",
      answer: "By taking the arithmetic mean of all game scores using mean(scores).",
      rationale: "Averaging n simulation outcomes estimates the statistical expected value for that (x, y) strategy combination."
    },
    {
      topic: "Finding Optimal Row Index",
      question: "What does [~, best_row] = max(results, [], 1); accomplish?",
      answer: "It finds the row index (best_row) of the maximum expected score down each column of the results matrix.",
      rationale: "The tilde (~) discards the maximum score value itself, keeping only the row index where peak performance occurs."
    },
    {
      topic: "Reshaping Optimal x",
      question: "What does optimal_x = reshape(x(best_row), size(y)); do?",
      answer: "It maps optimal row indices back to their corresponding x spin counts and matches the shape of y.",
      rationale: "It translates matrix positions into actionable strategy quantities for each risk limit."
    },
    {
      topic: "File Opening (fopen)",
      question: "What does fid = fopen(file_name, 'w'); do in MATLAB?",
      answer: "It opens a text file with the specified file_name in write mode ('w') and returns a file identifier handle (fid).",
      rationale: "It establishes an active pipeline to write simulation data to disk."
    },
    {
      topic: "Writing Table Headers (!y)",
      question: "What does fprintf(fid, '!\ty\n'); write to the text file?",
      answer: "It writes a comment header !y followed by a tab and a newline.",
      rationale: "It sets up the column header indicator for safety limits in the exported report."
    },
    {
      topic: "Writing y Values Header",
      question: "What do the lines writing !x and y values accomplish in the file export?",
      answer: "They write the row label !x followed by tab-separated values of the safety limits vector y.",
      rationale: "This creates the top header row of the exported data table."
    },
    {
      topic: "Writing Expected Score Rows Loop",
      question: "What does the main export loop for i = 1:length(x) write into the text file?",
      answer: "It writes the spin count x(i) followed by tab-separated expected scores for that row formatted to two decimal places.",
      rationale: "It outputs the full grid of calculated expected scores row by row."
    },
    {
      topic: "Decimal Formatting in Export",
      question: "What formatting specifier is used to write expected score results into the text file?",
      answer: "\\t%.2f, which formats floating-point numbers to two decimal places.",
      rationale: "It ensures clean, readable decimal precision in the exported report table."
    },
    {
      topic: "Writing Optimal Row (!opt)",
      question: "What do the lines writing !opt and optimal_x do at the bottom of the file?",
      answer: "They write the label !opt followed by tab-separated values of optimal_x.",
      rationale: "It records the ultimate strategy takeaway (best spin count for each risk limit) at the base of the table."
    },
    {
      topic: "Closing Files (fclose)",
      question: "Why is fclose(fid); executed at the end of the roulette function?",
      answer: "To safely close the file pipeline and flush data to disk.",
      rationale: "Proper file closure prevents memory leaks and file lock errors in MATLAB."
    },
    {
      topic: "Vectorization in Roulette Simulation",
      question: "How does the roulette script achieve vectorization during spin generation and colour lookup?",
      answer: "By generating entire matrices of spins and looking up colours in parallel using matrix indexing instead of looping through individual spins.",
      rationale: "Vectorization avoids slow iterative loops and drastically accelerates execution speed."
    },
    {
      topic: "Interpreting Roulette Strategy Trade-offs",
      question: "Why does spinning the wheel too many times (large x) cause expected scores to drop or zero out under strict risk limits?",
      answer: "Because more spins dramatically increase the probability that one colour will appear more times than the strict safety threshold y, triggering the zero-score penalty.",
      rationale: "It illustrates the core risk-versus-reward balancing act modeled in the simulation."
    },
    {
      topic: "Role of Monte Carlo Convergence in Roulette",
      question: "Why is a large value of n (such as 10,000) important for the roulette simulation results?",
      answer: "It ensures statistical convergence and accuracy through the Law of Large Numbers, smoothing out random variance in expected score estimates.",
      rationale: "Small sample sizes lead to noisy, unstable expected values; large n ensures reliable optimization."
    }
  ]
};