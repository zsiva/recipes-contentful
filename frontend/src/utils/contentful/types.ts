import { Document } from "@contentful/rich-text-types";

export type IRecipeFields = {
  id: string;
  slug: string;
  name: string;
  dietType: string;
  steps: Document;
  ingredients: Document;
  cookTime: number;
  preparationTime: number;
  servings: number;
  rating: number;
  author: string;
  headerImage: string;
  description: string;
  mealType: string;
};