// sad_chapter3.js
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['sad'] = window.QUIZ_COURSES['sad'] || {
  title: "System Analysis and Design (MIS7104)",
  subtitle: "Systems, Roles, Methodologies & Requirements",
  lectures: {}
};

window.QUIZ_COURSES['sad'].lectures['chapter3'] = {
  title: "Chapter 3: Managing the IS Project",
  questions: [
    {
      topic: "Project Initiation",
      question: "Which set of actions helps a systems analyst pinpoint systems problems and opportunities early in project initiation?",
      options: [
        "Checking output, observing employee behavior, and listening to feedback from users and stakeholders",
        "Writing final production SQL queries before interviewing anyone in the organization",
        "Purchasing server hardware prior to defining organizational goals or constraints",
        "Skipping problem definition and moving straight to post-implementation maintenance"
      ],
      correct: "Checking output, observing employee behavior, and listening to feedback from users and stakeholders",
      rationale: "Analysts identify problems and opportunities by examining system outputs, observing how employees work, and listening to feedback."
    },
    {
      topic: "Problem Definition",
      question: "In structuring a problem definition, how do 'issues' relate to 'objectives'?",
      options: [
        "Issues are independent pieces of the problem or opportunity, and objectives are goals that match those issues point-by-point.",
        "Issues are final software code modules, and objectives are hardware purchase invoices.",
        "Issues replace the problem statement, while objectives list unrelated company hobbies.",
        "Issues apply only to hardware failures, while objectives apply only to employee hiring."
      ],
      correct: "Issues are independent pieces of the problem or opportunity, and objectives are goals that match those issues point-by-point.",
      rationale: "A strong problem definition pairs a concise problem statement with specific issues and point-by-point matching objectives."
    },
    {
      topic: "Project Selection",
      question: "Which criterion is NOT a primary consideration when selecting IS projects?",
      options: [
        "Eliminating management backing so the analyst can work without oversight",
        "Appropriate timing of the project commitment",
        "Potential to improve attainment of organizational goals",
        "Practicality in terms of available resources for the system"
      ],
      correct: "Eliminating management backing so the analyst can work without oversight",
      rationale: "Project selection depends on management backing, appropriate timing, alignment with organizational goals, and resource practicality."
    },
    {
      topic: "Feasibility Analysis",
      question: "What are the three core dimensions of feasibility assessed when evaluating a proposed system project?",
      options: [
        "Technical feasibility, economic feasibility, and operational feasibility",
        "Aesthetic feasibility, graphical feasibility, and syntactic feasibility",
        "Hardware feasibility, alphabetical feasibility, and seasonal feasibility",
        "Sequential feasibility, military feasibility, and archival feasibility"
      ],
      correct: "Technical feasibility, economic feasibility, and operational feasibility",
      rationale: "Feasibility is evaluated across technical, economic, and operational dimensions."
    },
    {
      topic: "Economic Feasibility",
      question: "Why must a systems analyst evaluate both tangible and intangible costs and benefits during economic feasibility?",
      options: [
        "Because projects involve measurable financial items alongside harder-to-quantify impacts such as improved decision making, customer goodwill, or morale",
        "Because intangible benefits are the only figures allowed on a formal budget spreadsheet",
        "Because tangible costs never affect payback period or break-even analysis",
        "Because economic feasibility only applies after the system is in production"
      ],
      correct: "Because projects involve measurable financial items alongside harder-to-quantify impacts such as improved decision making, customer goodwill, or morale",
      rationale: "Economic feasibility weighs concrete costs and savings together with important intangible benefits and costs."
    },
    {
      topic: "Operational Feasibility",
      question: "What does operational feasibility primarily focus on?",
      options: [
        "Whether the proposed system will actually work in the organization and be accepted and used effectively by people",
        "Whether a programming language has object-oriented inheritance syntax",
        "Whether a computer monitor has high screen resolution",
        "Whether a PERT diagram has fewer than five nodes"
      ],
      correct: "Whether the proposed system will actually work in the organization and be accepted and used effectively by people",
      rationale: "Operational feasibility addresses human, workflow, and organizational acceptance so the system is used as intended."
    },
    {
      topic: "Technical Feasibility",
      question: "What does an analyst examine when assessing technical feasibility and hardware/software needs?",
      options: [
        "Whether existing technology and skills can support the system, alongside current and projected system workloads",
        "Only the color scheme of corporate logos and office furniture",
        "Whether employees prefer paper memos over all digital communication",
        "Whether the project charter can omit time estimates"
      ],
      correct: "Whether existing technology and skills can support the system, alongside current and projected system workloads",
      rationale: "Technical feasibility checks technology capabilities, team expertise, and current/future workload capacity."
    },
    {
      topic: "Activity Planning & Control",
      question: "How does project control differ from project planning in activity management?",
      options: [
        "Planning sets up the team, task estimates, and schedule upfront, whereas control monitors actual progress against the plan and adjusts or expedites tasks.",
        "Planning happens only after the project ends, whereas control happens before problems are identified.",
        "Planning uses feedback to fix delays, whereas control guesses task durations without tracking progress.",
        "There is no difference; planning and control mean identical actions."
      ],
      correct: "Planning sets up the team, task estimates, and schedule upfront, whereas control monitors actual progress against the plan and adjusts or expedites tasks.",
      rationale: "Planning establishes the roadmap (team, estimates, schedule), while control tracks actual progress against the plan and takes corrective action."
    },
    {
      topic: "Work Breakdown",
      question: "Why does an analyst break a project down from phases into tasks/activities and smaller steps before scheduling?",
      options: [
        "Smaller, well-defined units make duration estimates more realistic and make scheduling and progress tracking manageable.",
        "Breaking work into smaller steps automatically removes all dependencies between tasks.",
        "Smaller steps eliminate the need to estimate how long activities take.",
        "Work breakdown is only needed for single-day tasks."
      ],
      correct: "Smaller, well-defined units make duration estimates more realistic and make scheduling and progress tracking manageable.",
      rationale: "Decomposing work into phases, tasks, and smaller steps improves time estimation and schedule control."
    },
    {
      topic: "Gantt Charts",
      question: "What is a major strength of a Gantt chart for managing a systems analysis project?",
      options: [
        "It is simple, drawn to scale over time, shows parallel activities and overlap, and communicates schedules clearly to end users.",
        "It hides task durations so users only see abstract dependency arrows.",
        "It replaces the need to define tasks or estimate completion times.",
        "It is only useful when zero tasks overlap in time."
      ],
      correct: "It is simple, drawn to scale over time, shows parallel activities and overlap, and communicates schedules clearly to end users.",
      rationale: "Gantt charts display scaled timelines, overlapping/parallel bars, and simple visuals that are easy to share with end users."
    },
    {
      topic: "PERT Diagrams",
      question: "On a PERT diagram, what do the arrows and nodes/events represent?",
      options: [
        "Arrows represent activities (with names and durations), and nodes/events mark activity completion and precedence milestones.",
        "Arrows represent database tables, and nodes represent programming languages.",
        "Arrows represent employee salaries, and nodes represent external customers.",
        "Arrow length is strictly proportional to cost rather than precedence."
      ],
      correct: "Arrows represent activities (with names and durations), and nodes/events mark activity completion and precedence milestones.",
      rationale: "In PERT diagrams, arrows depict activities and durations while event nodes show completion points and predecessor/successor relationships."
    },
    {
      topic: "Critical Path",
      question: "What is the 'critical path' on a PERT diagram?",
      options: [
        "The longest path through the network of activities, which determines the shortest possible time to complete the project",
        "The shortest path with the fewest total activities regardless of duration",
        "Any path made up exclusively of optional or low-priority tasks",
        "The path that is always ignored during project control"
      ],
      correct: "The longest path through the network of activities, which determines the shortest possible time to complete the project",
      rationale: "The critical path is the longest duration chain through the PERT network and sets the minimum project completion time."
    },
    {
      topic: "Gantt vs. PERT",
      question: "How do Gantt charts and PERT diagrams complement each other in project scheduling?",
      options: [
        "Gantt charts clearly show time scale and task overlap, while PERT diagrams highlight precedence dependencies, parallel paths, slack, and the critical path.",
        "Gantt charts show network slack and critical paths, while PERT charts only show calendar dates.",
        "Gantt charts cannot show multiple tasks, while PERT charts cannot show task sequence.",
        "Neither tool helps track project progress."
      ],
      correct: "Gantt charts clearly show time scale and task overlap, while PERT diagrams highlight precedence dependencies, parallel paths, slack, and the critical path.",
      rationale: "Gantt charts excel at visual timeline/overlap communication, whereas PERT excels at mapping task dependencies, slack, and the critical path."
    },
    {
      topic: "Slack Time",
      question: "What does 'slack time' on a non-critical activity in a schedule indicate?",
      options: [
        "How much an activity can be delayed without delaying the project's overall completion date",
        "The amount of extra budget spent beyond economic feasibility",
        "The number of team members who left the project early",
        "A mandatory delay required by law on every task"
      ],
      correct: "How much an activity can be delayed without delaying the project's overall completion date",
      rationale: "Slack is the allowable leeway before an activity's delay pushes out the overall project completion time."
    },
    {
      topic: "Team Leadership & Motivation",
      question: "Effective systems project leadership typically balances which two dimensions within a team?",
      options: [
        "Driving task accomplishment and supporting people through clear communication, goal setting, and motivation",
        "Writing code alone and avoiding communication with team members until delivery",
        "Assigning identical tasks to everyone without considering skills or roles",
        "Ignoring productivity goals to avoid measuring progress"
      ],
      correct: "Driving task accomplishment and supporting people through clear communication, goal setting, and motivation",
      rationale: "Managing teams effectively requires both task direction and human/communication support, clear goals, and motivation."
    },
    {
      topic: "Project Charter & Systems Proposal",
      question: "What role do the project charter and systems proposal play in managing an IS project?",
      options: [
        "They formalize project scope, purpose, and authority and present structured findings, feasibility, and recommendations to stakeholders.",
        "They replace all user requirements gathering and testing activities.",
        "They serve only as informal personal notes for a single programmer.",
        "They are created only after a system is decommissioned."
      ],
      correct: "They formalize project scope, purpose, and authority and present structured findings, feasibility, and recommendations to stakeholders.",
      rationale: "The project charter establishes formal direction/authorization, while the systems proposal communicates analysis findings and recommended next steps."
    },
    {
      topic: "Managing Ecommerce Projects",
      question: "Why do ecommerce and fast-paced web projects require careful project management attention?",
      options: [
        "Rapidly shifting market expectations, tight schedules, cross-functional integration, and user experience demands can quickly derail poorly paced projects.",
        "Ecommerce projects never involve customer interfaces, security, or schedule pressure.",
        "Web projects have fixed requirements that never change once initiated.",
        "Project timelines do not matter for customer-facing websites."
      ],
      correct: "Rapidly shifting market expectations, tight schedules, cross-functional integration, and user experience demands can quickly derail poorly paced projects.",
      rationale: "Ecommerce initiatives combine fast timelines, evolving requirements, technical integration, and strong usability expectations."
    },
    {
      topic: "Project Control & Rescheduling",
      question: "When actual progress falls behind the planned schedule on a critical activity, what should the project manager do?",
      options: [
        "Use feedback to analyze the variance, then expedite, reallocate resources, or reschedule affected tasks while keeping the team informed and motivated.",
        "Hide the delay from stakeholders until the final deadline passes.",
        "Delete quality checks automatically without evaluating impact.",
        "Restart the entire project from scratch for a minor slip."
      ],
      correct: "Use feedback to analyze the variance, then expedite, reallocate resources, or reschedule affected tasks while keeping the team informed and motivated.",
      rationale: "Project control relies on comparing actuals to the plan and expediting, rescheduling, or adjusting resources to stay on track."
    }
  ]
};