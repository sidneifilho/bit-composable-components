import { productionUrls } from './production-urls';

it('should return the correct value', () => {
  expect(Object.keys(productionUrls()).length).toBe(3);
});
