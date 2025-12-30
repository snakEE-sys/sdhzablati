export type InterventionImage = {
  publicId: string;
};
export type Intervention = {
  id: string;
  date: string;
  time: string;
  description: string;
  address: string;
  category: string;
  subCategory: string;
  technique: string[];
  units: string[];
  images?: InterventionImage[];
};
