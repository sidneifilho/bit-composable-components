import { productionUrls } from './production-urls';

it('should return the correct value', () => {
  const urls = {
    'community-site': {
      url: 'https://bit.dev',
      description: 'our community site',
      id: 'community',
    },
    'cloud-site': {
      url: 'https://bit.cloud',
      description: 'our cloud site',
      id: 'cloud',
    },
  }
  expect(productionUrls()).toStrictEqual(urls);
});
