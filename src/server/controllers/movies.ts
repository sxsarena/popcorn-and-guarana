import { Request, Response } from 'express';
import rp from 'request-promise';

const movies = (req: Request, res: Response) => {
  const { params } = req;
  const id = params.id || 1;

  const options = {
    method: 'GET',
    uri: `https://api-content.ingresso.com/v0/templates/highlights/${id}/partnership/home`,
    body: {},
    json: true,
  };

  interface Data {
    event: {
      images: {
        type: string,
        url: string
      }[],
      thumb: string
    },
    showtimes: object
  }

  return rp(options)
    .then(body => {
      const data = body?.map((item: Data) => {
        const thumb = item.event.images?.filter(image => image.type === 'PosterPortrait' )[0];

        item.event.thumb = thumb.url;

        return item.event;
      });
      return res.status(200).json(data);
    })
    .catch(() => {
      // console.log(err);
    });
};

export default movies;
