export interface Program {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  duration: string;
  level: string;
  imageUrl: string;
  syllabus: string[];
  certification: string;
  salaryExpectation: string;
  targetProfile: string;
  colorTheme: string;
  accentGradient: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  description: string;
  longBio: string;
  imageUrl: string;
  linkedinUrl: string;
  specialty: string[];
}

export interface PathFinderResult {
  programId: string;
  matchScore: number;
  reason: string;
}

export interface AdmissionApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  currentProfile: string;
  motivation: string;
  status: 'pending' | 'accepted' | 'reviewing';
  createdAt: string;
}
