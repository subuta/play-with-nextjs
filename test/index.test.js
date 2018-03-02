import test from 'ava'
import request from 'supertest'
import startServer from '../server.js'

test.beforeEach(async (t) => {
  t.context = {
    request: request(startServer().listen(0))
  }
})

test.afterEach((t) => {
})

test('should test the truth', async (t) => {
  const {request} = t.context

  const response = await request
    .get('/api/hoge')

  t.is(response.text, 'fuga')
})
