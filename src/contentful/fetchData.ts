import { Document } from '@contentful/rich-text-types';
import { client } from './client';

export type IRecipeFields = {
  id: string;
  name: string;
  categories: string[];
  steps: Document;
  ingredients: Document;
  cookTime: number;
  preparationTime: number;
  servings: number;
  rating: number;
  author: string;
  headerImage: string;
  description: string;
  foodType: string;
};

export type IContentfulFields = {
  sys: {
    id: string;
  };
  fields: IRecipeFields;
};

const toRecipeDto = (contentJson: any): IRecipeFields => {
  return {
    id: contentJson.fields?.id,
    name: contentJson.fields?.recipeLocal?.fields?.name,
    categories: contentJson.fields?.categories,
    steps: contentJson.fields?.recipeLocal?.fields?.steps,
    ingredients: contentJson.fields?.recipeLocal?.fields?.ingredients,
    cookTime: contentJson.fields?.cookingTime,
    preparationTime: contentJson.fields?.preparationTime,
    servings: 12,
    rating: 12,
    author: 'test',
    headerImage:
      contentJson.fields?.picture?.fields?.file?.url ||
      'https://images.ctfassets.net/b1kxdns6lgrg/4qFA48bGDBUeRrCOslleI1/d83cd7b47c260fb35c5c45ece5239e98/images?h=250',
    description:
      'La tradicional receta de tortilla de patatas o tortilla española, un plato básico de la cocina española a base de patatas, huevo y cebolla.',
    foodType: contentJson.fields?.foodType,
  };
};

export async function fetchContentData(
  locale: string
): Promise<IRecipeFields[]> {
  try {
    const resp = await client.getEntries({
      content_type: 'recipe',
      locale,
    });
    return resp.items.map((item) => toRecipeDto(item));
  } catch (error) {
    throw new Error(error);
  }
}
