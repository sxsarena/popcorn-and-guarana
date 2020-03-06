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

  const addItem = (arr: object[], prop: string, name: string) => {
    const found = arr.some((item: any) => item[prop] === name);
    if (!found) arr.push({ [prop]: name });
  }

  interface Data {
    event: {
      images: {
        type: string,
        url: string
      }[],
      thumb: string,
      filters: string[]
    },
    showtimes: {
      rooms: {
        sessions: {
          types: {
            alias: string
          }[]
        }[]
      }[]
    }[]
  }

  return rp(options)
    .then(body => {
      const filters: object[] = [];

      const movies = body?.map((item: Data) => {
        const thumb = item.event.images?.filter(image => image.type === 'PosterPortrait' )[0];
        const movieFilters: string[] = [];

        item.event.thumb = thumb.url;

        item.showtimes.map(showtime => showtime.rooms.map(room => room.sessions.map(session => session.types.map(type => {
          addItem(filters, 'name', type.alias);
          if (!movieFilters.includes(type.alias)) {
            movieFilters.push(type.alias);
          }
          return type.alias;
        }))));

        item.event.filters = movieFilters;

        return item.event;
      });

      return res.status(200).json({ movies, filters });
    })
    .catch(() => {
      // console.log(err);
    });
};

export default movies;
