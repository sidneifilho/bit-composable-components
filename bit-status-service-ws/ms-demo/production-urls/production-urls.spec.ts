import { productionUrls } from './production-urls';

it('should return the correct value', () => {
  expect(productionUrls()).toBe('Hello world!');
});
