import { createClient } from 'contentful';

export const client = createClient({
  accessToken: 'iZw1bJ-xzJSLcMWiWF3dRdaXkS0KDi9xJS9iZOiFE9w', //process.env.REACT_APP_ACCESS_TOKEN as string,
  space: 'b1kxdns6lgrg' // process.env.REACT_APP_SPACE_ID as string,
});
