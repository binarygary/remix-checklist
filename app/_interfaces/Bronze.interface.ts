export interface BronzeType {
  vendors: VendorType[];
}

export interface VendorType {
  name: string;
  items: ItemType[];
}

export interface ItemType {
  name: string;
  cost: number;
  id: number;
}
