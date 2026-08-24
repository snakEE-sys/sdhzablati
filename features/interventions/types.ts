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
  categoryId: string;
};

export type InterventionDeployment = {
  id: string;
  unit: Unit;
  vehicle: Vehicle;
  quantity: number;
};

export type InterventionResponse = {
  id: string;
  subCategory: SubCategory;
  category: Category;
  date: Date;
  time: string;
  address: string;
  description: string;
  deployment: InterventionDeployment[];
};
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
export type DeploymentItemm = {
  vehicle: Vehicle;
  unit: Unit;
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

export type InterventionWithDetails = {
  id: string;
  date: Date | string;
  time: string;
  description: string;
  address: string;
  subcategoryId: string;
  subcategory: {
    id: string;
    name: string;
    category: {
      id: string;
      name: string;
    };
  };
  deployments: {
    id: string;
    unitId: string;
    vehicleId: string;
    quantity: number;
    unit: { id: string; name: string };
    vehicle: { id: string; name: string };
  }[];
};

export type EditInterventionFormProps = {
  categories: Category[];
  subcategories: SubCategory[];
  units: Unit[];
  vehicles: Vehicle[];
  intervention: InterventionResponse;
};
