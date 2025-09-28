import { projectImages } from "./assets";

export const PROJECTS = [
  {
    title: "BidDos | NFC-based business profile sharing",
    image: projectImages.bisdos, // We'll update these images later
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
    url: "https://www.bisdos.com", // Update with actual URL
    technologies: {
      main: ["Next.js", "Express.js", "AWS", "MongoDB"],
      others: ["Docker", "S3", "Github Actions"]
    }
  },
  {
    title: "IT-Center Web Application | University of Peradeniya",
    image: projectImages.itcenter,
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
    url: "https://ceit.pdn.ac.lk", // Update with actual URL
    technologies: {
      main: ["Next.js", "Nest.js","TypeScript", "MySQL"],
      others: ["Shadcn", "Docker", "GitHub Actions"]
    }
  },
  {
    title: "Sri Lankan Vehicle category Detection System",
    image: projectImages.vehicledetection,
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
    url: "#", // Update with actual URL
    technologies: {
      main: ["Python", "YoLoV8","Roboflow", "OpenCV"],
      others: ["Flask", "Docker"]
    }
  },

];