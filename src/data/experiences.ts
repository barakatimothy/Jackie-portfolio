import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Executive Support Specialist",
    company: "Summit Holdings",
    startDate: "Jul 2024",
    isCurrentJob: true,
    location: "Nairobi, Kenya",
    description: [
      "Provide high-level administrative and strategic support to senior executives.",
      "Coordinate executive schedules, meetings, and travel arrangements with precision.",
      "Assist in the preparation of reports, presentations, and internal communications.",
      "Ensure confidentiality and smooth flow of information across departments.",
    ],
  },
  {
    designation: "Personal Assistant to CEO",
    company: "Bluewave Africa",
    startDate: "Feb 2023",
    endDate: "Jul 2024",
    isCurrentJob: false,
    location: "Nairobi, Kenya",
    description: [
      "Managed daily agenda, emails, and calls to ensure the CEO’s time was optimized.",
      "Handled personal and professional tasks with discretion and proactive planning.",
      "Arranged complex domestic and international travel itineraries.",
      "Supported internal and external communications on behalf of the CEO.",
    ],
  },
  {
    designation: "Administrative Assistant Intern",
    company: "University of Nairobi Administration Office",
    startDate: "May 2021",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Kisumu, Kenya",
    description: [
      "Assisted in daily office operations, document management, and filing systems.",
      "Prepared official correspondence and scheduled departmental meetings.",
      "Handled frontline communication and managed reception duties.",
      "Maintained accurate records and supported team with administrative tasks.",
    ],
  },
  {
    designation: "Office Support Intern",
    company: "ABC Training Solutions",
    startDate: "Jul 2021",
    endDate: "Nov 2021",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Supported trainers and managers with calendar coordination and logistics.",
      "Created and updated documentation, manuals, and training reports.",
      "Managed data entry and ensured timely delivery of administrative support.",
      "Demonstrated reliability in handling sensitive information and client queries.",
    ],
  },
];

export default experiences;

