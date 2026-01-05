import { ComponentType } from "react";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  title: string;
  image: {
    src: string;
    alt: string;
    position: "rt"
  } | null;
  icon?: ComponentType<{ className?: string }>;
  items: MenuItem[];
}

export interface MenuCategory {
  title: string;
  sections: MenuSection[];
}

export type MenuData = Record<string, {
  bar: MenuCategory;
  drinks: MenuCategory;
  food: MenuCategory;
}>;