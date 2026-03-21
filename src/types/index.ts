export type ReserveType = "guerrilla" | "kit" | "paid_partnership" | "honorary" | "school";
export type AdoptionStatus = "available" | "adopted" | "not_available";
export type MaintenanceStatus = "thriving" | "needs_attention" | "dormant";

export interface Reserve {
  id: string;
  slug: string;
  name: string;
  summary: string;
  fullStory?: string;
  locationName: string;
  address: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  installDate: string;
  reserveType: ReserveType;
  adoptionStatus: AdoptionStatus;
  sizeSqft: number;
  nativePlantCount: number;
  maintenanceStatus: MaintenanceStatus;
  featured: boolean;
  photos: string[];
  heroPhoto: string;
  species?: string[];
  volunteersCount: number;
  schoolId?: string;
  fundraiserId?: string;
  creatorName?: string;
  creatorRole?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  eventType: "install" | "volunteer" | "workshop" | "indigenous_class" | "community" | "school" | "fundraiser";
  reserveId?: string;
  locationName: string;
  address: string;
  lat?: number;
  lng?: number;
  startAt: string;
  endAt: string;
  capacity?: number;
  rsvpCount: number;
  rsvpUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
  partnerType: "city" | "school" | "nonprofit" | "sponsor" | "business" | "media";
  isFeatured: boolean;
}

export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  description: string;
  ecologicalRole: string;
  photoUrl: string;
  bloomSeason: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorPhoto?: string;
  reserveId?: string;
}

export interface ImpactStats {
  sqFtRestored: number;
  nativePlants: number;
  volunteers: number;
  volunteerHours: number;
  activeLocations: number;
  citiesServed: number;
}
