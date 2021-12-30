if (process.env.NODE_ENV !== "production") {
	require("dotenv").config()
}
const { unsplashRandomPhoto } = require("./unsplash")
const { PORT = 3000 } = process.env

const jsonServer = require('json-server')
const server = jsonServer.create()

server.get("/unsplash/random", async (req, res) => {
	const image = await unsplashRandomPhoto()
	return res.status(200).json({
		image
	})
})
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
	console.log(`Running on port ${PORT}`)
})
