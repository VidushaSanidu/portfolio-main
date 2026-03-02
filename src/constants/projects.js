import { projectImages } from "./assets";

export const PROJECTS = [
   {
    title: "EchoIC - AI Voice cloning & Analyze Service",
    image: projectImages.echoIc,
    images: [projectImages.echoIc, projectImages.echoIc2],
    description: {
      summary: "AI powered voice cloning and analysis service that allows users to create custom voice models and analyze audio data for insights.",
      features: [
        "AI voice cloning using state-of-the-art models for high-quality voice synthesis",
        "Audio analysis tools for extracting insights and patterns from audio data",
        "Job queue system for processing voice cloning and analysis tasks asynchronously",
        "Secure data handling and privacy controls for user-generated content (Stored in Cloudflare R2)",
        "Scalable architecture to support growing user base and data volumes"
      ]
    },
    url: "https://echo-ic.com", 
    technologies: {
      main: ["Python", "XTTS", "chatGPT model APIs", "Node.js", "Cloudflare R2", "Stripe"],
      others: ["CICD","Docker", "TTS models", "Audio processing libraries"]
    }
  },
  {
    title: "AI Assistant & Study Planner | TPT School - Florida, USA",
    image: projectImages.tptschool1,
    images: [projectImages.tptschool1, projectImages.tptschool2],
    description: {
      summary: "AI powered assistant and study planner web application for TPT School. User can upload transcripts and get personalized study plans and AI assistance.",
      features: [
        "AI powered study planner and assistant using Google gemini models",
        "Full-stack development with Next.js and FastAPI backend",
        "Better UI/UX for fast and intuitive user experience",
        "RAG (Retrieval Augmented Generation) implementation for improved AI responses",
        "Secure user authentication and data management",
      ]
    },
    url: "https://chatbot.tngs.es", 
    technologies: {
      main: ["FastAPI", "LangChain", "Python", "React", "Google Gemini", "Redis"],
      others: ["OCR","Docker", "Chromadb"]
    }
  },
    {
    title: "Logging Pipeline for Scalable Applications",
    image: projectImages.logging,
    images: [projectImages.logging],
    description: {
      summary: "Comprehensive logging pipeline designed to handle high-throughput log data for scalable applications.",
      features: [
        "Centralized log pipeline using AWS Lambda, SQS, and S3",
        "Real-time log processing and storage",
        "Scalable architecture to handle increasing log volumes",
        "Cost-effective storage solutions using S3",
        "Robust error handling and retry mechanisms"
      ]
    },
    url: "#", 
    technologies: {
      main: ["AWS Lambda", "SQS", "S3", "node.js"],
      others: ["cloudwatch", "IAM"]
    }
  },
  {
    title: "Road Tax Me | UK based Vehicle Road Tax Management Platform",
    image: projectImages.vehicletax1,
    images: [projectImages.vehicletax1, projectImages.vehicletax2],
    description: {
      summary: "Web platform for managing and renewing vehicle road tax in the UK.",
      features: [
        "Full-stack development with Next.js and Express.js",
        "Integration with DVLA API for real-time vehicle data",
        "TAX calculation based on vehicle specifications",
        "Automated reminders for tax renewal",
        "Secure payment processing with Stripe integration",
        "Responsive design for optimal user experience across devices",
        "CI/CD pipeline with automated testing and deployment"
      ]
    },
    url: "https://www.roadtaxme.co.uk", 
    technologies: {
      main: ["Next.js", "Express.js", "Stripe", "DVLA API"],
      others: ["Docker", "Github Actions", "PostgreSQL"]
    }
  },

  {
    title: "StudentMoves | UK based Student Accommodation Platform",
    image: projectImages.studentmoves1,
    images: [projectImages.studentmoves1, projectImages.studentmoves2, projectImages.studentmoves3],
    description: {
      summary: "Web platform connecting students with accommodation providers in the UK.",
      features: [
        "Full-stack development with Next.js and Django backend",
        "Advanced multi step forms for property renting and management",
        "Payment gateway integration using stripe for secure transactions",
        "Responsive design for optimal user experience across devices",
        "SEO optimization to enhance online visibility",
        "CI/CD pipeline with automated testing and deployment"
      ]
    },
    url: "https://www.studentmoves.co.uk", 
    technologies: {
      main: ["Next.js", "Django", "Stripe", "PostgreSQL"],
      others: ["Docker", "VPS", "Github Actions"]
    }
  },
  {
    title: "BidDos | NFC-based business profile sharing",
    image: projectImages.bisdos,
    images: [projectImages.bisdos,projectImages.bisdos2, projectImages.bisdos3],
    description: {
      summary: "Full-stack application for seamless business profile sharing SaaS platform.",
      features: [
        "Full-stack development with Next.js and Express.js",
        "Real-time data processing and analytics dashboard",
        "AWS cloud infrastructure with auto-scaling capabilities",
        "Secure API integrations with third-party services",
        "Modern UI/UX design with responsive layouts",
        "CI/CD pipeline with automated testing and deployment"
      ]
    },
    url: "https://www.bisdos.com",
    technologies: {
      main: ["Next.js", "Express.js", "AWS", "MongoDB"],
      others: ["Docker", "S3", "Github Actions"]
    }
  },
  {
    title: "IT-Center Web Application | University of Peradeniya",
    image: projectImages.itcenter,
    images: [projectImages.itcenter],
    description: {
      summary: "Stundent management system, Lab Reservation system and public website for the IT Center UOP.",
      features: [
        "Comprehensive student and course management",
        "Secure payment processing with gateway integrations",
        "Deploy on University servers with robust security",
        "Advanced security features and data encryption",
        "Automated testing and continuous deployment"
      ]
    },
    url: "https://www.ceit.pdn.ac.lk", 
    technologies: {
      main: ["Next.js", "Nest.js","TypeScript", "MySQL"],
      others: ["Shadcn", "Docker", "GitHub Actions"]
    }
  },
  {
    title: "Sri Lankan Vehicle category Detection System",
    image: projectImages.vehicledetection,
    images: [projectImages.vehicledetection],
    description: {
      summary: "Computer vision system for real-time vehicle category detection in Sri Lankan road conditions.",
      features: [
        "Custom model training using YoLoV8",
        "Real-time video processing and analysis",
        "Optimized for low-latency performance",
        "Robust detection in diverse weather conditions",
        "User-friendly interface for monitoring and reporting"
      ]
    },
    url: "#", 
    technologies: {
      main: ["Python", "YoLoV8","Roboflow", "OpenCV"],
      others: ["Flask", "Docker"]
    }
  },

];