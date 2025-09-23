import { projectImages } from "./assets";

export const PROJECTS = [
  {
    title: "AI Automation Platform",
    image: projectImages.careerChatbot, // We'll update these images later
    description: {
      summary: "Full-stack AI automation platform for business process optimization.",
      features: [
        "Intelligent workflow automation using machine learning algorithms",
        "Real-time data processing and analytics dashboard",
        "AWS cloud infrastructure with auto-scaling capabilities",
        "Secure API integrations with third-party services",
        "Modern React frontend with responsive design",
        "CI/CD pipeline with automated testing and deployment"
      ]
    },
    url: "https://your-project-url.com", // Update with actual URL
    technologies: {
      main: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      others: ["Docker", "Kubernetes", "TensorFlow"]
    }
  },
  {
    title: "Scalable E-commerce Solution",
    image: projectImages.mernEcommerce,
    description: {
      summary: "End-to-end e-commerce platform with advanced security and scalability.",
      features: [
        "Microservices architecture with Docker containerization",
        "Secure payment processing with multiple gateway integrations",
        "Real-time inventory management and analytics",
        "AWS cloud deployment with load balancing",
        "Advanced security features and data encryption",
        "Automated testing and continuous deployment"
      ]
    },
    url: "https://your-ecommerce-project.com", // Update with actual URL
    technologies: {
      main: ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
      others: ["Redis", "Docker", "Stripe API"]
    }
  },
  {
    title: "DevOps Infrastructure Automation",
    image: projectImages.nextCodeCraft,
    description: {
      summary: "Comprehensive DevOps solution for automated infrastructure management.",
      features: [
        "Infrastructure as Code using Terraform and CloudFormation",
        "Automated CI/CD pipelines with GitLab and Jenkins",
        "Container orchestration with Kubernetes",
        "Monitoring and alerting system integration",
        "Security scanning and compliance automation",
        "Cost optimization and resource management"
      ]
    },
    url: "https://your-devops-project.com", // Update with actual URL
    technologies: {
      main: ["AWS", "Terraform", "Kubernetes", "Docker"],
      others: ["Jenkins", "Prometheus", "Grafana"]
    }
  },
  {
    title: "Machine Learning Analytics Platform",
    image: projectImages.biomechAnalysis,
    description: {
      summary: "AI-powered analytics platform for data-driven decision making.",
      features: [
        "Advanced machine learning models for predictive analytics",
        "Real-time data processing and visualization",
        "Scalable data pipeline architecture",
        "Interactive dashboard with custom charts and metrics",
        "API integration for external data sources",
        "Automated model training and deployment"
      ]
    },
    url: "https://your-ml-project.com", // Update with actual URL
    technologies: {
      main: ["Python", "TensorFlow", "React", "AWS SageMaker"],
      others: ["Pandas", "NumPy", "D3.js"]
    }
  },
  {
    title: "Cloud-Native Web Application",
    image: projectImages.nextBlog,
    description: {
      summary: "Modern web application built with cloud-native principles.",
      features: [
        "Serverless architecture with AWS Lambda functions",
        "GraphQL API with real-time subscriptions",
        "Progressive Web App (PWA) capabilities",
        "Advanced caching strategies and performance optimization",
        "Comprehensive testing suite with automated QA",
        "Multi-environment deployment pipeline"
      ]
    },
    url: "https://your-webapp-project.com", // Update with actual URL
    technologies: {
      main: ["React", "AWS Lambda", "GraphQL", "DynamoDB"],
      others: ["Apollo", "Jest", "Cypress"]
    }
  },
  {
    title: "AI Chat Assistant",
    image: projectImages.mernChat,
    description: {
      summary: "Intelligent chatbot with natural language processing capabilities.",
      features: [
        "Advanced NLP for understanding user queries",
        "Context-aware conversations with memory",
        "Integration with multiple knowledge bases",
        "Real-time response generation",
        "Multi-language support and translation",
        "Analytics dashboard for conversation insights"
      ]
    },
    url: "https://your-chatbot-project.com", // Update with actual URL
    technologies: {
      main: ["Python", "OpenAI", "React", "WebSocket"],
      others: ["NLTK", "spaCy", "Redis"]
    }
  }
];