import { productionUrls } from '@sidneicsfilho/ms-demo.production-urls'

export function getIsUpRoute() {
  return {
    method: 'get',
    route: '/is-up',
    middlewares: [async (req, res) => {
      const results = await calculateResults();
      return res.json(results)
    }]
  }
}

export async function calculateResults() {
  const urls = productionUrls()
  const results = {};
  Object.values(urls).map(v => {
    const status = true
    results[v.id] = status
  })
  return results
}
