import { getIsUpRoute } from '@sidneicsfilho/ms-demo.routes.is-up'
import { getMockRoute } from './mock-route'

export function getRoutes() {
  const mockRoute = getMockRoute()
  const routes = [mockRoute, getIsUpRoute()]
  return routes
}