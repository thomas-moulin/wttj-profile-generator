import { CompanyData } from "../types";

export const defaultCompanyData: CompanyData = {
  name: "Ben",
  tagline:
    "We're not your average benefits platform; we're the unordinary force that uplifts people's lives.",
  employeeCount: "201-500 employees",
  sectors: ["Fintech", "B2B", "HR", "SaaS"],
  location: "Farringdon, London, UK",
  logoUrl:
    "https://static.otta.com/uploads/images/company-favicons/foVxLMMuFdn9Ak_1Q___7b4VXIyyCeI4pZ6JPclaKBI.png",
  mission:
    "To create a world where everything operates at its very best, ensuring that every employee receives the support they need to live life to the fullest, both at work and beyond.",
  photos: [
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    "https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg",
    "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg",
  ],
  mapLocation: {
    lat: 51.5203,
    lng: -0.1049,
    address: "Farringdon, London, UK",
  },
  team: {
    departments: ["Engineering", "Executive", "Operations", "Support"],
    totalPeople: 25,
    members: [
      {
        name: "Rhianna",
        title: "Senior Front-end Engineer",
        department: "Engineering",
        photoUrl:
          "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
        videoUrl: "https://player.vimeo.com/video/76979871",
      },
    ],
  },
  insights: {
    topInvestors: true,
    femaleEmployees: "38%",
    employeeGrowth: "106%",
    glassdoorRating: 4.8,
  },
  ourTake: {
    content:
      "The way companies reward their employees today is often a one-size-fits-all model that hasn't evolved to meet the demands of the modern workforce. Ben is revolutionizing this by providing flexible, personalized benefits that truly matter to employees.",
    author: {
      name: "Steph",
      title: "Company Specialist at Welcome to the Jungle",
      photoUrl:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    },
  },
  benefits: {
    location: "UK",
    items: [
      {
        icon: "💰",
        text: "£100 monthly personal Ben Balance for whatever works for you",
      },
      {
        icon: "📚",
        text: "£500 annual Learning & Personal Development Ben Balance",
      },
      { icon: "🏠", text: "£500 work from home set up allowance" },
      { icon: "🌴", text: "28 days of holidays a year + bank holidays" },
      { icon: "🎉", text: "Team activities and company-wide events" },
      { icon: "🧬", text: "DNA Profiling & Epigenetic Testing" },
      { icon: "🏢", text: "Work-from-anywhere scheme" },
      { icon: "👶", text: "Enhanced parental leave" },
    ],
  },
  funding: {
    rounds: [
      {
        date: "Aug 2022",
        amount: "€15.7m",
        type: "Series A",
      },
      {
        date: "Jan 2021",
        amount: "€2m",
        type: "Seed",
      },
    ],
    totalAmount: "€17.7m",
  },
  leadership: {
    leaders: [
      {
        name: "Sebastian Fallert",
        title: "Co-Founder & CEO",
        background: "Previously the MD of Secret Escapes (UK & Germany)",
        photoUrl:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      },
      {
        name: "David Duckworth",
        title: "Co-Founder & COO",
        background:
          "Worked in consulting and venture capitalism, and founded the SaaS marketplace Mixer",
        photoUrl:
          "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      },
    ],
  },
  diversity: {
    stats: {
      ethnicity: {
        Asian: 17,
        "Black or African American": 4,
        "Hispanic or Latino": 4,
        "Multiracial / Multiethnic": 3,
        White: 57,
        Other: 7,
        Unknown: 8,
      },
      gender: {
        Male: 55,
        Female: 42,
        "Non-binary": 3,
      },
      workingLocation: {
        Office: 60,
        Remote: 30,
        Hybrid: 10,
      },
    },
    statement: {
      author: {
        name: "Alicia Riley",
        title: "Head of People",
        photoUrl:
          "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      },
      points: [
        "We are organically growing a brilliantly diverse, inclusive and respectful bunch of people we are extremely proud of.",
        "We provide comprehensive mental health support for all employees",
        "We provide enhanced parental leave policies and salary-sacrifice nursery schemes to help parents & carers",
        "We offer individuals the ability to swap bank holidays for days of celebration that are important to them",
      ],
    },
  },
  jobs: {
    total: 7,
    categories: [
      {
        name: "Engineering",
        positions: [
          {
            title: "Senior Frontend Engineer",
            url: "#",
          },
          {
            title: "Backend Engineer",
            url: "#",
          },
        ],
      },
      {
        name: "Sales",
        positions: [
          {
            title: "Account Executive",
            url: "#",
          },
          {
            title: "Sales Development Representative",
            url: "#",
          },
        ],
      },
    ],
  },
  articles: [
    {
      title: "Ben raises $2.5M seed to fix employee benefits for SMEs",
      url: "#",
    },
    {
      title: "How Ben is revolutionizing employee benefits",
      url: "#",
    },
  ],
  gallery: [
    "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
    "https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
  ],
};
