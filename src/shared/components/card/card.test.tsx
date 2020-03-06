import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from './card-component';

const movie = {
  id: '',
  title: 'Title',
  city: '',
  siteURL: '',
  images: [{url: '', type: ''}],
  genres: [],
  trailers: [{ type: '', url: '', embeddedUrl: '' }],
  thumb: 'https://',
  filters: []
};

/** @test {Card} */
describe('<Card>', () => {
  /** @test {Card#render} */
  describe('#render', () => {
    it('should render a card', () => {
      const { getByText } = render(<Card movie={movie} />);

      expect(getByText('Title')).toBeDefined();
    });

    it('should return null', () => {
      const { queryByTestId } = render(<Card />);

      expect(queryByTestId('card')).toBeNull();
    });
  });

  /** @test {Card#props} */
  describe('#props', () => {
    /** @test {Card#props#movie.thumb} */
    describe('prop: movie.thumb', () => {
      it('should render with a image', () => {
        const { getByTestId } = render(
          <Card movie={movie} />
        );

        expect(getByTestId('card-image')).toHaveAttribute('src', 'https://');
      });
    });
  });
});
