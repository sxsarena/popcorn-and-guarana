import rp from 'request-promise';

const movies = (req, res) => {
  const options = {
    method: 'GET',
    uri: `https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home`,
    body: {},
    json: true,
  };

  return rp(options)
    .then(body => {
      return res.status(200).json(body);
    })
    .catch(err => {
      // console.log(err);
    });
};

export default movies;
