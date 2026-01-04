export type InterventionImage = {
  publicId: string;
};

export type Intervention = {
  id: string;
  date: Date;
  time: string;
  description: string;
  address: string;
  category: string;
  subCategory: string;
  deployment: DeploymentItem[];
  images?: InterventionImage[];
};

export type DeploymentItem = {
  unitId: string;
  unitName: string;
  vehicleId: string;
  vehicleName: string;
  quantity: number;
};

export type Unit = {
  id: string;
  name: string;
};

export type Vehicle = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type SubCategory = {
  id: string;
  name: string;
};

export type DeploymentPickerProps = {
  units: Unit[];
  vehicles: Vehicle[];
  onAdd: (item: DeploymentItem) => void;
  existingItems: DeploymentItem[];
};

export type AddInterventionFormProps = {
  categories: Category[];
  subcategories: SubCategory[];
  units: Unit[];
  vehicles: Vehicle[];
};
