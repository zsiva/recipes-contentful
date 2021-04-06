let config: { baseUrl: string } = { baseUrl: '' };

switch (process.env.NODE_ENV) {
  case 'development':
    config = { baseUrl: 'http://localhost:5000' };
    break;
  case 'production':
    config = { baseUrl: 'https://recipes-list-dashboard.herokuapp.com' };
    break;
  default:
    config = { baseUrl: 'https://recipes-list-dashboard.herokuapp.com' };
}

export default config;