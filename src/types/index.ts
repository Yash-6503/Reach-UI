export interface Product {
  id: string;
  name: string;
  description: string;
  idealFor: string[];
  features: string[];
  image: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  message: string;
  avatar: string;
}
