import { createClient } from 'contentful';
import dotenv from 'dotenv';

dotenv.config();

export const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  space: process.env.CONTENTFUL_SPACE_ID as string,
});
