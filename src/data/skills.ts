import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Effective Communication",
    items: [
      {
        title: "Email & Business Writing",
        level: SkillLevel.Expert,
        icon: "/images/email-writing.png",
      },
      {
        title: "Presentation Skills",
        level: SkillLevel.Expert,
        icon: "/images/presentation.png",
      },
      {
        title: "Conflict Resolution",
        level: SkillLevel.Intermediate,
        icon: "/images/conflict-resolution.png",
      },
    ],
  },
  {
    title: "Project Planning & Management",
    items: [
      {
        title: "Microsoft Excel",
        level: SkillLevel.Expert,
        icon: "/images/excel.png",
      },
      {
        title: "Trello / Asana",
        level: SkillLevel.Expert,
        icon: "/images/project-management.png",
      },
      {
        title: "Google Workspace",
        level: SkillLevel.Expert,
        icon: "/images/google-workspace.png",
      },
    ],
  },
  {
    title: "Personal Support & Empathy",
    items: [
      {
        title: "Emotional Intelligence",
        level: SkillLevel.Expert,
        icon: "/images/emotional-intelligence.jpeg",
      },
      {
        title: "Confidentiality Handling",
        level: SkillLevel.Expert,
        icon: "/images/confidentiality.png",
      },
      {
        title: "Client Relationship Management",
        level: SkillLevel.Intermediate,
        icon: "/images/client-support.png",
      },
    ],
  },
  {
    title: "Punctuality & Reliability",
    items: [
      {
        title: "Time Management",
        level: SkillLevel.Expert,
        icon: "/images/time-management.png",
      },
      {
        title: "Task Prioritization",
        level: SkillLevel.Expert,
        icon: "/images/prioritization.png",
      },
    ],
  },
  {
    title: "Scheduling & Organization",
    items: [
      {
        title: "Calendar Management",
        level: SkillLevel.Expert,
        icon: "/images/calendar-management.png",
      },
      {
        title: "Meeting Coordination",
        level: SkillLevel.Expert,
        icon: "/images/meeting.png",
      },
      {
        title: "Travel Planning",
        level: SkillLevel.Intermediate,
        icon: "/images/travel.png",
      },
    ],
  },
  {
    title: "Digital Tools & Platforms",
    items: [
      {
        title: "Microsoft Office Suite",
        level: SkillLevel.Expert,
        icon: "/images/microsoft-office.png",
      },
      {
        title: "Slack / Zoom",
        level: SkillLevel.Intermediate,
        icon: "/images/video-conferencing.png",
      },
      {
        title: "Dropbox / Google Drive",
        level: SkillLevel.Expert,
        icon: "/images/cloud-storage.png",
      },
    ],
  },
  {
    title: "Additional Technical Skills",
    items: [
      {
        title: "CRM Systems (e.g., HubSpot)",
        level: SkillLevel.Intermediate,
        icon: "/images/crm.png",
      },
      {
        title: "Basic HTML (for content updates)",
        level: SkillLevel.Beginner,
        icon: "/images/html.png",
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Team Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Thinking",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
