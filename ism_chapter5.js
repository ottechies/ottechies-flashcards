// Flashcard-ready data converted from the supplied ism_chapter5.js.
// Each card uses question/answer/rationale/topic fields expected by OTTECHIES Flashcards.
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['ism'] = window.QUIZ_COURSES['ism'] || { title: 'Information Systems Management', lectures: {} };
window.QUIZ_COURSES['ism'].title = window.QUIZ_COURSES['ism'].title || 'Information Systems Management';
window.QUIZ_COURSES['ism'].lectures = window.QUIZ_COURSES['ism'].lectures || {};
window.QUIZ_COURSES['ism'].lectures['chapter5'] = {
  "title": "Chapter 5: IT Infrastructure and Emerging Technologies",
  "questions": [
    {
      "topic": "Defining IT Infrastructure",
      "question": "What is the standard economic and technical definition of 'IT infrastructure' in a business firm?",
      "answer": "The shared technology resources, hardware, software, and services that provide the foundation for the firm’s specific information systems",
      "rationale": "IT infrastructure consists of a platform of hardware, software, and services shared across the entire firm, supporting all business information systems."
    },
    {
      "topic": "Evolution of IT Infrastructure",
      "question": "What were the five distinct eras in the evolution of IT infrastructure described in Chapter 5?",
      "answer": "Mainframe/minicomputer, personal computer, client/server, enterprise/internet, and cloud/mobile computing architectural eras.",
      "rationale": "IT infrastructure has evolved through five historical stages, moving from centralized mainframes to decentralized PCs, client/server architectures, enterprise internets, and modern cloud computing."
    },
    {
      "topic": "Client/Server Computing",
      "question": "In a client/server architecture, how is processing work distributed between clients and servers?",
      "answer": "Desktop or mobile client workstations handle user interaction and local processing, while network servers store data and execute shared business logic and services.",
      "rationale": "Client/server computing splits computing power between client devices (front-end) and powerful network servers (back-end) connected by a network."
    },
    {
      "topic": "Moore’s Law",
      "question": "What economic and technological principle formulated by Gordon Moore observes that the number of transistors on a silicon chip roughly doubles every 18 to 24 months?",
      "answer": "Moore’s Law observing that transistor counts on silicon microchips roughly double every eighteen to twenty-four months.",
      "rationale": "Moore’s Law states that computing power doubles every 18-24 months while chip manufacturing costs drop correspondingly, driving rapid IT evolution."
    },
    {
      "topic": "Law of Mass Digital Storage",
      "question": "What does the 'Law of Mass Digital Storage' describe regarding digital information?",
      "answer": "The cost of digital storage is dropping at an exponential rate of roughly doubling every year while storage capacity expands massively.",
      "rationale": "The cost of storing digital data is falling exponentially (roughly by half every year), enabling firms to store vast exabytes of data."
    },
    {
      "topic": "Metcalfe’s Law",
      "question": "What economic principle explains why network technologies (such as the Internet and telecommunications) gain exponential value as the number of connected users increases?",
      "answer": "Metcalfe’s Law explaining why network technologies gain exponential economic value as connected user populations increase.",
      "rationale": "Metcalfe’s Law states that the value of a network grows roughly as the square of the number of users ($N^2$), explaining rapid network adoption."
    },
    {
      "topic": "Infrastructure Components",
      "question": "Which of the following represents the seven major components of a contemporary IT infrastructure?",
      "answer": "Computer hardware platforms, operating system platforms, enterprise software applications, data management, networking platforms, internet platforms, and consulting services.",
      "rationale": "IT infrastructure is composed of these seven distinct technological components and services that must coordinate seamlessly."
    },
    {
      "topic": "Virtualization",
      "question": "What is the core technology behind 'virtualization,' and how does it benefit corporate data centers?",
      "answer": "It enables multiple virtual machines to run independently on a single physical hardware server, maximizing utilization and cutting energy costs.",
      "rationale": "Virtualization abstracts physical hardware resources, allowing multiple logical servers to run on one physical machine, slashing data center space and power needs."
    },
    {
      "topic": "Cloud Computing",
      "question": "What defines 'cloud computing' as an IT infrastructure model?",
      "answer": "A computing model where firms rent scalable resources and software over the internet from third-party data centers on pay-per-use terms.",
      "rationale": "Cloud computing delivers on-demand computing services over the internet, allowing firms to scale infrastructure dynamically without owning physical hardware."
    },
    {
      "topic": "Cloud Computing Service Models",
      "question": "What are the three principal service models of cloud computing?",
      "answer": "Infrastructure as a Service, Platform as a Service, and Software as a Service cloud deployment models.",
      "rationale": "Cloud services are categorized into IaaS (renting raw hardware/storage), PaaS (renting development platforms), and SaaS (renting applications over the web)."
    },
    {
      "topic": "Green Computing",
      "question": "What practices and technologies are encompassed by 'green computing' (or green IT)?",
      "answer": "Designing, manufacturing, using, and disposing of computers and data center cooling systems to minimize environmental impact and energy consumption.",
      "rationale": "Green computing focuses on reducing energy consumption in data centers through efficient processors, virtualization, and eco-friendly hardware disposal."
    },
    {
      "topic": "Autonomic Computing",
      "question": "What is the ultimate goal of 'autonomic computing' initiatives in enterprise IT?",
      "answer": "Creating industrial computer systems that can automatically configure, self-heal, optimize, and protect themselves without human intervention.",
      "rationale": "Autonomic computing aims to develop self-managing systems that handle maintenance, tuning, and security repairs automatically to reduce administrative overhead."
    },
    {
      "topic": "Open Source Software (OSS)",
      "question": "How does Open Source Software (OSS), such as the Linux operating system, differ from proprietary commercial software?",
      "answer": "OSS source code is freely available to the public to be used, modified, and redistributed by anyone.",
      "rationale": "Open source software provides free access to underlying source code, allowing collaborative community development and customization without proprietary vendor fees."
    },
    {
      "topic": "Service-Oriented Architecture (SOA)",
      "question": "What is the architectural purpose of Service-Oriented Architecture (SOA) and web services?",
      "answer": "To build software applications as reusable modular services that communicate across different systems regardless of platform.",
      "rationale": "SOA uses standardized web services to let disparate software systems exchange data and execute business processes modularly."
    },
    {
      "topic": "Software Outsourcing",
      "question": "When a firm engages in 'software outsourcing' by hiring external vendors (either domestic or offshore) to write custom code or manage cloud applications, what is a primary managerial risk?",
      "answer": "Hidden transaction costs, loss of internal technical control, and security or intellectual property leakage risks.",
      "rationale": "While outsourcing can reduce initial labor costs, it introduces risks regarding hidden coordination expenses, vendor dependency, and intellectual property leakage."
    },
    {
      "topic": "Scalability",
      "question": "What does 'scalability' mean in the context of IT infrastructure architecture?",
      "answer": "The ability of a system to expand cost-effectively to serve growing users or surging data volumes without crashing.",
      "rationale": "Scalability is the capacity of an infrastructure platform to scale up processing power, storage, and network capacity seamlessly as demand grows."
    },
    {
      "topic": "Total Cost of Ownership (TCO)",
      "question": "What does the Total Cost of Ownership (TCO) model calculate when evaluating IT infrastructure investments?",
      "answer": "Direct acquisition costs plus indirect ongoing administration, maintenance, technical support, training, and upgrade expenses over asset lifespan.",
      "rationale": "TCO analysis looks beyond purchase price to capture all direct and indirect operational costs associated with maintaining IT infrastructure."
    },
    {
      "topic": "Grid Computing",
      "question": "What is the underlying mechanism of 'grid computing'?",
      "answer": "Connecting geographically dispersed computers over a network to act as a supercomputer pooling idle processing power.",
      "rationale": "Grid computing connects disparate networked computers to harness collective idle processing power for massive computational tasks."
    },
    {
      "topic": "Management and Governance (IT Infrastructure)",
      "question": "Why is managing IT infrastructure governance particularly challenging for growing enterprises?",
      "answer": "Because managers must balance decentralizing IT control for local responsiveness with centralizing control for standards.",
      "rationale": "IT infrastructure governance requires striking a delicate organizational balance between centralized infrastructure standards and decentralized unit autonomy."
    },
    {
      "topic": "Operating System Platforms",
      "question": "At the client operating system level, what major shift has occurred in contemporary business computing platforms?",
      "answer": "Mobile operating systems and multi-touch tablet interfaces emerged alongside traditional desktop operating systems.",
      "rationale": "The client platform has diversified from traditional desktop operating systems to include mobile touch-screen operating systems on smartphones and tablets."
    },
    {
      "topic": "Data Management and Storage Technology",
      "question": "What technologies comprise the data management and storage component of IT infrastructure?",
      "answer": "Database management system software and physical storage technology like hard disk arrays and cloud storage.",
      "rationale": "Data management software organizes enterprise data, while physical storage technology handles massive data repositories."
    },
    {
      "topic": "Networking Platforms",
      "question": "What infrastructure role do networking and telecommunications platforms play in the enterprise?",
      "answer": "They link hardware components and transmit voice, data, images, and video across local and wide area networks.",
      "rationale": "Networking platforms provide the communication infrastructure connecting all computers, devices, and data centers globally."
    },
    {
      "topic": "Cloud Computing Reliability Risks",
      "question": "What is a major operational risk managers must evaluate when migrating core enterprise applications to public cloud computing providers?",
      "answer": "Dependence on provider uptime, internet outage vulnerability, data security concerns, and regulatory compliance limits.",
      "rationale": "Public cloud reliance exposes firms to vendor downtime, security vulnerabilities, and data governance hurdles."
    },
    {
      "topic": "Software as a Service (SaaS)",
      "question": "How does the Software as a Service (SaaS) delivery model differ from traditional packaged software?",
      "answer": "SaaS delivers applications as online subscription services hosted remotely, eliminating local installation and maintenance.",
      "rationale": "SaaS provides web-delivered applications on demand, shifting software from purchased boxed assets to rented cloud services."
    },
    {
      "topic": "Legacy Systems",
      "question": "Why do many established corporations struggle to replace older 'legacy systems' with modern cloud infrastructure?",
      "answer": "Because legacy systems are deeply embedded in core business processes and critical for daily operations.",
      "rationale": "Legacy systems represent older transaction processing systems that remain essential to operations but resist easy integration or replacement."
    },
    {
      "topic": "Multicore Processors",
      "question": "What is the advantage of multi-core microprocessor architecture in contemporary hardware platforms?",
      "answer": "It places multiple processor cores on a silicon chip, increasing performance, executing simultaneous instructions, and reducing power.",
      "rationale": "Multi-core chips enhance processing power and energy efficiency by running parallel instructions on a single physical chip."
    },
    {
      "topic": "Web Services (XML)",
      "question": "What underlying data formatting standard enables different software applications built on different programming languages to exchange data seamlessly over the web?",
      "answer": "Hypertext Markup Language and Extensible Markup Language standards enabling data exchange over the web.",
      "rationale": "XML provides a standardized way to structure data, enabling web services and SOA to exchange information across heterogeneous systems."
    },
    {
      "topic": "Capacity Planning",
      "question": "What is the primary objective of IT 'capacity planning' when designing infrastructure?",
      "answer": "Predicting when hardware, storage, and network bandwidth will reach capacity to handle peak transaction volumes without slowing.",
      "rationale": "Capacity planning ensures that computing resources scale proactively ahead of growing transaction loads to prevent system bottlenecks."
    },
    {
      "topic": "Private vs. Public Cloud",
      "question": "What is the primary structural difference between a 'public cloud' and a 'private cloud'?",
      "answer": "Public clouds are operated by third-party vendors for multiple tenants; private clouds are operated exclusively for one organization.",
      "rationale": "Public clouds share multi-tenant infrastructure over the open web, whereas private clouds provide dedicated cloud infrastructure managed exclusively for one firm."
    },
    {
      "topic": "Infrastructure Investment Decisions",
      "question": "When managers make 'rent vs. buy' (cloud vs. on-premise) decisions regarding IT infrastructure, what economic trade-off are they primarily evaluating?",
      "answer": "Capital expenditure purchasing hardware versus operating expenditure ongoing subscription rental fees for cloud services.",
      "rationale": "Rent vs. buy decisions weigh the heavy upfront capital expenditure of owning hardware against the flexible operating expenditure of cloud rental models."
    }
  ]
};
