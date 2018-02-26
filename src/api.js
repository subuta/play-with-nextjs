import Router from 'koa-router'
import callDB from '../utils/db'

const router = new Router();

router.get('/api/hoge', async ctx => {
  ctx.body = await callDB()
})

export default router