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
  vehicles: { id: string; name: string }[];
};

export type DeploymentPickerProps = {
  units: Unit[];
  onAdd: (item: DeploymentItem) => void;
  existingItems: DeploymentItem[];
};
