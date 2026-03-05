/**
 * Data configuration for Ahmed Ratib Alj's Portfolio
 * This is the SINGLE SOURCE OF TRUTH for all portfolio content.
 * Modify this file to update the entire portfolio.
 * Sections without data are automatically hidden from the site.
 */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  avatar?: string;
  availabilityStatus: string;
}

export interface Skill {
  name: string;
  level?: number; // 1-5
}

export interface SkillCategory {
  category: string;
  icon: string; // Lucide icon name
  skills: Skill[];
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  current?: boolean;
  description?: string;
  url?: string;
}

export interface Experience {
  company: string;
  position: string;
  type: 'internship' | 'job' | 'freelance' | 'project';
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  role: 'first-author' | 'co-author';
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured?: boolean;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Stats {
  label: string;
  value: string | number;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stats[];
  technicalSkills: SkillCategory[];
  softSkills?: SoftSkill[];
  education: Education[];
  experience?: Experience[];
  publications?: Publication[];
  certifications?: Certification[];
  projects: Project[];
  socialLinks: SocialLink[];
}

// ==================== AHMED RATIB ALJ PORTFOLIO DATA ====================

export const portfolioData: PortfolioData = {
  personal: {
    firstName: 'Ahmed',
    lastName: 'Ratib Alj',
    title: 'Computer Science Student',
    subtitle: 'Building useful software and friendly web experiences',
    description:
      "I'm an 18-year-old first-year computer science student at ESISA Fes. I discovered my passion for informatique watching my friends use computers for coding and immediately knew I wanted to build useful software and friendly web experiences. My studies provide strong fundamentals while my personal projects help me explore real-world development.",
    email: 'a.alj@esisa.ac.ma',
    location: 'Fes, Morocco',
    avatar: '/ahmed-2.jpg',
    availabilityStatus: 'Available for internships and collaborations',
  },

  stats: [
    { label: 'Projects', value: 2 },
    { label: 'Technologies', value: 5 },
    { label: 'Year of Study', value: 1 },
    { label: 'Skills Learning', value: '∞' },
  ],

  technicalSkills: [
    {
      category: 'Frontend',
      icon: 'Code',
      skills: [
        { name: 'HTML5', level: 4 },
        { name: 'CSS3', level: 4 },
        { name: 'JavaScript (ES6+)', level: 3 },
        { name: 'Responsive Design', level: 4 },
      ],
    },
    {
      category: 'Backend',
      icon: 'Database',
      skills: [
        { name: 'Backend Fundamentals', level: 2 },
        { name: 'CRUD Operations', level: 3 },
        { name: 'Authentication Basics', level: 2 },
        { name: 'Database Basics', level: 2 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: 'Wrench',
      skills: [
        { name: 'Git & GitHub', level: 3 },
        { name: 'VS Code', level: 4 },
        { name: 'Web Development Tools', level: 3 },
        { name: 'Problem Solving', level: 3 },
      ],
    },
  ],

  softSkills: [
    {
      name: 'Teamwork',
      description: 'Active member of charity initiatives and sports club',
      icon: 'Users',
    },
    {
      name: 'Communication',
      description: 'Clear expression of ideas and project objectives',
      icon: 'MessageSquare',
    },
    {
      name: 'Project Organization',
      description: 'Structuring ideas into polished, user-focused solutions',
      icon: 'ListChecks',
    },
    {
      name: 'Leadership',
      description: 'Initiative-taking approach to learning and collaboration',
      icon: 'Lightbulb',
    },
  ],

  education: [
    {
      institution: 'ESISA Fes',
      degree: 'Bachelor',
      field: 'Computer Science',
      startYear: 2024,
      current: true,
      description:
        'First-year student exploring fundamentals of computer science and software development. Active in charity initiatives and sports club activities.',
      url: 'https://esisa.ac.ma',
    },
  ],

  // experience: [], // No professional experience yet

  // publications: [], // No academic publications yet

  // certifications: [], // No formal certifications yet

  projects: [
    {
      title: 'Patient Management Web App',
      description:
        'A comprehensive web application demonstrating core development concepts. Features full CRUD operations, user authentication system, and responsive UI design. Built with HTML, CSS, JavaScript, and backend fundamentals.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Backend', 'Responsive Design'],
      featured: true,
      url: '#',
    },
    {
      title: 'Modern Portfolio Website',
      description:
        'Professional portfolio website showcasing projects and skills. Built with modern web technologies focusing on user experience and responsive design.',
      tags: ['Astro', 'Web Design', 'TypeScript', 'CSS'],
      featured: true,
      url: 'https://github.com/aalj-png',
    },
    {
      title: 'Learning & Development',
      description:
        'Continuously working on personal projects to improve skills in HTML, CSS, JavaScript, and backend fundamentals. Always seeking to apply university fundamentals to real-world scenarios.',
      tags: ['JavaScript', 'Web Development', 'Learning'],
      featured: false,
    },
  ],

  socialLinks: [
    {
      name: 'Email',
      url: 'mailto:a.alj@esisa.ac.ma',
      icon: 'Mail',
      label: 'Email me',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aalj-png',
      icon: 'Github',
      label: 'View my code',
    },
    {
      name: 'LinkedIn',
      url: 'https://ma.linkedin.com/in/ahmed-ratib-alj-b39549391',
      icon: 'Linkedin',
      label: 'Connect with me',
    },
  ],
};

/**
 * Generate navigation items dynamically based on available sections
 */
export function generateNavItems(): NavItem[] {
  const items: NavItem[] = [{ label: 'Home', href: '#home', icon: 'Home' }];

  // Add About
  items.push({ label: 'About', href: '#about', icon: 'User' });

  // Add Skills
  if (portfolioData.technicalSkills.length > 0) {
    items.push({ label: 'Skills', href: '#skills', icon: 'Code' });
  }

  // Add Education
  if (portfolioData.education.length > 0) {
    items.push({ label: 'Education', href: '#education', icon: 'BookOpen' });
  }

  // Add Experience
  if (portfolioData.experience && portfolioData.experience.length > 0) {
    items.push({ label: 'Experience', href: '#experience', icon: 'Briefcase' });
  }

  // Add Publications
  if (portfolioData.publications && portfolioData.publications.length > 0) {
    items.push({
      label: 'Publications',
      href: '#publications',
      icon: 'FileText',
    });
  }

  // Add Certifications
  if (portfolioData.certifications && portfolioData.certifications.length > 0) {
    items.push({
      label: 'Certifications',
      href: '#certifications',
      icon: 'Award',
    });
  }

  // Add Projects
  if (portfolioData.projects.length > 0) {
    items.push({ label: 'Projects', href: '#projects', icon: 'Folder' });
  }

  // Add Contact
  items.push({ label: 'Contact', href: '#contact', icon: 'Mail' });

  return items;
}

export const navItems = generateNavItems();
