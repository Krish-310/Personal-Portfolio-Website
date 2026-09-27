// Current roles and results follow the September 2026 résumé.
// Earlier milestones are retained from the original portfolio.
export const experience = [
  {
    id: 'aws', company: 'Amazon Web Services (AWS)', role: 'Software Engineering Intern',
    team: 'Journal Service Control Plane', period: 'Sep–Dec', year: '2026', featured: true,
    summary: 'Building a dynamic rate limiter for a Tier-0 service handling 100M+ queries per second across S3, DynamoDB, Kinesis, and more.',
    highlights: [],
  },
  {
    id: 'atlassian', company: 'Atlassian', role: 'Software Engineering Intern',
    team: '3P Connector Data Ingestion', period: 'May–Aug', year: '2026', featured: true,
    summary: "Built and shipped resource attribution for Rovo AI’s connector platform, making usage across 5M+ resource calls per minute visible by connector.",
    story: {
      title: 'Where the calls were coming from',
      text: 'The new telemetry traced 6M SQS calls every 15 minutes to an abandoned Asana workflow. Its feature flag had been left enabled for more than 14 months. Disabling it eliminated approximately $160 a day in wasted staging spend.',
    },
    highlights: [
      'Implemented the attribution layer in Kotlin across DynamoDB, SQS, Redis, and compute in production.',
      'Designed non-blocking instrumentation using concurrent maps, atomics, and windowed aggregation. Sampled 1 in 128 payloads to estimate size without serializing every call.',
      'Reduced p50 instrumentation latency from 8ms to 1ms after tracing roughly 98% of wall time to a configuration lookup and removing it.',
    ],
  },
  {
    id: 'waterloo-research', company: 'University of Waterloo', role: 'Undergraduate Research Assistant',
    team: 'Prof. Sujaya Maiyya', period: 'Jan–Apr', year: '2026',
    summary: 'Researched oblivious vector search for secure similarity queries.',
    highlights: [
      'Built a C++ oblivious HNSW vector-search prototype to reduce approximate-nearest-neighbour access-pattern leakage.',
      'Benchmarked oblivious search in trusted execution environments, measuring latency, memory overhead, and graph-traversal leakage across queries.',
    ],
  },
  {
    id: 'super', company: 'Super.com', role: 'Software Engineering Intern',
    team: 'Flights Backend', period: 'May–Aug', year: '2025', featured: true,
    summary: 'Built Go backend services for booking, payment, and refund workflows, achieving sub-50ms p90 service latency.',
    highlights: [
      'Designed an asynchronous webhook-based refund dispute pipeline with idempotency guarantees for retries, duplicate events, and partial failures, reducing resolution turnaround time by 30%.',
      'Resolved 5+ critical production incidents and introduced debugging workflows that reduced mean time to resolution by 50%.',
    ],
  },
  {
    id: 'otto', company: 'OTTO by Rockwell Automation', role: 'Software Developer Intern',
    team: 'Fleet Core', period: 'Jan–Apr', year: '2025', featured: true,
    summary: 'Developed multi-fleet interoperability in C++, Python, and ROS2 to improve coordination across 500+ robots.',
    story: {
      title: 'Replacing the polling loop',
      text: 'The robot-tracking path polled for updates. I replaced that polling with an event-driven ROS2 topic, reducing CPU usage by 20%.',
    },
    highlights: [
      'Migrated networking from CycloneDDS to Zenoh, reducing latency by 25% and increasing throughput by 30%, validated through benchmarks and a production-ready proof of concept.',
    ],
  },
  {
    id: 'vector-research', company: 'University of Waterloo & Vector Institute', role: 'Undergraduate Research Assistant',
    team: 'Prof. Xi He', period: 'Sep–Dec', year: '2024',
    summary: 'Implemented and evaluated membership inference attacks on diffusion-generated synthetic tabular datasets using Python.',
    highlights: [],
  },
  {
    id: 'ford', company: 'Ford', role: 'Platform Software Developer Intern',
    team: 'Vision Compute Service', period: 'May–Aug', year: '2024',
    summary: 'Deployed a real-time Vision Compute Service in C++ with OpenVX and OpenCV for embedded hardware.',
    highlights: [
      'Accelerated sensor data processing and optimized multithreaded workloads for high-performance execution.',
      'Integrated Gcov into Jenkins CI pipelines, enabling 80% functional test coverage visibility and unblocking QA workflows.',
      'Debugged critical memory defects with Valgrind, eliminating leaks and stabilizing production firmware.',
    ],
  },
  {
    id: 'watai', company: 'Wat.AI', role: 'Core Design Team Member',
    team: 'Energy Modelling', period: 'Winter', year: '2024',
    summary: 'Explored household energy consumption with Python and Jupyter, and built a linear regression model with scikit-learn as part of the Energy Modelling Project.',
    highlights: [],
  },
  {
    id: 'publicis', company: 'Publicis Sapient', role: 'Software Engineering Intern',
    team: 'Backend Development', period: 'Spring', year: '2023',
    summary: 'Built REST APIs with Go and JavaScript for an employee management feature serving 300+ users during my first co-op term.',
    highlights: [
      'Worked on backend microservice architectures and used Docker to streamline development workflows.',
      'Integrated GraphQL APIs with Hasura and maintained code quality with SonarQube, Git, and Bitbucket.',
    ],
  },
  {
    id: 'waterloo-education', company: 'University of Waterloo', role: 'Started Bachelor of Computer Science',
    team: 'Co-op · Artificial Intelligence specialization', period: 'Sep', year: '2022',
    summary: "Moved to Canada to study Computer Science and received the President’s Scholarship of Distinction. Expected graduation: April 2027. GPA: 4.0.",
    highlights: ['Selected coursework: Algorithms, Operating Systems, Concurrency, Distributed Systems, Machine Learning, and Computer Security.'],
  },
  {
    id: 'ib', company: 'Shiv Nadar School, Gurgaon', role: 'Graduated with an IB Diploma',
    period: 'July', year: '2022',
    summary: 'Completed the IB Diploma Programme in India under a merit scholarship.', highlights: [],
  },
  {
    id: 'olevels', company: 'Swiss Cottage Secondary School', role: "Completed Cambridge O Levels",
    period: 'Jan', year: '2020',
    summary: 'Grew up in Singapore and completed my GCE Cambridge O Level examinations before moving to India.', highlights: [],
  },
];
