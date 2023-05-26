import type { Route } from './route';

export function getMockRoute(): Route {
  return {
    method: 'get',
    route: '/',
    middlewares: [async (req, res) => res.send('hello world')]
  }
}
