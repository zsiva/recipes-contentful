import { Document } from '@contentful/rich-text-types';
import { client } from './client';

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
  mealType: string;
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
    slug: contentJson.fields?.slug,
    name: contentJson.fields?.recipeLocal?.fields?.name,
    dietType: contentJson.fields?.dietType,
    steps: contentJson.fields?.recipeLocal?.fields?.steps,
    ingredients: contentJson.fields?.recipeLocal?.fields?.ingredients,
    cookTime: contentJson.fields?.cookingTime,
    preparationTime: contentJson.fields?.preparationTime,
    servings: contentJson.fields?.servings,
    rating: 12,
    author: 'test',
    headerImage:
      contentJson.fields?.picture?.fields?.file?.url ||
      'https://images.ctfassets.net/b1kxdns6lgrg/4qFA48bGDBUeRrCOslleI1/d83cd7b47c260fb35c5c45ece5239e98/images?h=250',
    mealType: contentJson.fields?.mealType,
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
