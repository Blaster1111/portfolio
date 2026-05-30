import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Gitlyser",
    href: "/projects",
    tags: [],
    image: {
      LIGHT: "/images/projects/gitlyser.webp",
      DARK: "/images/projects/gitlyser.webp",
    },
  },
  {
    index: 1,
    title: "Sync Write",
    href: "/projects",
    tags: [
    ],
    image: {
      LIGHT: "/images/projects/synwrite.webp",
      DARK: "/images/projects/syncwrite.webp",
    },
  },
  {
    index: 2,
    title: "Portfolio Visualizer",
    href: "/projects",
    tags: [],
    image: {
      LIGHT: "/images/projects/portfolioVisualizer_3.webp",
      DARK: "/images/projects/portfolioVisualizer_3.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Gitlyser",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/gitlyser.webp",
      "/images/projects/gitlyser-1.webp",
    ],
    description:
      "Analyse GitHub repositories and automatically generate comprehensive READMEs. This tool helps developers quickly document their projects by extracting repository information and creating professional documentation. Built with Next.js, Tailwind CSS, and integrated with GitHub API.",
    sourceCodeHref: "https://github.com/Blaster1111/github_analyser",
    liveWebsiteHref: "https://gitlyser.netlify.app",
  },
  {
    name: "Portfolio Visualizer",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/portfolioVisualizer_5.webp",
      "/images/projects/portfolioVisualizer_1.webp",
      "/images/projects/portfolioVisualizer_2.webp",
      "/images/projects/portfolioVisualizer_4.webp",
      "/images/projects/portfolioVisualizer_3.webp",
    ],
    description:
      "Analyse and visualize your investment portfolio with comprehensive metrics and performance tracking. View holdings across different asset classes, track allocation percentages, and monitor portfolio performance. Built with React.js, TypeScript, and Tailwind CSS with interactive charts and real-time analytics.",
    sourceCodeHref: "https://github.com/Blaster1111/PortfolioVisualizer",
    liveWebsiteHref: "https://portfolio-visualizer-six.vercel.app/",
  },
  {
    name: "Sync Write",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/syncwrite-1.webp",
      "/images/projects/syncwrite.webp",
    ],
    description:
      "A collaborative text sharing platform enabling multiple users to connect in a shared room and edit content together in real-time. Perfect for collaborative writing, note-taking, and team brainstorming. Built with React.js, TypeScript, WebSockets, and Tailwind CSS.",
    sourceCodeHref: "https://github.com/Blaster1111/SyncWrite",
    liveWebsiteHref: "https://syncwritee.netlify.app/",
  },
  {
    name: "Financial Risk Profiling",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/riskProfiling_1.webp",
      "/images/projects/riskProfiling_2.webp",
      "/images/projects/riskProfiling_3.webp",
    ],
    description:
      "A comprehensive financial risk profiling tool that assesses your investment risk tolerance through an intelligent questionnaire. It classifies you into appropriate risk buckets and provides personalized asset allocation recommendations using advanced algorithms to maximize returns based on your risk category. Built with modern tech stack for seamless financial analysis.",
    sourceCodeHref: "https://github.com/Blaster1111/RiskProfiling",
  },
  {
    name: "Blog Website",
    favicon: "/images/projects/logos/blog.ico",
    imageUrl: [
      "/images/projects/blog.webp",
    ],
    description:
      "A simple yet elegant blog platform enabling users to connect, share ideas, and engage through compelling articles. Features user authentication, article creation, commenting system, and community engagement. Built with Next.js for frontend and Node.js backend for optimal performance.",
    sourceCodeHref: "https://github.com/Blaster1111/BlogNextNode",
    liveWebsiteHref: "https://blog-next-node.vercel.app/login",
  },
];
