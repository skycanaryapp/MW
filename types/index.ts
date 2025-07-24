export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Badge {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}