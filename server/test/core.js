// npm packages
import request from 'supertest'
// our packages
import app from '../src/app'


export default (test) => {
  test('GET /', t => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Hello World'
      const actualBody = res.text
      t.error(err, 'No Error')
      t.equal(actualBody, expectedBody, 'Retrieve Body')
      t.end()
    })
  })

  test('404 on nonexistant URL', t => {
    request(app)
    .get('/GETShouldFailRandomURL')
    .expect(404)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      const expectedBody = 'Cannot GET /GETShouldFailOnRandomURL\n'
      const actualBody = res.text
      t.error(err, 'No Error')
      t.equal(actualBody, expectedBody, 'Retrieve Body')
      t.end()
    })
  })
}
