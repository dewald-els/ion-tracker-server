const axios = require("axios")
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config()
}

const CLIENT_ID = process.env.UNSPLASH_ACCESS_KEY

module.exports.unsplashRandomPhoto = async function () {
	try {
		const response = await axios({
			url: "https://api.unsplash.com/photos/random?topics=nature&orientation=landscape",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Client-ID " + CLIENT_ID
			}
		})
		if (!response.statusText === "OK") {
			throw new Error("Could not get an image")
		}
		const { data } = response
		return data.urls.regular
	} catch (error) {
		console.error(error.message)
	}
}
