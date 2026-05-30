import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import CSvg from "@/public/icons/C.svg";
import CppSvg from "@/public/icons/C++.svg";
import JavaSvg from "@/public/icons/Java.svg";
import DartSvg from "@/public/icons/Dart.svg";
import TerraformSvg from "@/public/icons/Terraform.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";
import FlutterSvg from "@/public/icons/Flutter.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import FirebaseSvg from "@/public/icons/Firebase.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import SpringSvg from "@/public/icons/Spring.svg";
import FastAPISvg from "@/public/icons/FastAPI.svg";
import KubernetesSvg from "@/public/icons/Kubernetes.svg";
import JiraSvg from "@/public/icons/Jira.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C",
        icon: CSvg,
      },
      {
        name: "C++",
        icon: CppSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "Dart",
        icon: DartSvg,
      },
            {
        name: "Terraform",
        icon: TerraformSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "Spring",
        icon: SpringSvg,
      },
      {
        name: "FastAPI",
        icon: FastAPISvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "Firebase",
        icon: FirebaseSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Kubernetes",
        icon: KubernetesSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Jira",
        icon: JiraSvg,
      }
    ],
  },
];
