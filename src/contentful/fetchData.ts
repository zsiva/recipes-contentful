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
  console.log(contentJson);
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
    headerImage: contentJson.fields?.picture?.fields?.file?.url,
    description: 'asdf',
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
