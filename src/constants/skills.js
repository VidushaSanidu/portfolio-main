import { Brain, CloudCog, Cpu, FolderGit2, History, MonitorCog, ServerCog, TvMinimal } from "lucide-react";

// Enhanced skills data with proficiency levels and categories
export const SKILLS_DATA = {
  "Frontend Development": {
    icon: TvMinimal,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Next.js/React.js", level: 90, years: 3, projects: 10 },
      { name: "TypeScript", level: 90, years: 3, projects: 10 },
      { name: "Tailwind CSS", level: 90, years: 3, projects: 10 },
      { name: "JavaScript ES6+", level: 85, years: 3, projects: 10 },
      { name: "HTML5/CSS3", level: 95, years: 4, projects: 15 },
    ]
  },
  "Backend Development": {
    icon: MonitorCog,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js/Express.js", level: 90, years: 3, projects: 10 },
      { name: "Nest.js", level: 90, years: 3, projects: 5 },
      { name: "FastAPI", level: 85, years: 1, projects: 3 },
      { name: "Django/Flask", level: 75, years: 1, projects: 1 },
      { name: "REST APIs", level: 95, years: 3, projects: 18 },
    ]
  },
  "AI & Machine Learning": {
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow", level: 75, years: 1, projects: 1 },
      { name: "PyTorch", level: 80, years: 1, projects: 2 },
      { name: "AI Integration", level: 88, years: 1, projects: 2 },
      { name: "Machine Learning", level: 85, years: 2, projects: 2 },
      { name: "AI Automation", level: 90, years: 1, projects: 2 },
    ]
  },
  "Cloud & DevOps": {
    icon: CloudCog,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", level: 88, years: 2, projects: 2 },
      { name: "Docker", level: 92, years: 3, projects: 2 },
      { name: "Kubernetes", level: 80, years: 2, projects: 1 },
      { name: "CI/CD Pipelines", level: 90, years: 4, projects: 3 },
      { name: "Infrastructure as Code", level: 85, years: 3, projects: 1 },
    ]
  },
  "Database & Storage": {
    icon: ServerCog,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "MongoDB", level: 90, years: 4, projects: 5 },
      { name: "PostgreSQL", level: 95, years: 3, projects: 10 },
      { name: "Redis", level: 80, years: 2, projects: 1 },
      { name: "DynamoDB", level: 75, years: 2, projects: 1 },
      { name: "MySQL", level: 90, years: 3, projects: 5 },
    ]
  }
};

export const QUICK_STATS = [
          { label: "Years Experience", value: "3+", icon: History },
          { label: "Projects Built", value: "20+", icon: FolderGit2 },
          { label: "Technologies", value: "20+", icon: Cpu },
          { label: "AI Solutions", value: "5+", icon: Brain},
        ];
