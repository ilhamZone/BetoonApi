const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;
const { authenticated } = require('./middleware');

const UserController = require('./controller/users');
const ComicController = require('./controller/comics');
const EpisodeController = require('./controller/episodes');
const ImgEpisodeController = require('./controller/img_episodes');
const FavoriteController = require('./controller/favorites');

app.use(bodyParser.json());
app.group('/api/v1', (router) => {
  // Users
  router.get('/users', UserController.index);
  router.post('/login', UserController.Login);
  router.post('/register', UserController.Register);

  // Comic
  router.get('/comic', authenticated, ComicController.ShowComic);
  router.get('/comics/search', authenticated, ComicController.SearchComics);
  router.get('/comics/users/:idU', authenticated, ComicController.ShowComicFav);
  
  // Episode
  router.get('/comics/:idC/episodes', authenticated, EpisodeController.ShowEpisode);

  // Img Episode
  router.get('/comics/:idC/episodes/:idE', authenticated, ImgEpisodeController.ShowImgEps);

  // Favourites
  router.get('/favorites/users/:user_id', authenticated, FavoriteController.ShowFavorites);
  router.post('/users/:idU/comics/:idC/favorites', authenticated, FavoriteController.AddFavorite);
  router.delete('/unfavorites/:id', authenticated, FavoriteController.Unfavorite);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
// app.listen(process.env.PORT||9876, function(){ console.log('Listening on port!!') }); //