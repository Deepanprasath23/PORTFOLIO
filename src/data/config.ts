// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to update your personal information, projects,
// social links, and skills.
// ============================================================

export const personal = {
  name: "Deepan Prasath",
  nameFirst: "Deepan",
  nameLast: "Prasath",
  email: "deepanprasath01@gmail.com",
  // Replace with your actual profile URLs
  github: "https://github.com/Deepanprasath23",
  linkedin: "https://www.linkedin.com/in/deepan-prasath-s-812508257/",
  education: "B.Tech in Artificial Intelligence and Data Science",
};

export const about = {
  intro:
    "I'm a graduate in Artificial Intelligence and Data Science with an interest in building practical software applications, exploring intelligent systems, and solving problems through technology.",
  body:
    "My projects and learning interests span backend development, machine learning, large language models, and retrieval-augmented generation. I enjoy experimenting with ideas and turning them into useful applications.",
};

export type ProjectCategory = "AI/ML" | "Backend" | "Web";

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  technologies: string[];
  features: string[];
  github: string | null;
  demo: string | null;
}

export const projects: Project[] = [
  {
    id: "interview-assistant",
    number: "01",
    title: "LLM-Powered Cognitive Interview Assistant",
    description:
      "An AI-powered interview preparation platform that generates interview questions and evaluates answers using large language models.",
    image: "/project_interview.png",
    categories: ["AI/ML", "Web"],
    technologies: [
      "React.js",
      "Flask",
      "Python",
      "Gemini API",
      "PostgreSQL",
      "SQLAlchemy",
      "Web Speech API",
    ],
    features: [
      "Resume-based and role-based interview preparation",
      "AI-generated HR and technical interview questions",
      "Answer evaluation and structured feedback",
      "Feedback covering clarity, accuracy, and communication quality",
      "Voice-based answer input",
    ],
    github: "https://github.com/Deepanprasath23/LLM-POWERED-COGNITIVE-INTERVIERW-ASSISTANT",
    demo: null,
  },
  {
    id: "pdf-rag",
    number: "02",
    title: "PDF Question Answering Assistant Using RAG",
    description:
      "A document-grounded question-answering system that retrieves relevant information from uploaded PDF documents and generates contextual responses.",
    image: "/project_rag.png",
    categories: ["AI/ML", "Backend"],
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Retrieval-Augmented Generation",
      "Flask / FastAPI",
      "REST APIs",
      "GitHub Actions",
    ],
    features: [
      "PDF document processing",
      "Semantic retrieval using vector embeddings",
      "Context-grounded question answering",
      "REST API integration and testing",
      "CI/CD workflow using GitHub Actions",
    ],
    github: "https://github.com/Deepanprasath23/PDF-Q-A-USING-RAG",
    demo: null,
  },
  {
    id: "football-prediction",
    number: "03",
    title: "Football World Cup Outcome Prediction System",
    description:
      "A machine learning application that predicts football match outcomes using historical match data.",
    image: "/project_football.png",
    categories: ["AI/ML"],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Random Forest",
      "Streamlit",
    ],
    features: [
      "Historical data preprocessing",
      "Feature engineering",
      "Match outcome classification",
      "Model evaluation",
      "Interactive prediction interface",
    ],
    github: null,
    demo: null,
  },
  {
    id: "github-profile-dashboard",
    number: "04",
    title: "GitHub Profile Dashboard",
    description:
      "A React dashboard that turns public GitHub profile and activity data into an interactive view of repositories, languages, contributions, and coding activity.",
    image: "/project_github_viewer.jpg",
    categories: ["Web"],
    technologies: [
      "React 19",
      "Vite",
      "JavaScript",
      "Chart.js",
      "react-chartjs-2",
      "date-fns",
      "react-icons",
      "GitHub REST API",
    ],
    features: [
      "Search public GitHub profiles by username or profile URL",
      "Profile summaries with bio, links, and follower, following, and repository stats",
      "Repository star and fork metrics, search, and language filtering",
      "Profile score with badge levels and AI-style coding insights",
      "Language distribution chart and contribution activity heatmap",
      "Recent activity timeline for pushes, stars, forks, pull requests, issues, and releases",
      "Save favorite profiles locally with loading, validation, and rate-limit error states",
    ],
    github: "https://github.com/Deepanprasath23/GITHUB-PROFILE-VIEWER",
    demo: "https://gitprpv.netlify.app/",
  },
];

export const skills = [
  {
    group: "Programming & Backend",
    items: ["Python", "Flask", "FastAPI", "REST APIs", "SQLAlchemy"],
  },
  {
    group: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Scikit-learn",
      "LangChain",
      "LLMs",
      "Retrieval-Augmented Generation",
      "ChromaDB",
      "Computer Vision",
    ],
  },
  {
    group: "Databases & Tools",
    items: [
      "PostgreSQL",
      "MySQL",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Streamlit",
    ],
  },
];
