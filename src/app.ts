import express from 'express';
import path from 'path';
import { fetchContentData, IRecipeFields } from './contentful/fetchData';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../frontend/build')));


app.get('/api/recipes', async (req, res) => {
  const locale = req.headers['accept-language'] || 'es';
  const recipes: IRecipeFields[] = await fetchContentData(locale);

  res.status(200).json(recipes)
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));