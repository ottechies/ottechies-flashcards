window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['lotteryGame'] = {
  title: "Monte Carlo Simulation: Lottery Game Optimization",
  questions: [
    {
      topic: "Function Purpose & Signature",
      question: "What is the main purpose and function signature of the MATLAB script provided for the lottery game?",
      answer: "[results, optimal_x] = lottery(x, y, n, file_name) to simulate a lottery draw game and optimize strategy.",
      rationale: "It runs a Monte Carlo simulation across drawn ball counts and colour band risk limits to find optimal playing strategies."
    },
    {
      topic: "Game Setup & Drum Size",
      question: "How many balls are in the lottery drum, and how are they drawn?",
      answer: "49 balls numbered 1 to 49, drawn without replacement.",
      rationale: "Drawing without replacement means balls are dependent, and once drawn, they cannot be picked again in the same play."
    },
    {
      topic: "Colour Bands Lookup Vector",
      question: "Why is a lookup vector band used in the lottery simulation?",
      answer: "Because the 5 colour bands are not all the same size, the band vector maps each ball number to its respective colour band.",
      rationale: "It allows the code to easily translate raw ball numbers into colour categories."
    },
    {
      topic: "Band 1 Definition (White)",
      question: "Which ball numbers correspond to Band 1 (white), and what value is assigned in the band vector?",
      answer: "Ball numbers 1 through 9 are assigned the value 1 (white).",
      rationale: "It defines the first colour category group in the lookup vector."
    },
    {
      topic: "Band 2 Definition (Blue)",
      question: "Which ball numbers correspond to Band 2 (blue)?",
      answer: "Ball numbers 10 through 19 are assigned the value 2 (blue).",
      rationale: "It categorizes the second set of 10 balls into the blue colour band."
    },
    {
      topic: "Band 3 Definition (Pink)",
      question: "Which ball numbers correspond to Band 3 (pink)?",
      answer: "Ball numbers 20 through 29 are assigned the value 3 (pink).",
      rationale: "It categorizes the third set of balls into the pink colour band."
    },
    {
      topic: "Band 4 Definition (Green)",
      question: "Which ball numbers correspond to Band 4 (green)?",
      answer: "Ball numbers 30 through 39 are assigned the value 4 (green).",
      rationale: "It categorizes the fourth set of balls into the green colour band."
    },
    {
      topic: "Band 5 Definition (Yellow)",
      question: "Which ball numbers correspond to Band 5 (yellow)?",
      answer: "Ball numbers 40 through 49 are assigned the value 5 (yellow).",
      rationale: "It defines the final colour category group for the remaining balls in the 49-ball drum."
    },
    {
      topic: "Input Error Validation",
      question: "What does the line if any(x > 49) error(...) check for in the lottery script?",
      answer: "It checks if any requested card/ball count in vector x exceeds 49, throwing an error if true.",
      rationale: "Because the drum only holds 49 balls, drawing more than 49 is physically impossible."
    },
    {
      topic: "Results Matrix Initialization",
      question: "What does results = zeros(length(x), length(y)); do?",
      answer: "Pre-allocates a 2D matrix of zeros with rows for each x option and columns for each y risk limit.",
      rationale: "Pre-allocation optimizes memory and performance in MATLAB before running loops."
    },
    {
      topic: "Row Vector Initialization",
      question: "What does rows = (1:n)'; create for the simulation?",
      answer: "A column vector of row indices from 1 to n (one entry for each simulation play).",
      rationale: "It is used alongside linear indexing formulas to perform vectorized card/ball shuffling."
    },
    {
      topic: "Drum Matrix Replication",
      question: "What does drum = repmat(1:49, n, 1); accomplish?",
      answer: "It creates n identical unshuffled drum rows (matrix of size n by 49), one for each simulation iteration.",
      rationale: "It allows simultaneous parallel processing of n independent game plays."
    },
    {
      topic: "Partial Fisher-Yates Shuffle Loop",
      question: "Why does the inner shuffle loop run from k = 1 to x(i)?",
      answer: "Because only x(i) balls are drawn from the top of the drum, making full shuffling of all 49 positions unnecessary.",
      rationale: "It optimizes computational speed by only randomizing positions that will actually be drawn."
    },
    {
      topic: "Random Position Formula (r)",
      question: "What does r = k - 1 + ceil((50 - k) * rand(n, 1)); calculate?",
      answer: "A random ball position between k and 49 for each of the n game rows simultaneously.",
      rationale: "It ensures random selection from remaining unshuffled balls in the drum."
    },
    {
      topic: "Matrix Addressing for Swapping",
      question: "What do the variables here and there represent during the ball swapping step?",
      answer: "Exact linear matrix addresses for position k and random position r across all n game rows.",
      rationale: "MATLAB stores matrices as single columns in memory, requiring linear indices for simultaneous multi-row swaps."
    },
    {
      topic: "Temporary Variable Swap (temp)",
      question: "What is the role of the temporary variable temp during the ball swap?",
      answer: "It holds ball k temporarily so that ball r can be moved into position k without overwriting data.",
      rationale: "It acts as a placeholder to safely execute a variable swap across the matrix."
    },
    {
      topic: "Extracting Drawn Balls",
      question: "How is the player's drawn hand extracted from the drum matrix?",
      answer: "By grabbing the first columns from column 1 up to x(i) for all rows simultaneously (balls = drum(:, 1:x(i))).",
      rationale: "This extracts the subset of top balls pulled for that specific game round across all simulations."
    },
    {
      topic: "Mapping Balls to Bands",
      question: "What does bands = reshape(band(balls), size(balls)); achieve?",
      answer: "It looks up the colour band number (1 to 5) for each drawn ball and reshapes it to match the dimensions of balls.",
      rationale: "It translates numerical ball IDs into their respective colour band categories."
    },
    {
      topic: "Tracking Biggest Band Initialization",
      question: "What is the purpose of biggest_band = zeros(n, 1);?",
      answer: "It initializes a column vector of zeros to track the maximum number of balls belonging to any single colour band for each game play.",
      rationale: "It serves as the tracking baseline before iterating through the 5 colour bands."
    },
    {
      topic: "Colour Band Counting Loop",
      question: "What does the loop for b = 1:5 accomplish in the lottery simulation?",
      answer: "It loops through each of the 5 colour bands to count how many balls of that specific band appeared in each play.",
      rationale: "It evaluates band frequency distribution across all drawn balls in every row."
    },
    {
      topic: "Calculating Maximum Band Count",
      question: "How does biggest_band = max(biggest_band, sum(bands == b, 2)); work?",
      answer: "It compares the current max band count with the new band frequency row-by-row and retains the larger value.",
      rationale: "It ensures biggest_band captures the dominant colour group frequency for each simulation row."
    },
    {
      topic: "Calculating Raw Scores",
      question: "What does scores = sum(balls, 2); calculate?",
      answer: "It computes the numerical sum of all ball values drawn in each individual game play.",
      rationale: "Summing across columns gives the base unpenalized score before risk rules are applied."
    },
    {
      topic: "Applying Risk Penalty Rule",
      question: "What does scores(biggest_band > y(j)) = 0; implement in the lottery game?",
      answer: "It resets the score of any play to zero if the largest number of balls in any single colour band exceeds the safety limit y(j).",
      rationale: "This enforces the core risk penalty, punishing hands that are overly concentrated in a single colour band."
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
      answer: "It maps optimal row indices back to their corresponding x ball counts and matches the shape of y.",
      rationale: "It translates matrix positions into actionable strategy quantities for each risk limit."
    },
    {
      topic: "File Opening (fopen)",
      question: "What does fid = fopen(file_name, 'w'); do in MATLAB?",
      answer: "It opens a text file with the specified file_name in write mode ('w') and returns a file identifier handle (fid).",
      rationale: "It establishes an active pipeline to write simulation data to disk."
    },
    {
      topic: "Writing Table Headers",
      question: "What do the header writing lines (fprintf statements for !y and !x) accomplish?",
      answer: "They write the column indicator !y, safety limit values y, and row indicator !x into the text file.",
      rationale: "This sets up the structured table format for the exported report."
    },
    {
      topic: "Writing Expected Score Rows",
      question: "What does the main export loop write into the text file for each x value?",
      answer: "It writes the ball count x(i) followed by tab-separated expected scores formatted to two decimal places (%.2f).",
      rationale: "It outputs the full calculated expected value grid row by row."
    },
    {
      topic: "Writing Optimal Row and Closing File",
      question: "What do the final lines writing !opt and executing fclose(fid); do?",
      answer: "They append the optimal ball counts under !opt at the bottom of the file and safely close the file pipeline.",
      rationale: "It records the final strategy takeaway and flushes data to disk, preventing memory or file lock errors."
    }
  ]
};