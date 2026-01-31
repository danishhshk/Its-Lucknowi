
export type DishType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  price: number | string;
  description: string;
  type: DishType;
  category: string;
  isSpecial?: boolean;
  image?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}
