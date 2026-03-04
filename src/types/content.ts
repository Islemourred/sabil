export interface NavLink {
  key: string;
  href: string;
}

export interface FeatureItem {
  key: string;
  icon: string;
}

export interface ProductItem {
  key: string;
  icon: string;
}

export interface PartnerItem {
  name: string;
  logo?: string;
}

export interface NewsItem {
  key: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
