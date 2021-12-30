const express = require("express")
const { unsplashRandomPhoto } = require("./unsplash")
const app = express()
const cors = require("cors")
const { PORT = 3000 } = process.env
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config()
}

app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:8100"
	})
)

app.get("/unsplash/random", async (req, res) => {
	const image = await unsplashRandomPhoto()
	return res.status(200).json({
		image
	})
})

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`)
})
