import { createClient } from 'contentful';

export const client = createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
  space: process.env.REACT_APP_SPACE_ID as string,
});
