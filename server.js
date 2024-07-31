// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
console.log('JSON Server is running on 4000')
})
//ee code crud operations ni ante rest API ni create chesi isthundi