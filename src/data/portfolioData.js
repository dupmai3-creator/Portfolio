export const personalInfo = {
  name: "Mai Jock Dup",
  title: "Full Stack Developer",
  email: "dupmai3@email.com",
  phone: "+256 (755) 123-456",
  location: "Juba, South Sudan",
  linkedin: "https://www.linkedin.com/in/mai-dup-2661a8383/",
  facebook: "https://www.facebook.com/",
  github: "https://github.com/dupmai3-creator/Billiny-Foundation",
  portfolio: "https://yourportfolio.com",
  bio: "Passionate developer with 3+ years of experience building modern web applications. I love creating efficient, scalable solutions and learning new technologies.",
  avatar: "https://cdn.mos.cms.futurecdn.net/aRqrKa2LgngSTgHSysC5BR.jpg"
};

export const skills = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 89, category: "Backend"},
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "AWS", level: 60, category: "Cloud" },
  { name: "Java", level:78, category: "DevOps"}
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: "https://media.istockphoto.com/id/937279484/photo/php-code-on-laptop-and-white-mug-in-sunlight.jpg?s=1024x1024&w=is&k=20&c=McvFNRong7NA2RQ8PXrUdLMgm8zJgpntLGtK2KVqalw=",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.netlify.app",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React-based task management application with drag-and-drop functionality and real-time updates.",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&w=400&h=300&fit=crop",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.netlify.app",
    category: "Frontend",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts and data visualization.",
    technologies: ["React", "Chart.js", "Weather API", "CSS3"],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d3d5cb189706457.65afb4fd935aa.png",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-dashboard-demo.netlify.app",
    category: "Frontend",
    featured: false
  },
  {
    id: 4,
    title: "Blog API",
    description: "RESTful API for blog management with authentication, CRUD operations, and comment system.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRAnYMgJCKbNVvLEwS2Hk6QU8c7DjJcs5gg&s",
    github: "https://github.com/yourusername/blog-api",
    demo: null,
    category: "Backend",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with React and modern CSS animations.",
    technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
    image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1696972466/catalog/1711848194805833728/pwognuura7awcg77b5pf.jpg",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.netlify.app",
    category: "Frontend",
    featured: true
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with rooms, file sharing, and emoji support.",
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/10518a228366827.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.herokuapp.com",
    category: "Full Stack",
    featured: false
  }
];

export const experiences = [
  {
    id: 1,
    company: "Billiny's Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    duration: "2023 - Present",
    description: "Lead frontend development for multiple client projects, mentoring junior developers, and implementing modern React architectures.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led a team of 5 developers on a major product redesign",
      "Implemented automated testing reducing bugs by 60%"
    ]
  },
  {
    id: 2,
    company: "StartupCorp",
    position: "Full Stack Developer",
    duration: "2023 - 2025",
    description: "Developed and maintained web applications using React, Node.js, and cloud technologies.",
    achievements: [
      "Built 3 major features from conception to deployment",
      "Reduced API response times by 50%",
      "Integrated third-party APIs and payment systems"
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Cavendish University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2023 - 2026",
    description: "Focused on web technologies, algorithms, and software engineering principles."
  }
];
