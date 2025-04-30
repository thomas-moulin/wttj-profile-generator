export interface CompanyData {
  name: string;
  tagline: string;
  employeeCount: string;
  sectors: string[];
  location: string;
  logoUrl: string;
  mission: string;
  photos: string[];
  mapLocation: {
    lat: number;
    lng: number;
    address: string;
  };
  team: {
    departments: string[];
    totalPeople: number;
    members: TeamMember[];
  };
  insights: {
    topInvestors: boolean;
    femaleEmployees: string;
    employeeGrowth: string;
    glassdoorRating: number;
  };
  ourTake: {
    content: string;
    author: {
      name: string;
      title: string;
      photoUrl: string;
    };
  };
  benefits: {
    location: string;
    items: string[];
  }[];
  funding: {
    rounds: FundingRound[];
    totalAmount: string;
  };
  leadership: {
    leaders: Leader[];
  };
  breakdown: {
    ethnicity: DiversityStats;
    gender: DiversityStats;
    workingLocation: DiversityStats;
  };
  dei: string[];
  jobs: {
    total: number;
    categories: {
      name: string;
      positions: JobPosition[];
    }[];
  };
  articles: {
    title: string;
    url: string;
  }[];
}

export interface TeamMember {
  name: string;
  title: string;
  department: string;
  photoUrl: string;
  videoUrl?: string;
}

export interface NavItem {
  name: string;
  href: string;
  active?: boolean;
}

export interface FundingRound {
  date: string;
  amount: string;
  type: string;
}

export interface Leader {
  name: string;
  title: string;
  background: string;
  photoUrl: string;
}

export interface DiversityStats {
  [key: string]: number;
}

export interface JobPosition {
  title: string;
  url: string;
}
