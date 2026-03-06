/**
 * Centralized Portfolio Data File
 * All student information is here. Modify this file to update the portfolio.
 * @author Ahmed Ratib Alj
 */

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    subtitle: string;
    email: string;
    phone?: string;
    location: string;
    avatar: string;
    bio: string;
  };
  stats?: {
    label: string;
    value: string | number;
  }[];
  skills: {
    technical: {
      category: string;
      icon: string;
      skills: string[];
    }[];
    soft?: {
      name: string;
      description: string;
      icon: string;
    }[];
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    institutionUrl?: string;
    startYear: number;
    endYear?: number;
    description?: string;
  }[];
  experience?: {
    title: string;
    company: string;
    companyUrl?: string;
    type: 'internship' | 'job' | 'freelance' | 'volunteer';
    startDate: string;
    endDate?: string;
    isCurrent?: boolean;
    description?: string;
  }[];
  publications?: {
    title: string;
    authors: string[];
    journal?: string;
    year: number;
    doi?: string;
    url?: string;
    role: 'first' | 'co';
    citations?: number;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    issuerUrl?: string;
    date: string;
    skills?: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
    image?: string;
    featured?: boolean;
  }[];
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
  contact: {
    formEmail: string;
  };
  academicProfiles?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    firstName: 'Ahmed',
    lastName: 'Alj',
    title: 'First-Year Computer Science Student',
    subtitle: 'Web Developer & Software Enthusiast',
    email: 'a.alj@esisa.ac.ma',
    phone: '+212 6XX XXX XXX', // Add if wanted
    location: 'Fez, Morocco',
    avatar: '/ahmed.jpg',
    bio: 'I am an 18-year-old first-year computer science student at ESISA Fes with a passion for building useful software and friendly web experiences. I discovered my interest in informatique by watching friends code and build web applications. My studies provide strong fundamentals while personal projects help me explore real-world development. I am an active member of charity initiatives and sports clubs at ESISA, which taught me teamwork, communication, and project organization.',
  },
  stats: [
    { label: 'Projects Completed', value: 3 },
    { label: 'Languages & Tools', value: '8+' },
    { label: 'Year of Study', value: '1st' },
    { label: 'Open to Internships', value: 'Yes' },
  ],
  skills: {
    technical: [
      {
        category: 'Frontend',
        icon: 'FileCode',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI Design'],
      },
      {
        category: 'Backend Basics',
        icon: 'Database',
        skills: ['Node.js Fundamentals', 'CRUD Operations', 'Authentication'],
      },
      {
        category: 'Tools & Platforms',
        icon: 'Wrench',
        skills: ['Git', 'GitHub', 'VS Code', 'Astro', 'Vercel'],
      },
      {
        category: 'Web Frameworks',
        icon: 'Layers',
        skills: ['Astro', 'HTML/CSS/JS', 'Responsive Web Dev'],
      },
    ],
    soft: [
      {
        name: 'Teamwork',
        description: 'Collaborative problem-solving through charity and sports initiatives',
        icon: 'Users',
      },
      {
        name: 'Communication',
        description: 'Clear technical writing and presentation skills',
        icon: 'MessageSquare',
      },
      {
        name: 'Project Organization',
        description: 'Planning and executing multi-step projects efficiently',
        icon: 'CheckSquare',
      },
      {
        name: 'Problem Solving',
        description: 'Logical thinking and debugging mindset',
        icon: 'Lightbulb',
      },
    ],
  },
  education: [
    {
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      institution: 'ESISA Fes',
      institutionUrl: 'https://esisa.ac.ma',
      startYear: 2024,
      description: 'First-year student pursuing a degree in Computer Science with focus on software development and modern web technologies.',
    },
  ],
  experience: [
    {
      title: 'Student Developer',
      company: 'ESISA Fes',
      type: 'volunteer',
      startDate: 'Sep 2024',
      isCurrent: true,
      description: 'Active member of charity initiatives and sports clubs. Collaborated on projects involving CRUD operations, authentication, and responsive UI design.',
    },
  ],
  projects: [
    {
      title: 'Patient Management Web App',
      description: 'A full-stack web application for managing patient records with CRUD operations, user authentication, and responsive design. Demonstrates understanding of database interactions, security basics, and modern UI principles.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Authentication', 'Responsive Design'],
      featured: true,
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and built this professional portfolio with Astro and deployed on Vercel. Features dynamic content loading, analytics integration, and modern dark theme design with glassmorphism effects.',
      technologies: ['Astro', 'TypeScript', 'CSS', 'Responsive Design', 'Vercel Analytics'],
    },
    {
      title: 'Learning Projects',
      description: 'Various small projects built while learning web development fundamentals including forms, DOM manipulation, API integration, and layout techniques.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    },
  ],
  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/aalj-png',
      icon: 'Github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/ahmed-alj',
      icon: 'Linkedin',
    },
    {
      platform: 'Email',
      url: 'mailto:a.alj@esisa.ac.ma',
      icon: 'Mail',
    },
  ],
  contact: {
    formEmail: 'a.alj@esisa.ac.ma',
  },
};

/**
 * Generate navigation items based on available sections
 */
export function getAvailableNavItems(data: PortfolioData) {
  const items = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  if (data.experience && data.experience.length > 0) {
    items.push({ label: 'Experience', href: '#experience' });
  }

  if (data.publications && data.publications.length > 0) {
    items.push({ label: 'Publications', href: '#publications' });
  }

  if (data.certifications && data.certifications.length > 0) {
    items.push({ label: 'Certifications', href: '#certifications' });
  }

  items.push({ label: 'Projects', href: '#projects' });
  items.push({ label: 'Contact', href: '#contact' });

  return items;
}
