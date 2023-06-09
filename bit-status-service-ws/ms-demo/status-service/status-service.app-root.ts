import Application from 'express';
import {getPort} from './get-port';

import { getRoutes } from './get-routes'

export const expressApp = async () => {
  const app = Application();
  const port = await getPort();
  registerRoutes(app);
  app.listen(port, () => {
    console.log(`status-service app listening on port ${port}`);
  });
};

function registerRoutes(app: Application.Application) {
  const routes = getRoutes();
  routes.forEach(route => {
    app[route.method](route.route, route.middlewares);
  })
}

expressApp().catch(err => {
  console.log('error from express', err);
  process.exit(1);
});
