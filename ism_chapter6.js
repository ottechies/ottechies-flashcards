// Flashcard-ready data converted from the supplied ism_chapter6.js.
// Each card uses question/answer/rationale/topic fields expected by OTTECHIES Flashcards.
window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES['ism'] = window.QUIZ_COURSES['ism'] || { title: 'Information Systems Management', lectures: {} };
window.QUIZ_COURSES['ism'].title = window.QUIZ_COURSES['ism'].title || 'Information Systems Management';
window.QUIZ_COURSES['ism'].lectures = window.QUIZ_COURSES['ism'].lectures || {};
window.QUIZ_COURSES['ism'].lectures['chapter6'] = {
  "title": "Chapter 6: Foundations of Business Intelligence: Databases and Information Management",
  "questions": [
    {
      "topic": "Traditional File Environment Problems",
      "question": "What are the major problems associated with organizing data in a traditional file environment (file processing system)?",
      "answer": "Data redundancy and inconsistency, program-data dependence, lack of flexibility, poor security, and lack of data sharing.",
      "rationale": "Traditional file systems lead to fragmented data silos, duplicated entry errors, rigid program-data coupling, and severe security challenges."
    },
    {
      "topic": "Data Redundancy and Inconsistency",
      "question": "How does 'data redundancy' directly cause 'data inconsistency' in file processing environments?",
      "answer": "When duplicated data is updated in one file but not others, resulting in conflicting and erroneous values.",
      "rationale": "Redundant data storage means updating an address in one department file leaves it outdated in another, causing inconsistency and erroneous business reports."
    },
    {
      "topic": "Program-Data Dependence",
      "question": "What does 'program-data dependence' mean in traditional file environments?",
      "answer": "Coupling of data files and programs so format changes require rewriting all programs accessing those files.",
      "rationale": "Program-data dependence means application software is tightly bound to specific physical data storage formats, making modifications cumbersome and costly."
    },
    {
      "topic": "Database Management System (DBMS)",
      "question": "How does a Database Management System (DBMS) solve the problems of traditional file environments?",
      "answer": "By serving as an interface between applications and physical files, centralizing data and decoupling programs.",
      "rationale": "A DBMS centralizes data management, providing controlled access, eliminating redundancy, and freeing application programs from physical storage details."
    },
    {
      "topic": "Relational DBMS",
      "question": "How do relational Database Management Systems (RDBMS) organize and structure data?",
      "answer": "In two-dimensional tables consisting of rows and columns that can be linked based on common data elements.",
      "rationale": "Relational databases store data in tabular rows and columns, linking tables together using common key fields."
    },
    {
      "topic": "Primary Key and Foreign Key",
      "question": "What is the specific function of a 'primary key' and a 'foreign key' in a relational database table?",
      "answer": "Primary keys uniquely identify table records, while foreign keys act as lookup fields pointing to other tables.",
      "rationale": "Primary keys uniquely identify table rows, and foreign keys reference those primary keys to link related tables together in relational databases."
    },
    {
      "topic": "Database Design (Normalization)",
      "question": "What is the purpose of database 'normalization' during the database design process?",
      "answer": "To streamline complex data groups into standardized tables, minimizing redundancy and eliminating update anomalies.",
      "rationale": "Normalization organizes data efficiently to eliminate redundancy, insertion anomalies, and update anomalies in relational database design."
    },
    {
      "topic": "Entity-Relationship Diagram (ERD)",
      "question": "What is an Entity-Relationship Diagram (ERD) used for in database design?",
      "answer": "To visually document and model the relationships between database entities such as customers and orders.",
      "rationale": "ERDs are conceptual database design tools used to map out entities, attributes, and relationships before physical implementation."
    },
    {
      "topic": "Structured Query Language (SQL)",
      "question": "What is Structured Query Language (SQL)?",
      "answer": "The industry-standard data manipulation and querying language utilized by relational database management systems.",
      "rationale": "SQL is the universal query language (featuring commands like SELECT, INSERT, UPDATE, DELETE) used to interact with relational databases."
    },
    {
      "topic": "Data Warehouse",
      "question": "What distinguishes a 'data warehouse' from an operational database?",
      "answer": "A centralized database storing historical data extracted from operational systems, optimized for reporting and analysis.",
      "rationale": "Data warehouses consolidate historical enterprise data specifically for analytical querying and business intelligence reporting without slowing down operational TPS."
    },
    {
      "topic": "Data Mart",
      "question": "What is a 'data mart'?",
      "answer": "A subset of a data warehouse focused on a specific line of business allowing faster localized analysis.",
      "rationale": "Data marts are smaller, decentralized subsets of data warehouses tailored for specific business units or analytical departments."
    },
    {
      "topic": "Business Intelligence Tools (OLAP)",
      "question": "What is Online Analytical Processing (OLAP), and what analytical capability does it provide?",
      "answer": "Supporting multidimensional data analysis, enabling users to view data from multiple perspectives and drill down.",
      "rationale": "OLAP provides multidimensional data analysis capabilities, allowing managers to query and analyze data across multiple dimensions instantly."
    },
    {
      "topic": "Data Mining",
      "question": "How does 'data mining' differ from standard database querying?",
      "answer": "Data mining uses advanced algorithms to discover hidden predictive patterns and associations without pre-formulated queries.",
      "rationale": "While standard queries ask predefined questions, data mining digs through large datasets to unearth hidden patterns, customer segments, and predictive trends autonomously."
    },
    {
      "topic": "Text Mining and Sentiment Analysis",
      "question": "What is the primary function of text mining tools in business intelligence?",
      "answer": "To extract key elements, unstructured patterns, and customer sentiment from textual documents and social media.",
      "rationale": "Text mining tools analyze unstructured text data to uncover customer sentiment, trends, and valuable qualitative insights."
    },
    {
      "topic": "Web Mining",
      "question": "What are the three main categories of web mining used to analyze internet data?",
      "answer": "Web content mining, web structure mining, and web usage mining analyzing internet data sources.",
      "rationale": "Web mining is categorized into content mining (extracting text/images), structure mining (analyzing hyperlink structures), and usage mining (analyzing user clickstream behavior)."
    },
    {
      "topic": "Databases and the Web",
      "question": "Why is a database-backed corporate web site superior to static HTML web pages for e-commerce?",
      "answer": "Dynamic database-backed websites pull real-time data from enterprise databases, updating content instantly.",
      "rationale": "Connecting websites to database management systems allows e-commerce platforms to display dynamic, real-time catalog data efficiently."
    },
    {
      "topic": "Information Policy",
      "question": "What is the purpose of establishing a formal corporate 'information policy'?",
      "answer": "To specify organizational rules for sharing, disseminating, acquiring, standardizing, and classifying information enterprise-wide.",
      "rationale": "An information policy establishes organizational rules of governance, accountability, and standardization regarding who owns and manages data."
    },
    {
      "topic": "Data Quality Assurance",
      "question": "What are the primary organizational steps required to ensure high 'data quality' in corporate databases?",
      "answer": "Using data audits, cleansing software, input validation rules, and establishing data governance accountability.",
      "rationale": "Ensuring data quality requires proactive audits, cleansing corrupted data, enforcing input standards, and holding business units accountable for data accuracy."
    },
    {
      "topic": "Data Governance vs. Data Custodianship",
      "question": "What is the structural difference between a 'data owner' (business unit) and a 'data custodian' (IT department)?",
      "answer": "Data owners are business units accountable for policy, while data custodians are IT specialists maintaining storage.",
      "rationale": "Business departments own data governance and accountability, while the IT department acts as technical custodian maintaining database hardware and backups."
    },
    {
      "topic": "Incomplete Data Anomalies",
      "question": "What business consequence results from 'dirty data' (inaccurate, duplicated, or incomplete customer records) in enterprise databases?",
      "answer": "Flawed marketing campaigns, billing errors, lost customers, and severely compromised decision-making.",
      "rationale": "Poor data quality erodes customer trust, causes costly billing errors, and undermines executive business intelligence reports."
    },
    {
      "topic": "Big Data",
      "question": "What characterizes 'Big Data' enterprise environments?",
      "answer": "Massive datasets with high volume, velocity, and variety exceeding traditional relational database processing capacity.",
      "rationale": "Big Data encompasses massive volumes of structured, semi-structured, and unstructured data streaming at high velocity that require specialized distributed tools (like Hadoop)."
    },
    {
      "topic": "Hadoop",
      "question": "What is Apache Hadoop, and what problem does it solve in big data management?",
      "answer": "An open-source framework for distributed processing of massive datasets across clusters using MapReduce.",
      "rationale": "Hadoop provides a distributed storage and processing framework that allows enterprises to analyze petabytes of unstructured big data cost-effectively."
    },
    {
      "topic": "In-Memory Computing",
      "question": "How does 'in-memory computing' accelerate business intelligence queries compared to traditional disk-based databases?",
      "answer": "By storing entire databases in computer primary RAM rather than slower mechanical disks, eliminating bottlenecks.",
      "rationale": "In-memory computing bypasses slow disk access by holding entire datasets in RAM, enabling real-time complex analytics and rapid query response times."
    },
    {
      "topic": "Database Administration",
      "question": "What are the core responsibilities of a Database Administrator (DBA)?",
      "answer": "Managing database design, security, backup/recovery, performance tuning, capacity planning, and access privileges.",
      "rationale": "DBAs are technical specialists responsible for maintaining database integrity, security, performance optimization, and disaster recovery plans."
    },
    {
      "topic": "Data Cleansing",
      "question": "What is the role of 'data cleansing' (data scrubbing) software in data warehouse management?",
      "answer": "To detect and correct corrupted, duplicate, or incorrectly formatted records before loading into warehouses.",
      "rationale": "Data cleansing software identifies and rectifies errors, inconsistencies, and duplicates to ensure data warehouse reports are built on pristine data."
    },
    {
      "topic": "Relational vs. Non-Relational (NoSQL)",
      "question": "When do organizations typically choose NoSQL non-relational database systems over traditional relational DBMS?",
      "answer": "When handling massive volumes of unstructured big data requiring rapid horizontal scalability across cloud servers.",
      "rationale": "NoSQL databases are designed for unstructured big data and flexible schemas that scale horizontally across clusters, unlike rigid relational databases."
    },
    {
      "topic": "Association Analysis in Data Mining",
      "question": "What does 'association detection' reveal when applied as a data mining technique in retail sales?",
      "answer": "Occurrences of linked events or consumer purchasing patterns, such as items frequently bought together.",
      "rationale": "Association analysis uncovers correlations and frequent itemset pairings in transactional databases to drive cross-selling and marketing strategies."
    },
    {
      "topic": "Database Security Controls",
      "question": "Which database management feature ensures that unauthorized users cannot view sensitive financial or personal data tables?",
      "answer": "Access control lists, user authentication, and data encryption privileges enforced by the DBMS.",
      "rationale": "DBMS security features enforce strict user authentication, role-based privileges, and encryption to protect sensitive data against unauthorized access."
    },
    {
      "topic": "Sequential vs. Direct Access",
      "question": "Why are relational databases vastly superior to traditional sequential tape storage for fast transaction retrieval?",
      "answer": "Sequential tape storage requires reading every preceding record, whereas direct-access databases locate records instantly.",
      "rationale": "Sequential files must be searched linearly from the beginning, whereas direct-access database indexing allows instantaneous record retrieval."
    },
    {
      "topic": "Operational Databases vs. Data Warehouses",
      "question": "Why is it considered poor practice to run complex, heavy business intelligence data mining queries directly against an active operational TPS database?",
      "answer": "Because it will lock database tables and severely degrade the performance of real-time operational transactions.",
      "rationale": "Heavy analytical queries consume intense CPU and I/O resources, which can freeze operational transaction processing; hence data warehouses are used instead."
    }
  ]
};
