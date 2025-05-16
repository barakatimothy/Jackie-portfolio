import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Executive Adminstrative Assistant",
    company: "Tobuild LLC",
    startDate: "Jan 2021",
    isCurrentJob: true,
    location: "Agia Paraskevi, Greece",
    description: [
      "Provide high-level administrative and strategic support to senior executives.",
      "Coordinate executive schedules, meetings, and travel arrangements with precision.",
      "Assist in the preparation of reports, presentations, and internal communications.",
      "Ensure confidentiality and smooth flow of information across departments.",
    ],
  },
  {
    designation: "Customer Service Representative",
    company: "Lisa Credits",
    startDate: "Feb 2023",
    isCurrentJob: true,
    location: "New York, United States",
    description: [
      "Managed daily agenda, emails, and calls to ensure the CEO’s time was optimized.",
      "Handled personal and professional tasks with discretion and proactive planning.",
      "Arranged complex domestic and international travel itineraries.",
      "Supported internal and external communications on behalf of the CEO.",
    ],
  },
  {
    designation: "Administrative Assistant",
    company: "Shekinah Gardens",
    startDate: "May 2021",
    endDate: "Jun 2024",
    isCurrentJob: false,
    location: "Kisumu, Kenya",
    description: [
      "Assisted in daily office operations, document management, and filing systems.",
      "Prepared official correspondence and scheduled departmental meetings.",
      "Handled frontline communication and managed reception duties.",
      "Maintained accurate records and supported team with administrative tasks.",
    ],
  },
];

export default experiences;

