const models = require('../models');
const ImgEpisodes = models.img_episode;

exports.ShowImgEps = (req, res) => {
  ImgEpisodes.findAll({
    where: { comics_id: req.params.idC, episodes_id: req.params.idE },
    attributes: ['id', 'page', 'image']
  }).then(result => res.send(result)).catch(err => res.send(err));
};