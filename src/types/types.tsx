export type AppContextType = {
  selectedPlan: Plan | undefined;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan | undefined>>;
  isContactFormOpen: boolean;
  setIsContactFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToTop: () => void;
};

export type Plan = {
  id: number;
  title: string;
  perks: string[];
  price: number;
  img: string;
  best: boolean;
};

export type FormData = {
  fullName: string;
  email: string;
  location: string;
  plan: string;
  class: string;
  message: string;
};

export type Days =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export type ImperialForm = {
  feet: string;
  inches: string;
  pounds: string;
};

export type MetricForm = {
  centimeters: string;
  kilograms: string;
};

export type Trainer = {
  id: number;
  name: string;
  class: string;
  pic: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  img: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type Class = {
  id: number;
  name: string;
  description: string;
  img: string;
};

export type ScheduleClass = {
  className: string;
  time: string;
  trainer: {
    name: string;
  };
};

export type ClassCardProps = {
  c: Class;
};

export type PlanCardProps = {
  plan: Plan;
};

export type TrainerCardProps = {
  trainer: Trainer;
};
