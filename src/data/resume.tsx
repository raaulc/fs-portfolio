import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Rahul Rathod",
  initials: "RR",
  url: "mailto:raaulc@outlook.com",
  location: "Leeds, UK",
  locationLink: "https://www.google.com/maps/place/Leeds,+UK",
  description:
    "Full-Stack Engineer | 14+ Years Building End-to-End Systems | Java | Spring Boot | React | Mobile | Kafka | Redis | AWS | Customer Platforms | Sports Betting & Gaming",
    summary: "Full-Stack Engineer with 14+ years of experience delivering end-to-end solutions across backend, frontend, and mobile platforms. Strong backend focus with expertise in Java, Spring Boot, Kafka, and distributed systems, while capable of building responsive web interfaces and mobile applications. Proven track record of owning complete services from database design to UI implementation, collaborating with cross-functional teams to deliver business-critical systems that handle millions of transactions.",
    avatarUrl: "/favicons/profile-pic.jpeg",
  skills: [
    "Java 8+",
    "Spring Boot",
    "Micronaut",
    "React",
    "TypeScript",
    "React Native",
    "Apache Kafka",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Grafana",
    "Microservices",
    "RESTful APIs",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "Event-Driven Architecture",
    "Distributed Systems",
    "System Design",
    "Performance Optimization",
    "Security",
    "Observability",
    "CI/CD",
    "Unit Testing",
    "Integration Testing",
    "Git",
    "JIRA",
    "Agile/Scrum"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "raaulc@outlook.com",
    tel: "+44-7424399000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raaulc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raaulc/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raaulc@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
      downloadCV: {
        name: "Download CV",
    url: "https://drive.google.com/file/d/1U6hxDNF1U_Iq40Vo8k-2kKEPlmSI-rJM/view?usp=sharing",
        icon: Icons.files,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sky Betting & Gaming",
      href: "https://www.skybettingandgaming.com",
      badges: [],
      location: "Leeds, UK",
      title: "Full-Stack Engineer - Customer Platform",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "Leading full-stack development of customer-facing platforms handling 10M+ daily transactions. Built end-to-end solutions including secure authentication APIs, React-based admin dashboards, and mobile-responsive web interfaces. Implemented real-time betting interfaces using WebSocket connections and Kafka event streaming. Collaborated with Product, Design, QA, and DevOps teams to deliver high-availability services with 99.9% uptime. Established comprehensive monitoring with Grafana and incident response procedures.",
    },
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full-Stack Engineer - Financial Services",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Developed complete financial services platform from backend APIs to React-based trading interfaces. Built secure payment processing systems with Java/Spring Boot backend and TypeScript/React frontend. Implemented real-time trading dashboard with WebSocket connections and Kafka event streaming. Created mobile app using React Native for iOS/Android. Deployed full stack on AWS with Kubernetes and established CI/CD pipelines for both backend and frontend services.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Full-Stack Engineer - Platform Services",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built end-to-end platform services for Shopify's ecosystem. Developed RESTful APIs with Java/Spring Boot backend and React-based admin interfaces. Implemented microservices architecture with TypeScript frontend components. Created responsive web applications for merchant dashboard and payment processing interfaces. Collaborated with cross-functional teams to deliver scalable solutions for 2M+ merchants. Established monitoring and alerting systems for both backend and frontend services.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Full-Stack Engineer - Cloud Gaming",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed complete cloud gaming platform including backend services and React-based admin dashboard. Built user authentication APIs with Java/Spring Boot and created responsive web interfaces for subscription management. Implemented real-time game streaming dashboard with WebSocket connections. Collaborated with Product and DevOps teams to ensure high availability and low latency for gaming services across web and mobile platforms.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Full-Stack Engineer - Security Platform",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Built complete security orchestration platform with backend services and iOS mobile app. Developed APIs for user management and security incident processing using Java/Spring Boot. Created React-based security dashboard for real-time incident monitoring. Implemented mobile app using Swift for iOS with real-time event processing. Collaborated with security teams to ensure compliance and data protection across all platforms.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Full-Stack Engineer - Mobility Services",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Developed complete mobility platform including backend services and mobile-responsive web interfaces. Built user registration APIs with Ruby on Rails backend and React frontend components. Implemented real-time vehicle tracking dashboard with WebSocket connections. Created mobile-responsive web app for customer support and account management. Collaborated with mobile and frontend teams to deliver seamless user experiences across web and mobile platforms.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Full-Stack Engineer - Financial Services",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Built secure financial services platform with Ruby on Rails backend and responsive web frontend. Implemented authentication and authorization systems with modern web interfaces. Developed financial data aggregation APIs and created React-based portfolio management dashboard. Ensured compliance with financial regulations and data security standards across both backend and frontend layers.",
    },
  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in/",
      degree: "Bachelor of Engineering: Electronics and Communication",
      logoUrl: "",
      start: "05/2005",
      end: "05/2009",
      location: "Gujarat, India"
    }
  ],
  showProjects: false, // Set to true to show all projects, false to show only coming soon
  comingSoonProjects: [
    {
      title: "Coming Soon - More Full-Stack Projects",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Working on additional full-stack engineering projects showcasing end-to-end system development, from backend APIs to responsive frontend interfaces. More projects will be added soon featuring Java/Spring Boot backends, React/TypeScript frontends, and mobile applications with real-world business impact.",
      technologies: [
        "Java 8+",
        "Spring Boot",
        "React",
        "TypeScript",
        "Microservices",
        "Cloud Native",
        "System Design",
        "Distributed Systems"
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "End-to-end system development",
        "Backend APIs with frontend interfaces",
        "Mobile-responsive web applications",
        "Real-world business impact",
        "Cross-functional team collaboration"
      ],
      image: "",
      video: "",
    }
  ],
  actualProjects: [
    {
      title: "Customer Authentication & Authorization Platform",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Designed and implemented a comprehensive customer authentication system handling 1M+ daily logins. Built secure JWT-based authentication backend with Java/Spring Boot and created React-based admin dashboard. Implemented OAuth2 integration with multiple providers and role-based access control. Developed mobile-responsive web interfaces for user management. Achieved 99.9% uptime with comprehensive monitoring and incident response procedures.",
      technologies: [
        "Java 8+",
        "Spring Boot",
        "Spring Security",
        "React",
        "TypeScript",
        "Redis",
        "PostgreSQL",
        "JWT",
        "OAuth2",
        "Docker",
        "Kubernetes",
        "Grafana"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Secure JWT-based authentication with refresh tokens",
        "React-based admin dashboard and user management",
        "OAuth2 integration with multiple providers",
        "Mobile-responsive web interfaces",
        "Redis-based session management and caching",
        "Comprehensive logging and observability"
      ],
      image: "",
      video: "",
    },
    {
      title: "Payment Processing Microservice",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a high-performance payment processing system handling 500K+ transactions daily. Implemented secure payment gateway integrations with Java/Spring Boot backend and React-based merchant dashboard. Created real-time transaction monitoring interface with WebSocket connections. Used event-driven architecture with Kafka for real-time transaction processing. Achieved sub-100ms response times with 99.99% accuracy.",
      technologies: [
        "Java 8+",
        "Spring Boot",
        "React",
        "TypeScript",
        "Apache Kafka",
        "Redis",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "Grafana"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Multi-gateway payment processing backend",
        "React-based merchant dashboard",
        "Real-time transaction monitoring interface",
        "Fraud detection and prevention",
        "Event-driven architecture with Kafka",
        "Comprehensive audit logging"
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Personalization Engine",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a real-time customer personalization system processing 10M+ user events daily. Built recommendation engines with Java/Spring Boot backend and React-based personalization dashboard. Implemented A/B testing framework with real-time analytics interface. Created customer segmentation APIs and mobile-responsive preference management interface. Implemented caching strategies with Redis reducing response times by 70%.",
      technologies: [
        "Java 8+",
        "Spring Boot",
        "React",
        "TypeScript",
        "Apache Kafka",
        "Redis",
        "Cassandra",
        "AWS",
        "Docker",
        "Kubernetes",
        "Grafana"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Real-time recommendation engine backend",
        "React-based personalization dashboard",
        "A/B testing framework with analytics",
        "Customer segmentation APIs",
        "Mobile-responsive preference management",
        "Performance optimization with caching"
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Support CRM Integration",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built comprehensive CRM integration platform connecting customer support systems with core business platforms. Implemented real-time customer data synchronization APIs with Java/Spring Boot backend and React-based support dashboard. Created intelligent ticket routing interface and support workflow automation. Developed mobile-responsive web app for customer support agents. Achieved 50% reduction in support response times through intelligent routing and automation.",
      technologies: [
        "Java 8+",
        "Spring Boot",
        "React",
        "TypeScript",
        "Apache Kafka",
        "Redis",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
        "Docker",
        "Kubernetes"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Real-time customer data sync backend",
        "React-based support dashboard",
        "Intelligent ticket routing interface",
        "Support workflow automation",
        "Mobile-responsive agent interface",
        "Performance monitoring and alerting"
      ],
      image: "",
      video: "",
    }
  ],
  get projects() {
    return this.showProjects ? this.actualProjects : this.comingSoonProjects;
  },
  blogs: [
    {
      title: "Building High-Performance APIs with Spring Boot",
      href: "https://medium.com/@raaulc/high-performance-spring-boot-apis",
      date: "2024-06-01",
      summary: "A comprehensive guide to optimizing Spring Boot applications for high-concurrency scenarios, including caching strategies and database optimization."
    },
    {
      title: "Event-Driven Architecture with Apache Kafka",
      href: "https://medium.com/@raaulc/event-driven-kafka-architecture",
      date: "2024-05-15",
      summary: "How to design and implement scalable event-driven systems using Apache Kafka for real-time data processing and microservices communication."
    },
    {
      title: "Microservices Testing Strategies",
      href: "https://medium.com/@raaulc/microservices-testing-strategies",
      date: "2024-04-20",
      summary: "Best practices for testing microservices including unit tests, integration tests, and contract testing with Pact."
    },
    {
      title: "Redis Caching Patterns for Backend Services",
      href: "https://medium.com/@raaulc/redis-caching-patterns",
      date: "2024-03-30",
      summary: "Advanced Redis caching strategies to improve API performance and reduce database load in distributed systems."
    },
    {
      title: "System Design for High-Scale Backend Services",
      href: "https://medium.com/@raaulc/system-design-backend-services",
      date: "2024-08-20",
      summary: "Comprehensive guide to designing scalable backend systems with practical patterns for high-concurrency applications."
    }
  ],
  likesBuilding: "I like building end-to-end systems that scale to millions of users, with strong backend foundations and responsive frontend interfaces.",
  contactDetails: {
    email: "raaulc@outlook.com",
    tel: "+44-7424939000"
  },
  youtube: [
    {
      title: "Microservices Architecture",
      description: "Building Scalable Backend Systems",
      thumbnail: "/placeholder-product.jpg",
      url: "https://www.youtube.com/watch?v=0Mzft2Kcev0",
      date: "2024-01-01"
    }
  ],
} as const;
