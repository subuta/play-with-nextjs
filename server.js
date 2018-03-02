import next from 'next'
import Koa from 'koa'
import Router from 'koa-router'

import api from './src/api'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})
const handle = app.getRequestHandler()

let startServer = () => {
  const server = new Koa()
  const router = new Router()

  router.get('/p/:id', async ctx => {
    const actualPage = '/post'
    const queryParams = {id: ctx.params.id}
    await app.render(ctx.req, ctx.res, actualPage, queryParams)
    ctx.respond = false
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(api.routes())

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())

  if (!module.parent) {
    return server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  }

  return server
}

if (!module.parent) {
  app.prepare()
    .then(startServer)
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
}

export default startServer
