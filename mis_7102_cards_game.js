window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['modelling'] = window.QUIZ_COURSES['modelling'] || { 
  title: "Modelling & Simulation", 
  lectures: {} 
};

window.QUIZ_COURSES['modelling'].lectures['cardsGame'] = {
  title: "Monte Carlo Simulation: Card Game Optimization",
  questions: [
    {
      topic: "Monte Carlo Simulation Fundamentals",
      question: "What type of simulation methodology is used in the cards.m script to evaluate the risk-versus-reward card game?",
      answer: "Monte Carlo simulation.",
      rationale: "Monte Carlo simulation runs thousands of random trials (n = 10,000) to estimate statistical probabilities and expected values."
    },
    {
      topic: "Core Action / Setup",
      question: "How are cards drawn in the simulation from the 52-card pack?",
      answer: "Cards are drawn from the top of a randomly shuffled 52-card pack without replacement.",
      rationale: "Drawing without replacement means cards are not independent; drawing one card affects what remains in the deck."
    },
    {
      topic: "Penalty Rule (Risk)",
      question: "What triggers a total score crash to zero in the card game?",
      answer: "If more than y of the selected cards belong to the exact same suit.",
      rationale: "The safety limit y defines the strictness of the risk threshold; exceeding it completely invalidates the hand's score."
    },
    {
      topic: "Reward Rule (Points)",
      question: "How is the score calculated when a player stays under or equal to the suit limit y?",
      answer: "The score is the numerical sum of the card values in the hand.",
      rationale: "Safe hands accumulate points based on individual card ranks rather than being wiped out."
    },
    {
      topic: "Card Value Mapping",
      question: "What numerical value is assigned to an Ace, Jack, Queen, and King in this game?",
      answer: "An Ace counts as 1, Jack as 11, Queen as 12, and King as 13 (with numbers 2 through 10 as their face values).",
      rationale: "Cards are counted numerically based on their position in each 13-card suit cycle."
    },
    {
      topic: "MATLAB Function Signature",
      question: "What is the exact function signature and output argument structure required for the cards script?",
      answer: "[results, optimal_x] = cards(x, y, n, file_name).",
      rationale: "It takes card vectors x, risk limits y, iteration count n, and an export filename, returning results and optimal_x."
    },
    {
      topic: "Function Inputs (x)",
      question: "What does the input variable x represent in the cards(x, y, n, file_name) function?",
      answer: "A vector representing the number of cards/items drawn in each play (e.g., from 1 to 20).",
      rationale: "x controls the scale of the strategy being tested, evaluating hands of varying sizes."
    },
    {
      topic: "Function Inputs (y Safety Limit)",
      question: "What does the input variable y represent in the simulation function?",
      answer: "A vector representing the suit-mismatch safety threshold (e.g., from 1 to 5).",
      rationale: "y defines how strict the risk limit is before a hand's score crashes to zero."
    },
    {
      topic: "Simulation Iterations (n)",
      question: "What role does the iteration parameter n (e.g., 10,000) play in the simulation?",
      answer: "It determines how many times the game is played for every combination of x and y to calculate a reliable statistical average.",
      rationale: "A large n ensures accurate expected values through the Law of Large Numbers."
    },
    {
      topic: "Input Variable file_name",
      question: "What is the purpose of the file_name argument (e.g., 'cards.txt')?",
      answer: "It specifies the name of the exported text report file where final simulation results are saved.",
      rationale: "It provides an open pipeline (fopen) to output the expected score matrix and optimal strategies."
    },
    {
      topic: "Grid Exploration",
      question: "What is created when passing 1:20 for x and 1:5 for y into the function?",
      answer: "A 2D evaluation grid testing 100 unique combinations of x choices against y limits.",
      rationale: "MATLAB colon operators test all specified quantities and risk limits simultaneously without manual iteration."
    },
    {
      topic: "Vectorization vs. Sequential Loops",
      question: "Why does the code avoid running traditional sequential loops for shuffling 10,000 decks?",
      answer: "To perform vectorized operations that shuffle all 10,000 card decks simultaneously at the exact same time.",
      rationale: "Vectorization drastically accelerates execution speed in MATLAB by processing entire matrices in parallel."
    },
    {
      topic: "Partial Fisher-Yates Shuffle",
      question: "What specific shuffling algorithm is implemented in the inner loop of the code?",
      answer: "A vectorized partial Fisher-Yates shuffle.",
      rationale: "Because only x cards from the top are drawn, the algorithm only shuffles up to position x(i), saving computational time."
    },
    {
      topic: "Shuffle Loop Efficiency",
      question: "Why does the shuffle loop run from k = 1 to x(i) instead of all the way to 52?",
      answer: "Because only the cards at the top of the deck (up to position x) matter for the draw, making full-deck shuffling unnecessary.",
      rationale: "Optimizing the loop range avoids wasting computer time on cards that will never be drawn."
    },
    {
      topic: "Random Position Formula (r)",
      question: "What does the formula r = k - 1 + ceil((53 - k) * rand(n, 1)) calculate?",
      answer: "A random card position between k and 52 for each of the 10,000 game rows simultaneously.",
      rationale: "It ensures random selection from remaining unshuffled cards while avoiding already locked positions."
    },
    {
      topic: "Matrix Addressing (here and there)",
      question: "What do the variables here and there represent during the card swapping step?",
      answer: "Exact linear matrix coordinates/addresses for position k and random position r across all 10,000 game rows.",
      rationale: "MATLAB stores matrices in memory as a single long column, requiring calculated linear indices for simultaneous swapping."
    },
    {
      topic: "Variable Swap Mechanics (temp)",
      question: "What is the role of the temporary variable temp during the card swap?",
      answer: "It holds card k temporarily so that card r can be moved into position k without overwriting data.",
      rationale: "It acts like a temporary placeholder (analogous to holding an object in a free hand) to execute a safe swap."
    },
    {
      topic: "Hand Extraction",
      question: "How is the player's active hand extracted from the shuffled pack matrix?",
      answer: "By grabbing the first columns from column 1 up to x(i) for all game rows simultaneously (pack(:, 1:x(i))).",
      rationale: "This extracts the exact subset of top cards pulled for that specific game round across all simulations."
    },
    {
      topic: "Card Value Decoding Math Trick",
      question: "How does the expression values = mod(hand - 1, 13) + 1 decode raw card numbers into point values?",
      answer: "It uses the modulo operator to cycle numbers in loops of 13 and adds 1 to shift the range from 1 to 13.",
      rationale: "Since a deck has 4 cards of each rank, mod(..., 13) produces numbers 0–12, which shift cleanly to represent Aces (1) through Kings (13)."
    },
    {
      topic: "Card Suit Decoding Math Trick",
      question: "How does the expression suits = ceil(hand / 13) categorize cards into suits?",
      answer: "It divides card numbers by 13 and rounds up using ceil to assign integers 1 through 4.",
      rationale: "Cards 1–13 fall into suit 1, 14–26 into suit 2, and so forth, dividing the 52 cards into four uniform groups."
    },
    {
      topic: "Tracking Suit Frequency",
      question: "What is the purpose of initializing biggest_suit = zeros(n, 1) before the suit loop?",
      answer: "To track the maximum number of cards belonging to any single suit for every game row.",
      rationale: "It acts as an accumulator variable that updates across suits 1 through 4 to find the dominant suit count."
    },
    {
      topic: "Checking Suit Limits",
      question: "How does the code evaluate whether the suit-mismatch safety threshold was violated?",
      answer: "By comparing biggest_suit against the safety limit y(j) for each game.",
      rationale: "If the count of the largest suit in a hand exceeds y(j), the rule is violated."
    },
    {
      topic: "Applying Score Penalties",
      question: "What happens to the scores of games where biggest_suit > y(j)?",
      answer: "Their scores are set to zero (scores(biggest_suit > y(j)) = 0).",
      rationale: "Violating the risk threshold results in a complete score crash, penalizing overextension."
    },
    {
      topic: "Calculating Expected Scores",
      question: "How is the final entry in the results matrix computed for each pair of x and y?",
      answer: "By taking the arithmetic mean of all individual game scores using mean(scores).",
      rationale: "Averaging 10,000 simulation outcomes yields the statistical expected value for that strategy combination."
    },
    {
      topic: "Finding Optimal Strategy",
      question: "How does the code identify the best number of cards to draw (optimal_x) for each safety limit y?",
      answer: "By finding the row index with the maximum expected score across each column using max(results, [], 1).",
      rationale: "It scans the expected score columns to locate the peak performance for every risk limit y."
    },
    {
      topic: "Reshaping Optimal Results",
      question: "What is the purpose of optimal_x = reshape(x(best_row), size(y))?",
      answer: "To map the optimal row indices back to their corresponding x card counts and match the dimensions of y.",
      rationale: "It translates matrix row positions into actual strategy card quantities for final output."
    },
    {
      topic: "File Output Initialization",
      question: "What function opens the text report file for writing the simulation results?",
      answer: "fid = fopen(file_name, 'w');",
      rationale: "fopen with the 'w' flag creates an open pipeline (file identifier handler) to write text data."
    },
    {
      topic: "Formatting Output Headers",
      question: "How are the table headers formatted in the exported text file?",
      answer: "Using fprintf to print !y followed by tab-separated safety limit values of y.",
      rationale: "This creates a clean, readable matrix table structure mirroring professional data reports."
    },
    {
      topic: "Interpreting Simulation Findings",
      question: "What does the bottom row (!opt) in the exported text report signify?",
      answer: "The optimal number of items (x) to play with for each specific safety limit (y) to maximize expected score.",
      rationale: "It answers the core dilemma of the simulation: how many cards to risk drawing without getting wiped out."
    },
    {
      topic: "Analyzing Output Trends",
      question: "Based on the simulation output, how does the optimal card count (x) change as the safety limit (y) increases from 1 to 5?",
      answer: "The optimal x increases progressively (from x = 2 for y = 1 up to x = 13 for y = 5).",
      rationale: "Relaxing the risk threshold allows players to safely draw more cards without risking frequent zero-score crashes, raising expected returns."
    }
  ]
};