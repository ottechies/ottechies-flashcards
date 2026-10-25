window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['diceGame'] = {
  title: "Monte Carlo Simulation: Dice Game Optimization",
  questions: [
    {
      topic: "Function Purpose & Signature",
      question: "What is the main purpose and function signature of the MATLAB script provided for the dice game?",
      answer: "[results, optimal_x] = dice(x, y, n, file_name) to simulate a dice game and optimize strategy.",
      rationale: "It runs a Monte Carlo simulation across dice counts and risk limits to find optimal playing strategies."
    },
    {
      topic: "Input Variable x",
      question: "What does the input variable x represent in the dice function?",
      answer: "A vector representing the number of dice rolled in each play.",
      rationale: "x controls the scale of the strategy being tested, evaluating hands of varying numbers of dice."
    },
    {
      topic: "Input Variable y",
      question: "What does the input variable y represent in the dice simulation?",
      answer: "A vector of risk limits where rolling more than y matching dice of the same face scores zero.",
      rationale: "y defines the strictness of the matching-dice penalty threshold."
    },
    {
      topic: "Input Variable n",
      question: "What role does the parameter n play in the dice simulation function?",
      answer: "It specifies the number of plays simulated for every (x, y) pair.",
      rationale: "Running n iterations (e.g., 10,000) provides reliable statistical expected values via Monte Carlo simulation."
    },
    {
      topic: "Input Variable file_name",
      question: "What is the purpose of the file_name argument in the dice script?",
      answer: "It names the text file where the final expected score table and optimal x values are written.",
      rationale: "It establishes a file output pipeline via fopen to save simulation results."
    },
    {
      topic: "Output Variable results",
      question: "What does the results matrix store, and how are its dimensions structured?",
      answer: "results(i, j) stores the estimated expected score for x(i) dice and y(j) risk limit.",
      rationale: "It creates a 2D grid with one row per x value and one column per y value."
    },
    {
      topic: "Output Variable optimal_x",
      question: "What does the optimal_x vector calculate and return?",
      answer: "optimal_x(j) gives the value of x that yields the highest expected score for each safety limit y(j).",
      rationale: "It identifies the best number of dice to roll to maximize score under each risk constraint."
    },
    {
      topic: "Initializing Results Matrix",
      question: "What does the line results = zeros(length(x), length(y)); accomplish?",
      answer: "It pre-allocates a matrix of zeros with rows equal to the number of x options and columns equal to the number of y limits.",
      rationale: "Pre-allocation improves execution speed and memory efficiency in MATLAB before running loops."
    },
    {
      topic: "Outer and Inner Loops",
      question: "Why does the script use nested for loops over i (for x) and j (for y)?",
      answer: "To iterate through and test every unique combination of dice counts (x) and matching limits (y).",
      rationale: "It builds a complete 2D parameter sweep of the game space."
    },
    {
      topic: "Dice Roll Simulation Formula",
      question: "What does the expression rolls = ceil(6 * rand(n, x(i))); do?",
      answer: "It simulates n plays simultaneously, generating an n-row by x(i)-column matrix of random integers from 1 to 6.",
      rationale: "rand creates uniform decimals between 0 and 1, multiplied by 6 and rounded up via ceil to mimic standard 6-sided die rolls."
    },
    {
      topic: "Tracking Biggest Group",
      question: "What is the purpose of initializing biggest_group = zeros(n, 1);?",
      answer: "It creates a column vector of zeros (one per game play) to track the largest count of matching dice for any face.",
      rationale: "It acts as a tracking baseline before evaluating all six dice faces."
    },
    {
      topic: "Counting Face Frequencies Loop",
      question: "What does the loop for face = 1:6 accomplish in the simulation?",
      answer: "It loops through each possible dice face (1 through 6) to count how many times that face appeared in each play.",
      rationale: "It evaluates frequency distribution across all dice rolled in every row."
    },
    {
      topic: "Evaluating Face Matches",
      question: "What does sum(rolls == face, 2) calculate inside the face loop?",
      answer: "It counts how many dice in each row (play) match the current face.",
      rationale: "Summing along dimension 2 (columns) counts matching faces per game row."
    },
    {
      topic: "Updating Biggest Group",
      question: "How does biggest_group = max(biggest_group, sum(rolls == face, 2)); work?",
      answer: "It compares the current max matching count with the new face count row-by-row and keeps the larger value.",
      rationale: "It ensures biggest_group retains the highest frequency found among any of the six faces for each simulation."
    },
    {
      topic: "Calculating Raw Scores",
      question: "What does scores = sum(rolls, 2); calculate?",
      answer: "It computes the total sum of all dice values rolled in each individual game play.",
      rationale: "Summing across columns gives the base unpenalized score before risk rules are applied."
    },
    {
      topic: "Applying Penalty Rule",
      question: "What does scores(biggest_group > y(j)) = 0; implement in the game logic?",
      answer: "It resets the score of any play to zero if the largest group of matching dice exceeds the safety limit y(j).",
      rationale: "This enforces the core risk penalty of the game, punishing excessive matching numbers."
    },
    {
      topic: "Estimating Expected Score",
      question: "How is results(i, j) computed using scores?",
      answer: "By taking the arithmetic mean of all game scores using mean(scores).",
      rationale: "Averaging the outcomes of n simulation plays estimates the statistical expected value for that (x, y) strategy."
    },
    {
      topic: "Finding Optimal Row",
      question: "What does [~, best_row] = max(results, [], 1); accomplish?",
      answer: "It finds the row index (best_row) of the maximum expected score down each column of the results matrix.",
      rationale: "The tilde (~) ignores the maximum score value itself, returning only the row index where the peak score occurs."
    },
    {
      topic: "Reshaping Optimal x",
      question: "What does optimal_x = reshape(x(best_row), size(y)); do?",
      answer: "It maps the optimal row indices back to their corresponding x dice counts and reshapes the output to match the dimensions of y.",
      rationale: "It translates matrix positions into actionable strategy quantities."
    },
    {
      topic: "File Opening (fopen)",
      question: "What does fid = fopen(file_name, 'w'); do in MATLAB?",
      answer: "It opens a text file with the specified file_name in write mode ('w') and returns a file identifier handle (fid).",
      rationale: "It creates an active pipeline to write simulation data to disk."
    },
    {
      topic: "Writing Table Headers (!y)",
      question: "What does fprintf(fid, '!\ty\n'); write to the text file?",
      answer: "It writes a comment header !y followed by a tab and a newline.",
      rationale: "It sets up the column header indicator for safety limits in the exported report."
    },
    {
      topic: "Writing y Values Header",
      question: "What do the lines fprintf(fid, '!x'); fprintf(fid, '\t%d', y); fprintf(fid, '\n'); produce?",
      answer: "They write the row label !x followed by tab-separated values of the safety limits vector y.",
      rationale: "This creates the top header row of the exported data table."
    },
    {
      topic: "Writing Results Rows Loop",
      question: "What does the main export loop for i = 1:length(x) write into the text file?",
      answer: "It writes the dice count x(i) followed by tab-separated expected scores for that row formatted to two decimal places.",
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
      question: "What do the lines fprintf(fid, '!opt'); fprintf(fid, '\t%d', optimal_x); write at the bottom of the file?",
      answer: "They write the label !opt followed by tab-separated values of optimal_x.",
      rationale: "It records the ultimate strategy takeaway (best dice count for each risk limit) at the base of the table."
    },
    {
      topic: "Closing Files (fclose)",
      question: "Why is fclose(fid); executed at the end of the dice function?",
      answer: "To safely close the file pipeline and flush data to disk.",
      rationale: "Proper file closure prevents memory leaks and file lock errors in MATLAB."
    },
    {
      topic: "Vectorization vs Iteration in Dice Rolls",
      question: "How does rand(n, x(i)) achieve vectorization in the dice script?",
      answer: "By generating an entire matrix of n rows and x(i) columns in a single vectorized command instead of rolling dice one by one in a loop.",
      rationale: "Vectorization leverages MATLAB's optimized matrix processing for massive speedups."
    },
    {
      topic: "Comparing Card and Dice Simulations",
      question: "What is a key structural difference in how drawing/rolling is simulated between the card game and the dice game?",
      answer: "Cards are drawn without replacement (requiring a shuffle), whereas dice rolls are independent (using repeated random selection with replacement).",
      rationale: "Dice faces can repeat freely across rolls without exhausting a fixed finite deck."
    },
    {
      topic: "Interpreting Dice Game Trade-offs",
      question: "Why does rolling too many dice (large x) result in an expected score of zero under strict risk limits (small y)?",
      answer: "Because rolling more dice drastically increases the probability that matching dice will exceed the strict safety threshold y, triggering the zero-score penalty.",
      rationale: "It illustrates the core risk-versus-reward dilemma modeled in the simulation."
    },
    {
      topic: "Role of Monte Carlo Convergence",
      question: "Why is a large value of n (such as 10,000) important for the dice simulation results?",
      answer: "It ensures statistical convergence and accuracy through the Law of Large Numbers, smoothing out random variance in expected score estimates.",
      rationale: "Small sample sizes lead to noisy, unstable expected values; large n ensures reliable optimization."
    }
  ]
};