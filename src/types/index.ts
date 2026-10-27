export interface MenuItem {
  id: string;
  nameMalayalam: string;
  nameTamil: string;
  englishSubtitle: string;
  descriptionMalayalam: string;
  descriptionEnglish: string;
  image: string;
  price: number | string | null;
  badge?: string;
  category: "tea" | "vada" | "snacks";
}

export interface ShopAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
}

export interface ShopOpeningHours {
  daysMalayalam: string;
  daysEnglish: string;
  timingMalayalam: string;
  timingEnglish: string;
  isConfigured: boolean;
}

export interface ShopSocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface ShopConfig {
  brandNameMalayalam: string;
  brandNameTamil: string;
  tagline: string;
  taglineTranslation: string;
  address: ShopAddress;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  openingHours: ShopOpeningHours;
  socialLinks: ShopSocialLinks;
}

export interface GalleryItem {
  id: number;
  className: string;
  src: string;
  alt: string;
  title: string;
  sub: string;
  width: number;
  height: number;
}
