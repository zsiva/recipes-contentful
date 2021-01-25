import { client } from './client';

export type IRecipeFields = {
  id: string;
  name: string;
  categories: string[];
  steps: string;
  ingredients: string;
  cookTime: number;
  preparationTime: number;
  servings: number;
  rating: number;
  author: string;
  headerImage: string;
  description: string;
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
    categories: contentJson.fields.name,
    steps: contentJson.fields?.recipeLocal?.fields?.steps,
    ingredients: '1234,1234',
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
