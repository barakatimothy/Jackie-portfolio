import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Executive Support",
    icons: [
      "/skills/executive-support.png",
      "/skills/calendar-management.png",
      "/skills/strategic-planning.png",
      "/skills/communication.png",
      "/skills/leadership.png",
    ],
    shortDescription:
      "I provide high-level support to executives to optimize their productivity and focus.",
    description:
      "I deliver proactive executive support through calendar and inbox management, strategic planning assistance, travel coordination, and preparation of reports and presentations. My goal is to empower executives to focus on critical decisions while I handle the details that ensure smooth operations.",
  },
  {
    id: 2,
    title: "Personal Assistant",
    icons: [
      "/skills/task-management.png",
      "/skills/scheduling.jpg",
      "/skills/confidentiality.png",
      "/skills/multitasking.png",
      "/skills/communication-skills.png",
    ],
    shortDescription: "I manage daily tasks and logistics to support your personal and professional life.",
    description:
      "As a personal assistant, I handle a wide range of responsibilities including scheduling, travel arrangements, correspondence, and personal errands. With strong attention to detail and discretion, I ensure your time is optimized and your personal and professional responsibilities are well-coordinated.",
  },
  {
    id: 3,
    title: "Administrative Support",
    icons: [
      "/skills/document-management.png",
      "/skills/data-entry.png",
      "/skills/organization.png",
      "/skills/customer-service.png",
      "/skills/reporting.png",
    ],
    shortDescription: "I keep your operations running efficiently with reliable administrative support.",
    description:
      "I provide comprehensive administrative assistance including data entry, document preparation, meeting coordination, and office communication. With a focus on organization and accuracy, I help maintain workflow, support teams, and contribute to the overall efficiency of business operations.",
  },
];

export default services;
